import type { Metadata } from "next";
import Image from "next/image";

import { testimonials } from "@/components/testimonials/stories";
import { Pending } from "@/components/ui/pending/Pending";
import {
  Story,
  StoryCTA,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";
import { isLiveRoute } from "@/lib/navigation";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const description =
  "Leé cómo organizaciones de salud usan Zonda para aumentar la productividad, reducir costos y mejorar la experiencia de pacientes y profesionales.";

export const metadata: Metadata = {
  title: "Historias de clientes",
  description,
};

export default function CustomerStoriesPage() {
  return (
    <main lang="es" className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 sm:mb-14">
            <h1 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Mirá lo que es posible con Zonda.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </header>

          <StoryList>
            {testimonials.map((story) => {
              const href =
                story.href && isLiveRoute(story.href) ? story.href : undefined;

              return (
                <Story key={story.id} href={href}>
                  <StoryMedia aria-hidden="true">
                    <Image
                      src={story.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </StoryMedia>
                  <StoryTitle>{story.title}</StoryTitle>
                  {story.summary ? (
                    // VALIDAR: fuente métricas Interdom — dato publicado en site-new
                    <p className="text-sm text-muted-foreground">
                      {story.summary}
                    </p>
                  ) : null}
                  {href ? (
                    <StoryCTA>Leer la historia</StoryCTA>
                  ) : (
                    <span className="self-start text-sm">
                      <Pending>Historia en preparación</Pending>
                    </span>
                  )}
                </Story>
              );
            })}
          </StoryList>
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
