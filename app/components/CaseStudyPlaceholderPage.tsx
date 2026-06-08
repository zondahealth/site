'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/components/LanguageProvider';

type CaseStudyPlaceholderPageProps = {
  titleKey: string;
};

export function CaseStudyPlaceholderPage({
  titleKey,
}: CaseStudyPlaceholderPageProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-32 text-foreground sm:pt-40">
      <section className="layout-shell pb-20 sm:pb-28">
        <Button asChild variant="ghost" className="mb-14 -ml-4">
          <Link href="/casos-de-uso">
            <ArrowLeftIcon />
            {t('site.caseStudies.backToCases')}
          </Link>
        </Button>

        <div className="max-w-3xl border-t border-outline-variant pt-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-zonda-blue">
            {t('common.nav.caseStudies')}
          </p>
          <h1 className="[font-family:var(--font-display-family)] text-5xl font-bold leading-[1.02] text-zonda-blue-dark sm:text-6xl lg:text-7xl">
            {t(titleKey)}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-xl">
            {t('site.caseStudies.comingSoon')}
          </p>
        </div>
      </section>
    </main>
  );
}
