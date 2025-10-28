'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Shield,
  Activity,
  PieChart,
  LineChart,
  Target,
  Download,
  Clock,
  Wallpaper,
  Building2,
  Link2,
  Zap,
  HeartPulse,
  AlertTriangle,
} from 'lucide-react';

export default function DataPage() {
  const t = useTranslations('data');

  // Features data
  const features = [
    {
      icon: BarChart3,
      title: t('features.interactiveDashboards.title'),
      description: t('features.interactiveDashboards.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.trendAnalysis.title'),
      description: t('features.trendAnalysis.description'),
    },
    {
      icon: Calendar,
      title: t('features.realTime.title'),
      description: t('features.realTime.description'),
    },
    {
      icon: FileText,
      title: t('features.customReports.title'),
      description: t('features.customReports.description'),
    },
    {
      icon: Users,
      title: t('features.patientInsights.title'),
      description: t('features.patientInsights.description'),
    },
    {
      icon: Shield,
      title: t('features.dataSecurity.title'),
      description: t('features.dataSecurity.description'),
    },
    {
      icon: PieChart,
      title: t('features.advancedVisualizations.title'),
      description: t('features.advancedVisualizations.description'),
    },
    {
      icon: Activity,
      title: t('features.dataExport.title'),
      description: t('features.dataExport.description'),
    },
  ];

  // Patient Reports section features data
  const patientReportsFeatures = [
    {
      icon: Activity,
      title: t('patientReports.features.healthMetrics.title'),
      description: t('patientReports.features.healthMetrics.description'),
      iconBgColor: 'bg-zonda-green',
      iconColor: 'text-white',
    },
    {
      icon: PieChart,
      title: t('patientReports.features.treatmentProgress.title'),
      description: t('patientReports.features.treatmentProgress.description'),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: LineChart,
      title: t('patientReports.features.healthTrends.title'),
      description: t('patientReports.features.healthTrends.description'),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Target,
      title: t('patientReports.features.goalTracking.title'),
      description: t('patientReports.features.goalTracking.description'),
      iconBgColor: 'bg-zonda-purple',
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
                  {t('hero.title')}{' '}
                  <span className="text-zonda-yellow">
                    {t('hero.titleHighlight')}
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-medium">
                  {t('hero.description')}
                </p>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/webshots/metrics5.png"
                  alt={t('hero.title')}
                  style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
                />
              </div>
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
              <FeatureBox
                icon={BarChart3}
                title={t('features.interactiveDashboards.title')}
                description={t('features.interactiveDashboards.description')}
              />

              <FeatureBox
                icon={TrendingUp}
                title={t('features.trendAnalysis.title')}
                description={t('features.trendAnalysis.description')}
              />

              <FeatureBox
                icon={Clock}
                title={t('features.realTime.title')}
                description={t('features.realTime.description')}
              />

              <FeatureBox
                icon={FileText}
                title={t('features.customReports.title')}
                description={t('features.customReports.description')}
              />

              <FeatureBox
                icon={Wallpaper}
                title={t('features.advancedVisualizations.title')}
                description={t('features.advancedVisualizations.description')}
              />

              <FeatureBox
                icon={Download}
                title={t('features.dataExport.title')}
                description={t('features.dataExport.description')}
              />
            </div>
          </div>
        </section>

        {/* Patient Reports Section */}
        <ColoredSection variant="yellow" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('patientReports.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('patientReports.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <SmallFeatureBox
                    icon={HeartPulse}
                    title={t('patientReports.features.vitalSigns.title')}
                    description={t(
                      'patientReports.features.vitalSigns.description'
                    )}
                    iconBgColor="bg-zonda-blue"
                  />

                  <SmallFeatureBox
                    icon={AlertTriangle}
                    title={t('patientReports.features.automaticAlerts.title')}
                    description={t(
                      'patientReports.features.automaticAlerts.description'
                    )}
                    iconBgColor="bg-zonda-orange"
                  />

                  <SmallFeatureBox
                    icon={BarChart3}
                    title={t('patientReports.features.temporalEvolution.title')}
                    description={t(
                      'patientReports.features.temporalEvolution.description'
                    )}
                    iconBgColor="bg-zonda-blue-dark"
                  />

                  <SmallFeatureBox
                    icon={TrendingUp}
                    title={t('patientReports.features.visualTrends.title')}
                    description={t(
                      'patientReports.features.visualTrends.description'
                    )}
                    iconBgColor="bg-zonda-yellow"
                  />
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-3">
                <img
                  src="/webshots/metrics1.png"
                  alt={t('patientReports.title')}
                  className=""
                />
              </div>
            </div>
          </div>
        </ColoredSection>

        {/* Data Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('dataIntegration.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('dataIntegration.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <FeatureBox
                icon={Building2}
                title={t('dataIntegration.managementSystem.title')}
                description={t('dataIntegration.managementSystem.description')}
              />

              <FeatureBox
                icon={Link2}
                title={t('dataIntegration.directAPI.title')}
                description={t('dataIntegration.directAPI.description')}
              />

              <FeatureBox
                icon={Zap}
                title={t('dataIntegration.instantResults.title')}
                description={t('dataIntegration.instantResults.description')}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
