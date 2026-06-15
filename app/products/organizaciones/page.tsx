'use client';

import {
  FeaturePanel,
  FeaturePanelPattern,
  FeaturePanelTone,
} from '@/components/panel';
import { GradientDividerBar } from '@/components/GradientDividerBar';
import { useLanguage } from '@/components/LanguageProvider';
import { OrgFeature } from '@/components/organizations/OrgFeature';
import { IngestaDiagram } from '@/components/organizations/IngestaDiagram';
import { PatternsDashboard } from '@/components/organizations/PatternsDashboard';
import { RolesVisual } from '@/components/organizations/RolesVisual';
import { OrgUseCases } from '@/components/organizations/OrgUseCases';
import { TopographicShaderBackground } from '@/components/shaders/TopographicShaderBackground';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      <section className="pt-0">
        <div className="relative flex h-[100dvh] min-h-[30rem] flex-col overflow-hidden bg-zonda-blue-dark">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_760px_at_58%_28%,rgba(34,111,253,0.76),transparent_62%),radial-gradient(900px_680px_at_16%_82%,rgba(4,17,48,0.56),transparent_58%),linear-gradient(180deg,rgba(30,75,199,0.96)_0%,rgba(10,35,94,0.92)_42%,rgba(7,17,48,0.98)_100%)]" />
          <TopographicShaderBackground
            shaderId="tide"
            inkColor="rgba(255, 255, 251, 0.5)"
            className="absolute inset-0 h-full w-full touch-none opacity-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(230,255,26,0.07),transparent_24%),radial-gradient(circle_at_72%_54%,rgba(34,111,253,0.16),transparent_34%),linear-gradient(180deg,rgba(3,13,40,0.08)_0%,rgba(3,13,40,0.16)_100%)]" />
          <GradientDividerBar
            variant="cool"
            className="absolute inset-x-0 bottom-0"
          />
        </div>
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
            tone={FeaturePanelTone.DarkBlue}
            pattern={FeaturePanelPattern.Tide}
            patternPlacement="both"
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
