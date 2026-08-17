import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BreakpointIndicator } from "@/components/BreakpointIndicator";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zonda",
  description: "zonda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable}`}>
      <body className="antialiased">
        {/* <BreakpointIndicator /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
