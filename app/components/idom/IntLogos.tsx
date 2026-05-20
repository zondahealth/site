export function IntLogos() {
  const orgs = ['HomeCare BA', 'Vitalia', 'MedNorte', 'Sanus Domiciliaria', 'Clínica Móvil', 'AtenciónPlus'];
  return (
    <section style={{ paddingBlock: 48, background: '#fcfcff', borderBottom: '1px solid rgba(21,27,43,.06)' }}>
      <div className="layout-shell flex flex-col items-center gap-6 lg:flex-row lg:gap-14">
        <p className="m-0 max-w-[180px] shrink-0 text-center text-[13px] font-semibold leading-snug text-[color:var(--fg-2)] lg:text-left">
          Operando hoy en empresas de internación domiciliaria de Argentina
        </p>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-6 opacity-55 grayscale lg:justify-between lg:gap-0">
          {orgs.map((l) => (
            <span
              key={l}
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: 'rgba(21,27,43,.7)',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
