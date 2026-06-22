'use client';

import Image from 'next/image';

import { useLanguage } from '@/components/LanguageProvider';
import { FeaturePanel } from '@/components/panel';

export function ProHero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col">
      <FeaturePanel
        background="white"
        className="h-[100dvh] min-h-[30rem] w-full rounded-none"
        contentClassName="grid h-full w-full grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2"
      >
        <div className="flex min-w-0 flex-col items-center justify-center space-y-8 px-6 py-24 text-center lg:items-start lg:px-16 lg:text-left">
          <h1 className="text-4xl font-bold text-zonda-dark [font-family:var(--font-display-family)] md:text-5xl lg:text-6xl xl:text-7xl">
            {t('site.products.professionals.heroTitle')}
          </h1>
          <p className="text-md font-semibold text-zonda-dark md:text-lg lg:text-2xl">
            {t('site.products.professionals.heroCopy')}
          </p>
        </div>

        <div className="relative hidden h-full overflow-visible lg:block">
          <Image
            src="/assets/profesionales/images/doctor.png"
            alt={t('site.products.professionals.heroAlt')}
            width={700}
            height={700}
            className="pointer-events-none absolute bottom-0 left-0 h-[85%] w-auto max-w-none object-contain object-bottom"
            sizes="100%"
          />
        </div>
      </FeaturePanel>
    </section>
  );
}
