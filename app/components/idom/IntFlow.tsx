const FLOW_STEPS = [
  {
    n: '01',
    title: 'Asignación',
    where: 'Oficina central',
    desc: 'Desde una sola pantalla se asignan las visitas del día a cada profesional, con la mejor ruta y sin duplicaciones.',
    icon: 'office',
    color: '#226ffd',
    align: 'left',
    justify: 'top',
  },
  {
    n: '02',
    title: 'Aviso',
    where: 'App del profesional',
    desc: 'El profesional recibe en su celular los datos del paciente, la dirección y las indicaciones antes de salir.',
    icon: 'phone',
    color: '#7bd9b3',
    align: 'center',
    justify: 'center',
  },
  {
    n: '03',
    title: 'Visita',
    where: 'Domicilio del paciente',
    desc: 'Se confirma la llegada automáticamente, se registra todo lo realizado y el paciente firma desde el celular.',
    icon: 'home',
    color: '#0dc958',
    align: 'center',
    justify: 'center',
  },
  {
    n: '04',
    title: 'Control',
    where: 'Tiempo real',
    desc: 'Cada visita queda registrada al instante con ubicación, horario y detalle. Lista para presentar a la obra social.',
    icon: 'shield',
    color: 'var(--zonda-yellow)',
    align: 'right',
    justify: 'top',
  },
] as const;

function FlowIcon({ kind, color }: { kind: string; color: string }) {
  if (kind === 'office')
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    );
  if (kind === 'phone')
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10 18h4" />
      </svg>
    );
  if (kind === 'home')
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11l9-8 9 8M5 10v10h14V10" />
      </svg>
    );
  if (kind === 'shield')
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l8 3v8c0 5-4 8-8 9-4-1-8-4-8-9V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  return null;
}

export function IntFlow() {
  return (
    <section className="py-24">
      <div className="layout-shell">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--zonda-blue)]">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:text-[48px]">
            De la oficina al domicilio en cuatro pasos.
          </h2>
          <p className="mt-4 text-[17px] text-[color:var(--fg-2)]">
            Una sola plataforma para todo el recorrido. Sin papeles, sin
            llamados.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Connecting line behind cards */}
          <div
            className="absolute left-[12%] right-[12%] top-13 hidden h-0.5 rounded-sm opacity-35 lg:block"
            style={{
              background:
                'linear-gradient(90deg, #226ffd, #7bd9b3, #0dc958, var(--zonda-yellow))',
            }}
          />
          <div className="relative grid grid-cols-2 gap-4 lg:grid-cols-4">
            {FLOW_STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    background: '#fcfcff',
                    border: `2px solid ${s.color}`,
                    display: 'flex',
                    alignItems: `center`,
                    justifyContent: `center`,
                    boxShadow: `0 16px 32px -16px ${s.color}50`,
                  }}
                >
                  <FlowIcon kind={s.icon} color={s.color} />
                </div>
                <div
                  style={{
                    background: '#fcfcff',
                    borderRadius: 12,
                    border: '1px solid rgba(21,27,43,.08)',
                    padding: '20px 22px',
                    width: '100%',
                    textAlign: 'left',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: 11, fontWeight: 600, color: s.color }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        color: 'var(--fg-3)',
                        textTransform: 'uppercase',
                        letterSpacing: '.06em',
                      }}
                    >
                      {s.where}
                    </span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: 'var(--fg-2)',
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
