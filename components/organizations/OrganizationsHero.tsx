'use client';

import { GradientDividerBar } from '@/components/GradientDividerBar';
import { useLanguage } from '@/components/LanguageProvider';

export function OrganizationsHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-0">
      <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-zonda-blue-dark bg-[url('/assets/organizaciones/images/bg-orgs.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl">
          <div className="flex min-w-0 max-w-3xl flex-col items-start justify-end px-8 pb-16 pt-24 text-left lg:px-12 lg:pb-24 lg:pt-24">
            <h1 className="flex flex-col gap-5 [font-family:var(--font-sans)]">
              <span className="max-w-3xl text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white md:text-6xl lg:text-[5rem]">
                {t('site.products.organizations.heroTitle')}
              </span>
              <span className="text-3xl font-extrabold leading-none tracking-[-0.035em] text-vitality-yellow md:text-4xl lg:text-[3.25rem]">
                {t('site.products.organizations.heroHighlight')}
              </span>
            </h1>
          </div>
        </div>
        <GradientDividerBar
          variant="cool"
          className="absolute inset-x-0 bottom-0"
        />
      </div>
    </section>
  );
}
