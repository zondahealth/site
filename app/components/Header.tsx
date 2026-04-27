'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const productLinks: ProductLink[] = [
  { href: '#profesionales', label: 'Profesionales' },
  { href: '#organizaciones', label: 'Organizaciones' },
  { href: '#interoperabilidad', label: 'Interoperabilidad' },
  {
    href: '#internacion-domiciliaria',
    label: 'Internación Domiciliaria',
  },
];

const navigationItems: NavigationItem[] = [
  {
    label: 'Productos',
    products: productLinks,
  },
  { label: 'Casos de uso', href: '#use-cases' },
  { label: 'Desarrolladores', href: '#interoperabilidad' },
  { label: 'Empresa', href: '#company' },
];

export function Header({
  loginHref = '/login',
  getStartedHref = '/get-started',
}: HeaderProps) {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

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

  const navItemClassName =
    'relative py-2 text-sm font-medium transition-colors duration-200';
  const inactiveNavItemClassName = 'text-black hover:text-black';

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color] duration-500 ease-out"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
      }}
    >
      <div className="layout-shell flex items-center justify-between py-3 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-85"
          aria-label="Inicio de Zonda Health"
        >
          <Image
            src="/logo/blue-logo.png"
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
              <div key={item.label} className="group">
                <button
                  type="button"
                  className={[
                    navItemClassName,
                    'inline-flex items-center bg-transparent',
                    inactiveNavItemClassName,
                  ].join(' ')}
                  aria-haspopup="menu"
                >
                  {item.label}
                </button>

                <div className="pointer-events-none absolute inset-x-0 top-full z-20 translate-y-2 border-t border-[color:rgba(21,27,43,0.08)] bg-[color:rgba(253,253,255,0.98)] opacity-0 shadow-[0_24px_48px_-28px_rgba(14,60,117,0.22)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="mx-auto flex w-full max-w-[1440px] px-10 py-12">
                    <div className="w-full max-w-xl">
                      <p className="mb-5 text-sm font-medium text-[color:rgba(21,27,43,0.58)]">
                        Explorar productos
                      </p>
                      <div className="flex flex-col items-start">
                        {item.products.map((product) => (
                          <Link
                            key={product.label}
                            href={product.href}
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
                href={item.href ?? '#'}
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
            className={[
              'rounded-full px-3 sm:px-4',
              'text-black hover:bg-[color:rgba(92,140,255,0.08)] hover:text-black',
            ].join(' ')}
          >
            <Link href={loginHref}>Iniciar sesión</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full px-5 sm:px-6">
            <Link href={getStartedHref}>Comenzar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
