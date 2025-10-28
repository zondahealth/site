'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  Users,
  Calendar,
  FileText,
  UserCheck,
  BarChart3,
  Shield,
} from 'lucide-react';
import { ColoredSection } from '@/app/components/ColoredSection';

export default function PlatformOrgPage() {
  const t = useTranslations('platformOrg');

  // Features data
  const features = [
    {
      icon: Users,
      title: t('features.items.patientManagement.title'),
      description: t('features.items.patientManagement.description'),
    },
    {
      icon: Calendar,
      title: t('features.items.appointmentManagement.title'),
      description: t('features.items.appointmentManagement.description'),
    },
    {
      icon: FileText,
      title: t('features.items.treatmentManagement.title'),
      description: t('features.items.treatmentManagement.description'),
    },
    {
      icon: UserCheck,
      title: t('features.items.professionalManagement.title'),
      description: t('features.items.professionalManagement.description'),
    },
    {
      icon: BarChart3,
      title: t('features.items.reportsAnalytics.title'),
      description: t('features.items.reportsAnalytics.description'),
    },
    {
      icon: Shield,
      title: t('features.items.securityCompliance.title'),
      description: t('features.items.securityCompliance.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark relative overflow-hidden">
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

            {/* Platform Screenshot - Simple */}
            <div className="relative max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-white/20 bg-white/5 ring-1 ring-white/10 backdrop-blur">
              {/* Decorative Background Shapes */}
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-zonda-yellow/20 rounded-lg blur-3xl z-0"></div>
              <div className="absolute bottom-0 right-0 w-72 h-48 bg-zonda-blue/20 rounded-bl-3xl blur-2xl z-0"></div>
              <video
                src="/webshots/records-moving.mp4"
                autoPlay
                loop={false}
                muted
                playsInline
                className="relative w-full h-auto max-h-[600px] object-contain z-10"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
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
      </main>

      <Footer />
    </div>
  );
}
