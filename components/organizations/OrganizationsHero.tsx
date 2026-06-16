'use client';

import Image from 'next/image';

import { GradientDividerBar } from '@/components/GradientDividerBar';
import { useLanguage } from '@/components/LanguageProvider';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';

export function OrganizationsHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-0">
      <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-zonda-blue-dark">
        <div className="absolute inset-0">
          <Image
            src="/assets/organizaciones/images/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <TopographicShaderBackground
          shaderId="low-tide"
          inkColor="rgba(242, 255, 0, 0.86)"
          lineColor={[234, 234, 0]}
          className="absolute inset-0 h-full w-full touch-none opacity-100 mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_620px_at_22%_58%,rgba(7,17,48,0.34),transparent_58%),linear-gradient(180deg,rgba(5,16,44,0.14)_0%,rgba(5,16,44,0.28)_100%)]" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl">
          <div className="flex min-w-0 max-w-3xl flex-col items-start justify-end px-8 pb-16 pt-24 text-left lg:px-12 lg:pb-24 lg:pt-24">
            <h1 className="flex flex-col gap-4 font-bold text-white lg:gap-6">
              <span className="text-5xl font-bold text-vitality-yellow [font-family:var(--font-display-family)] md:text-6xl lg:text-7xl">
                {t('site.products.organizations.heroTitle')}
              </span>
              <span className="text-3xl text-white md:text-4xl lg:text-5xl">
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
