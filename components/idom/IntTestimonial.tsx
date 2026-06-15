export function IntTestimonial() {
  return (
    <section className="py-24">
      <div className="layout-shell">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #d4f0dd 0%, #b6e4cd 60%, #93d7c0 100%)',
            padding: 'clamp(32px, 5vw, 72px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,.6), transparent 60%)',
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">

            <div>
              <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: '#0a4a35' }}>
                Caso · HomeCare BA
              </p>
              <p style={{ marginTop: 16, fontSize: 16, fontWeight: 700, color: 'var(--zonda-blue-dark)' }}>
                Lic. Fernanda Casás
              </p>
              <p style={{ margin: '2px 0 0', fontSize: 13, color: '#0a4a35' }}>COO · HomeCare Buenos Aires</p>
              <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(10,74,53,.15)' }}>
                <p
                  className="font-mono"
                  style={{
                    margin: 0,
                    fontSize: 11,
                    color: '#0a4a35',
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                  }}
                >
                  Resultado en 6 meses
                </p>
                <div style={{ marginTop: 12, display: 'flex', gap: 24 }}>
                  <div>
                    <p
                      className="font-extrabold"
                      style={{ margin: 0, fontSize: 40, color: 'var(--zonda-blue-dark)' }}
                    >
                      0
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: 11, color: '#0a4a35' }}>visitas sin registro</p>
                  </div>
                  <div>
                    <p
                      className="font-extrabold"
                      style={{ margin: 0, fontSize: 40, color: 'var(--zonda-blue-dark)' }}
                    >
                      −68%
                    </p>
                    <p style={{ margin: '2px 0 0', fontSize: 11, color: '#0a4a35' }}>menos trabajo manual</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                width="40"
                height="32"
                viewBox="0 0 42 32"
                fill="none"
                style={{ marginBottom: 20, opacity: 0.3 }}
              >
                <path
                  d="M18 0H6C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0zM42 0H30c-3.3 0-6 2.7-6 6v12c0 3.3 2.7 6 6 6h6c-1 4-4 6-6 8h4c8-2 12-7 12-14V0z"
                  fill="var(--zonda-blue-dark)"
                />
              </svg>
              <p
                className="text-balance"
                style={{
                  margin: 0,
                  fontSize: 26,
                  lineHeight: 1.3,
                  fontWeight: 500,
                  color: 'var(--zonda-blue-dark)',
                  letterSpacing: '-0.005em',
                }}
              >
                Antes peleábamos con la obra social a fin de mes por visitas mal documentadas. Hoy cada
                visita queda registrada antes de que el profesional vuelva a la oficina. Cobramos más rápido
                y sin discusiones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
