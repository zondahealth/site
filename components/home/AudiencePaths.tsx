"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const audiences = [
  {
    title: "Financiadores",
    tasks: ["Validar cobertura en tiempo real", "Auditar prestaciones antes de pagar", "Detectar consumos anómalos"],
    href: "/industries/payers",
  },
  {
    title: "Hospitales y clínicas",
    tasks: ["Confirmar elegibilidad en la admisión", "Reducir débitos y rechazos", "Seguir cada caso hasta el cobro"],
    href: "/industries/hospitals",
  },
  {
    title: "Atención primaria",
    tasks: ["Organizar la población a cargo", "Anticipar necesidades de atención", "Reducir tareas administrativas"],
    href: "/industries/primary-care",
  },
  {
    title: "Laboratorios",
    tasks: ["Conectar órdenes y resultados", "Validar cobertura antes de atender", "Integrar la información clínica"],
    href: "/industries/laboratories",
  },
  {
    title: "Farmacias",
    tasks: ["Validar recetas y coberturas", "Reducir rechazos en mostrador", "Tener trazabilidad de cada dispensa"],
    href: "/industries/pharmacies",
  },
  {
    title: "Asociaciones médicas",
    tasks: ["Centralizar la gestión de prestaciones", "Ordenar la relación con financiadores", "Dar herramientas a los profesionales"],
    href: "/industries/medical-associations",
  },
  {
    title: "Atención domiciliaria",
    tasks: ["Coordinar equipos en territorio", "Registrar cada prestación", "Detectar desvíos en la operación"],
    href: "/industries/home-health",
  },
  {
    title: "Sector público",
    tasks: ["Construir un padrón único", "Seguir programas por población", "Conectar datos entre jurisdicciones"],
    href: "/industries/government-public-sector",
  },
] as const;

export function AudiencePaths() {
  const trackRef = useRef<HTMLUListElement>(null);

  function scroll(direction: "previous" | "next") {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: (direction === "next" ? 1 : -1) * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  }

  return (
    <section aria-labelledby="audience-title" className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-end justify-between gap-6">
          <h2 id="audience-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Para quién es Zonda
          </h2>
          <div className="hidden items-center gap-3 sm:flex">
            <CarouselButton direction="previous" onClick={() => scroll("previous")} />
            <CarouselButton direction="next" onClick={() => scroll("next")} />
          </div>
        </header>
        <ul
          ref={trackRef}
          aria-label="Sectores para los que está pensada Zonda"
          className="mt-12 -mr-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mr-0 sm:gap-6 sm:pr-0"
        >
          {audiences.map(({ title, tasks, href }) => (
            <li key={title} className="w-[82vw] shrink-0 snap-start sm:w-[22rem] lg:w-[calc((100%-3rem)/3)]">
              <Link href={href} className="group flex h-full min-h-80 flex-col rounded-2xl bg-foreground/[0.04] p-6 outline-none transition-colors hover:bg-foreground/[0.07] focus-visible:ring-2 focus-visible:ring-ring sm:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
                <ul className="mt-6 space-y-3">
                  {tasks.map((task) => (
                    <li key={task} className="text-sm leading-relaxed text-muted-foreground">{task}</li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#164a7c]">
                  Ver soluciones
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-end gap-3 sm:hidden">
          <CarouselButton direction="previous" onClick={() => scroll("previous")} />
          <CarouselButton direction="next" onClick={() => scroll("next")} />
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ direction, onClick }: { direction: "previous" | "next"; onClick: () => void }) {
  const isNext = direction === "next";
  const Icon = isNext ? ArrowRight : ArrowLeft;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Ver siguientes sectores" : "Ver sectores anteriores"}
      className="grid size-10 place-items-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
