import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  ShieldAlert,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  FeatureHero,
  FeatureHeroContent,
  FeatureHeroMedia,
  FeaturePanelBleed,
  SOLUTION_HERO_BACKGROUND,
} from "@/components/ui/feature-hero/feature-hero";
import {
  Story,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";
import {
  ProductVisual,
  SectionIntro,
} from "@/components/use-cases/UseCasePrimitives";

export const metadata: Metadata = {
  title: "Healthcare Fraud & Risk Prevention | Zonda",
  description:
    "Connect authorization, care delivery, clinical, billing, and settlement data to detect healthcare fraud, prioritize investigations, and prevent losses with Zonda.",
  keywords: [
    "healthcare fraud prevention",
    "healthcare risk detection",
    "healthcare transaction intelligence",
    "claims fraud detection",
    "healthcare payment integrity",
    "healthcare fraud analytics",
  ],
};

const benefits = [
  {
    title: "See what disconnected systems miss",
    copy: "Connect operational, clinical, and financial data to detect inconsistencies invisible when each system is analyzed separately.",
    href: "#",
    image: "/assets/fraud/zonda-info.png",
    imageAlt:
      "Zonda connecting treatment, payments, location, and vitals into a single view",
  },
  {
    title: "Investigate with the full context",
    copy: "Give audit teams one view of the transaction, the signals behind the alert, and the evidence required to decide.",
    href: "#",
    image: "/assets/fraud/search.png",
    imageAlt:
      "Natural language search showing patients with active treatment or a scheduled procedure",
  },
  {
    title: "Focus controls where risk is highest",
    copy: "Continuously evaluate transactions and add validation only when risk signals require it.",
    href: "#",
    image: "/assets/fraud/validated.png",
    imageAlt: "Validated visit confirmed for a healthcare professional",
  },
] as const;

const faqItems = [
  {
    question: "What is healthcare fraud prevention?",
    answer:
      "It is the process of detecting and preventing inappropriate healthcare activity before it creates financial or operational loss.",
  },
  {
    question: "What types of fraud can Zonda detect?",
    answer:
      "Zonda can surface inconsistencies across authorization, service delivery, clinical documentation, billing, settlement, and transaction behavior.",
  },
  {
    question: "How does Zonda calculate transaction risk?",
    answer:
      "Zonda combines explainable signals with the full transaction context. Each score shows the factors that contributed to its risk level.",
  },
  {
    question: "Can Zonda work with our existing systems?",
    answer:
      "Yes. Zonda connects existing healthcare systems and creates a unified transaction layer across them.",
  },
  {
    question: "Does Zonda require replacing existing software?",
    answer:
      "No. Zonda is designed to connect the systems you already operate and add intelligence across them.",
  },
  {
    question:
      "How does Zonda connect authorization, billing and settlement data?",
    answer:
      "Zonda normalizes events from each system and links them to the same healthcare transaction, preserving their timing and relationships.",
  },
  {
    question: "Can risk rules be customized?",
    answer:
      "Yes. Controls can reflect each organization’s contracts, policies, workflows, and evolving risk priorities.",
  },
  {
    question:
      "How does Zonda reduce fraud without increasing administrative friction?",
    answer:
      "Low-risk transactions continue automatically. Additional checks are introduced only when the connected signals justify them.",
  },
] as const;

export default function FraudRiskPreventionPage() {
  return (
    <main lang="en" className="overflow-hidden bg-background text-foreground">
      <FeatureHero backgroundSrc={SOLUTION_HERO_BACKGROUND}>
        <FeaturePanelBleed
          src="/assets/fraud/fraud-hero-bleed.png"
          side="right"
        />
        <FeatureHeroContent>
          <div className="">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.10em] text-foreground">
              Fraud & Risk Prevention
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground">
              Detect fraud before it becomes a loss.
            </h1>
            <p className="mt-2 text-lg leading-7 text-foreground/80">
              Connect healthcare data to spot fraud and risk before payment.
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
            src="/assets/fraud/hipocrates-fraud.png"
            alt="Hippocrates verifying identity, documentation, and location for a valid operation"
            width={1200}
            height={1245}
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="h-full w-full object-contain max-w-[1200px] mx-auto"
          />
        </FeatureHeroMedia>
      </FeatureHero>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <SectionIntro
          title="What you need to stay ahead of healthcare fraud."
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
            eyebrow="The transaction layer"
            title="Connect every step of the healthcare transaction"
            copy="Fraud and operational risk often emerge in the gaps between systems. Zonda creates a single view of what was authorized, what happened, what was documented, what was billed, and what was ultimately paid."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/timeline-validation.png"
            alt="A healthcare visit timeline from procedure started through data loaded and location validated"
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
            eyebrow="Signals"
            title="Detect risk across multiple signals"
            copy="Evaluate transaction integrity from authorization through settlement, then add behavioral context to see patterns that individual systems cannot reveal."
            className="max-w-lg lg:order-2"
          />

          <Image
            src="/assets/fraud/heath-panel.png"
            alt="Health dashboard monitoring treatments and clinical activity by patient status"
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
            eyebrow="Explainable risk"
            title="Turn signals into actionable risk"
            copy="A single anomaly does not necessarily mean fraud. Zonda combines signals and context to build an explainable risk assessment for each transaction."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/fraud-risk-score.png"
            alt="Fraud risk score of 93 with a high-risk warning"
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
              eyebrow="Resolve"
              title="Investigate with the full context"
              copy="Understand the transaction, the reason it was flagged, and the evidence behind it from a single operational view."
              className="max-w-xl"
            />

            <ProductVisual
              label="Investigation · Transaction #48291"
              filename="transaction-investigation-detail.png"
            >
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border/70 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#fff0dd] text-[#9a5600]">
                      <ShieldAlert className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        High-risk transaction
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Four connected signals require review
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-primary px-4 py-3 text-right text-white">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-white/50">
                    Risk score
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-accent">
                    87 · High
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl bg-muted/70 p-5">
                  {[
                    ["Patient", "Patient 8F21"],
                    ["Professional", "Professional 472"],
                    ["Provider", "Provider 143"],
                    ["Payer", "Payer 028"],
                    ["Service", "Procedure B"],
                    ["Date / time", "May 14 · 10:32"],
                    ["Location", "Site 04"],
                    ["Authorized", "$ —"],
                    ["Billed", "$ —"],
                    ["Settlement", "$ —"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1.5 text-xs font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Risk signals
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {[
                      "Geolocation mismatch",
                      "Frequency exceeded",
                      "Overlapping activity",
                      "Documentation inconsistency",
                    ].map((signal) => (
                      <div
                        key={signal}
                        className="flex items-center gap-3 rounded-xl border border-[#e8b63c]/35 bg-[#fffaf0] p-3 text-xs font-semibold"
                      >
                        <AlertTriangle className="size-3.5 shrink-0 text-[#9a6800]" />
                        {signal}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80 p-4">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Transaction timeline
                </p>
                <div className="flex min-w-[660px] items-start">
                  {[
                    "Authorized",
                    "Scheduled",
                    "Delivered",
                    "Clinical record",
                    "Billing",
                    "Settlement",
                  ].map((step, index) => (
                    <div key={step} className="flex flex-1 items-start">
                      <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                        <span
                          className={`flex size-7 items-center justify-center rounded-full ${
                            index >= 2
                              ? "bg-[#fff0dd] text-[#9a5600]"
                              : "bg-[#d9f5e9] text-[#176344]"
                          }`}
                        >
                          {index >= 2 ? (
                            <CircleAlert className="size-3.5" />
                          ) : (
                            <Check className="size-3.5" strokeWidth={2.4} />
                          )}
                        </span>
                        <span className="mt-2 text-[9px] font-semibold text-muted-foreground">
                          {step}
                        </span>
                      </div>
                      {index < 5 ? (
                        <span className="mt-3.5 h-px flex-1 bg-border" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button className="rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white">
                  Approve
                </button>
                <button className="rounded-full border border-[#d7755f]/40 bg-[#fff4f0] px-4 py-2.5 text-xs font-semibold text-[#913a27]">
                  Reject
                </button>
                <button className="rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold">
                  Request evidence
                </button>
                <button className="rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold">
                  Escalate
                </button>
              </div>
            </ProductVisual>
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
            Ready to see the risk you&apos;ve been missing?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Connect healthcare transactions, detect inconsistencies earlier, and
            focus your teams on the cases that matter.
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
