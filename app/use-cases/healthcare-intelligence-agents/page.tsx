import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  FeatureHero,
  FeatureHeroContent,
  FeatureHeroMedia,
  FeaturePanelBleed,
} from "@/components/ui/feature-hero/feature-hero";
import {
  Story,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";
import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";

export const metadata: Metadata = {
  title:
    "Healthcare AI Agents | Transform Healthcare Data Into Intelligence | Zonda",
  description:
    "Zonda enables AI agents for healthcare organizations by connecting fragmented clinical, operational, and financial data to uncover insights, detect patterns, and improve decision-making.",
  keywords: [
    "healthcare AI agents",
    "AI in healthcare operations",
    "healthcare intelligence platform",
    "healthcare data interoperability",
    "healthcare analytics AI",
    "clinical AI agents",
    "healthcare automation",
    "healthcare data infrastructure",
  ],
};

const benefits = [
  {
    title: "Uncover clinical risk across connected data",
    copy: "Connect treatment history, visits, and clinical events to identify patients who may need proactive support.",
    href: "#",
    image: "/assets/fraud/zonda-info.png",
    imageAlt:
      "Placeholder visual for clinical intelligence across connected healthcare data",
  },
  {
    title: "See where care operations break down",
    copy: "Give operations teams one view of schedules, capacity, and patient journeys to detect bottlenecks earlier.",
    href: "#",
    image: "/assets/fraud/search.png",
    imageAlt:
      "Placeholder visual for operational intelligence across care workflows",
  },
  {
    title: "Trace financial outcomes back to care",
    copy: "Link delivered care, authorizations, billing, and settlement data to explain reimbursement changes.",
    href: "#",
    image: "/assets/fraud/validated.png",
    imageAlt:
      "Placeholder visual for financial intelligence across billing and settlement",
  },
] as const;

const faqItems = [
  {
    question: "What are healthcare intelligence agents?",
    answer:
      "They are AI agents that operate on connected clinical, operational, and financial data to answer questions, detect patterns, and support decisions across healthcare workflows.",
  },
  {
    question: "What data sources can Zonda connect?",
    answer:
      "Zonda can connect EHR, billing, payer platforms, scheduling, and other operational systems without replacing them.",
  },
  {
    question: "How is this different from generic AI tools?",
    answer:
      "Generic AI tools work on isolated records. Zonda agents understand the relationships between patients, providers, treatments, operations, and financial processes.",
  },
  {
    question: "Does Zonda require replacing existing software?",
    answer:
      "No. Zonda is designed to connect the systems you already operate and add an intelligence layer across them.",
  },
  {
    question: "What kinds of questions can agents answer?",
    answer:
      "Teams can explore questions such as which patients are at risk of treatment interruption, where care operations are breaking down, or why reimbursement changed.",
  },
  {
    question: "Can agents work across clinical, operational, and financial data?",
    answer:
      "Yes. Zonda creates a shared healthcare context so agents can reason across domains instead of analyzing each system in isolation.",
  },
  {
    question: "How does Zonda give agents healthcare context?",
    answer:
      "Zonda normalizes data, preserves workflow relationships, and connects events to the people, processes, and financial activity around them.",
  },
  {
    question: "Do teams need technical skills to use the agents?",
    answer:
      "No. Agents can be queried in natural language, so teams can investigate high-value questions without assembling each dataset by hand.",
  },
] as const;

export default function HealthcareIntelligenceAgentsPage() {
  return (
    <main lang="en" className="overflow-hidden bg-background text-foreground">
      <FeatureHero>
        <FeaturePanelBleed
          src="/assets/fraud/fraud-hero-bleed.png"
          side="right"
        />
        <FeatureHeroContent>
          <div className="">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.10em] text-foreground">
              Healthcare intelligence agents
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground">
              Turn fragmented data into actionable intelligence.
            </h1>
            <p className="mt-2 text-lg leading-7 text-foreground/80">
              Connect clinical, operational, and financial data so AI agents
              can understand workflows and deliver real-time intelligence.
            </p>
            <div className="mt-4">
              <Button variant="black" asChild>
                <Link href="#contacto">
                  Talk to our team
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </FeatureHeroContent>
        <FeatureHeroMedia>
          <Image
            src="/assets/tbd/asistant-result.png"
            alt="Asistente Zonda answering a clinical query and returning 135 matching treatments"
            width={1080}
            height={1080}
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="h-auto w-full max-w-[420px] object-contain mx-auto"
          />
        </FeatureHeroMedia>
      </FeatureHero>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <SectionIntro
          title="What you need to turn healthcare data into intelligence."
          className="max-w-4xl text-center mx-auto"
        />

        <StoryList className="mt-14">
          {benefits.map((benefit) => (
            <Story key={benefit.title} href={benefit.href}>
              <StoryMedia>
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </StoryMedia>
              <StoryTitle>{benefit.title}</StoryTitle>
              <p className="text-sm leading-7 text-muted-foreground">
                {benefit.copy}
              </p>
            </Story>
          ))}
        </StoryList>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionIntro
            compact
            eyebrow="The missing layer"
            title="Healthcare data exists. Intelligence does not."
            copy="Organizations already collect massive amounts of clinical, operational, and financial information. The problem is that this data lives across systems that were never designed to work together."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/timeline-validation.png"
            alt="Placeholder visual for connecting fragmented healthcare systems into one intelligence layer"
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full overflow-hidden rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionIntro
            compact
            eyebrow="Healthcare-native reasoning"
            title="AI agents built for healthcare workflows"
            copy="Zonda agents operate on connected healthcare data. They understand the relationships between patients, providers, treatments, operations, and financial processes—not just individual records."
            className="max-w-lg lg:order-2"
          />

          <Image
            src="/assets/fraud/heath-panel.png"
            alt="Placeholder visual for AI agents reasoning across healthcare workflows"
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full overflow-hidden rounded-[1.5rem] object-cover lg:order-1"
          />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionIntro
            compact
            eyebrow="The intelligence foundation"
            title="From disconnected systems to intelligent operations"
            copy="Zonda combines interoperability, data normalization, workflow understanding, and AI reasoning so agents can operate with healthcare context at their core."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/fraud-risk-score.png"
            alt="Placeholder visual for the healthcare intelligence foundation"
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full overflow-hidden rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
            <SectionIntro
              eyebrow="Intelligence in action"
              title="Ask a complex healthcare question"
              copy="Give teams one place to explore what is happening, why it is happening, and where they should act—without assembling each dataset by hand."
              className="max-w-xl"
            />

            <figure className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
              <Image
                src="/assets/tbd/asistant-question.png"
                alt="Asistente Zonda analyzing a natural-language clinical query"
                width={900}
                height={900}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            centered
            title="Your questions, answered"
            className="max-w-3xl"
          />

          <div className="mt-12 divide-y divide-border/80 border-y border-border/80">
            {faqItems.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-primary">
                    <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-border bg-muted text-primary">
            <Zap className="size-5" strokeWidth={1.7} />
          </span>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            The foundation for the next generation of healthcare AI
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Connect your data, understand your workflows, and enable
            intelligent systems to act on top of them.
          </p>
          <Button variant="black" size="lg" className="mt-9" asChild>
            <Link href="#contacto">
              Talk to our team
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
