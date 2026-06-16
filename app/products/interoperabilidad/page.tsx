'use client';

import {
  FeaturePanel,
  FeaturePanelColor,
  FeaturePanelBackgroundStyle,
} from '@/components/panel';
import { InfoSection, type InfoSectionData } from '@/components/InfoSection';
import { useLanguage } from '@/components/LanguageProvider';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GradientDividerBar } from '@/components/GradientDividerBar';
import { Strip } from '@/components/Strip';

export default function InteroperabilidadPage() {
  const { raw, t } = useLanguage();
  const sections = raw<InfoSectionData[]>('site.products.interop.sections');
  const heroLines = raw<string[]>('site.products.interop.heroLines');

  return (
    <div className="h-full w-full flex flex-1 flex-col">
      {/* Hero */}
      <section className="pt-0">
        <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black" />

          <TopographicShaderBackground
            shaderId="tide"
            inkColor="rgba(255, 255, 0, 0.98)"
            backgroundOpacity={0}
            angle={-0.2}
            className="absolute inset-0 h-full w-full touch-none opacity-80"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,transparent_26%,transparent_74%,rgba(0,0,0,0.3)_100%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_24%,rgba(0,0,0,0.16)_100%)]" />

          <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-6 py-10 md:px-10 lg:px-16">
            <div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-8 text-center md:items-start md:text-left">
              <h1 className="flex flex-col gap-2 font-bold text-white [font-family:var(--font-display-family)]">
                <span className="text-5xl md:text-7xl lg:text-8xl">
                  {t('site.products.interop.title')}
                </span>
              </h1>
              <p className="max-w-2xl text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                {heroLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Strip />

      {/* Sections */}
      {sections.map((section, i) => (
        <InfoSection
          key={section.title}
          section={section}
          index={i}
          variant="dark"
        />
      ))}

      {/* CTA */}
      <section className="bg-black">
        <div className="layout-shell py-20 md:py-28">
          <FeaturePanel
            color={FeaturePanelColor.Yellow}
            backgroundStyle={FeaturePanelBackgroundStyle.FullDrift}
            backgroundClassName="opacity-30"
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-black [font-family:var(--font-display-family)]">
              {t('site.products.interop.ctaTitle')} <br />
              <span className="text-black">
                {t('site.products.interop.ctaHighlight')}
              </span>
            </div>

            <Button asChild size="lg" className="min-w-48" variant="primary">
              <Link href="/contacto">{t('site.common.contact')}</Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
