'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('common.footer');

  function getCurrentYear() {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-blue-600 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-400/5 via-transparent to-blue-700/10"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/Zonda_Logotipo-blanco.png"
                alt="Zonda Health Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/zonda-health"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('solutions')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('artificialIntelligence')}
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('dataAnalysis')}
                </Link>
              </li>
              <li>
                <Link
                  href="/interop"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('interoperability')}
                </Link>
              </li>
              <li>
                <Link
                  href="/platform-org"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('organizationalPlatform')}
                </Link>
              </li>
              <li>
                <Link
                  href="/platform-professional"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('professionalPlatform')}
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('developers')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://zondahealth.readme.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('apiDocumentation')}
                </a>
              </li>
              <li>
                <a
                  href="https://zondahealth.readme.io/reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('apiReference')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@zondahealth.com"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  support@zondahealth.com
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm">
                  San Juan, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">
              © {currentYear} Zonda Health. {t('allRightsReserved')}.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <span className="font-semibold">{t('fromSanJuan')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
