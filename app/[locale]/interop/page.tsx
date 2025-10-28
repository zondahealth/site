'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { useTranslations } from 'next-intl';
import { FeatureBox } from '@/app/components/FeatureBox';
import {
  Database,
  Link2,
  MonitorCog,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';

export default function InteropPage() {
  const t = useTranslations('interop');

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
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#ffe680,#f8d347,#f0b90b,#f8d347,#ffe680)] drop-shadow-[0_2px_10px_rgba(15,23,42,0.3)]">
                  {t('hero.title')}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                {t('hero.description')}
              </p>

              <div>
                <img
                  src="/misc/console.png"
                  className="w-2/3 h-auto mx-auto"
                  alt={t('hero.title')}
                  style={{
                    filter:
                      'drop-shadow(0 0 40px rgba(36, 62, 147, 0.7)) drop-shadow(0 0 10px #040f2a)',
                  }}
                />
              </div>

              {/* API Documentation Section */}
              <div className="mt-12 max-w-4xl mx-auto">
                <a
                  href="https://zondahealth.readme.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zonda-blue hover:bg-zonda-blue-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {t('hero.apiDocs')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <ColoredSection variant="light-yellow">
          <div className="relative z-10">
            {/* Main Quote */}
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                {t('quote.line1')}
              </span>
              <br />
              <span className="text-gray-800">{t('quote.line2')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue-dark to-zonda-blue">
                {t('quote.line3')}
              </span>
            </blockquote>

            {/* Divider */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-zonda-blue to-zonda-blue-dark rounded-lg"></div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-medium">
                {t('quote.mission')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark font-bold">
                  {' '}
                  {t('quote.mission')}
                </span>
              </p>
            </div>
          </div>
        </ColoredSection>

        {/* API Integration Section */}

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('apiIntegration.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('apiIntegration.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureBox
                icon={Link2}
                title={t('apiIntegration.existingSystems.title')}
                description={t('apiIntegration.existingSystems.description')}
              />

              <FeatureBox
                icon={ShieldCheck}
                title={t('apiIntegration.security.title')}
                description={t('apiIntegration.security.description')}
              />

              <FeatureBox
                icon={Database}
                title={t('apiIntegration.flexibility.title')}
                description={t('apiIntegration.flexibility.description')}
              />

              <FeatureBox
                icon={Users}
                title={t('apiIntegration.fluidExchange.title')}
                description={t('apiIntegration.fluidExchange.description')}
              />

              <FeatureBox
                icon={MonitorCog}
                title={t('apiIntegration.systemMaintenance.title')}
                description={t('apiIntegration.systemMaintenance.description')}
              />

              <FeatureBox
                icon={Zap}
                title={t('apiIntegration.instantResults.title')}
                description={t('apiIntegration.instantResults.description')}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
