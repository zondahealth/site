import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { testimonials } from "@/components/testimonials/stories";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const description =
  "Leé cómo organizaciones de salud usan Zonda para aumentar la productividad, reducir costos y mejorar la experiencia de pacientes y profesionales.";

export const metadata: Metadata = {
  title: "Historias de clientes",
  description,
};

export default function CustomerStoriesPage() {
  const [featuredStory, ...otherStories] = testimonials;

  return (
    <main lang="es" className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Historias de clientes
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Las organizaciones que ya están transformando la salud.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </header>

          {featuredStory?.href ? (
            <Link
              href={featuredStory.href}
              className="group mt-12 grid overflow-hidden rounded-[1.5rem] bg-[#f1f5fc] outline-none transition-shadow hover:shadow-[0_20px_60px_rgba(21,27,43,0.14)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:mt-14 lg:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dce7f7] lg:aspect-auto lg:min-h-[29rem]">
                <Image
                  src={featuredStory.image}
                  alt="Equipo de Interdom en una jornada de trabajo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex flex-col justify-center px-7 py-9 sm:px-12 sm:py-12 lg:px-16">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  Caso de estudio · Interdom
                </p>
                <h2 className="mt-5 max-w-md font-display text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                  {featuredStory.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                  Una operación de internación domiciliaria conectada, con más
                  visibilidad para coordinación y menos fricción en el campo.
                </p>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-semibold transition-colors group-hover:bg-foreground group-hover:text-background">
                  Leer la historia
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="border-t border-border/70 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Más historias
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Resultados que mantienen la atención en movimiento.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {otherStories.map((story) => (
              <Link
                key={story.id}
                href={story.href ?? "/customer-stories"}
                className="group overflow-hidden rounded-[1.25rem] border border-border/70 bg-card outline-none transition-shadow hover:shadow-[0_16px_45px_rgba(21,27,43,0.1)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    {story.summary}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                    {story.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Leer la historia
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Querés que tu historia sea la próxima?"
        subtitle="Contanos qué querés resolver y lo vemos juntos."
        buttonText="Hablemos"
      />
    </main>
  );
}
