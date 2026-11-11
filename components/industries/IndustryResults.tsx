import type { ReactNode } from "react";

import {
  SectionIntro,
  StatSlot,
} from "@/components/use-cases/UseCasePrimitives";
import { cn } from "@/components/ui/utils";

export type IndustryResult = {
  value: string;
  label: string;
};

type AtMostFour<T> =
  | readonly [T]
  | readonly [T, T]
  | readonly [T, T, T]
  | readonly [T, T, T, T];

const columns = {
  1: "mx-auto max-w-sm",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function IndustryResults({
  title,
  subtitle,
  results,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  results: AtMostFour<IndustryResult>;
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          title={title}
          copy={subtitle}
          className="max-w-3xl"
        />
        <div
          className={cn(
            "mt-12 grid gap-5",
            columns[results.length as keyof typeof columns],
          )}
        >
          {results.map((result) => (
            <StatSlot
              key={result.label}
              value={result.value}
              label={result.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
