import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

export const metadata: Metadata = {
  title: "Continuidad operativa frente a fallas de PAMI",
  description:
    "Cómo los profesionales pueden mantener su operación frente a fallas de PAMI con Zonda.",
};

export default function PamiCustomerStoryPage() {
  return (
    <main lang="es" className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/customer-stories"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            ← Historias de clientes
          </Link>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Caso de estudio · PAMI + Zonda
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Profesionales de la salud no se detienen con fallas de PAMI.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Una historia sobre continuidad operativa para que cada profesional
            pueda seguir atendiendo, aun cuando un sistema externo falla.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f6f9ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Historia en desarrollo
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            Próximamente, el caso completo
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Estamos reuniendo los detalles de esta experiencia para compartir
            la historia completa.
          </p>
        </div>
      </section>

      <CtaBanner title="¿Buscás una operación que no se detenga?" buttonText="Hablemos" />
    </main>
  );
}
