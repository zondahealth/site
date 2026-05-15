const FEATURES = [
  {
    icon: '📋',
    title: 'Receta electrónica',
    description:
      'Firma digital y trazabilidad. Compatible con farmacias y obras sociales.',
  },
  {
    icon: '🧪',
    title: 'Pedidos de estudios',
    description:
      'Imágenes, laboratorios, derivaciones. Enviado al paciente por WhatsApp.',
  },
  {
    icon: '💬',
    title: 'WhatsApp integrado',
    description:
      'Recordatorios, encuestas y respuestas automáticas — sin salir de Zonda.',
  },
  {
    icon: '📊',
    title: 'Reportes financieros',
    description:
      'Facturación por obra social, conciliación y proyecciones por mes.',
  },
  {
    icon: '🔒',
    title: 'Datos cifrados',
    description:
      'Cifrado end-to-end, Ley 26.529. Tu paciente, tu data, tu control.',
  },
  {
    icon: '🗓',
    title: 'Multi-consultorio',
    description:
      'Manejá varios consultorios y horarios sin duplicar carga.',
  },
  {
    icon: '👥',
    title: 'Equipo y secretaría',
    description:
      'Roles, permisos y agenda compartida con tu equipo de apoyo.',
  },
  {
    icon: '📱',
    title: 'App nativa',
    description:
      'iOS y Android. Misma data, sin retraso, también offline.',
  },
  {
    icon: '🔌',
    title: 'API + Webhooks',
    description:
      'Conectá tu propio stack — desde el sitio hasta la facturación.',
  },
];

export function ProFeatureGrid() {
  return (
    <section className="bg-[#fcfcff] py-24">
      <div className="layout-shell">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
              Plataforma completa
            </p>
            <h2 className="mt-3 max-w-[720px] text-3xl font-bold leading-tight tracking-tight lg:text-[44px]">
              Todo lo demás que viene incluido.
            </h2>
          </div>
          <span className="hidden text-sm font-semibold text-[color:var(--zonda-blue)] sm:inline">
            Ver lista completa →
          </span>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(21,27,43,0.08)] sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 1 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex min-h-[200px] flex-col gap-2.5 bg-[#fcfcff] p-7"
            >
              <span className="mb-1 text-[22px] leading-none">{f.icon}</span>
              <h3 className="text-[17px] font-bold text-[color:var(--zonda-ink)]">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--fg-2)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
