import Link from "next/link";

import { Button } from "@/components/ui/button/button";
import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";
import { industryGroups, isLiveRoute, liveOnly } from "@/lib/navigation";

const MIN_LIVE_SECTORS = 3;
const solutionsHref = "/solutions";

export function SectorsBanner() {
  const sectors = liveOnly(industryGroups.flatMap((group) => group.items));

  if (sectors.length < MIN_LIVE_SECTORS || !isLiveRoute(solutionsHref)) {
    return null;
  }

  return (
    <section
      aria-label="Sectores"
      className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          title="Soluciones para cada sector de la salud"
          copy="Mirá cómo Zonda se adapta a cada tipo de organización."
          className="max-w-3xl"
        />

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <li key={sector.href}>
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-5 py-4">
                  <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554]">
                    {Icon ? (
                      <Icon
                        aria-hidden="true"
                        className="relative size-[18px]"
                        strokeWidth={1.6}
                      />
                    ) : null}
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-snug text-[#1a2a3d]">
                    {sector.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button variant="black" asChild>
            <Link href={solutionsHref}>Ver todas las soluciones</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
