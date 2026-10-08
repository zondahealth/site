import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BreakpointIndicator } from "@/components/BreakpointIndicator";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getSupportedLocale, localeCookieName } from "@/lib/locale";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zonda",
  description: "zonda",
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
    <html lang={locale} className={`${plusJakartaSans.variable}`}>
      <body className="antialiased">
        {/* <BreakpointIndicator /> */}
        <LanguageProvider initialLocale={locale}>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
