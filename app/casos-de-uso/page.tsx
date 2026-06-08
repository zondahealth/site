'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/components/LanguageProvider';
import { Button } from '@/app/components/ui/button';
import ExploreButton from '@/app/components/ExploreButton';

type CaseStudy = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export default function CasosDeUsoPage() {
  const { raw, t } = useLanguage();
  const caseStudies = raw<CaseStudy[]>('site.caseStudies.cards');
  const proofPoints = raw<string[]>('site.caseStudies.proofPoints');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-outline-variant bg-[linear-gradient(180deg,#fcfcff_0%,#f4f6fd_100%)] pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-44">
        <Image
          src="/bg/styling/white-lines.png"
          alt=""
          fill
          priority
          className="pointer-events-none object-cover opacity-25 mix-blend-multiply"
        />
        <div className="layout-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-zonda-blue">
                {t('site.caseStudies.eyebrow')}
              </p>
              <h1 className="[font-family:var(--font-display-family)] text-5xl font-bold leading-[1.02] text-zonda-blue-dark sm:text-6xl lg:text-7xl">
                {t('site.company.storiesTitle')}
              </h1>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-xl leading-relaxed text-on-surface-variant sm:text-2xl">
                {t('site.caseStudies.title')}
              </p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="bg-surface-container-lowest px-5 py-4 text-sm font-semibold leading-snug text-zonda-blue-dark"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="layout-shell">
          <div className="divide-y divide-outline-variant border-y border-outline-variant">
            {caseStudies.map((caseStudy, index) => (
              <article
                key={caseStudy.href}
                className="grid gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(18rem,0.78fr)_1fr] lg:gap-14 lg:py-16"
              >
                <Link
                  href={caseStudy.href}
                  className="group relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-container"
                  aria-label={caseStudy.title}
                >
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.description}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-zonda-blue-dark shadow-[0_10px_28px_-22px_rgba(21,27,43,0.5)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </Link>

                <div className="flex min-w-0 flex-col justify-center">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                    {t('site.caseStudies.featuredLabel')}
                  </p>
                  <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-zonda-blue-dark sm:text-4xl">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                    {caseStudy.description}
                  </p>
                  <div className="mt-7">
                    <ExploreButton
                      href={caseStudy.href}
                      title={t('site.caseStudies.readCase')}
                      color="black"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-28">
        <div className="layout-shell">
          <div className="grid gap-8 rounded-lg bg-zonda-blue-dark px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14">
            <div className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl [font-family:var(--font-display-family)]">
              {t('site.caseStudies.ctaTitle')}
            </div>

            <Button asChild size="lg" className="min-w-48 justify-self-start">
              <Link href="/contacto">{t('site.common.contactAlt')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
