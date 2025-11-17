'use client';

import { useTranslations } from 'next-intl';
import { CaseStudyLayout } from '../../../components/CaseStudyLayout';

export default function HealthSystemsMigrationCaseStudy() {
  const t = useTranslations('caseStudies.healthSystemsMigration');

  return (
    <CaseStudyLayout title={t('hero.title')}>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('introduction')}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        {t('problems.title')}
      </h2>

      <p className="text-base text-gray-700 leading-relaxed mb-4">
        {t('problems.intro')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('problems.lackOfStandardization.title')}</strong>{' '}
        {t('problems.lackOfStandardization.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('problems.duplicateRecords.title')}</strong>{' '}
        {t('problems.duplicateRecords.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('problems.clinicalErrors.title')}</strong>{' '}
        {t('problems.clinicalErrors.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('problems.incompleteData.title')}</strong>{' '}
        {t('problems.incompleteData.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-6">
        <strong>{t('problems.unlicensedProfessionals.title')}</strong>{' '}
        {t('problems.unlicensedProfessionals.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-10">
        {t('problems.conclusion')}
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
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('solution.phase1.description')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase2.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-3">
        {t('solution.phase2.description')}
      </p>
      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mb-3 ml-4">
        <li>{t('solution.phase2.bullet1')}</li>
        <li>{t('solution.phase2.bullet2')}</li>
        <li>{t('solution.phase2.bullet3')}</li>
      </ul>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('solution.phase2.conclusion')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase3.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        {t('solution.phase3.description')}
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {t('solution.phase4.title')}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed mb-10">
        {t('solution.phase4.description')}
      </p>

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
        <strong>{t('results.reducedWorkload.title')}</strong>{' '}
        {t('results.reducedWorkload.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.reliableData.title')}</strong>{' '}
        {t('results.reliableData.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.continuity.title')}</strong>{' '}
        {t('results.continuity.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.efficiency.title')}</strong>{' '}
        {t('results.efficiency.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-2">
        <strong>{t('results.reducedErrors.title')}</strong>{' '}
        {t('results.reducedErrors.description')}
      </p>

      <p className="text-base text-gray-700 leading-relaxed mb-10">
        <strong>{t('results.impact.title')}</strong>{' '}
        {t('results.impact.description')}
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
