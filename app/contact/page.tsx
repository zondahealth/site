import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/contact/ContactForm";
import Glow from "@/components/ui/glow/Glow";
import { ORBIT_BORDER_COLORS } from "@/components/ui/glow/colors";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponete en contacto con Zonda.",
  alternates: { canonical: "/contact" },
};

const orbitBorder =
  "conic-gradient(from 210deg, var(--orbit-1), var(--orbit-2), var(--orbit-3), var(--orbit-4), var(--orbit-5), var(--orbit-6), var(--orbit-1))";

export default function ContactPage() {
  return (
    <main lang="es" className="relative isolate overflow-x-clip bg-[#06142b] text-white">
      {/* Cielo nocturno: piezas oscuras donde el texto es protagonista. */}
      <Image
        src="/assets/bg/bg-night-nebula.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-5">
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
              Hablemos de{" "}
              <span className="bg-[linear-gradient(95deg,var(--orbit-5)_0%,var(--orbit-4)_45%,var(--orbit-2)_100%)] bg-clip-text text-transparent">
                tus datos de salud
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/80">
              Contanos qué querés conectar y qué querés resolver. Te responde
              una persona del equipo, no un bot.
            </p>
          </header>

          <Glow
            className="lg:col-span-7"
            colors={ORBIT_BORDER_COLORS}
            radius={32}
            spread={6}
            blur={20}
            opacity={0.55}
          >
            <div className="rounded-[32px] p-1.5" style={{ background: orbitBorder }}>
              <div className="rounded-[26px] bg-card p-6 text-foreground shadow-[0_30px_80px_rgba(4,18,48,0.35)] sm:p-10 lg:p-12">
                <ContactForm />
              </div>
            </div>
          </Glow>
        </div>
      </div>
    </main>
  );
}
