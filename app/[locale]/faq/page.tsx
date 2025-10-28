'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useTranslations } from 'next-intl';

export default function FAQPage() {
  const t = useTranslations('faq');

  // Define FAQ questions as an array of objects
  const faqQuestions = ['dataSafety'];

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
                {t('hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                {t('hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqQuestions.map((questionKey) => (
                <div
                  key={questionKey}
                  className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`questions.${questionKey}.question`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`questions.${questionKey}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
