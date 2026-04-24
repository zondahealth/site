'use client';

import { useTranslations } from 'next-intl';
import { CaseStudyLayout } from '../../../components/CaseStudyLayout';

export default function FraudDetectionMedicalPracticesCaseStudy() {
  const t = useTranslations('caseStudies.fraudDetectionMedicalPractices');

  return (
    <CaseStudyLayout title={t('hero.title')}>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('introduction')}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('implementation1.title')}
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation1.challenge.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('implementation1.challenge.description')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation1.solution.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('implementation1.solution.description')}
      </p>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('implementation1.solution.dashboards')}
      </p>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-6 ml-4">
        <li>{t('implementation1.solution.bullet1')}</li>
        <li>{t('implementation1.solution.bullet2')}</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation1.results.title')}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-10 ml-4">
        <li>{t('implementation1.results.bullet1')}</li>
        <li>{t('implementation1.results.bullet2')}</li>
        <li>{t('implementation1.results.bullet3')}</li>
        <li>{t('implementation1.results.bullet4')}</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('implementation2.title')}
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation2.challenge.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('implementation2.challenge.description')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation2.solution.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('implementation2.solution.description')}
      </p>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('implementation2.solution.controls')}
      </p>
      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('implementation2.solution.control1.title')}</strong>{' '}
        {t('implementation2.solution.control1.description')}
      </p>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        <strong>{t('implementation2.solution.control2.title')}</strong>{' '}
        {t('implementation2.solution.control2.description')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('implementation2.results.title')}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-10 ml-4">
        <li>{t('implementation2.results.bullet1')}</li>
        <li>{t('implementation2.results.bullet2')}</li>
        <li>{t('implementation2.results.bullet3')}</li>
        <li>{t('implementation2.results.bullet4')}</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('globalImpact.title')}
      </h2>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('globalImpact.description')}
      </p>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-6 ml-4">
        <li>{t('globalImpact.bullet1')}</li>
        <li>{t('globalImpact.bullet2')}</li>
        <li>{t('globalImpact.bullet3')}</li>
        <li>{t('globalImpact.bullet4')}</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('conclusion.title')}
      </h2>
      <p className="text-base text-gray-700 leading-relaxed">
        {t('conclusion.description')}
      </p>
    </CaseStudyLayout>
  );
}

