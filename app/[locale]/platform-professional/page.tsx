'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  Users,
  Calendar,
  FileText,
  UserCheck,
  BarChart3,
  Shield,
  ClipboardList,
  Edit,
  Pill,
  TrendingUp,
} from 'lucide-react';

export default function PlatformProfessionalPage() {
  const t = useTranslations('platformProfessional');

  // Features data
  const features = [
    {
      icon: FileText,
      title: t('features.items.medicalHistory.title'),
      description: t('features.items.medicalHistory.description'),
    },
    {
      icon: Edit,
      title: t('features.items.consultationRecords.title'),
      description: t('features.items.consultationRecords.description'),
    },
    {
      icon: Pill,
      title: t('features.items.digitalPrescription.title'),
      description: t('features.items.digitalPrescription.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.items.dataAnalysis.title'),
      description: t('features.items.dataAnalysis.description'),
    },
    {
      icon: Users,
      title: t('features.items.multiInstitutional.title'),
      description: t('features.items.multiInstitutional.description'),
    },
    {
      icon: Calendar,
      title: t('features.items.mobileAccess.title'),
      description: t('features.items.mobileAccess.description'),
    },
  ];

  // Platform section features data
  const platformFeatures = [
    {
      icon: ClipboardList,
      title: t('platformSection.features.medicalHistory.title'),
      description: t('platformSection.features.medicalHistory.description'),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Edit,
      title: t('platformSection.features.consultationRecords.title'),
      description: t(
        'platformSection.features.consultationRecords.description'
      ),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Pill,
      title: t('platformSection.features.digitalPrescription.title'),
      description: t(
        'platformSection.features.digitalPrescription.description'
      ),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: TrendingUp,
      title: t('platformSection.features.dataAnalysis.title'),
      description: t('platformSection.features.dataAnalysis.description'),
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

            {/* Professional App Screenshot */}
            <div className="flex justify-center items-center w-full">
              <img
                src="/appshots/header.png"
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

        {/* Professional Platform Section */}
        <ColoredSection variant="orange" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('platformSection.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('platformSection.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {platformFeatures.map((feature, index) => (
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

              {/* Right: Image */}
              <div className="lg:col-span-3 flex justify-center items-center">
                <img
                  src="/appshots/ontop.png"
                  alt={t('platformSection.title')}
                  className="w-3/4 max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </ColoredSection>
      </main>

      <Footer />
    </div>
  );
}
