'use client';

import Image from 'next/image';

import { useLanguage } from '@/components/LanguageProvider';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';

export function IdomHero() {
  const { t } = useLanguage();

  return (
    <section className="flex w-full flex-col">
      <div className="relative flex h-[100dvh] min-h-[30rem] w-full flex-col overflow-hidden rounded-none bg-[#0b221b]">
        <div className="absolute inset-0">
          <Image
            src="/assets/internacion-domiciliaria/hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,34,27,0.2)_0%,rgba(11,34,27,0.42)_100%)]" />
        <TopographicShaderBackground
          shaderId="weave-dense"
          animated={false}
          bgColor="#0b221b"
          inkColor="rgba(226,243,236,0.14)"
          lineColor={[13, 201, 88]}
          backgroundOpacity={0}
          lineOpacity={0.12}
          staticFrame={74}
          angle={0.04}
          className="absolute inset-0 h-full w-full touch-none opacity-40 mix-blend-screen"
        />

        <div className="relative z-10 flex flex-1 flex-col items-start justify-end px-8 pb-16 pt-20 text-left text-white sm:px-12 sm:pb-20 sm:pt-28 lg:px-20 lg:pb-24 lg:pt-36">
          <h1 className="max-w-5xl text-4xl font-bold [font-family:var(--font-display-family)] md:text-6xl lg:text-7xl xl:text-8xl">
            {t('site.products.idom.heroTitle')}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold text-[rgba(248,250,255,0.9)] md:text-xl lg:text-2xl">
            {t('site.products.idom.heroCopy')}
          </p>
        </div>
      </div>
    </section>
  );
}
