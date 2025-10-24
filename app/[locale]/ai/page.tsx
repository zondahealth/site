'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  Brain,
  MessageSquare,
  FileText,
  Clock,
  Users,
  Shield,
  Zap,
  Target,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

export default function AIPage() {
  const t = useTranslations('ai');

  // Features data
  const features = [
    {
      icon: Brain,
      title: t('healthProfiles.profiles.title'),
      description: t('healthProfiles.profiles.description'),
    },
    {
      icon: MessageSquare,
      title: t('healthProfiles.patientAlerts.title'),
      description: t('healthProfiles.patientAlerts.description'),
    },
    {
      icon: FileText,
      title: t('healthProfiles.organizationalAlerts.title'),
      description: t('healthProfiles.organizationalAlerts.description'),
    },
  ];

  // AI Features section data
  const aiFeatures = [
    {
      icon: Zap,
      title: t('advancedAI.features.dynamicProfiles.title'),
      description: t('advancedAI.features.dynamicProfiles.description'),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Target,
      title: t('advancedAI.features.prediction.title'),
      description: t('advancedAI.features.prediction.description'),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Lightbulb,
      title: t('advancedAI.features.surveys.title'),
      description: t('advancedAI.features.surveys.description'),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: CheckCircle,
      title: t('advancedAI.features.betterResults.title'),
      description: t('advancedAI.features.betterResults.description'),
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
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Section */}
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-zonda-yellow">
                    {t('hero.titleHighlight')}
                  </span>{' '}
                  {t('hero.title')}
                </h1>

                <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-medium">
                  {t('hero.description')}
                </p>
              </div>
              {/* Image Section - Overlay */}
              <div className="flex justify-center relative">
                {/* First image (background) */}
                <img
                  src="/webshots/profile.png"
                  alt="Inteligencia Artificial en Salud"
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Health Profiles and Alerts Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('healthProfiles.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('healthProfiles.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
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

        {/* AI Features Section */}
        <ColoredSection variant="purple" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('advancedAI.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('advancedAI.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/*   Left: Image */}
              <div className="lg:col-span-3">
                <img
                  src="/webshots/profile-background.png"
                  alt="Inteligencia Artificial en Acción"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {aiFeatures.map((feature, index) => (
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

        {/* Medical Notes Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="relative z-10 text-center bg-white">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('medicalNotes.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('medicalNotes.description')}
                </p>
              </div>

              <div className="flex justify-center -my-2 md:-my-16 relative z-0">
                <video
                  src="/appshots/notes.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-3xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
