import { RoutePin } from './RoutePin';

function IntHeroStat({ v, t }: { v: string; t: string }) {
  return (
    <div>
      <p className="font-extrabold" style={{ margin: 0, fontSize: 32, color: 'var(--zonda-blue-dark)', lineHeight: 1 }}>
        {v}
      </p>
      <p style={{ margin: '4px 0 0', fontSize: 12, color: '#0a4a35', fontWeight: 600 }}>{t}</p>
    </div>
  );
}

function FieldOpsVisual() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 40px 80px -30px rgba(7,17,48,.28)',
        border: '1px solid rgba(255,255,255,.5)',
        aspectRatio: '5/4',
      }}
    >
      {/* Map base */}
      <div style={{ position: 'absolute', inset: 0, background: "url('/bg/movement/map-green.png') center/cover" }} />
      {/* Tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(13,46,55,.10) 0%, rgba(13,46,55,.35) 100%)',
        }}
      />

      {/* Route SVG overlay */}
      <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="route" x1="0" x2="1">
            <stop offset="0" stopColor="#eaea00" />
            <stop offset="1" stopColor="#0dc958" />
          </linearGradient>
        </defs>
        <path
          d="M60 60 C 140 80, 200 140, 220 200 S 320 280, 420 240"
          stroke="url(#route)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />
        {/* Pins */}
        <RoutePin x={60} y={60} label="Salida" color="#eaea00" />
        <RoutePin x={220} y={200} label="Visita 1" color="#fcfcff" tone="dark" status="ok" />
        <RoutePin x={420} y={240} label="Visita 2" color="#0dc958" current />
      </svg>

      {/* Floating status card (top right) */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: '#fcfcff',
          borderRadius: 12,
          padding: '12px 14px',
          boxShadow: '0 12px 28px -16px rgba(7,17,48,.4)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minWidth: 200,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            background: 'linear-gradient(135deg,#7bd9b3,#0dc958)',
          }}
        />
        <div>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: 'var(--fg-3)' }}>EN RUTA</p>
          <p style={{ margin: '2px 0 0', fontSize: 13, fontWeight: 700, color: 'var(--zonda-ink)' }}>
            Lic. C. Aguirre
          </p>
          <p className="font-mono" style={{ margin: 0, fontSize: 10, color: 'var(--fg-2)' }}>
            ETA 14:25 · Av. Cabildo 3214
          </p>
        </div>
      </div>

      {/* Floating visit done card (bottom left) */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          background: '#fcfcff',
          borderRadius: 12,
          padding: '12px 14px',
          boxShadow: '0 12px 28px -16px rgba(7,17,48,.4)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minWidth: 220,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#0dc958" />
          <path
            d="M11 18.5L16 23L25 13"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: '#0a7a4a' }}>VISITA CONFIRMADA</p>
          <p style={{ margin: '2px 0 0', fontSize: 13, fontWeight: 700, color: 'var(--zonda-ink)' }}>
            María Etería · 13:42
          </p>
          <p className="font-mono" style={{ margin: 0, fontSize: 10, color: 'var(--fg-2)' }}>
            LOE #2841 · Auditada ✓
          </p>
        </div>
      </div>
    </div>
  );
}

export function IntHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 64 }}>
      {/* Soft mint watercolor backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #d4f0dd 0%, #b6e4cd 40%, #93d7c0 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 25% 30%, rgba(255,255,255,0.7), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(167,232,196,0.55), transparent 65%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(186,224,200,0.5), transparent 70%)',
        }}
      />
      <div className="layout-shell" style={{ position: 'relative', paddingTop: 56, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                background: 'rgba(255,255,255,.6)',
                border: '1px solid rgba(10,74,53,.15)',
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: '#0a7a4a',
                  boxShadow: '0 0 0 4px rgba(10,122,74,.18)',
                }}
              />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#0a4a35' }}>
                Atención domiciliaria · Telemedicina · Cuidados en casa
              </span>
            </div>
            <h1
              className="text-balance"
              style={{
                margin: 0,
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(48px, 6.4vw, 88px)',
                fontWeight: 800,
                lineHeight: 0.96,
                letterSpacing: '-0.025em',
                color: 'var(--zonda-blue-dark)',
              }}
            >
              Todo tu equipo conectado, desde la oficina hasta el domicilio.
            </h1>
            <p
              style={{
                marginTop: 28,
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.55,
                color: 'rgba(14,60,117,.85)',
                maxWidth: 500,
              }}
            >
              Organizá visitas, coordiná profesionales y controlá cada paso de la atención domiciliaria
              desde un solo lugar. Sin planillas, sin llamados, sin sorpresas.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button
                className="btn btn-lg"
                style={{ background: 'var(--zonda-blue-dark)', color: '#fff', minWidth: 200 }}
              >
                Agendar demo
              </button>
            </div>
            <div style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              <IntHeroStat v="99.8%" t="visitas confirmadas" />
              <div style={{ width: 1, background: 'rgba(10,74,53,.15)' }} />
              <IntHeroStat v="−68%" t="menos trabajo manual" />
              <div style={{ width: 1, background: 'rgba(10,74,53,.15)' }} />
              <IntHeroStat v="0" t="información perdida" />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <FieldOpsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
