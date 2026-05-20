'use client';

import { useState } from 'react';

import { useLanguage } from '@/app/components/LanguageProvider';

type FAQItem = { q: string; a: string };

export function ProFAQ() {
  const { raw, t } = useLanguage();
  const faqItems = raw<FAQItem[]>('site.products.professionals.faqs');
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="layout-shell grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Left column */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
            {t('site.products.professionals.faqEyebrow')}
          </p>
          <h2 className="mt-3 max-w-[360px] text-3xl font-bold leading-tight tracking-tight lg:text-[44px]">
            {t('site.products.professionals.faqTitle')}
          </h2>
          <p className="mt-4 max-w-[360px] text-base text-[color:var(--fg-2)]">
            {t('site.products.professionals.faqCopyPrefix')}{' '}
            <a
              href="mailto:support@zondahealth.com"
              className="font-semibold text-[color:var(--zonda-blue)]"
            >
              support@zondahealth.com
            </a>
            . {t('site.products.professionals.faqCopySuffix')}
          </p>
        </div>

        {/* Right column — accordion */}
        <div>
          {faqItems.map((item, i) => (
            <div
              key={item.q}
              className={`border-t border-[color:rgba(21,27,43,0.10)] ${
                i === faqItems.length - 1
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
                  {item.q}
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
