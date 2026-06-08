'use client';

import {
  FeaturePanel,
  FeaturePanelPattern,
  FeaturePanelTone,
} from '@/app/components/panel';
import { useLanguage } from '@/app/components/LanguageProvider';

type Stat = { v: string; t: string };

export function IntStatsBand() {
  const { raw, t } = useLanguage();
  const stats = raw<Stat[]>('site.products.idom.stats');

  return (
    <section>
      <div className="layout-shell">
        <FeaturePanel
          tone={FeaturePanelTone.SolidDarkBlue}
          pattern={FeaturePanelPattern.FullWhite}
          contentClassName="flex h-full flex-col items-center justify-center px-8 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-24 text-white"
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr]">
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-vitality-yellow">
                {t('site.products.idom.statsEyebrow')}
              </p>
              <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t('site.products.idom.statsTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 gap-y-12">
              {stats.map((s) => (
                <div key={s.t} className="border-t border-white/20 pt-4">
                  <p className="text-5xl font-extrabold leading-none text-vitality-yellow lg:text-6xl">
                    {s.v}
                  </p>
                  <p className="mt-2.5 max-w-[220px] text-sm font-semibold text-white/90">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FeaturePanel>
      </div>
    </section>
  );
}
