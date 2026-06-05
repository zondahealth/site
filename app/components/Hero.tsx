'use client';

import Link from 'next/link';
import { GradientDividerBar } from './GradientDividerBar';
import { useLanguage } from './LanguageProvider';
import { TopographicShaderBackground } from './shaders/TopographicShaderBackground';
import { Button } from './ui/button';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-0">
      <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-zonda-blue-dark sm:p-12 lg:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_760px_at_58%_28%,rgba(34,111,253,0.76),transparent_62%),radial-gradient(900px_680px_at_16%_82%,rgba(4,17,48,0.56),transparent_58%),linear-gradient(180deg,rgba(8,20,54,0.96)_0%,rgba(10,35,94,0.92)_42%,rgba(7,17,48,0.98)_100%)]" />
        <TopographicShaderBackground
          shaderId="liquid"
          className="absolute inset-0 h-full w-full touch-none opacity-100 mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(230,255,26,0.07),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(34,111,253,0.1),transparent_32%),linear-gradient(180deg,rgba(3,13,40,0.08)_0%,rgba(3,13,40,0.16)_100%)]" />
        <GradientDividerBar
          variant="dynamic"
          className="absolute inset-x-0 bottom-0"
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center sm:px-10">
          <h1 className="w-full max-w-3xl text-balance [font-family:var(--font-display-family)] text-4xl font-bold leading-[0.96] text-[color:rgba(248,250,255,0.96)] sm:text-5xl lg:text-7xl">
            {t('site.home.hero.titlePrefix')}{' '}
            <span className="text-[color:var(--color-vitality-yellow)]">
              {t('site.home.hero.titleHighlight')}
            </span>
          </h1>
          <div className="max-w-3xl">
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-bold leading-relaxed text-[color:rgba(248,250,255,0.82)] sm:text-xl">
              {t('site.home.hero.copy')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-w-44">
                <Link href="/contacto">{t('site.home.hero.cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
