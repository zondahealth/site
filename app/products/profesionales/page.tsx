'use client';

import {
  FeaturePanel,
  FeaturePanelPattern,
  FeaturePanelTone,
} from '@/app/components/panel';
import { useLanguage } from '@/app/components/LanguageProvider';
import { PhoneAgenda } from '@/app/components/professionals/PhoneAgenda';
import { PhoneOrganizaciones } from '@/app/components/professionals/PhoneOrganizaciones';
import { PhoneRegistros } from '@/app/components/professionals/PhoneRegistros';
import { ProFeature } from '@/app/components/professionals/ProFeature';
import { ProTestimonial } from '@/app/components/professionals/ProTestimonial';
import { ProDownload } from '@/app/components/professionals/ProDownload';
import { ProFAQ } from '@/app/components/professionals/ProFAQ';
import Image from 'next/image';
import { GradientDividerBar } from '@/app/components/GradientDividerBar';

type ProFeatureContent = {
  accent: 'blue' | 'green' | 'purple';
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
};

export default function ProfesionalesPage() {
  const { raw, t } = useLanguage();
  const features = raw<ProFeatureContent[]>(
    'site.products.professionals.features'
  );

  return (
    <div className="pb-16">
      {/* Hero — unchanged */}
      <section className="flex flex-col">
        <FeaturePanel
          backgroundImageSrc="/bg/gradients/blueyellow.png"
          pattern={FeaturePanelPattern.FullWhite}
          className="flex w-full flex-col rounded-none h-[100dvh] min-h-[30rem]"
          contentClassName="grid grid-cols-1 lg:grid-cols-2 flex-1 mx-auto max-w-7xl w-full"
        >
          <div className="flex min-w-0 flex-col items-center justify-center px-6 py-24 text-center lg:items-start lg:text-left space-y-8 px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold [font-family:var(--font-display-family)] text-zonda-blue-dark">
              {t('site.products.professionals.heroTitle')}
            </h1>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-zonda-blue-dark">
              {t('site.products.professionals.heroCopy')}
            </p>
          </div>

          <div className="relative hidden lg:block h-full overflow-visible">
            <Image
              src="/assets/doctor.png"
              alt={t('site.products.professionals.heroAlt')}
              width={700}
              height={700}
              className="pointer-events-none absolute bottom-0 left-0 h-[85%] w-auto max-w-none object-contain object-bottom"
              sizes="100%"
            />
          </div>
        </FeaturePanel>

        <GradientDividerBar variant="dynamic" />
      </section>

      {/* <ProObrasSociales /> */}

      <ProFeature
        accent={features[0].accent}
        eyebrow={features[0].eyebrow}
        title={features[0].title}
        copy={features[0].copy}
        bullets={features[0].bullets}
        cta={features[0].cta}
        phone={<PhoneAgenda />}
      />

      <ProFeature
        accent={features[1].accent}
        eyebrow={features[1].eyebrow}
        title={features[1].title}
        copy={features[1].copy}
        bullets={features[1].bullets}
        cta={features[1].cta}
        phone={<PhoneOrganizaciones />}
        flip
      />

      <ProFeature
        accent={features[2].accent}
        eyebrow={features[2].eyebrow}
        title={features[2].title}
        copy={features[2].copy}
        bullets={features[2].bullets}
        cta={features[2].cta}
        phone={<PhoneRegistros />}
      />

      <ProTestimonial />

      <ProDownload />
      <ProFAQ />
    </div>
  );
}
