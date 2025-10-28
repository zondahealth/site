'use client';

import { useTranslations } from 'next-intl';

export function WeHelp() {
  const t = useTranslations('weHelp');

  const stats = [
    {
      label: t('stats.costSavings.label'),
      value: '+30%',
      description: t('stats.costSavings.description'),
    },
    {
      label: t('stats.waitTimeReduction.label'),
      value: '+40%',
      description: t('stats.waitTimeReduction.description'),
    },
    {
      label: t('stats.medicalErrorsReduction.label'),
      value: '+35%',
      description: t('stats.medicalErrorsReduction.description'),
    },
    {
      label: t('stats.fraudSavings.label'),
      value: '+30%',
      description: t('stats.fraudSavings.description'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 leading-tight">
            {t('title')}
          </h2>
          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2"
              >
                {/* Large prominent number in purple */}
                <div className="text-4xl lg:text-5xl font-bold text-purple-600">
                  {stat.value}
                </div>

                {/* Bold sub-heading in dark blue */}
                <div className="text-lg font-bold text-gray-800 w-[90%]">
                  {stat.label}
                </div>

                {/* Descriptive text */}
                <div className="text-sm text-gray-700 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
