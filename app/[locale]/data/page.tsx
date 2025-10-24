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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.interactiveDashboards.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.interactiveDashboards.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.trendAnalysis.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.trendAnalysis.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.realTime.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.realTime.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.customReports.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.customReports.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.advancedVisualizations.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.advancedVisualizations.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.dataExport.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.dataExport.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reports Section */}
        <ColoredSection variant="green" stretch={true}>
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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-blue rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {t('patientReports.features.vitalSigns.title')}
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      {t('patientReports.features.vitalSigns.description')}
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-orange rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {t('patientReports.features.automaticAlerts.title')}
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      {t('patientReports.features.automaticAlerts.description')}
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-blue-dark rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {t('patientReports.features.temporalEvolution.title')}
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      {t(
                        'patientReports.features.temporalEvolution.description'
                      )}
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-yellow rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {t('patientReports.features.visualTrends.title')}
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      {t('patientReports.features.visualTrends.description')}
                    </p>
                  </div>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('dataIntegration.managementSystem.title')}
                </h3>
                <p className="text-gray-600">
                  {t('dataIntegration.managementSystem.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('dataIntegration.directAPI.title')}
                </h3>
                <p className="text-gray-600">
                  {t('dataIntegration.directAPI.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('dataIntegration.instantResults.title')}
                </h3>
                <p className="text-gray-600">
                  {t('dataIntegration.instantResults.description')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
