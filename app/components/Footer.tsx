'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from './ui/utils';
import { useLanguage } from './LanguageProvider';

const productLinks = [
  { href: '/products/profesionales', label: 'common.nav.platformProfessional' },
  { href: '/products/organizaciones', label: 'common.nav.platformOrg' },
  { href: '/products/interoperabilidad', label: 'common.nav.interoperability' },
  {
    href: '/products/internacion-domiciliaria',
    label: 'common.nav.homeCare',
  },
];

const companyLinks = [
  { href: '/casos-de-uso', label: 'common.nav.caseStudies' },
  { href: '/desarrolladores', label: 'common.nav.developers' },
  { href: '/empresa', label: 'common.nav.company' },
  { href: '/contacto', label: 'common.buttons.contactUs' },
  { href: '/privacy-policy', label: 'common.nav.privacyPolicy' },
];

const blackFooterRoutes = ['/desarrolladores', '/products/interoperabilidad'];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isBlack = blackFooterRoutes.some(
    (route) => pathname === route || pathname.endsWith(route)
  );

  return (
    <footer
      className={cn(
        'relative overflow-hidden text-white',
        isBlack ? 'bg-black' : 'bg-[#081e3a]'
      )}
    >
      {!isBlack && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,140,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,234,0,0.08),transparent_24%)]" />
      )}

      <div className="layout-shell relative z-10 py-14 sm:py-16">
        <div className="grid gap-12 border-b border-[color:rgba(255,255,255,0.14)] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label={t('site.common.homeAria')}
              className="inline-flex items-center"
            >
              <Image
                src="/logo/white-full-logo.png"
                alt="Zonda Health"
                width={164}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-[color:rgba(248,250,255,0.76)]">
              {t('common.footer.description')}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(248,250,255,0.7)]">
              {t('common.footer.solutions')}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(248,250,255,0.7)]">
              {t('common.footer.navigation')}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {t(link.label)}
                </Link>
              ))}
              <a
                href="https://azul.zondahealth.com"
                className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
              >
                {t('common.buttons.login')}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-[color:rgba(248,250,255,0.68)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Zonda Health. {t('common.footer.allRightsReserved')}.
          </p>
          <div className="flex flex-col gap-1 sm:items-end">
            <a
              href="mailto:support@zondahealth.com"
              className="transition-colors duration-200 hover:text-white"
            >
              support@zondahealth.com
            </a>
            <p>San Juan, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
