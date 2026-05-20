'use client';

import { FeaturePanel } from '@/app/components/FeaturePanel';
import { FeaturePanelTone } from '@/app/components/FeaturePanel';
import { FeaturePanelBackgroundStyling } from '@/app/components/FeaturePanel';
import {
  InfoSection,
  type InfoSectionData,
} from '@/app/components/InfoSection';
import { useLanguage } from '@/app/components/LanguageProvider';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function InteroperabilidadPage() {
  const { raw, t } = useLanguage();
  const sections = raw<InfoSectionData[]>('site.products.interop.sections');
  const heroLines = raw<string[]>('site.products.interop.heroLines');

  return (
    <div className="h-full w-full flex flex-1 flex-col">
      {/* Hero */}
      <FeaturePanel
        className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
        tone={FeaturePanelTone.Black}
        backgroundStyling={FeaturePanelBackgroundStyling.Full}
        contentClassName="flex flex-1 min-h-0 w-full h-full items-center justify-center"
      >
        <div className="flex flex-1 w-full h-full flex-col items-center justify-center px-6 py-10 text-center md:items-start md:text-left space-y-8 max-w-2xl md:max-w-7xl mx-auto">
          <h1 className="font-bold text-vitality-yellow flex flex-col gap-2 [font-family:var(--font-display-family)]">
            <span className="text-vitality-yellow text-5xl md:text-7xl lg:text-8xl">
              {t('site.products.interop.title')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            {heroLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </FeaturePanel>

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
            tone={FeaturePanelTone.YellowBlueLines}
            lightenBackground="subtle"
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
