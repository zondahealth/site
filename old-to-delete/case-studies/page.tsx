'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useTranslations } from 'next-intl';
import { Contact } from '../../components/Contact';
import Link from 'next/link';

export default function CaseStudies() {
  const t = useTranslations('caseStudies');
  const tHealthSystemsMigration = useTranslations(
    'caseStudies.healthSystemsMigration'
  );
  const tMedicalRecordsMigration = useTranslations(
    'caseStudies.medicalRecordsMigrationValidation'
  );
  const tFraudDetection = useTranslations(
    'caseStudies.fraudDetectionMedicalPractices'
  );

  const caseStudies = [
    {
      slug: 'health-systems-migration',
      title: tHealthSystemsMigration('hero.title'),
      cardSubtitle: tHealthSystemsMigration('card.cardSubtitle'),
      description: tHealthSystemsMigration('card.description'),
      author: tHealthSystemsMigration('card.author'),
      date: tHealthSystemsMigration('hero.date'),
      headerColor:
        'bg-gradient-to-br from-zonda-orange/80 via-zonda-orange to-zonda-orange/80',
    },
    {
      slug: 'medical-records-migration-validation',
      title: tMedicalRecordsMigration('hero.title'),
      cardSubtitle: tMedicalRecordsMigration('card.cardSubtitle'),
      description: tMedicalRecordsMigration('card.description'),
      author: tMedicalRecordsMigration('card.author'),
      date: tMedicalRecordsMigration('hero.date'),
      headerColor:
        'bg-gradient-to-br from-zonda-blue/80 via-zonda-blue to-zonda-blue/80',
    },
    {
      slug: 'fraud-detection-medical-practices',
      title: tFraudDetection('hero.title'),
      cardSubtitle: tFraudDetection('card.cardSubtitle'),
      description: tFraudDetection('card.description'),
      author: tFraudDetection('card.author'),
      date: tFraudDetection('hero.date'),
      headerColor: 'bg-gradient-to-br from-teal-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:pb-32 pt-40 mb-16 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold my-6 leading-tight capitalize">
              {t('pageTitle')}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              {t('pageSubtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

type CaseStudyCardProps = {
  slug: string;
  title: string;
  cardSubtitle: string;
  description: string;
  author: string;
  date: string;
  headerColor: string;
};

function CaseStudyCard({
  slug,
  title,
  cardSubtitle,
  description,
  author,
  date,
  headerColor,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col"
    >
      {/* Colored Header */}
      <div className={`${headerColor} px-6 py-2 h-40`}>
        <div className="text-white text-sm font-medium tracking-wide mt-8 pr-12">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {/* Divider */}
          <div className="h-px bg-gray-200 mb-3"></div>
          {/* Subtitle */}
          <p className="text-sm text-gray mb-4">{cardSubtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Author and Date */}
        {/* <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-gray-600 text-xs font-semibold">
              {author.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {author}
            </p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div> */}
      </div>
    </Link>
  );
}
