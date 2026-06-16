'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyle,
  FeaturePanelColor,
} from '@/components/panel';
import { Hero } from '@/components/Hero';
import ImageCtaBlock from '@/components/ImageCtaBlock';
import { Button } from '@/components/ui/button';
import ExploreButton from '@/components/ExploreButton';
import { useLanguage } from '@/components/LanguageProvider';
import { GradientDividerBar } from '@/components/GradientDividerBar';
import { Strip } from '@/components/Strip';
import { BACKGROUNDS } from '@/components/ui/colors';

type HomeProduct = {
  name: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

type Stat = {
  value: string;
  label: string;
};

export default function App() {
  const { raw, t } = useLanguage();
  const searchParams = useSearchParams();
  const products = raw<HomeProduct[]>('site.home.platform.products');
  const stats = raw<Stat[]>('site.home.results.stats');

  useEffect(() => {
    const src = searchParams.get('src');
    if (src) {
      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src }),
      }).catch(() => {});
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-0 pt-0">
        <Hero />

        {/* ── PLATAFORMA ── */}
        <section>
          <Strip />
          <FeaturePanel backgroundImageSrc="/assets/home/images/bg/bg-container.png">
            <div className="py-28 sm:py-36 lg:py-56">
              <div className="layout-shell">
                <div className="flex justify-center items-center mb-32">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.08] text-zonda-blue-dark text-center [font-family:var(--font-display-family)]">
                    {t('site.home.platform.title')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-x-16 gap-y-28 md:grid-cols-2 md:gap-x-24 md:gap-y-32">
                  {products.map((product) => (
                    <ImageCtaBlock
                      key={product.name}
                      img={product.image}
                      alt={product.imageAlt}
                      title={
                        <>
                          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
                            {product.name}
                          </span>
                          <span>{product.title}</span>
                        </>
                      }
                      sub={product.subtitle}
                      ctaText={product.cta}
                      link={product.href}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="layout-shell flex flex-col gap-20">
              <div className="flex justify-center items-center flex-col gap-12 max-w-4xl mx-auto">
                <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold [font-family:var(--font-display-family)] text-zonda-blue-dark">
                  {t('site.home.problem.title')}{' '}
                </h2>
                <h2 className="text-center text-zonda-blue-dark text-4xl sm:text-5xl lg:text-7xl font-bold [font-family:var(--font-display-family)]">
                  {t('site.home.problem.highlight')}
                </h2>
              </div>
              <div className="layout-shell relative z-10 mt-16 sm:mt-20 lg:mt-20 -mb-16 sm:-mb-24 lg:-mb-48">
                <Image
                  src="/assets/home/images/infra.png"
                  alt={t('site.home.problem.imageAlt')}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </FeaturePanel>

          <Strip />
        </section>

        <section id="datax">
          <FeaturePanel
            className="py-28 sm:py-36 lg:py-46"
            backgroundImageSrc="/assets/home/images/bg/bg-container.png"
            background={BACKGROUNDS.transparent}
          >
            {/* ── HISTORIAS ── */}
            <FeaturePanel
              className="relative layout-shell "
              backgroundImageSrc="/assets/home/images/bg/bg-stories.png"
              background={BACKGROUNDS.transparent}
            >
              <div className="relative py-20 sm:py-36 lg:py-40">
                <div className="relative z-10">
                  <div className="flex flex-col gap-4">
                    <span className="text-lg uppercase font-bold text-zonda-blue-dark">
                      {t('site.home.stories.eyebrow')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold max-w-2xl text-zonda-blue-dark">
                      {t('site.home.stories.title')}
                    </h2>
                    <div className="flex justify-start mt-6">
                      <Button asChild size="lg" className="min-w-48">
                        <Link href="/casos-de-uso">
                          {t('site.common.readMore')}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FeaturePanel>

            {/* ── RESULTADOS ── */}
            <div className="relative py-20 sm:py-40 lg:py-46">
              <div className="layout-shell relative z-10">
                <FeaturePanel
                  backgroundImageSrc="/assets/home/images/bg/bg-results.png"
                  background={BACKGROUNDS.transparent}
                  contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-46"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="flex flex-col items-start gap-8">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-zonda-blue-dark">
                        {t('site.home.results.eyebrow')}
                      </p>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zonda-blue-dark [font-family:var(--font-display-family)] leading-[1.05]">
                        {t('site.home.results.title')}
                      </h2>
                      <p className="text-lg text-zonda-blue-dark font-semibold leading-relaxed">
                        {t('site.home.results.copy')}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-px">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex flex-col gap-2 py-8 pr-6"
                        >
                          <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zonda-blue">
                            {stat.value}
                          </span>
                          <span className="text-base font-semibold text-zonda-blue">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FeaturePanel>
              </div>
            </div>

            {/* API & Interoperabilidad */}

            {/* <div className="relative py-20 sm:py-28 lg:py-46">
              <FeaturePanel
                className="layout-shell"
                backgroundImageSrc="/assets/home/images/console.png"
              >
                <div className="w-full">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center max-w-xl md:max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-vitality-yellow">
                      {t('site.home.api.title')}
                    </h3>
                    <p className="text-xs sm:text-lg lg:text-xl font-semibold leading-relaxed text-white">
                      {t('site.home.api.copy')}
                    </p>
                    <ExploreButton
                      href="/desarrolladores"
                      title={t('site.common.exploreApi')}
                    />
                  </div>
                </div>
              </FeaturePanel>
            </div> */}

            <div className="py-10 sm:py-16 lg:py-20">
              <FeaturePanel
                color={FeaturePanelColor.DarkBlue}
                backgroundStyle={FeaturePanelBackgroundStyle.FullDrift}
                backgroundClassName="opacity-30"
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
          </FeaturePanel>
        </section>
        <Strip />
      </main>
    </div>
  );
}
