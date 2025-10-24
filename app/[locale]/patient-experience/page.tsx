'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  Smartphone,
  Calendar,
  MessageSquare,
  Shield,
  Heart,
  Users,
  Zap,
  Eye,
  CheckCircle,
  Target,
  BarChart3,
} from 'lucide-react';

export default function PatientExperiencePage() {
  const t = useTranslations('patientExperience');

  // Features data
  const features = [
    {
      icon: Shield,
      title: t('features.items.identityVerification.title'),
      description: t('features.items.identityVerification.description'),
    },
    {
      icon: Heart,
      title: t('features.items.clinicalHistoryConfirmation.title'),
      description: t('features.items.clinicalHistoryConfirmation.description'),
    },
    {
      icon: Calendar,
      title: t('features.items.appointmentReminders.title'),
      description: t('features.items.appointmentReminders.description'),
    },
    {
      icon: MessageSquare,
      title: t('features.items.healthSurveys.title'),
      description: t('features.items.healthSurveys.description'),
    },
    {
      icon: Eye,
      title: t('features.items.profileEnrichment.title'),
      description: t('features.items.profileEnrichment.description'),
    },
    {
      icon: Users,
      title: t('features.items.patientEngagement.title'),
      description: t('features.items.patientEngagement.description'),
    },
  ];

  // AI Insights section data
  const aiInsightsFeatures = [
    {
      icon: BarChart3,
      title: t('aiInsights.features.surveyProcessing.title'),
      description: t('aiInsights.features.surveyProcessing.description'),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Eye,
      title: t('aiInsights.features.lifestyleTracking.title'),
      description: t('aiInsights.features.lifestyleTracking.description'),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Shield,
      title: t('aiInsights.features.riskIdentification.title'),
      description: t('aiInsights.features.riskIdentification.description'),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: Heart,
      title: t('aiInsights.features.personalizedCare.title'),
      description: t('aiInsights.features.personalizedCare.description'),
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
              <img
                src="/webshots/patients.png"
                className="w-full lg:w-2/3 h-auto object-contain relative z-10"
                alt={t('hero.title')}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('features.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureBox
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* AI Insights Section */}
        <ColoredSection variant="pink" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('aiInsights.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('aiInsights.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/* Left: Image */}
              <div className="lg:col-span-3">
                <img
                  src="/webshots/patients-cropped.png"
                  alt={t('aiInsights.title')}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {aiInsightsFeatures.map((feature, index) => (
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
            </div>
          </div>
        </ColoredSection>
      </main>

      <Footer />
    </div>
  );
}
