'use client';

import Image from 'next/image';

import { useLanguage } from '@/components/LanguageProvider';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';

export function ProHero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col">
      <div className="relative flex h-[100dvh] min-h-[30rem] w-full flex-col overflow-hidden rounded-none bg-[#f7fbff]">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_24%_24%,rgba(255,255,123,0.24),transparent_60%),radial-gradient(780px_520px_at_78%_82%,rgba(255,247,87,0.14),transparent_42%),linear-gradient(180deg,rgba(255,255,163,0.84)_0%,rgba(255,236,84,0.92)_100%)]" />

        <TopographicShaderBackground
          shaderId="weave-dense"
          animated={false}
          bgColor="#f4f9ff"
          inkColor="rgba(6, 139, 255, 0.19)"
          lineColor={[14, 125, 222]}
          backgroundOpacity={0}
          lineOpacity={0.38}
          angle={0.08}
          className="absolute inset-0 h-full w-full touch-none opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(252,253,255,0.5)_0%,rgba(252,253,255,0.16)_28%,rgba(252,253,255,0)_54%,rgba(252,253,255,0.14)_100%)]" />

        <div className="relative z-10 grid h-full w-full flex-1 grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
          <div className="flex min-w-0 flex-col items-center justify-center space-y-8 px-6 py-24 text-center lg:items-start lg:px-16 lg:text-left">
            <h1 className="text-4xl font-bold text-zonda-blue [font-family:var(--font-display-family)] md:text-5xl lg:text-6xl xl:text-7xl">
              {t('site.products.professionals.heroTitle')}
            </h1>
            <p className="text-md font-semibold text-zonda-blue md:text-lg lg:text-2xl">
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
        </div>
      </div>
    </section>
  );
}
