'use client';

import { useLanguage } from '@/app/components/LanguageProvider';
import { PhoneAgenda } from './PhoneAgenda';
import { FeaturePanel, FeaturePanelPattern, FeaturePanelTone } from '../panel';

const storeLinks = {
  ios: 'https://apps.apple.com/ar/app/zonda-profesionales/id6763732524?l=en-GB',
  android:
    'https://play.google.com/store/apps/details?id=com.zonda.professionals&pcampaignid=web_share',
};

function StoreButton({ store }: { store: 'ios' | 'android' }) {
  const { t } = useLanguage();
  const label = store === 'ios' ? 'App Store' : 'Google Play';

  return (
    <a
      href={storeLinks[store]}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-14 items-center gap-3 rounded-xl bg-[#fcfcff] px-[22px] text-[#0d0d0d] no-underline transition-opacity hover:opacity-90"
    >
      <div>
        <p className="text-[10px] leading-none opacity-70">
          {t('site.products.professionals.download.downloadOn')}
        </p>
        <p className="mt-[3px] text-[17px] font-bold leading-none">{label}</p>
      </div>
    </a>
  );
}

export function ProDownload() {
  const { t } = useLanguage();

  return (
    <section className="py-10">
      <div className="layout-shell">
        <FeaturePanel
          tone={FeaturePanelTone.DarkBlue}
          pattern={FeaturePanelPattern.FullWhite}
          className="rounded-md"
          contentClassName="px-10 py-16 lg:px-20 lg:py-20 grid grid-cols-1 lg:grid-cols-2"
        >
          {/*   Text side */}
          <div className="relative flex flex-col justify-center px-10 py-16 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-vitality-yellow">
              {t('site.products.professionals.download.eyebrow')}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[0.98] text-white [font-family:var(--font-display)] lg:text-[64px]">
              {t('site.products.professionals.download.title')}
            </h2>
            <p className="mt-5 max-w-[460px] text-md font-bold leading-relaxed text-[color:rgba(248,250,255,0.82)]">
              {t('site.products.professionals.download.copy')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreButton store="ios" />
              <StoreButton store="android" />
            </div>
          </div>

          {/* Phone side */}
          <div className="relative hidden items-center justify-center p-10 lg:flex lg:p-16">
            <div className="absolute h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(234,234,0,0.12),transparent_70%)]" />
            <div className="relative -rotate-[4deg]">
              <PhoneAgenda />
            </div>
          </div>
        </FeaturePanel>
      </div>
    </section>
  );
}
