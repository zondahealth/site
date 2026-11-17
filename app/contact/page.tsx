import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";
import {
  FeatureHero,
  SOLUTION_HERO_BACKGROUND,
} from "@/components/ui/feature-hero/feature-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponete en contacto con Zonda.",
  alternates: { canonical: "/contact" },
};

const orbitBorder =
  "conic-gradient(from 210deg, var(--orbit-1), var(--orbit-2), var(--orbit-3), var(--orbit-4), var(--orbit-5), var(--orbit-6), var(--orbit-1))";

export default function ContactPage() {
  return (
    <main lang="es" className="overflow-x-clip">
      <FeatureHero
        backgroundSrc={SOLUTION_HERO_BACKGROUND}
        gridClassName="min-h-0 lg:grid-cols-1 lg:[grid-template-areas:'content']"
      >
        <div className="flex flex-col items-center px-6 pb-16 [grid-area:content] sm:px-10 sm:pb-24 lg:px-16">
          {/* Lugar para la ilustración del hero: cuelga desde el borde superior, detrás del nav. */}
          <div
            data-slot="contact-hero-illustration"
            aria-hidden="true"
            className="relative h-[240px] w-full max-w-3xl sm:h-[300px] lg:h-[360px]"
          />

          <header className="max-w-3xl text-center">
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
              Hablemos de tus datos de salud
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">
              Contanos qué querés conectar y qué querés resolver. Te responde
              una persona del equipo, no un bot.
            </p>
          </header>

          <Glow
            className="mt-12 w-full max-w-3xl sm:mt-16"
            colors={ORBIT_BORDER_COLORS}
            radius={32}
            spread={6}
            blur={20}
            opacity={0.55}
          >
            <div className="rounded-[32px] p-1.5" style={{ background: orbitBorder }}>
              <div className="rounded-[26px] bg-card p-6 text-foreground shadow-[0_30px_80px_rgba(4,18,48,0.2)] sm:p-10 lg:p-12">
                <ContactForm />
              </div>
            </div>
          </Glow>
        </div>
      </FeatureHero>
    </main>
  );
}
