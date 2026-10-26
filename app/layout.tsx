import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BreakpointIndicator } from "@/components/BreakpointIndicator";
import { LanguageProvider } from "@/components/LanguageProvider";
import {
  defaultLocale,
  englishLocaleEnabled,
  getSupportedLocale,
  localeCookieName,
} from "@/lib/locale";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zondahealth.com"),
  title: {
    default:
      "Zonda Health · La infraestructura de datos de salud para Latinoamérica",
    template: "%s | Zonda",
  },
  description:
    "Zonda conecta organizaciones, profesionales y pacientes en una capa de inteligencia de salud unificada, sin reemplazar lo que ya existe.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = englishLocaleEnabled
    ? getSupportedLocale((await cookies()).get(localeCookieName)?.value)
    : defaultLocale;

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${manrope.variable}`}
    >
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
