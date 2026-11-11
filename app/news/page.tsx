import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zonda en las noticias",
  description:
    "Novedades, anuncios y conversaciones de Zonda Health sobre tecnología y salud conectada.",
};

export default function NewsPage() {
  return (
    <main lang="es" className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Zonda Health
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Zonda en las noticias
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Novedades, anuncios y conversaciones sobre la tecnología que está
            conectando la salud en Latinoamérica.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f6f9ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card px-6 py-12 text-center shadow-[0_12px_35px_rgba(21,27,43,0.05)] sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Próximamente
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            Estamos preparando nuestras novedades
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Muy pronto vas a encontrar aquí comunicados, publicaciones y las
            noticias más relevantes sobre Zonda Health.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Contactanos
          </Link>
        </div>
      </section>
    </main>
  );
}
