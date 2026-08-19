import Image from "next/image";

import {
  Story,
  StoryCTA,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";

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

export function PossibilitiesBanner() {
  return (
    <section
      id="historias"
      aria-label="Historias"
      className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 sm:mb-14">
          <h2 className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mirá lo que es posible con Zonda.
          </h2>
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
  );
}
