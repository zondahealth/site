'use client';

import { useTranslations } from 'next-intl';
import { CaseStudyLayout } from '../../../components/CaseStudyLayout';

export default function MedicalRecordsMigrationValidationCaseStudy() {
  const t = useTranslations('caseStudies.medicalRecordsMigrationValidation');

  return (
    <CaseStudyLayout title={t('hero.title')}>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('introduction')}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('challenges.title')}
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {t('challenges.intro')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('challenges.lowQuality.title')}</strong>{' '}
        {t('challenges.lowQuality.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('challenges.criticalErrors.title')}</strong>{' '}
        {t('challenges.criticalErrors.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('challenges.crossedData.title')}</strong>{' '}
        {t('challenges.crossedData.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-6">
        <strong>{t('challenges.analysisRisk.title')}</strong>{' '}
        {t('challenges.analysisRisk.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-10">
        {t('challenges.conclusion')}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('solution.title')}
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('solution.subtitle')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase1.title')}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-6 ml-4">
        <li>{t('solution.phase1.bullet1')}</li>
        <li>{t('solution.phase1.bullet2')}</li>
        <li>{t('solution.phase1.bullet3')}</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase2.title')}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-6 ml-4">
        <li>{t('solution.phase2.bullet1')}</li>
        <li>{t('solution.phase2.bullet2')}</li>
        <li>{t('solution.phase2.bullet3')}</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase3.title')}
      </h3>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-10 ml-4">
        <li>{t('solution.phase3.bullet1')}</li>
        <li>{t('solution.phase3.bullet2')}</li>
        <li>{t('solution.phase3.bullet3')}</li>
      </ul>

      {/* <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 my-10">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('graph.title')}
          </h3>
          <p className="text-sm text-gray-500">{t('graph.placeholder')}</p>
        </div>
      </div> */}

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('results.title')}
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {t('results.intro')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.cleanDatabase.title')}</strong>{' '}
        {t('results.cleanDatabase.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.errorDetection.title')}</strong>{' '}
        {t('results.errorDetection.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.completeProfiles.title')}</strong>{' '}
        {t('results.completeProfiles.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.fasterDecisions.title')}</strong>{' '}
        {t('results.fasterDecisions.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.automation.title')}</strong>{' '}
        {t('results.automation.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-10">
        <strong>{t('results.tangibleImpact.title')}</strong>{' '}
        {t('results.tangibleImpact.description')}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('conclusion.title')}
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {t('conclusion.paragraph1')}
      </p>

      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-4 ml-4">
        <li>{t('conclusion.bullet1')}</li>
        <li>{t('conclusion.bullet2')}</li>
        <li>{t('conclusion.bullet3')}</li>
      </ul>

      <p className="text-base text-gray-700 leading-relaxed">
        {t('conclusion.paragraph2')}
      </p>
    </CaseStudyLayout>
  );
}
