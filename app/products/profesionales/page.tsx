'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { ProHero } from '@/components/professionals/ProHero';
import { PhoneAgenda } from '@/components/professionals/PhoneAgenda';
import { PhoneOrganizaciones } from '@/components/professionals/PhoneOrganizaciones';
import { PhoneRegistros } from '@/components/professionals/PhoneRegistros';
import { ProFeature } from '@/components/professionals/ProFeature';
import { ProTestimonial } from '@/components/professionals/ProTestimonial';
import { ProDownload } from '@/components/professionals/ProDownload';
import { ProFAQ } from '@/components/professionals/ProFAQ';
import { GradientDividerBar } from '@/components/GradientDividerBar';
import { Strip } from '@/components/Strip';

type ProFeatureContent = {
  accent: 'blue' | 'green' | 'purple';
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
  cta: string;
};

export default function ProfesionalesPage() {
  const { raw } = useLanguage();
  const features = raw<ProFeatureContent[]>(
    'site.products.professionals.features'
  );

  return (
    <div className="pb-16">
      <ProHero />

      <Strip />

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

      {/* <ProTestimonial />w */}

      <ProDownload />
      <ProFAQ />
    </div>
  );
}
