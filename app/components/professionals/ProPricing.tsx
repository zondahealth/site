import Link from 'next/link';

type PricingCardProps = {
  plan: string;
  priceLabel: string;
  sub: string;
  features: string[];
  cta: string;
  primary?: boolean;
};

function PricingCard({
  plan,
  priceLabel,
  sub,
  features,
  cta,
  primary = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-9 ${
        primary
          ? 'border border-zonda-blue-dark bg-zonda-blue-dark text-white'
          : 'border border-[color:rgba(21,27,43,0.10)] bg-white text-[color:var(--zonda-ink)]'
      }`}
    >
      {primary && (
        <div className="absolute right-0 top-0 rounded-bl-lg bg-[color:var(--zonda-yellow)] px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[#1d1d00]">
          MÁS ELEGIDO
        </div>
      )}
      {primary && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "url('/bg/movement/dark-blue-lines.png') center/cover",
          }}
        />
      )}
      <div className="relative">
        <p
          className={`text-sm font-bold ${
            primary
              ? 'text-[color:var(--zonda-yellow)]'
              : 'text-[color:var(--zonda-blue)]'
          }`}
        >
          {plan}
        </p>
        <div className="mt-3 flex items-baseline gap-2">
          <p
            className={`text-[56px] font-bold [font-family:var(--font-display)] ${
              primary ? 'text-white' : 'text-[color:var(--zonda-ink)]'
            }`}
          >
            {priceLabel}
          </p>
          <span
            className={`text-sm ${
              primary
                ? 'text-[color:rgba(248,250,255,0.7)]'
                : 'text-[color:var(--fg-2)]'
            }`}
          >
            {sub}
          </span>
        </div>
        <ul className="mt-7 flex flex-col gap-2.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-sm font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7.2L6 10L11 4"
                  stroke={
                    primary ? 'var(--zonda-yellow)' : 'var(--zonda-blue)'
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          className={`mt-8 flex h-12 w-full items-center justify-center rounded-full text-base font-semibold transition-opacity hover:opacity-90 ${
            primary
              ? 'bg-[color:var(--zonda-yellow)] text-[#1d1d00]'
              : 'bg-zonda-blue-dark text-white'
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

export function ProPricing() {
  return (
    <section className="bg-[#fcfcff] py-24">
      <div className="layout-shell">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
            Precios
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Empezá gratis. Pagás cuando crece.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-[color:var(--fg-2)]">
            Sin compromiso, sin instalación. Lo único que necesitás es tu
            matrícula y un café.
          </p>
        </div>

        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-6 sm:grid-cols-2">
          <PricingCard
            plan="Solo"
            priceLabel="Gratis"
            sub="Para empezar"
            features={[
              'Hasta 50 pacientes activos',
              '1 organización conectada',
              'Agenda + evoluciones IA',
              'Soporte por mail',
            ]}
            cta="Empezar gratis"
          />
          <PricingCard
            plan="Práctica"
            priceLabel="USD 24"
            sub="por mes"
            features={[
              'Pacientes ilimitados',
              'Todas las obras sociales',
              'Reportes financieros',
              'Soporte prioritario en WhatsApp',
              'Receta electrónica',
            ]}
            cta="Empezar 14 días gratis"
            primary
          />
        </div>

        <p className="mx-auto mt-8 max-w-[480px] text-center text-[13px] text-[color:var(--fg-3)]">
          ¿Sos parte de una organización?{' '}
          <Link
            href="/contacto"
            className="font-semibold text-[color:var(--zonda-blue)]"
          >
            Ver plan Equipo →
          </Link>
        </p>
      </div>
    </section>
  );
}
