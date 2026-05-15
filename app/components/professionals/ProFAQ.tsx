'use client';

import { useState } from 'react';

const FAQ_ITEMS: [string, string][] = [
  [
    '¿Necesito instalar algo en mi consultorio?',
    'No. Zonda funciona en el navegador y en la app móvil. Lo único que necesitás es internet — incluso desde el celular.',
  ],
  [
    '¿Mis datos están seguros?',
    'Sí. Cifrado end-to-end, almacenamiento en Argentina y cumplimiento con la Ley 26.529 de Derechos del Paciente. Tu data es tuya.',
  ],
  [
    '¿Cuánto tarda en estar operativo?',
    '5 minutos. Te registrás, conectás tus organizaciones (OSDE, Swiss Medical, PAMI, etc.) y empezás a cargar pacientes.',
  ],
  [
    '¿Puedo migrar mis pacientes desde otro sistema?',
    'Sí. Importamos desde Excel, CSV o vía API desde la mayoría de los sistemas populares en Argentina. Te asistimos en la migración sin costo.',
  ],
  [
    '¿Qué pasa si me quiero ir?',
    'Te exportás toda tu información en formato estándar (FHIR, CSV). Sin candados, sin letra chica.',
  ],
];

export function ProFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="layout-shell grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Left column */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
            Dudas frecuentes
          </p>
          <h2 className="mt-3 max-w-[360px] text-3xl font-bold leading-tight tracking-tight lg:text-[44px]">
            ¿Algo que te frena?
          </h2>
          <p className="mt-4 max-w-[360px] text-base text-[color:var(--fg-2)]">
            Si no encontrás lo que buscás, escribinos a{' '}
            <a
              href="mailto:hola@zonda.health"
              className="font-semibold text-[color:var(--zonda-blue)]"
            >
              hola@zonda.health
            </a>
            . Te respondemos en menos de un día hábil.
          </p>
        </div>

        {/* Right column — accordion */}
        <div>
          {FAQ_ITEMS.map(([question, answer], i) => (
            <div
              key={question}
              className={`border-t border-[color:rgba(21,27,43,0.10)] ${
                i === FAQ_ITEMS.length - 1
                  ? 'border-b border-b-[color:rgba(21,27,43,0.10)]'
                  : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-[color:var(--zonda-ink)]">
                  {question}
                </span>
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-semibold transition-all duration-200 ${
                    openIndex === i
                      ? 'bg-[color:var(--zonda-blue)] text-white'
                      : 'bg-[color:rgba(21,27,43,0.06)] text-[color:var(--zonda-ink)]'
                  }`}
                >
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="max-w-[560px] pb-5 text-[15px] leading-relaxed text-[color:var(--fg-2)]">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
