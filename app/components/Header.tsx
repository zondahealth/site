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
  logoText?: string;
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
  logoText = 'Zonda Health',
}: HeaderProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-[1.75rem] border border-[color:oklch(0.88_0.02_258)] bg-[color:oklch(0.995_0.004_258_/_0.94)] px-4 py-3 shadow-[0_18px_60px_-28px_rgba(14,60,117,0.28)] backdrop-blur-sm pointer-events-auto sm:px-6">
        <Link
          href="/"
          className="shrink-0 [font-family:var(--font-space-grotesk)] text-lg font-semibold tracking-[-0.03em] text-[color:oklch(0.27_0.03_258)] transition-colors duration-200 hover:text-[color:oklch(0.47_0.17_258)]"
        >
          {logoText}
        </Link>

        <nav className="hidden items-center rounded-full border border-[color:oklch(0.92_0.012_258)] bg-[color:oklch(0.982_0.006_258)] p-1 md:flex">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={[
                'rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200',
                link.active
                  ? 'bg-[color:oklch(0.95_0.03_258)] text-[color:oklch(0.57_0.18_258)] shadow-[inset_0_-2px_0_0_rgba(34,111,253,0.65)]'
                  : 'text-[color:oklch(0.5_0.02_258)] hover:text-[color:oklch(0.27_0.03_258)]',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full px-3 text-[color:oklch(0.57_0.18_258)] hover:bg-[color:oklch(0.96_0.02_258)] hover:text-[color:oklch(0.47_0.17_258)] sm:px-4"
          >
            <Link href={loginHref}>Login</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="rounded-full px-4 shadow-[0_16px_32px_-18px_rgba(34,111,253,0.9)] sm:px-5"
          >
            <Link href={getStartedHref}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
