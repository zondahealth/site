'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/components/LanguageProvider';
import { FeaturePanel } from '@/components/panel';
import { Button } from '@/components/ui/button';

type Solution = {
  title: string;
  copy: string;
};

type Metric = {
  value: string;
  label: string;
};

export function InterdomCaseStudy() {
  const { raw, t } = useLanguage();
  const solutions = raw<Solution[]>(
    'site.caseStudies.detail.interdom.solutions'
  );
  const metrics = raw<Metric[]>('site.caseStudies.detail.interdom.metrics');
  const platformLayers = raw<Solution[]>(
    'site.caseStudies.detail.interdom.platformLayers'
  );

  return (
    <main className="min-h-screen bg-background pt-32 text-black sm:pt-40">
      <article className="layout-shell pb-20 sm:pb-28">
        <header className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-zonda-blue">
            {t('site.caseStudies.detail.interdom.eyebrow')}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl [font-family:var(--font-display-family)] text-black">
            {t('site.caseStudies.detail.interdom.title')}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-black sm:mt-10 sm:text-xl">
            {t('site.caseStudies.detail.interdom.intro')}
          </p>
        </header>

        <dl className="mx-auto mt-12 grid max-w-3xl divide-y divide-black/15 border-y border-black/15 sm:mt-16 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-5 sm:block sm:px-6 sm:py-7 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="text-xs font-bold uppercase leading-snug tracking-[0.08em] text-black/65 sm:min-h-10">
                {metric.label}
              </dt>
              <dd className="-order-1 text-3xl font-bold tracking-tight text-zonda-blue sm:text-4xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <figure className="mx-auto mt-14 max-w-3xl sm:mt-20">
          <div className="overflow-hidden rounded-lg bg-surface-container">
            <Image
              src="/assets/casos-de-uso/images/inderdom-moviles.jpg"
              alt={t('site.caseStudies.detail.interdom.fleetImageAlt')}
              width={1140}
              height={660}
              sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
              className="h-auto w-full"
              priority
            />
          </div>
          <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
            {t('site.caseStudies.detail.interdom.fleetImageCaption')}
          </figcaption>
        </figure>

        <section className="mx-auto mt-20 max-w-3xl sm:mt-28">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl [font-family:var(--font-display-family)]">
            {t('site.caseStudies.detail.interdom.challengeTitle')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/80">
            {t('site.caseStudies.detail.interdom.challengeCopy')}
          </p>
        </section>

        <section className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-zonda-blue">
              {t('site.caseStudies.detail.interdom.platformEyebrow')}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl [font-family:var(--font-display-family)]">
              {t('site.caseStudies.detail.interdom.platformTitle')}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black/80">
              {t('site.caseStudies.detail.interdom.platformCopy')}
            </p>

            <div className="mt-10 grid border-y border-black/15 sm:grid-cols-2 sm:divide-x sm:divide-black/15">
              {platformLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="py-7 first:border-b first:border-black/15 sm:px-8 sm:first:border-b-0 sm:first:pl-0 sm:last:pr-0"
                >
                  <h3 className="text-xl font-bold leading-snug">
                    {layer.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-black/75">
                    {layer.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <figure className="mx-auto mt-12 max-w-3xl sm:mt-16">
            <Image
              src="/assets/casos-de-uso/images/interdomxzonda.png"
              alt={t('site.caseStudies.detail.interdom.platformImageAlt')}
              width={1118}
              height={976}
              sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
              className="h-auto w-full"
            />
            <figcaption className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/65 sm:text-base">
              {t('site.caseStudies.detail.interdom.platformImageCaption')}
            </figcaption>
          </figure>
        </section>

        <section className="mt-20 sm:mt-28">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl [font-family:var(--font-display-family)]">
            {t('site.caseStudies.detail.interdom.solutionsTitle')}
          </h2>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/20 sm:mt-12">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="grid gap-4 py-9 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-11"
              >
                <span className="pt-1 text-sm font-bold text-zonda-blue" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl font-bold leading-snug sm:text-[1.75rem]">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-black/80">
                    {solution.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl sm:mt-28">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl [font-family:var(--font-display-family)]">
            {t('site.caseStudies.detail.interdom.resultsTitle')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/80">
            {t('site.caseStudies.detail.interdom.resultsCopy')}
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Image
              src="/assets/casos-de-uso/images/interdom-logo.png"
              alt="Interdom Argentina"
              width={308}
              height={103}
              className="h-10 w-auto sm:h-12"
            />
            <span className="text-2xl text-black/50" aria-hidden>
              ·
            </span>
            <Image
              src="/assets/shared/logos/zonda-full.svg"
              alt="Zonda Health"
              width={140}
              height={36}
              className="h-8 w-auto sm:h-9"
            />
          </div>

          <blockquote className="mt-10 border-y border-black/15 py-10 sm:py-12">
            <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span
                className="text-6xl font-bold leading-[0.75] text-zonda-blue"
                aria-hidden
              >
                “
              </span>
              <div>
                <p className="text-xl font-medium leading-relaxed text-black sm:text-2xl">
                  {t('site.caseStudies.detail.interdom.testimonial.quote')}
                </p>
                <footer className="mt-8">
                  <p className="text-lg font-bold text-black sm:text-xl">
                    {t('site.caseStudies.detail.interdom.testimonial.name')}
                  </p>
                  <p className="mt-1 text-base text-black/70">
                    {t('site.caseStudies.detail.interdom.testimonial.role')}
                  </p>
                </footer>
              </div>
            </div>
          </blockquote>
        </section>

        <section className="mx-auto mt-20 max-w-3xl sm:mt-28">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-zonda-blue">
            {t('site.caseStudies.detail.interdom.nextEyebrow')}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl [font-family:var(--font-display-family)]">
            {t('site.caseStudies.detail.interdom.nextTitle')}
          </h2>
          <p className="mt-6 text-xl font-medium leading-relaxed text-black/80 sm:text-2xl">
            {t('site.caseStudies.detail.interdom.nextCopy')}
          </p>
        </section>
      </article>

      <section className="pb-16 sm:pb-24 lg:pb-42 max-w-4xl mx-auto">
        <FeaturePanel
          background="blue"
          className="layout-shell rounded-xl"
          contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-46"
        >
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
              {t('site.caseStudies.detail.interdom.cta.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {t('site.caseStudies.detail.interdom.cta.copy')}
            </p>
          </div>

          <Button asChild size="lg" className="min-w-48">
            <Link href="/contacto">
              {t('site.caseStudies.detail.interdom.cta.button')}
            </Link>
          </Button>
        </FeaturePanel>
      </section>
    </main>
  );
}
