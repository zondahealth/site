export function ProTestimonial() {
  return (
    <section className="py-10">
      <div className="layout-shell">
        <div
          className="relative overflow-hidden rounded-[20px] px-10 py-20 lg:px-20"
          style={{
            background: "url('/bg/movement/yellow.png') center/cover",
          }}
        >
          {/* Overlay glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(255,255,200,0.5),transparent_60%)]" />

          <div className="relative grid items-center gap-16 lg:grid-cols-[1fr_1.4fr]">
            {/* Author info */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:rgba(14,60,117,0.7)]">
                Historia
              </p>
              <p className="mt-3 text-sm font-bold text-zonda-blue-dark">
                Dra. Lucía Méndez
              </p>
              <p className="mt-0.5 text-[13px] text-[color:rgba(14,60,117,0.7)]">
                Cardióloga · Mendoza, AR
              </p>
              <p className="mt-6 font-mono text-xs text-[color:rgba(14,60,117,0.7)]">
                USANDO ZONDA DESDE
              </p>
              <p className="mt-0.5 text-[28px] font-bold text-zonda-blue-dark [font-family:var(--font-display)]">
                Marzo 2025
              </p>
            </div>

            {/* Quote */}
            <div>
              <svg
                width="42"
                height="32"
                viewBox="0 0 42 32"
                fill="none"
                className="mb-6 opacity-35"
              >
                <path
                  d="M18 0H6C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0zM42 0H30c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0z"
                  fill="var(--zonda-blue-dark)"
                />
              </svg>
              <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-zonda-blue-dark lg:text-[32px] lg:leading-[1.2]">
                Pasé de hacer mis evoluciones a las 11 de la noche a tenerlas
                listas antes de que el paciente salga del consultorio. Es la
                diferencia entre cerrar la jornada y llevarme el trabajo a casa.
              </p>
              <div className="mt-8 flex gap-12">
                <div>
                  <p className="text-[40px] font-bold text-zonda-blue-dark [font-family:var(--font-display)]">
                    −2:30 hs
                  </p>
                  <p className="mt-1 text-[13px] text-[color:rgba(14,60,117,0.7)]">
                    de trabajo administrativo por día
                  </p>
                </div>
                <div>
                  <p className="text-[40px] font-bold text-zonda-blue-dark [font-family:var(--font-display)]">
                    +38%
                  </p>
                  <p className="mt-1 text-[13px] text-[color:rgba(14,60,117,0.7)]">
                    pacientes atendidos por semana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
