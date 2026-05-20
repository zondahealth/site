'use client';

import { useState } from 'react';

import { useLanguage } from '@/app/components/LanguageProvider';

type FAQ = { q: string; a: string };

export function IntFAQ() {
  const { raw, t } = useLanguage();
  const faqs = raw<FAQ[]>('site.products.idom.faqs');
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="layout-shell grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--zonda-blue)]">
            FAQ
          </p>
          <h2 className="mt-3 max-w-[360px] text-balance text-3xl font-bold leading-[1.05] tracking-tight lg:text-[44px]">
            {t('site.products.idom.faqTitle')}
          </h2>
          <p className="mt-4 max-w-[360px] text-base text-[color:var(--fg-2)]">
            {t('site.products.idom.faqPrefix')}{' '}
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
          {faqs.map((item, i) => (
            <div
              key={item.q}
              style={{
                borderTop: '1px solid rgba(21,27,43,.10)',
                borderBottom:
                  i === faqs.length - 1
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
                  {item.q}
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
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
