import type { ReactNode } from "react";
import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { getFooterColumns } from "@/lib/navigation";

function FooterAnchor({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "inline-flex text-sm leading-snug text-white/55 transition-colors duration-150 hover:text-white focus-visible:text-white";

  if (/^https?:/.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  const columns = getFooterColumns();

  return (
    <footer className="bg-[#0b0d12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))]">
          <div className="lg:pr-8">
            <Link
              href="/"
              className="inline-flex rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo variant="full" inverted className="h-7 w-auto" />
            </Link>
          </div>

          {columns.map((column) => (
            <nav
              key={column.title}
              aria-labelledby={`footer-${column.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h2
                id={`footer-${column.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mb-4 text-sm font-medium text-white/90"
              >
                {column.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <a
              href="mailto:support@zondahealth.com"
              className="transition-colors hover:text-white focus-visible:text-white"
            >
              support@zondahealth.com
            </a>
            <p>San Juan, Argentina</p>
            <p>© {new Date().getFullYear()} Zonda Health</p>
          </div>
          <Link
            href="/contact"
            className="w-fit text-sm text-white/55 transition-colors hover:text-white focus-visible:text-white"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
