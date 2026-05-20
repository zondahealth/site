'use client';

import { useLanguage } from '@/app/components/LanguageProvider';
import { PhoneAgenda } from './PhoneAgenda';

const storeLinks = {
  ios: 'https://apps.apple.com/ar/app/zonda-profesionales/id6763732524?l=en-GB',
  android:
    'https://play.google.com/store/apps/details?id=com.zonda.professionals&pcampaignid=web_share',
};

function StoreButton({ store }: { store: 'ios' | 'android' }) {
  const { t } = useLanguage();
  const icon =
    store === 'ios' ? (
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
        <path
          d="M15.4 13.6c0-3.6 3-5.3 3.1-5.4-1.7-2.5-4.3-2.8-5.2-2.9-2.2-.2-4.4 1.3-5.5 1.3-1.2 0-2.9-1.3-4.8-1.2-2.4.04-4.7 1.4-6 3.6-2.6 4.5-.7 11.1 1.8 14.8 1.2 1.8 2.7 3.8 4.6 3.7 1.9-.08 2.6-1.2 4.8-1.2 2.2 0 2.9 1.2 4.8 1.2 2 0 3.3-1.8 4.5-3.6 1.4-2.1 2-4.1 2-4.2-.04-.02-3.9-1.5-3.9-6m-3.5-11c1-1.2 1.7-3 1.5-4.8-1.5.06-3.3 1-4.4 2.3-1 1.1-1.8 2.9-1.6 4.6 1.6.1 3.3-.9 4.4-2.2"
          fill="#0d0d0d"
        />
      </svg>
    ) : (
      <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
        <path
          d="M.6.6C.2 1 0 1.6 0 2.4v21.2c0 .8.2 1.4.6 1.8L12.4 13.6.6.6zm14 14.4L2.4 25.8c.4.1.8.2 1.2.2.6 0 1.2-.2 1.7-.5l15.8-9-6.5-6.5zM21.2 12L17 9.6 10.4 16l4.2 4.2 6.6-3.8c.8-.5 1.2-1.4 1.2-2.4 0-.9-.4-1.7-1.2-2zM3.6 0c-.4 0-.8.1-1.2.2L12.4 10.2 19 3.8 5.3.5C4.7.2 4.2 0 3.6 0z"
          fill="#0d0d0d"
        />
      </svg>
    );

  const label = store === 'ios' ? 'App Store' : 'Google Play';

  return (
    <a
      href={storeLinks[store]}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-14 items-center gap-3 rounded-xl bg-[#fcfcff] px-[22px] text-[#0d0d0d] no-underline transition-opacity hover:opacity-90"
    >
      {icon}
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
        <div className="relative grid min-h-[520px] items-stretch overflow-hidden rounded-[20px] bg-zonda-blue-dark text-white lg:grid-cols-[1.2fr_1fr]">
          {/* Background layers */}
          <div
            className="pointer-events-none absolute inset-0 opacity-85"
            style={{
              background:
                "url('/bg/movement/dark-blue-lines.png') center/cover",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,234,0,0.10),transparent_60%)]" />

          {/* Text side */}
          <div className="relative flex flex-col justify-center px-10 py-16 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--zonda-yellow)]">
              {t('site.products.professionals.download.eyebrow')}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[0.98] text-white [font-family:var(--font-display)] lg:text-[64px]">
              {t('site.products.professionals.download.title')}
            </h2>
            <p className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-[color:rgba(248,250,255,0.82)]">
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
        </div>
      </div>
    </section>
  );
}
