import type { ReactNode } from "react";

import { useCaseGroups, type NavLink } from "@/lib/navigation";
import {
  Card,
  CardContent,
  CardCTA,
  CardTitle,
} from "@/components/ui/card/card";
import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";
import { cn } from "@/components/ui/utils";

export const industryProductKeys = [
  "ai-agents",
  "analytics",
  "population-segmentation",
  "multi-payer-care",
  "revenue-cycle",
  "fraud-risk-prevention",
  "identity",
  "automation",
  "operations",
] as const;

export type IndustryProductKey = (typeof industryProductKeys)[number];

type AtMostFour<T> =
  | readonly [T]
  | readonly [T, T]
  | readonly [T, T, T]
  | readonly [T, T, T, T];

const products = new Map<IndustryProductKey, NavLink>(
  useCaseGroups.flatMap((group) =>
    group.items.flatMap((item) => {
      const key = item.href.replace(/^\/use-cases\//, "");
      return isIndustryProductKey(key) ? [[key, item] as const] : [];
    }),
  ),
);

for (const key of industryProductKeys) {
  if (!products.has(key)) {
    throw new Error(`IndustryProducts: "${key}" no está en la navegación.`);
  }
}

for (const group of useCaseGroups) {
  for (const item of group.items) {
    const key = item.href.replace(/^\/use-cases\//, "");
    if (!isIndustryProductKey(key)) {
      throw new Error(`IndustryProducts: falta la key "${key}".`);
    }
  }
}

function isIndustryProductKey(value: string): value is IndustryProductKey {
  return (industryProductKeys as readonly string[]).includes(value);
}

export function IndustryProducts({
  title,
  subtitle,
  keys,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  keys: AtMostFour<IndustryProductKey>;
}) {
  const selected = keys.map((key) => {
    const product = products.get(key);
    if (!product) {
      throw new Error(`IndustryProducts: producto desconocido "${key}".`);
    }
    return { key, product };
  });

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title={title} copy={subtitle} className="max-w-3xl" />
        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto">
          {selected.map(({ key, product }) => {
            const Icon = product.icon;
            return (
              <li
                key={key}
                className={cn(
                  "flex min-w-[17rem] flex-1 snap-start",
                  selected.length === 1 && "min-w-0",
                )}
              >
                <Card
                  variant="muted"
                  hoverable
                  href={product.href}
                  aria-label={product.title}
                  className="h-full w-full"
                >
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-primary"
                      strokeWidth={1.75}
                    />
                  ) : null}
                  <CardTitle className="mt-5 max-w-none text-lg leading-snug lg:text-xl">
                    {product.title}
                  </CardTitle>
                  {product.description ? (
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      {product.description}
                    </CardContent>
                  ) : null}
                  <CardCTA
                    aria-hidden="true"
                    tabIndex={-1}
                    className="pointer-events-none"
                  />
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
