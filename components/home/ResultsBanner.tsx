import Shader from "@/components/ui/shader/Shader";

const stats = [
  { value: "+30%", label: "Ahorro en costos operativos" },
  { value: "+40%", label: "Reducción en tiempos de espera" },
  { value: "+35%", label: "Reducción en errores médicos" },
  { value: "+30%", label: "Detección de fraude" },
] as const;

export function ResultsBanner() {
  return (
    <section
      aria-label="Resultados"
      className="relative isolate z-10 -mt-32 bg-transparent px-6 pb-20 sm:-mt-40 sm:px-10 sm:pb-24 lg:-mt-48 lg:px-16 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <Shader
          variant="filaments"
          transparent
          ink="#fff000"
          bg="#fff888"
          angle={100}
          shiftY={-0.55}
          className="opacity-55"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto mt-52 flex max-w-3xl flex-col items-center text-center sm:mt-64 lg:mt-80">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Resultados
        </p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Mejorá tus resultados y el servicio a tus pacientes.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Organizaciones eligen Zonda porque se integra fácilmente, está
          operativo desde el primer día y genera trazabilidad en tiempo real,
          adaptado a Latinoamérica.
        </p>

        {/* VALIDAR: cifras publicadas en zondahealth.com; confirmar fuente y metodología */}
        <dl className="mt-12 grid w-full grid-cols-2 gap-x-8 gap-y-10 sm:mt-16 lg:gap-x-12 lg:gap-y-14">
          {stats.map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              className="flex flex-col items-center text-center"
            >
              <dt className="inline-block overflow-visible py-[0.12em] font-serif text-5xl leading-[1.2] tracking-tight text-[#174C62] sm:text-6xl">
                {stat.value}
              </dt>
              <dd className="max-w-[12rem] text-sm font-semibold leading-snug text-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
