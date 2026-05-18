const rows = [
  { role: 'Director Médico', cells: ['full', 'full', 'full', 'full'] },
  { role: 'Médico', cells: ['read', 'edit', 'own', 'none'] },
  { role: 'Enfermería', cells: ['read', 'edit', 'none', 'none'] },
  { role: 'Administración', cells: ['read', 'none', 'edit', 'edit'] },
  { role: 'Auditor externo', cells: ['read', 'read', 'read', 'read'] },
] as const;

const cellStyles: Record<
  string,
  { bg: string; fg: string; label: string }
> = {
  full: { bg: 'bg-[color:var(--zonda-blue)]', fg: 'text-white', label: 'Total' },
  edit: {
    bg: 'bg-[color:rgba(34,111,253,0.18)]',
    fg: 'text-[color:var(--zonda-blue)]',
    label: 'Editar',
  },
  read: { bg: 'bg-[color:rgba(21,27,43,0.06)]', fg: 'text-[color:var(--fg-2)]', label: 'Leer' },
  own: { bg: 'bg-[color:rgba(234,234,0,0.22)]', fg: 'text-[#7a7a00]', label: 'Propios' },
  none: { bg: 'bg-transparent', fg: 'text-[color:rgba(21,27,43,0.25)]', label: '—' },
};

const headers = ['Pacientes', 'Evoluciones', 'Facturación', 'Auditoría'];

function OrgTreeRow({
  indent,
  icon,
  name,
  sub,
  count,
}: {
  indent: number;
  icon: string;
  name: string;
  sub: string;
  count: string;
}) {
  const iconColor =
    indent === 0
      ? 'text-[color:var(--zonda-blue)]'
      : indent === 1
        ? 'text-zonda-blue-dark'
        : 'text-[color:var(--fg-3)]';

  return (
    <div
      className="flex items-center gap-2 text-xs"
      style={{ paddingLeft: indent * 18 }}
    >
      <span className={`w-3.5 text-[11px] ${iconColor}`}>{icon}</span>
      <span
        className={`flex-1 text-[color:var(--zonda-ink)] ${indent === 0 ? 'font-bold' : 'font-medium'}`}
      >
        {name}
      </span>
      <span className="font-mono text-[10px] text-[color:var(--fg-3)]">
        {sub}
      </span>
      <span className="min-w-[40px] text-right font-mono text-[11px] font-semibold text-[color:var(--zonda-blue)]">
        {count}
      </span>
    </div>
  );
}

export function RolesVisual() {
  return (
    <div className="flex flex-col gap-4">
      {/* Permissions matrix */}
      <div className="rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-5 shadow-[0_20px_40px_-28px_rgba(7,17,48,0.15)]">
        <div className="mb-3.5 flex items-baseline justify-between">
          <p className="text-xs font-bold">Matriz de permisos</p>
          <p className="font-mono text-[10px] text-[color:var(--fg-3)]">
            Sede Centro · 5 roles
          </p>
        </div>
        <div className="grid grid-cols-[1.5fr_repeat(4,1fr)] gap-1">
          <div />
          {headers.map((h) => (
            <p
              key={h}
              className="text-center text-[10px] font-semibold text-[color:var(--fg-2)]"
            >
              {h}
            </p>
          ))}
          {rows.map((r) => (
            <div key={r.role} className="col-span-5 grid grid-cols-subgrid">
              <div className="flex items-center py-2 text-xs font-semibold">
                {r.role}
              </div>
              {r.cells.map((perm, i) => {
                const s = cellStyles[perm];
                return (
                  <div
                    key={i}
                    className={`flex h-[30px] items-center justify-center rounded-md text-[10px] font-bold ${s.bg} ${s.fg}`}
                  >
                    {s.label}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Org tree */}
      <div className="rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-5 shadow-[0_20px_40px_-28px_rgba(7,17,48,0.15)]">
        <div className="mb-3.5 flex items-baseline justify-between">
          <p className="text-xs font-bold">Estructura · Red Salud Sur</p>
          <p className="font-mono text-[10px] text-[color:var(--fg-3)]">
            3 entidades · 6 sedes
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <OrgTreeRow indent={0} icon="◆" name="Red Salud Sur S.A." sub="Holding" count="284" />
          <OrgTreeRow indent={1} icon="●" name="Clínica Centro" sub="Entidad jurídica" count="142" />
          <OrgTreeRow indent={2} icon="▸" name="Sede Centro" sub="6 profesionales" count="98" />
          <OrgTreeRow indent={2} icon="▸" name="Sede Anexa" sub="3 profesionales" count="44" />
          <OrgTreeRow indent={1} icon="●" name="HomeCare Sur" sub="Entidad jurídica" count="142" />
        </div>
      </div>
    </div>
  );
}
