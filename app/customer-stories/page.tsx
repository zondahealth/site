import type { Metadata } from "next";
import Image from "next/image";

import { ContactBanner } from "@/components/home/ContactBanner";
import {
  Story,
  StoryCTA,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";

export const metadata: Metadata = {
  title: "Historias de clientes | Zonda",
  description:
    "Lee cómo empresas de salud usan Zonda para incrementar la productividad, reducir costos y mejorar la satisfacción de pacientes y profesionales.",
};

const stories = [
  {
    id: "interdom",
    title: "Interdom transforma su organización y se hace más eficiente",
    href: "/customer-stories/interdom",
    image: "/assets/home/testimonials/t1.png",
  },
  {
    id: "ams",
    title: "AMS por primera vez tiene control sobre sus finanzas",
    href: "/customer-stories",
    image: "/assets/home/testimonials/t2.png",
  },
  {
    id: "pami",
    title:
      "Profesionales no pierden tiempo al interactuar con diferentes obras sociales, caso PAMI",
    href: "/customer-stories",
    image: "/assets/home/testimonials/t3.png",
  },
] as const;

export default function CustomerStoriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 sm:mb-14">
            <h1 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Mirá lo que es posible con Zonda.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Lee cómo empresas de salud usan Zonda para incrementar la
              productividad, reducir costos y mejorar la satisfacción de
              pacientes y profesionales.
            </p>
          </header>

          <StoryList>
            {stories.map((story) => (
              <Story key={story.id} href={story.href}>
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
                <StoryCTA>Leer la historia</StoryCTA>
              </Story>
            ))}
          </StoryList>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
