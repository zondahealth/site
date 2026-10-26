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
    "text-sm text-white/70 transition-colors hover:text-white";

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
    <footer className="relative overflow-hidden bg-[#060b14] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.28),rgba(34,111,253,0.12)_42%,transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo variant="full" inverted className="h-8 w-auto" />
            </Link>
          </div>

          {columns.map((column) => (
            <nav
              key={column.title}
              aria-labelledby={`footer-${column.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h2
                id={`footer-${column.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mb-4 text-sm font-semibold text-white"
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

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-20">
          <div className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <a
              href="mailto:support@zondahealth.com"
              className="transition-colors hover:text-white"
            >
              support@zondahealth.com
            </a>
            <p>San Juan, Argentina</p>
            <p>© {new Date().getFullYear()} Zonda Health</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
