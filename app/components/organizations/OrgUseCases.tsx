'use client';

import { useLanguage } from '@/app/components/LanguageProvider';

const accents = ['#226ffd', '#0e3c75', '#0dc958', '#eaea00'];

type UseCase = {
  type: string;
  desc: string;
  bullets: string[];
};

export function OrgUseCases() {
  const { raw, t } = useLanguage();
  const useCases = raw<UseCase[]>('site.products.organizations.useCases');

  return (
    <section className="bg-[#f7f8fc] py-24">
      <div className="layout-shell">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--fg-2)]">
            {t('site.products.organizations.useCasesTitle')}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight lg:text-[44px]">
            {t('site.products.organizations.useCasesHeadline')}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc, index) => (
            <div
              key={uc.type}
              className="relative flex flex-col gap-3.5 overflow-hidden rounded-xl border border-[color:rgba(21,27,43,0.08)] bg-[#fcfcff] p-7"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: accents[index] }}
              />
              <h3 className="mt-2 text-[22px] font-bold">{uc.type}</h3>
              <p className="flex-1 text-sm leading-relaxed text-[color:var(--fg-2)]">
                {uc.desc}
              </p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {uc.bullets.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs font-medium text-[color:var(--fg-2)]"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full"
                      style={{ background: accents[index] }}
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
