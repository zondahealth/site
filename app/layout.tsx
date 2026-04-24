import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk-next',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'zonda',
  description: 'zonda',
};

const headerLinks = [
  { href: '/', label: 'Product', active: true },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
];

// This file is required for the root layout
// The actual layout is now in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header links={headerLinks} />
        {children}
      </body>
    </html>
  );
}
