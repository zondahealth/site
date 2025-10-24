'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ColoredSection } from '../../components/ColoredSection';
import { FeatureBox, SmallFeatureBox } from '../../components/FeatureBox';
import { useTranslations } from 'next-intl';
import {
  FileText,
  Clock,
  Heart,
  ClipboardList,
  Users,
  Link,
  MessageSquare,
  Layout,
  Brain,
  Lightbulb,
} from 'lucide-react';
import { MedicalCardComponent } from '@/app/components/drawings/MedicalCardComponent';
import { EHRComponent } from '@/app/components/drawings/EHRComponent';

export default function EHRPage() {
  const t = useTranslations('ehr');

  // Workflow Benefits data
  const workflowBenefits = [
    {
      icon: FileText,
      title: t('workflowBenefits.benefits.startPrepared.title'),
      description: t('workflowBenefits.benefits.startPrepared.description'),
    },
    {
      icon: Clock,
      title: t('workflowBenefits.benefits.regainTime.title'),
      description: t('workflowBenefits.benefits.regainTime.description'),
    },
    {
      icon: Heart,
      title: t('workflowBenefits.benefits.treatFollowUp.title'),
      description: t('workflowBenefits.benefits.treatFollowUp.description'),
    },
    {
      icon: ClipboardList,
      title: t('workflowBenefits.benefits.standardizeCare.title'),
      description: t('workflowBenefits.benefits.standardizeCare.description'),
    },
    {
      icon: Users,
      title: t('workflowBenefits.benefits.keepConnected.title'),
      description: t('workflowBenefits.benefits.keepConnected.description'),
    },
    {
      icon: Link,
      title: t('features.items.flexibleCoupling.title'),
      description: t('features.items.flexibleCoupling.description'),
    },
  ];

  // Intelligent Processing features data
  const intelligentFeatures = [
    {
      icon: MessageSquare,
      title: t('intelligentProcessing.features.naturalLanguage.title'),
      description: t(
        'intelligentProcessing.features.naturalLanguage.description'
      ),
      iconBgColor: 'bg-zonda-blue',
      iconColor: 'text-white',
    },
    {
      icon: Layout,
      title: t('intelligentProcessing.features.automaticStructuring.title'),
      description: t(
        'intelligentProcessing.features.automaticStructuring.description'
      ),
      iconBgColor: 'bg-zonda-orange',
      iconColor: 'text-white',
    },
    {
      icon: Brain,
      title: t('intelligentProcessing.features.contextualAnalysis.title'),
      description: t(
        'intelligentProcessing.features.contextualAnalysis.description'
      ),
      iconBgColor: 'bg-zonda-blue-dark',
      iconColor: 'text-white',
    },
    {
      icon: Lightbulb,
      title: t('intelligentProcessing.features.continuousLearning.title'),
      description: t(
        'intelligentProcessing.features.continuousLearning.description'
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
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] pb-24">
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center">
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

              {/* Right: EHR Component */}
              <div className="flex justify-center items-center">
                <EHRComponent />
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('workflowBenefits.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t('workflowBenefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowBenefits.map((benefit, index) => (
                <FeatureBox
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Intelligent Processing Section */}
        <ColoredSection variant="teal" stretch={true}>
          <div className="relative z-10 p-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('intelligentProcessing.title')}
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto font-medium">
                {t('intelligentProcessing.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {intelligentFeatures.map((feature, index) => (
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
              <div className="lg:col-span-2 flex justify-center items-center">
                <MedicalCardComponent />
              </div>
            </div>
          </div>
        </ColoredSection>
      </main>

      <Footer />
    </div>
  );
}
