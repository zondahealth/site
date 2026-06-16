'use client';

import {
  FeaturePanel,
  FeaturePanelColor,
} from '@/components/panel';
import { GradientDividerBar } from '@/components/GradientDividerBar';
import { useLanguage } from '@/components/LanguageProvider';
import { OrgFeature } from '@/components/organizations/OrgFeature';
import { IngestaDiagram } from '@/components/organizations/IngestaDiagram';
import { OrganizationsHero } from '@/components/organizations/OrganizationsHero';
import { PatternsDashboard } from '@/components/organizations/PatternsDashboard';
import { RolesVisual } from '@/components/organizations/RolesVisual';
import { OrgUseCases } from '@/components/organizations/OrgUseCases';
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
      <OrganizationsHero />

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
            color={FeaturePanelColor.DarkBlue}
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
