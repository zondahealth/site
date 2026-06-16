'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DevelopersHero } from '@/components/desarrolladores/DevelopersHero';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyle,
  FeaturePanelColor,
} from '@/components/panel';
import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';

type DeveloperFeature = { title: string; copy: string };

export default function DesarrolladoresPage() {
  const { raw, t } = useLanguage();
  const features = raw<DeveloperFeature[]>('site.developers.features');

  return (
    <div className="h-full w-full flex flex-1 flex-col bg-black">
      <DevelopersHero />

      {/* Rainbow divider */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            'linear-gradient(90deg, #ff6b6b, #ffa94d, #ffd43b, #69db7c, #4dabf7, #9775fa, #f06595)',
        }}
      />

      {/* Terminal + Features */}
      <section>
        <div className="layout-shell flex flex-col items-center gap-16 py-20 md:py-28">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg">
            <Image
              src="/assets/home/images/terminal.png"
              alt={t('site.developers.terminalAlt')}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 w-full">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-vitality-yellow">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-neutral-400">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Usá la API */}
      <section className="bg-black">
        <div className="layout-shell py-20 md:py-28">
          <FeaturePanel
            color={FeaturePanelColor.Yellow}
            backgroundStyle={FeaturePanelBackgroundStyle.FullDrift}
            backgroundClassName="opacity-30"
            contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40 "
          >
            <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl [font-family:var(--font-display-family)]">
              {t('site.developers.apiCta')}
            </div>

            <Button asChild size="lg" className="min-w-48">
              <Link href="https://zondahealth.readme.io/reference/getpatients">
                {t('site.developers.docs')}
              </Link>
            </Button>
          </FeaturePanel>
        </div>
      </section>
    </div>
  );
}
