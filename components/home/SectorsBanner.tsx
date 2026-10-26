import Link from "next/link";

import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";
import { industryGroups, liveOnly } from "@/lib/navigation";

const MIN_LIVE_SECTORS = 3;

export function SectorsBanner() {
  const sectors = liveOnly(industryGroups.flatMap((group) => group.items));

  if (sectors.length < MIN_LIVE_SECTORS) return null;

  return (
    <section
      aria-label="Sectores"
      className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          centered
          title="Soluciones para cada sector de la salud"
          copy="Elegí tu tipo de organización y mirá cómo Zonda se adapta a tu operación."
          className="max-w-3xl"
        />

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <li key={sector.href}>
                <Link
                  href={sector.href}
                  className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-5 py-4 outline-none transition-colors hover:border-[#a9cdff] focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554] transition-colors duration-200 group-hover:border-transparent group-hover:text-white motion-reduce:transition-none">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(135deg,#6e98ff_0%,#a9cdff_100%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
                    />
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
