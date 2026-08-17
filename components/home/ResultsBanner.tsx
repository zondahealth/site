import Image from "next/image";

import Shader from "@/components/ui/shader/Shader";

const stats = [
  { value: "+30%", label: "Ahorro en costos operativos" },
  { value: "+40%", label: "Reducción en tiempos de espera" },
  { value: "+35%", label: "Reducción en errores médicos" },
  { value: "+30%", label: "Ahorro en costos operativos" },
] as const;

export function ResultsBanner() {
  return (
    <section
      aria-label="Resultados"
      className="relative isolate overflow-hidden bg-transparent px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
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
          shiftY={-0.4}
          className="opacity-55"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 my-40 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div
          className="relative hidden min-h-[480px] w-full lg:block"
          aria-hidden="true"
        >
          <Image
            src="/assets/home/results-pills.png"
            alt=""
            fill
            className="object-contain object-center scale-[1.2]"
            sizes="(min-width: 1024px) 50vw, 0px"
          />
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Resultados
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mejorá tus resultados y el servicio a tus pacientes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Organizaciones eligen Zonda porque se integra fácilmente, está
            operativo desde el primer día y genera trazabilidad en tiempo real,
            adaptado a Latinoamérica.
          </p>

          <dl className="mt-12 grid w-full grid-cols-2 gap-x-8 gap-y-10 sm:mt-16 lg:gap-x-12 lg:gap-y-14">
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${index}`}
                className="flex flex-col items-center lg:items-start"
              >
                <dt
                  className="inline-block overflow-visible bg-clip-text py-[0.12em] font-serif text-5xl leading-[1.2] tracking-tight text-transparent sm:text-6xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top right, #fff44d 0%, #ffee00 22%, #eaea00 46%, #ffd000 72%, #f5b800 100%)",
                  }}
                >
                  {stat.value}
                </dt>
                <dd className="max-w-[12rem] text-sm font-semibold leading-snug text-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
