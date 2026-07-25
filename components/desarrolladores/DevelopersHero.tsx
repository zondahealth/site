'use client';

import ExploreButton from '@/components/ExploreButton';
import { useLanguage } from '@/components/LanguageProvider';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';

export function DevelopersHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-0">
      <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black" />

        <TopographicShaderBackground
          shaderId="weave-dense"
          inkColor="rgba(255, 255, 0, 0.32)"
          backgroundOpacity={0}
          lineOpacity={0.9}
          staticFrame={82}
          angle={-0.2}
          className="absolute inset-0 h-full w-full touch-none opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,transparent_26%,transparent_74%,rgba(0,0,0,0.3)_100%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_24%,rgba(0,0,0,0.16)_100%)]" />

        <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-6 py-10 md:px-10 lg:px-16">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-8 text-center md:items-start md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-vitality-yellow">
              {t('site.developers.eyebrow')}
            </p>
            <h1 className="flex flex-col gap-2 font-bold text-white [font-family:var(--font-display-family)]">
              <span className="text-5xl md:text-7xl lg:text-8xl">
                {t('site.developers.title')}
              </span>
            </h1>
            <p className="max-w-2xl text-xl font-semibold text-white md:text-2xl lg:text-3xl">
              {t('site.developers.copy')}
            </p>
            <ExploreButton
              href="https://zondahealth.readme.io/reference/getting-started-with-your-api"
              title={t('site.common.exploreApi')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
