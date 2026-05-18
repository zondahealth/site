const USE_CASES = [
  {
    type: 'Clínicas',
    desc: 'Operación clínica + facturación en un solo panel. Ideal para entidades únicas con varias especialidades.',
    points: [
      'Hasta 50 profesionales',
      '1 entidad jurídica',
      'Multi-especialidad',
    ],
    accent: '#226ffd',
  },
  {
    type: 'Hospitales',
    desc: 'Múltiples servicios, gobernanza estricta, integración con sistemas legacy hospitalarios.',
    points: [
      '+200 profesionales',
      'Integración FHIR/HL7',
      'Auditoría completa',
    ],
    accent: '#0e3c75',
  },
  {
    type: 'Redes',
    desc: 'Varias entidades jurídicas, varias sedes, una sola visibilidad consolidada para el holding.',
    points: [
      'Multi-entidad',
      'Reportes consolidados',
      'Transferencia inter-sede',
    ],
    accent: '#0dc958',
  },
  {
    type: 'Empresas de salud',
    desc: 'Domiciliarias, telemedicina, prepagas chicas. Necesitás conectar lo administrativo con lo clínico.',
    points: ['API + Webhooks', 'Pago por resultado', 'LOE y trazabilidad'],
    accent: '#eaea00',
  },
];

export function OrgUseCases() {
  return (
    <section className="bg-[#f7f8fc] py-24">
      <div className="layout-shell">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
            Para tu tipo de organización
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight lg:text-[44px]">
            Un sistema, cuatro formas de operar.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((uc) => (
            <div
              key={uc.type}
              className="relative flex flex-col gap-3.5 overflow-hidden rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-7"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: uc.accent }}
              />
              <h3 className="mt-2 text-[22px] font-bold">{uc.type}</h3>
              <p className="flex-1 text-sm leading-relaxed text-[color:var(--fg-2)]">
                {uc.desc}
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {uc.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs font-medium text-[color:var(--fg-2)]"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full"
                      style={{ background: uc.accent }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
