'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircleIcon } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { FeaturePanel } from '@/components/panel';
import { Button } from '@/components/ui/button';

type CaseStudy = {
  brand: string;
  headline: string;
  href: string;
  image: string;
};

export default function CasosDeUsoPage() {
  const { raw, t } = useLanguage();
  const caseStudies = raw<CaseStudy[]>('site.caseStudies.cards');

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 text-foreground sm:pt-40 sm:pb-28">
      <div className="layout-shell">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            {t('site.company.storiesTitle')}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-on-surface-variant sm:mt-10 sm:text-xl">
            {t('site.caseStudies.subtitle')}
          </p>
        </header>

        <div className="mx-auto mt-20 grid max-w-4xl gap-16 sm:mt-24 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-20 lg:mt-28 lg:gap-x-20 ">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.href} className="flex flex-col">
              <Link
                href={caseStudy.href}
                className="group relative block h-44 overflow-hidden rounded-2xl bg-surface-container sm:h-48"
                aria-label={`${caseStudy.brand} ${caseStudy.headline}`}
              >
                <Image
                  src={caseStudy.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </Link>

              <h2 className="mt-8 text-xl font-semibold leading-snug sm:mt-10 sm:text-2xl">
                <span className="text-zonda-blue">{caseStudy.brand}</span>{' '}
                <span>{caseStudy.headline}</span>
              </h2>

              <Link
                href={caseStudy.href}
                className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-zonda-blue transition hover:underline sm:mt-8"
              >
                {t('site.caseStudies.readCase')}
                <ArrowRightCircleIcon className="size-5 shrink-0" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <div className="py-10 sm:py-32 lg:py-48">
          <FeaturePanel
            background="blue"
            className="layout-shell rounded-xl"
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-46"
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-3xl lg:text-6xl text-white">
              {t('site.home.finalCta.title')} <br />
              <span className="text-vitality-yellow">
                {t('site.home.finalCta.highlight')}
              </span>
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="/contacto">{t('site.common.contact')}</Link>
            </Button>
          </FeaturePanel>
        </div>
      </div>
    </div>
  );
}
