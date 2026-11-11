import { DataOrganismExperience } from "@/components/home/DataOrganismExperience";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="px-6 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        <DataOrganismExperience />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center sm:px-10">
          <div className="max-w-3xl">
          <h2 id="problem-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Una misma prestación, cuatro áreas, cuatro versiones distintas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
            Cada área trabaja con su propia copia del dato y las diferencias
            aparecen tarde: en un débito, un reclamo o un cierre que no cuadra.
            Zonda las pone de acuerdo sin reemplazar ningún sistema.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
