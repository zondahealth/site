'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { MultiOrgViewComponent } from '../../components/drawings/MultiOrgViewComponent';
import { useTranslations } from 'next-intl';
import {
  Building2,
  Users,
  Link,
  Shield,
  Settings,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  Target,
} from 'lucide-react';

export default function MultiOrgPage() {
  const t = useTranslations('multiOrg');

  // Features data
  const features = [
    {
      icon: Building2,
      title: t('features.items.largeOrganizationSupport.title'),
      description: t('features.items.largeOrganizationSupport.description'),
    },
    {
      icon: Users,
      title: t('features.items.unifiedManagement.title'),
      description: t('features.items.unifiedManagement.description'),
    },
    {
      icon: Link,
      title: t('features.items.crossOrganizationAssignment.title'),
      description: t('features.items.crossOrganizationAssignment.description'),
    },
    {
      icon: Shield,
      title: t('features.items.independentAccess.title'),
      description: t('features.items.independentAccess.description'),
    },
    {
      icon: BarChart3,
      title: t('features.items.localGlobalReports.title'),
      description: t('features.items.localGlobalReports.description'),
    },
    {
      icon: Settings,
      title: t('features.items.scalableArchitecture.title'),
      description: t('features.items.scalableArchitecture.description'),
    },
  ];

  // Integration Flexibility section data
  const integrationFeatures = [
    {
      icon: Zap,
      title: t('integrationFlexibility.features.apiIntegration.title'),
      description: t(
        'integrationFlexibility.features.apiIntegration.description'
      ),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Globe,
      title: t('integrationFlexibility.features.hybridDeployment.title'),
      description: t(
        'integrationFlexibility.features.hybridDeployment.description'
      ),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: CheckCircle,
      title: t('integrationFlexibility.features.operationalContinuity.title'),
      description: t(
        'integrationFlexibility.features.operationalContinuity.description'
      ),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: Target,
      title: t('integrationFlexibility.features.customWorkflows.title'),
      description: t(
        'integrationFlexibility.features.customWorkflows.description'
      ),
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
            <div className="text-center mb-6 flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}{' '}
                <span className="text-zonda-yellow">
                  {t('hero.titleHighlight')}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-2 font-medium">
                {t('hero.description')}
              </p>
            </div>

            {/* Multi-Org Screenshot */}
            <div className="flex justify-center items-center w-full pb-16">
              <MultiOrgViewComponent />
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

        {/* Integration Flexibility Section */}
        <ColoredSection variant="teal" stretch={true}>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('integrationFlexibility.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                {t('integrationFlexibility.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrationFeatures.map((feature, index) => (
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
