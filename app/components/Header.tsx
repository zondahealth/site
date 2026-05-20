'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

import { routing } from '../../i18n/routing';
import { Button } from './ui/button';

type ProductLink = {
  href: string;
  label: string;
};

type NavigationItem = {
  label: string;
  href?: string;
  active?: boolean;
  products?: ProductLink[];
};

type HeaderProps = {
  loginHref?: string;
  getStartedHref?: string;
};

const lightForegroundRoutes = [
  '/products/organizaciones',
  '/products/internacion-domiciliaria',
  '/products/interoperabilidad',
  '/desarrolladores',
  '/empresa',
];
const activeHeaderBackground = '255, 255, 255';

const productLinks: ProductLink[] = [
  { href: '/products/profesionales', label: 'Profesionales' },
  { href: '/products/organizaciones', label: 'Organizaciones' },
  { href: '/products/interoperabilidad', label: 'Interoperabilidad' },
  {
    href: '/products/internacion-domiciliaria',
    label: 'Internación Domiciliaria',
  },
];

const navigationItems: NavigationItem[] = [
  {
    label: 'Soluciones',
    products: productLinks,
  },
  { label: 'Casos de uso', href: '/casos-de-uso' },
  { label: 'Desarrolladores', href: '/desarrolladores' },
  { label: 'Empresa', href: '/empresa' },
];

export function Header({
  loginHref = 'https://azul.zondahealth.com',
  getStartedHref = '/contacto',
}: HeaderProps) {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const productMenuCloseTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(Boolean);
  const localeSegment = pathSegments[0];
  const locale =
    routing.locales.find(
      (supportedLocale) => supportedLocale === localeSegment
    ) ?? routing.defaultLocale;
  const hasLocalePrefix = routing.locales.some(
    (supportedLocale) => supportedLocale === localeSegment
  );
  const pathnameWithoutLocale = hasLocalePrefix
    ? `/${pathSegments.slice(1).join('/')}`
    : pathname;
  const isOverDarkHero = lightForegroundRoutes.some(
    (route) =>
      pathnameWithoutLocale === '/' ||
      pathnameWithoutLocale === route ||
      pathnameWithoutLocale.startsWith(`${route}/`)
  );

  const getLocalizedHref = (href: string) => {
    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http://') ||
      href.startsWith('https://')
    ) {
      return href;
    }

    if (href === '/') {
      return `/${locale}`;
    }

    return `/${locale}${href.startsWith('/') ? href : `/${href}`}`;
  };

  const cancelProductMenuClose = () => {
    if (!productMenuCloseTimeoutRef.current) {
      return;
    }

    clearTimeout(productMenuCloseTimeoutRef.current);
    productMenuCloseTimeoutRef.current = null;
  };

  const openProductMenu = () => {
    cancelProductMenuClose();
    setIsProductMenuOpen(true);
  };

  const closeProductMenu = () => {
    cancelProductMenuClose();
    setIsProductMenuOpen(false);
  };

  const scheduleProductMenuClose = () => {
    cancelProductMenuClose();
    productMenuCloseTimeoutRef.current = setTimeout(() => {
      setIsProductMenuOpen(false);
      productMenuCloseTimeoutRef.current = null;
    }, 160);
  };

  useEffect(() => {
    const updateHeaderState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold =
        scrollableHeight > 0
          ? scrollableHeight * 0.001
          : window.innerHeight * 0.01;
      const progress =
        threshold > 0 ? Math.min(window.scrollY / threshold, 1) : 0;

      setBackgroundOpacity(progress);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  useEffect(() => {
    setIsProductMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      cancelProductMenuClose();
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const centralNavBold = !isProductMenuOpen && backgroundOpacity < 0.85;
  const navItemClassName = [
    'relative py-2 text-sm transition-colors duration-200',
    centralNavBold ? 'font-bold' : 'font-medium',
  ].join(' ');
  const useLightForeground =
    isOverDarkHero &&
    !isProductMenuOpen &&
    !isMobileMenuOpen &&
    backgroundOpacity < 0.62;
  const inactiveNavItemClassName = useLightForeground
    ? 'text-[color:rgba(248,250,255,0.82)] hover:text-[color:rgba(248,250,255,0.98)]'
    : 'text-black hover:text-black';
  const loginButtonClassName = useLightForeground
    ? 'rounded-full px-3 text-[color:rgba(248,250,255,0.84)] hover:bg-[color:rgba(248,250,255,0.10)] hover:text-white sm:px-4'
    : 'rounded-full px-3 text-black hover:bg-[color:rgba(92,140,255,0.08)] hover:text-black sm:px-4';
  const logoSrc = useLightForeground
    ? '/logo/yellow-logo.png'
    : '/logo/blue-logo.png';

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color] duration-500 ease-out"
      style={{
        backgroundColor:
          isProductMenuOpen || isMobileMenuOpen
            ? `rgb(${activeHeaderBackground})`
            : `rgba(${activeHeaderBackground}, ${backgroundOpacity})`,
      }}
    >
      <div className="layout-shell flex items-center justify-between py-3 sm:py-4">
        <Link
          href={getLocalizedHref('/')}
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-85"
          aria-label="Inicio de Zonda Health"
        >
          <Image
            src={logoSrc}
            alt="Zonda Health"
            width={38}
            height={38}
            className="h-9 w-9 rounded-xl sm:h-10 sm:w-10"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 font-sans md:flex"
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) =>
            item.products ? (
              <div
                key={item.label}
                onMouseEnter={openProductMenu}
                onMouseLeave={(e) => {
                  const ae = document.activeElement;
                  if (ae?.tagName === 'A' && e.currentTarget.contains(ae)) {
                    return;
                  }
                  scheduleProductMenuClose();
                }}
                onFocusCapture={openProductMenu}
                onBlurCapture={(e) => {
                  if (
                    e.currentTarget.contains(e.relatedTarget as Node | null)
                  ) {
                    return;
                  }
                  closeProductMenu();
                }}
              >
                <button
                  type="button"
                  className={[
                    navItemClassName,
                    'inline-flex items-center bg-transparent',
                    inactiveNavItemClassName,
                  ].join(' ')}
                  aria-haspopup="menu"
                  aria-expanded={isProductMenuOpen}
                >
                  {item.label}
                </button>

                <div
                  onMouseEnter={openProductMenu}
                  onMouseLeave={scheduleProductMenuClose}
                  className={[
                    'absolute inset-x-0 top-full z-20 border-t border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(255,255,255,0.98)] shadow-[0_24px_48px_-28px_rgba(14,60,117,0.22)] transition-all duration-200',
                    isProductMenuOpen
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-2 opacity-0',
                  ].join(' ')}
                >
                  <div className="mx-auto flex w-full max-w-[1440px] px-10 py-12">
                    <div className="w-full max-w-xl">
                      <p className="mb-5 text-sm font-medium text-[color:rgba(21,27,43,0.58)]">
                        Explorar soluciones
                      </p>
                      <div className="flex flex-col items-start">
                        {item.products.map((product) => (
                          <Link
                            key={product.label}
                            href={getLocalizedHref(product.href)}
                            onClick={closeProductMenu}
                            className="rounded-xl py-1 text-[1.75rem] font-medium tracking-[-0.03em] text-black transition-colors duration-200 hover:text-[color:var(--zonda-blue-dark)] focus-visible:text-[color:var(--zonda-blue-dark)] focus-visible:outline-none lg:text-[2.1rem]"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ? getLocalizedHref(item.href) : '#'}
                className={[navItemClassName, inactiveNavItemClassName].join(
                  ' '
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={loginButtonClassName}
          >
            <Link href={getLocalizedHref(loginHref)}>Iniciar sesión</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-5 sm:px-6 md:inline-flex"
          >
            <Link href={getLocalizedHref(getStartedHref)}>Contactanos</Link>
          </Button>
          <button
            type="button"
            className={[
              'inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 md:hidden',
              useLightForeground
                ? 'text-white hover:bg-[color:rgba(248,250,255,0.10)]'
                : 'text-black hover:bg-[color:rgba(92,140,255,0.08)]',
            ].join(' ')}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-x-0 bottom-0 top-[60px] flex flex-col overflow-y-auto bg-white transition-all duration-300 md:hidden',
          isMobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0',
        ].join(' ')}
      >
        <nav
          className="flex flex-1 flex-col gap-1 px-6 py-6"
          aria-label="Navegación móvil"
        >
          {navigationItems.map((item) =>
            item.products ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-black transition-colors hover:bg-[color:rgba(92,140,255,0.08)]"
                  onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                  aria-expanded={isMobileProductsOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={[
                      'h-5 w-5 transition-transform duration-200',
                      isMobileProductsOpen ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>
                <div
                  className={[
                    'flex flex-col gap-1 overflow-hidden transition-all duration-200',
                    isMobileProductsOpen
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0',
                  ].join(' ')}
                >
                  {item.products.map((product) => (
                    <Link
                      key={product.label}
                      href={getLocalizedHref(product.href)}
                      className="rounded-xl py-2.5 pl-6 pr-3 text-base font-medium text-[color:rgba(21,27,43,0.72)] transition-colors hover:bg-[color:rgba(92,140,255,0.08)] hover:text-black"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ? getLocalizedHref(item.href) : '#'}
                className="rounded-xl px-3 py-3 text-lg font-medium text-black transition-colors hover:bg-[color:rgba(92,140,255,0.08)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex flex-col gap-3 border-t border-[color:rgba(21,27,43,0.08)] px-6 py-6">
          <Button asChild size="default" className="w-full rounded-full">
            <Link href={getLocalizedHref(getStartedHref)}>Contactanos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="w-full rounded-full"
          >
            <Link href={getLocalizedHref(loginHref)}>Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
