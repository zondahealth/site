'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from './components/FeaturePanel';
import { ShaderFeaturePanel } from './components/ShaderFeaturePanel';
import { Hero } from './components/Hero';
import { Button } from './components/ui/button';
import ExploreButton from './components/ExploreButton';
import { useLanguage } from './components/LanguageProvider';
import { GradientDividerBar } from './components/GradientDividerBar';

type HomeProduct = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
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

        {/* ── EL PROBLEMA ── */}
        <section id="tesis">
          <ShaderFeaturePanel
            shaderId="elastic"
            staticFrame={42}
            lineOpacity={0.2}
            spotlight="md"
            backgroundColor="white"
            className="rounded-none"
            contentClassName="overflow-hidden pb-0 pt-20 sm:pt-28 lg:pt-36"
          >
            <div className="layout-shell">
              <div className="flex justify-center items-center flex-col gap-4">
                <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold [font-family:var(--font-display-family)] text-zonda-blue-dark">
                  {t('site.home.problem.title')}{' '}
                </h2>
                <h2 className="text-center text-zonda-blue text-4xl sm:text-5xl lg:text-6xl font-bold [font-family:var(--font-display-family)]">
                  {t('site.home.problem.highlight')}
                </h2>
              </div>
            </div>
            <div className="layout-shell relative z-10 mt-16 sm:mt-20 lg:mt-20 -mb-16 sm:-mb-24 lg:-mb-48">
              <Image
                src="/assets/base/infra.png"
                alt={t('site.home.problem.imageAlt')}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />
            </div>
          </ShaderFeaturePanel>
          <GradientDividerBar variant="signal" />
        </section>

        <section>
          <FeaturePanel contentClassName="py-16 sm:py-20 lg:py-36 px-8 sm:px-12 lg:px-20">
            <FeaturePanel
              tone={FeaturePanelTone.GreenLines}
              spotlight="sm"
              contentClassName="py-16 sm:py-20 lg:py-36 px-8 sm:px-12 lg:px-20"
            >
              <div className="layout-shell">
                <div className="flex flex-col justify-center items-center gap-4">
                  <span className="text-lg uppercase font-bold ">
                    {t('site.home.stories.eyebrow')}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold  text-center max-w-2xl">
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
            </FeaturePanel>
          </FeaturePanel>
          <GradientDividerBar variant="signal" />
        </section>

        <section>
          <FeaturePanel
            tone={FeaturePanelTone.DarkBlueLines}
            className="rounded-none"
            spotlight="md"
            contentClassName="py-20 sm:py-40 lg:py-62"
          >
            <div className="layout-shell">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="flex flex-col items-start gap-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-vitality-yellow">
                    {t('site.home.results.eyebrow')}
                  </p>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white [font-family:var(--font-display-family)] leading-[1.05]">
                    {t('site.home.results.title')}
                  </h2>
                  <p className="text-lg text-white font-semibold leading-relaxed">
                    {t('site.home.results.copy')}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-px">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-2 border-t border-white/15 py-8 pr-6"
                    >
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-vitality-yellow">
                        {stat.value}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeaturePanel>
          <GradientDividerBar variant="dynamic" />
        </section>

        {/* ── PLATAFORMA ── */}
        <section
          style={{
            background:
              'linear-gradient(to bottom, #ffffff, #ffffff 75%, #f0f5ff)',
          }}
        >
          <div className="py-20 sm:py-28 lg:py-46">
            <div className="layout-shell">
              <div className="mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                  {t('site.home.platform.eyebrow')}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <h2 className="text-4xl sm:text-5xl font-bold leading-[1.08] [font-family:var(--font-display-family)]">
                    {t('site.home.platform.title')}
                    <br />
                    <span className="text-zonda-blue">
                      {t('site.home.platform.highlight')}
                    </span>
                  </h2>
                </div>
              </div>

              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {products.map((product) => (
                  <div
                    key={product.number}
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr_auto] gap-6 lg:gap-10 py-10 lg:py-12"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-neutral-400 font-mono">
                        {product.number}
                      </span>
                      <h3 className="text-2xl font-bold">{product.title}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400 mt-1">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-400">
                        {product.features.map((f) => (
                          <span key={f}>• {f}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start lg:pt-1">
                      <ExploreButton
                        href={product.href}
                        title={product.cta}
                        color="black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <GradientDividerBar variant="cool" />
        </section>

        {/* API & Interoperabilidad */}
        <section id="api-interoperabilidad">
          <FeaturePanel
            tone={FeaturePanelTone.Black}
            backgroundStyling={FeaturePanelBackgroundStyling.Lines}
            className="rounded-none"
            imagePosition="bleed"
            spotlight="md"
            contentClassName="py-20 sm:py-28 lg:py-46"
          >
            <div className="layout-shell">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-5xl font-bold tracking-tight text-vitality-yellow">
                    {t('site.home.api.title')}
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed sm:text-xl text-white">
                    {t('site.home.api.copy')}
                  </p>
                  <ExploreButton
                    href="/desarrolladores"
                    title={t('site.common.exploreApi')}
                  />
                </div>
                <div className="relative min-h-[20rem] lg:min-h-[28rem] overflow-hidden rounded-md">
                  <Image
                    src="/assets/base/terminal.png"
                    alt={t('site.home.api.imageAlt')}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </FeaturePanel>
          <GradientDividerBar variant="signal" />
        </section>

        {/* ── CTA FINAL ── */}
        <section>
          <div className="py-20 sm:py-28 lg:py-36">
            <FeaturePanel
              tone={FeaturePanelTone.DarkBlueLines}
              spotlight="sm"
              className="layout-shell"
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
          <GradientDividerBar variant="cool" />
        </section>
      </main>
    </div>
  );
}
