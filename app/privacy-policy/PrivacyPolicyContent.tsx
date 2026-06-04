'use client';

import { useLanguage } from '@/app/components/LanguageProvider';

type Section = {
  title: string;
  content: string;
};

export function PrivacyPolicyContent() {
  const { t, raw } = useLanguage();
  const sections = raw<Section[]>('site.privacyPolicy.sections');

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
        {t('site.privacyPolicy.title')}
      </h1>
      <p className="mt-3 text-sm text-on-surface-variant">
        {t('site.privacyPolicy.lastUpdated')}
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-on-surface-variant">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
