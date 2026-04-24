'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import { Calendar, MessageSquare, Shield, Heart } from 'lucide-react';
import { PatientExperienceComponent } from '@/app/components/drawings/PatientExperienceComponent';

export default function PatientExperiencePage() {
  const t = useTranslations('patientExperience');

  // Unified features data
  const features = [
    {
      icon: MessageSquare,
      title: t('features.items.healthSurveys.title'),
      description: t('features.items.healthSurveys.description'),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Calendar,
      title: t('features.items.appointmentReminders.title'),
      description: t('features.items.appointmentReminders.description'),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Shield,
      title: t('features.items.identityVerification.title'),
      description: t('features.items.identityVerification.description'),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: Heart,
      title: t('features.items.clinicalHistoryConfirmation.title'),
      description: t('features.items.clinicalHistoryConfirmation.description'),
      iconBgColor: 'bg-zonda-yellow',
      iconColor: 'text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,215,74,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(3,106,250,0.1),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {t('hero.title')}{' '}
                <span className="text-zonda-yellow">
                  {t('hero.titleHighlight')}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                {t('hero.description')}
              </p>
            </div>

            {/* Patient Experience Screenshot */}
            <div className="flex justify-center items-center w-full">
              <PatientExperienceComponent />
            </div>
          </div>
        </section>

        {/* Unified Features Section */}
        <ColoredSection variant="pink" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('features.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <SmallFeatureBox
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBgColor={feature.iconBgColor}
                  iconColor={feature.iconColor}
                />
              ))}
            </div>
          </div>
        </ColoredSection>
      </main>

      <Footer />
    </div>
  );
}
