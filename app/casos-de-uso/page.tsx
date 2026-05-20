'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyling,
  FeaturePanelTone,
} from '@/app/components/FeaturePanel';
import { CaseStudyCard } from '@/app/components/CaseStudyCard';
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

  return (
    <div className="h-full w-full flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="flex flex-col">
        <FeaturePanel
          tone={FeaturePanelTone.White}
          backgroundImage={
            <Image
              src="/bg/styling/white-lines.png"
              alt={t('site.caseStudies.imageAlt')}
              fill
              className="object-cover opacity-10"
            />
          }
          className="flex w-full flex-col rounded-none min-h-[30rem]"
          contentClassName="mx-auto max-w-7xl w-full gap-16 lg:gap-24 flex flex-col items-center pt-36 md:pt-44 pb-16"
        >
          <div className="layout-shell space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold [font-family:var(--font-display-family)] text-center text-black">
              {t('site.company.storiesTitle')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-center">
              {t('site.caseStudies.title')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 md:gap-20 px-26">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                image={caseStudy.image}
                imageAlt={caseStudy.description}
                children={
                  <div className="flex flex-1 flex-col items-start gap-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                      <span className="text-zonda-blue">{caseStudy.title}</span>
                    </h2>
                    <p className="flex-1 text-lg md:text-xl text-neutral-600">
                      {caseStudy.description}
                    </p>
                    <ExploreButton
                      href={caseStudy.href}
                      title={t('site.company.storiesCta')}
                      color="black"
                    />
                  </div>
                }
              />
            ))}
          </div>
        </FeaturePanel>
      </section>

      {/* CTA */}
      <section>
        <FeaturePanel
          tone={FeaturePanelTone.YellowLines}
          className="rounded-none"
          contentClassName="flex h-full flex-col items-center justify-center gap-16 px-8 py-24 sm:px-12 sm:py-32 lg:px-36 lg:py-48"
        >
          <div className="mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl lg:text-6xl tqext-zonda-blue [font-family:var(--font-display-family)]">
            {t('site.caseStudies.ctaTitle')}
          </div>

          <Button asChild size="lg" className="min-w-48">
            <Link href="/contacto">{t('site.common.contactAlt')}</Link>
          </Button>
        </FeaturePanel>
      </section>
    </div>
  );
}
