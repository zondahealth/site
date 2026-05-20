'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { FeaturePanel, FeaturePanelTone } from './FeaturePanel';
import { useLanguage } from './LanguageProvider';
import { Button } from './ui/button';

export function NotFoundPage() {
  const { t, setForceLightHeader } = useLanguage();

  useEffect(() => {
    setForceLightHeader(true);
    return () => setForceLightHeader(false);
  }, [setForceLightHeader]);

  return (
    <FeaturePanel
      tone={FeaturePanelTone.Lines}
      darkenBackground="subtle"
      className="min-h-screen w-screen rounded-none"
      contentClassName="flex min-h-screen items-center justify-center"
    >
      <section className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/60">
            Error 404
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            {t('site.notFound.title')}
          </h1>
          <p className="max-w-2xl text-pretty text-lg font-medium leading-relaxed text-white/75 sm:text-xl">
            {t('site.notFound.copy')}
          </p>
        </div>

        <Button asChild size="lg">
          <Link href="/">{t('notFound.goHome')}</Link>
        </Button>
      </section>
    </FeaturePanel>
  );
}
