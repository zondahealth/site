const orgs = [
  'OSDE',
  'Swiss Medical',
  'PAMI',
  'Galeno',
  'Medicus',
  'Sancor Salud',
  'OMINT',
  'IOMA',
];

export function ProObrasSociales() {
  return (
    <section className="border-y border-[color:rgba(21,27,43,0.06)] bg-[#fcfcff] py-9">
      <div className="layout-shell flex items-center gap-12">
        <p className="m-0 max-w-[160px] shrink-0 text-[13px] font-semibold leading-snug text-[color:var(--fg-2)]">
          Integrado con las obras sociales y prepagas de Argentina
        </p>
        <div className="flex flex-1 items-center justify-between gap-3 opacity-55 grayscale">
          {orgs.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-[15px] font-bold tracking-tight text-[color:rgba(21,27,43,0.7)] [font-family:var(--font-display)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
