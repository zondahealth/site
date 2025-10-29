'use client';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WeHelp } from '../components/WeHelp';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ColoredSection } from '../components/ColoredSection';
import { GlassButton } from '../components/ui/glass-button';
import { useTranslations } from 'next-intl';
import { SectionLayout } from '../components/SectionLayout';

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

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative pt-24">
          <div className="text-center mb-20">
            <SectionLayout title={t('title')} subtitle={t('description2')}>
              <div className="align-elements-in-row">
                {stats.map((stat) => {
                  return (
                    <div className="text-center" key={stat.label}>
                      <div className="text-2xl font-bold text-zonda-blue">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionLayout>
          </div>
        </div>

        <ColoredSection variant="blue">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {tSections('healthManagement.title')}
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                {tSections('healthManagement.description')}
              </p>
              <GlassButton
                variant="blue"
                size="lg"
                glow="blue"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/platform-org')}
              >
                <span>{tButtons('discoverSolution')}</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center">
              <img
                src="/webshots/patients-cropped.png"
                alt="Plataforma de Gestión"
                className="w-[70%] md:w-[60%] lg:w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </ColoredSection>
        <ColoredSection variant="yellow">
          <div className="h-full flex flex-col">
            <div className="flex justify-center px-6 sm:px-8 lg:px-12">
              <img
                src="/appshots/app-down.png"
                alt="Plataforma Profesional"
                className="w-[50%] md:w-[40%] lg:w-[30%] h-auto object-cover drop-shadow-[0_0_60px_rgba(0,0,0,0.95)]"
              />
            </div>
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {tSections('professionalPlatform.title')}
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                {tSections('professionalPlatform.description')}
              </p>
              <GlassButton
                variant="orange"
                size="lg"
                glow="medium"
                className="group/btn w-fit mx-auto"
                onClick={() =>
                  (window.location.href = '/platform-professional')
                }
              >
                <span>{tButtons('explorePlatform')}</span>
              </GlassButton>
            </div>
          </div>
        </ColoredSection>
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
