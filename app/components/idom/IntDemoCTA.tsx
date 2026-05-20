'use client';

import {
  FeaturePanel,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { useLanguage } from '@/app/components/LanguageProvider';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export function IntDemoCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-10">
      <div className="layout-shell">
        <FeaturePanel
          tone={FeaturePanelTone.DarkBlueLines}
          contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-48"
        >
          <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white [font-family:var(--font-display-family)]">
            {t('site.products.idom.demoTitle')} <br />
            <span className="text-vitality-yellow">
              {t('site.products.idom.demoHighlight')}
            </span>
          </div>

          <Button asChild size="lg" className="min-w-48" variant="primary">
            <Link href="/contacto">{t('site.common.contact')}</Link>
          </Button>
        </FeaturePanel>
      </div>
    </section>
  );
}
