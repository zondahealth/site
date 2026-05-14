'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  '/products/interoperabilidad',
  '/desarrolladores',
  '/empresa',
];
const activeHeaderBackground = '244, 246, 253';

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
    label: 'Productos',
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
  }, [pathname]);

  useEffect(() => {
    return () => {
      cancelProductMenuClose();
    };
  }, []);

  const centralNavBold = !isProductMenuOpen && backgroundOpacity < 0.85;
  const navItemClassName = [
    'relative py-2 text-sm transition-colors duration-200',
    centralNavBold ? 'font-bold' : 'font-medium',
  ].join(' ');
  const useLightForeground =
    isOverDarkHero && !isProductMenuOpen && backgroundOpacity < 0.62;
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
        backgroundColor: isProductMenuOpen
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
                    'absolute inset-x-0 top-full z-20 border-t border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(244,246,253,0.98)] shadow-[0_24px_48px_-28px_rgba(14,60,117,0.22)] transition-all duration-200',
                    isProductMenuOpen
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-2 opacity-0',
                  ].join(' ')}
                >
                  <div className="mx-auto flex w-full max-w-[1440px] px-10 py-12">
                    <div className="w-full max-w-xl">
                      <p className="mb-5 text-sm font-medium text-[color:rgba(21,27,43,0.58)]">
                        Explorar productos
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
          <Button asChild size="sm" className="rounded-full px-5 sm:px-6">
            <Link href={getLocalizedHref(getStartedHref)}>Contactanos</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
