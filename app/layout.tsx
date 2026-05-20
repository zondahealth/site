import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Geist, Geist_Mono, Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LanguageProvider } from './components/LanguageProvider';
import { getSupportedLocale, localeCookieName } from './lib/locale';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getSupportedLocale(
    (await cookies()).get(localeCookieName)?.value
  );

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider initialLocale={locale}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
