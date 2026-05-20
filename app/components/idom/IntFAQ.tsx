'use client';

import { useState } from 'react';

const INT_FAQ = [
  [
    '¿Funciona sin internet?',
    'Sí. La app guarda todo lo que hace el profesional en el celular y lo sube cuando vuelve a tener señal. Nunca se pierde información ni se frena el trabajo.',
  ],
  [
    '¿Se conecta con nuestro sistema de facturación?',
    'Sí. Nos integramos con los sistemas de facturación más usados en Argentina. Nuestro equipo configura la conexión durante la implementación, sin costo adicional.',
  ],
  [
    '¿Sirve para cualquier obra social?',
    'Trabajamos con los formatos de OSDE, Swiss Medical, PAMI, IOMA y muchos más. Si tu obra social usa un formato distinto, lo agregamos rápidamente.',
  ],
  [
    '¿Cada persona ve solo lo que le corresponde?',
    'Sí. Cada rol tiene su vista: el profesional ve sus visitas, el coordinador ve su equipo, el director ve todo. Y queda registro de quién hizo qué.',
  ],
  [
    '¿Cuánto tarda ponerlo en marcha?',
    'Entre 2 y 4 semanas. Arrancamos con la configuración y la conexión a tu sistema, después hacemos una prueba con un equipo chico, y de ahí se extiende al resto.',
  ],
] as const;

export function IntFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="layout-shell grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--zonda-blue)]">
            FAQ
          </p>
          <h2 className="mt-3 max-w-[360px] text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:text-[44px]">
            Preguntas frecuentes.
          </h2>
          <p className="mt-4 max-w-[360px] text-base text-[color:var(--fg-2)]">
            ¿Tenés otra consulta? Escribinos a{' '}
            <a
              href="mailto:support@zondahealth.com"
              className="font-semibold text-[color:var(--zonda-blue)]"
            >
              support@zondahealth.com
            </a>
            .
          </p>
        </div>
        <div>
          {INT_FAQ.map(([q, a], i) => (
            <div
              key={q}
              style={{
                borderTop: '1px solid rgba(21,27,43,.10)',
                borderBottom:
                  i === INT_FAQ.length - 1
                    ? '1px solid rgba(21,27,43,.10)'
                    : '0',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '20px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: 'var(--zonda-ink)',
                  }}
                >
                  {q}
                </span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: open === i ? '#0dc958' : 'rgba(21,27,43,.06)',
                    color: open === i ? '#fff' : 'var(--zonda-ink)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 600,
                    flexShrink: 0,
                    transition: 'all .2s',
                  }}
                >
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p
                  style={{
                    margin: 0,
                    padding: '0 0 20px',
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--fg-2)',
                    maxWidth: 600,
                  }}
                >
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
