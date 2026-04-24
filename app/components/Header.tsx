import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

export type HeaderLink = {
  href: string;
  label: string;
  active?: boolean;
};

type HeaderProps = {
  links?: HeaderLink[];
  loginHref?: string;
  getStartedHref?: string;
};

const defaultLinks: HeaderLink[] = [
  { href: '/', label: 'Product', active: true },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
];

export function Header({
  links = defaultLinks,
  loginHref = '/login',
  getStartedHref = '/get-started',
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="layout-shell flex items-center justify-between py-3 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-85"
          aria-label="Zonda Health"
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

        <nav className="hidden items-center gap-8 md:flex [font-family:var(--font-display-family)]">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={[
                'relative py-2 text-sm font-medium transition-colors duration-200',
                link.active
                  ? 'text-zonda-blue after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-zonda-blue'
                  : 'text-[color:oklch(0.46_0.02_258)] hover:text-[color:oklch(0.27_0.03_258)]',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full px-3 text-[color:oklch(0.57_0.18_258)] hover:bg-[color:oklch(0.96_0.02_258)] hover:text-[color:oklch(0.47_0.17_258)] sm:px-4"
          >
            <Link href={loginHref}>Login</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full px-5 sm:px-6">
            <Link href={getStartedHref}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
