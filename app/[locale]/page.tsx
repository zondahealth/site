'use client';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WeHelp } from '../components/WeHelp';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ColoredSection } from '../components/ColoredSection';
import { GlassButton } from '../components/ui/glass-button';
import { useTranslations } from 'next-intl';
import { SectionLayout, SectionVariant } from '../components/SectionLayout';
import {
  Body,
  Heading,
  HeadingVariant,
  SmallText,
} from '../components/Typography';

export default function App() {
  const t = useTranslations('home.mainContent');
  const tButtons = useTranslations('common.buttons');
  const tSections = useTranslations('home.sections');
  const tStats = useTranslations('home.mainContent.stats');

  const stats = [
    { value: '+40%', label: tStats('efficiency') },
    { value: '-60%', label: tStats('managementTime') },
    { value: '100%', label: tStats('interoperability') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        <SectionLayout title={t('title')} subtitle={t('description2')}>
          <div className="align-elements-in-row">
            {stats.map((stat) => {
              return (
                <div className="text-center" key={stat.label}>
                  <Heading
                    variant={HeadingVariant.H3}
                    className="text-2xl font-bold text-zonda-blue"
                  >
                    {stat.value}
                  </Heading>
                  <SmallText className="text-sm text-gray-700 font-medium">
                    {stat.label}
                  </SmallText>
                </div>
              );
            })}
          </div>
        </SectionLayout>

        <SectionLayout
          title={tSections('healthManagement.title')}
          subtitle={tSections('healthManagement.description')}
          variant={SectionVariant.COLOR}
          imageBottom={{
            src: '/webshots/patients-cropped.png',
            alt: 'Plataforma de Gestión',
          }}
        >
          <GlassButton
            variant="dark"
            size="xl"
            glow="none"
            onClick={() => (window.location.href = '/platform-org')}
          >
            {tButtons('discoverSolution')}
          </GlassButton>
        </SectionLayout>

        <SectionLayout
          title={tSections('healthManagement.title')}
          subtitle={tSections('professionalPlatform.description')}
          variant={SectionVariant.COLOR}
          imageTop={{
            src: '/appshots/app-down.png',
            alt: 'Plataforma Profesional',
          }}
        >
          <GlassButton
            variant="orange"
            size="lg"
            glow="medium"
            className="group/btn w-fit mx-auto"
            onClick={() => (window.location.href = '/platform-professional')}
          >
            <span>{tButtons('explorePlatform')}</span>
          </GlassButton>
        </SectionLayout>

        <ColoredSection variant="orange">
          <div className="text-center space-y-6 px-6 sm:px-8 lg:px-12">
            <img
              src="/webshots/metrics-floating.png"
              alt="Reportes y Datos"
              className="w-[60%] md:w-[50%] lg:w-[40%] h-auto object-cover mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              {tSections('reportsAnalytics.title')}
            </h2>
            <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
              {tSections('reportsAnalytics.description')}
            </p>
            <GlassButton
              variant="orange"
              size="lg"
              glow="medium"
              className="group/btn"
              onClick={() => (window.location.href = '/data')}
            >
              <span>{tButtons('accessAnalytics')}</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="teal">
          <div className="text-center space-y-6 px-6 sm:px-8 lg:px-12">
            <img
              src="/misc/brain.png"
              alt="Razonamiento via IA"
              className="w-[40%] md:w-[30%] lg:w-[25%] h-auto object-cover mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              {tSections('clinicalAI.title')}
            </h2>
            <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
              {tSections('clinicalAI.description')}
            </p>
            <GlassButton
              variant="green"
              size="lg"
              glow="green"
              className="group/btn"
              onClick={() => (window.location.href = '/ai')}
            >
              <span>{tButtons('exploreAI')}</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="pink">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {tSections('interoperability.title')}
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                {tSections('interoperability.description')}
              </p>
              <GlassButton
                variant="pink"
                size="lg"
                glow="medium"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/interop')}
              >
                <span>{tButtons('integrateTech')}</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center px-6 sm:px-8 lg:px-12">
              <img
                src="/misc/console-cropped.png"
                alt="Interoperabilidad"
                className="w-[85%] md:w-[60%] lg:w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </ColoredSection>
        <WeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
