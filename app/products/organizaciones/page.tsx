'use client';

import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { useLanguage } from '@/app/components/LanguageProvider';
import { OrgFeature } from '@/app/components/organizations/OrgFeature';
import { IngestaDiagram } from '@/app/components/organizations/IngestaDiagram';
import { PatternsDashboard } from '@/app/components/organizations/PatternsDashboard';
import { RolesVisual } from '@/app/components/organizations/RolesVisual';
import { OrgUseCases } from '@/app/components/organizations/OrgUseCases';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';

type OrgFeatureContent = {
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
};

export default function OrganizacionesPage() {
  const { raw, t } = useLanguage();
  const features = raw<OrgFeatureContent[]>(
    'site.products.organizations.features'
  );

  return (
    <div className="pb-16">
      {/* Hero — unchanged */}
      <section className="flex w-full flex-col">
        <FeaturePanel
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          tone={FeaturePanelTone.DarkBlueLines}
          darkenBackground="medium"
          backgroundStyling={FeaturePanelBackgroundStyling.Lines}
          contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 pt-24 lg:py-12 mx-auto max-w-7xl w-full"
        >
          <div className="flex min-w-0 flex-col items-center justify-end lg:justify-center px-16 lg:px-12 lg:py-24 text-center lg:items-start lg:text-left">
            <h1 className="font-bold gap-4 lg:gap-6 flex flex-col text-white">
              <span className="text-6xl lg:text-7xl font-bold [font-family:var(--font-display-family)] text-vitality-yellow">
                {t('site.products.organizations.heroTitle')}
              </span>
              <span className="text-white text-4xl md:text-5xl">
                {t('site.products.organizations.heroHighlight')}
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center px-8 py-4 lg:relative lg:block lg:h-full lg:min-w-0 lg:overflow-visible lg:px-0 lg:py-0">
            <Image
              src="/assets/orgs/hero.png"
              alt={t('site.products.organizations.heroAlt')}
              width={700}
              height={700}
              className="pointer-events-none min-h-[340px] max-h-[40vh] w-auto object-contain lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:min-h-0 lg:max-h-none lg:h-[50%] xl:h-[65%] lg:max-w-none"
              sizes="100%"
            />
          </div>
        </FeaturePanel>
      </section>

      <OrgFeature
        eyebrow={features[0].eyebrow}
        title={features[0].title}
        copy={features[0].copy}
        bullets={features[0].bullets}
        cta={features[0].cta}
        visual={<IngestaDiagram />}
      />

      <OrgFeature
        eyebrow={features[1].eyebrow}
        title={features[1].title}
        copy={features[1].copy}
        bullets={features[1].bullets}
        cta={features[1].cta}
        visual={<PatternsDashboard />}
        flip
      />

      <OrgFeature
        eyebrow={features[2].eyebrow}
        title={features[2].title}
        copy={features[2].copy}
        bullets={features[2].bullets}
        cta={features[2].cta}
        visual={<RolesVisual />}
      />

      <OrgUseCases />

      {/* CTA */}
      <section className="py-10">
        <div className="layout-shell">
          <FeaturePanel
            tone={FeaturePanelTone.DarkBlueLines}
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
              {t('site.products.organizations.ctaTitle')} <br />
              <span className="text-vitality-yellow">
                {t('site.products.organizations.ctaHighlight')}
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
