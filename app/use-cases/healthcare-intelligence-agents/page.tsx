import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  Bot,
  Building2,
  CalendarDays,
  Check,
  CircleAlert,
  Database,
  FileHeart,
  HeartPulse,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button/button";

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

const sourceSystems = [
  { label: "EHR", icon: FileHeart },
  { label: "Billing", icon: BadgeDollarSign },
  { label: "Payer platforms", icon: ShieldCheck },
  { label: "Scheduling", icon: CalendarDays },
  { label: "Operational data", icon: Database },
] as const;

const intelligenceAgents = [
  { label: "Clinical Agent", icon: Stethoscope },
  { label: "Operational Agent", icon: Activity },
  { label: "Financial Agent", icon: BadgeDollarSign },
] as const;

const intelligenceExamples = [
  {
    eyebrow: "Clinical intelligence",
    question: "Which patients are at risk of treatment interruption?",
    description:
      "Connect the signals that reveal when a patient may need proactive support.",
    inputs: [
      "Treatment history",
      "Visits",
      "Clinical events",
      "Patient activity",
    ],
    outcome: "Identifies patients requiring proactive intervention.",
    icon: HeartPulse,
    accent: "border-[#d5cf45]/45 bg-[#ffffec]",
    iconStyle: "bg-[#f0ef8b] text-[#565400]",
  },
  {
    eyebrow: "Operational intelligence",
    question: "Where are our care operations breaking down?",
    description:
      "See how people, capacity, and workflows interact across the care journey.",
    inputs: [
      "Schedules",
      "Provider activity",
      "Patient journeys",
      "Operational workflows",
    ],
    outcome: "Detects bottlenecks and efficiency opportunities.",
    icon: Workflow,
    accent: "border-[#7cd8ca]/45 bg-[#effdf9]",
    iconStyle: "bg-[#bcefe7] text-[#075b50]",
  },
  {
    eyebrow: "Financial intelligence",
    question: "Why did reimbursement decrease this month?",
    description:
      "Trace financial outcomes back to care delivery, policy, and process data.",
    inputs: [
      "Delivered care",
      "Authorizations",
      "Billing and payer rules",
      "Settlements",
    ],
    outcome: "Identifies revenue leakage and financial risks.",
    icon: BadgeDollarSign,
    accent: "border-[#8cbcf5]/45 bg-[#f2f7ff]",
    iconStyle: "bg-[#cfe2ff] text-[#0e3c75]",
  },
] as const;

const foundationCapabilities = [
  {
    title: "Healthcare interoperability",
    copy: "Connect clinical, operational, and financial systems without replacing them.",
    icon: Network,
  },
  {
    title: "Data normalization",
    copy: "Turn incompatible formats into reliable, usable healthcare information.",
    icon: Database,
  },
  {
    title: "Workflow understanding",
    copy: "Preserve the relationships between patients, providers, care, and operations.",
    icon: Workflow,
  },
  {
    title: "AI reasoning",
    copy: "Give agents the context to explore questions, detect patterns, and explain outcomes.",
    icon: Sparkles,
  },
] as const;

function FlowArrow({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center gap-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 lg:flex-col lg:px-1"
      aria-hidden="true"
    >
      <span className="hidden lg:block">{label}</span>
      <span className="h-px w-8 bg-gradient-to-r from-white/15 to-accent/80 lg:h-10 lg:w-px lg:bg-gradient-to-b" />
      <ArrowRight className="size-4 text-accent lg:rotate-90" strokeWidth={1.8} />
    </div>
  );
}

export default function HealthcareIntelligenceAgentsPage() {
  return (
    <main lang="en" className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 sm:pt-40 lg:px-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(34,111,253,0.34),transparent_34%),radial-gradient(circle_at_88%_42%,rgba(31,212,245,0.18),transparent_30%),linear-gradient(145deg,#07172d_0%,#0a2b55_52%,#07172d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              Healthcare intelligence agents
            </p>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Turn fragmented healthcare data into{" "}
              <span className="text-accent">actionable intelligence</span> with
              AI agents.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 sm:text-lg lg:text-xl">
              Healthcare organizations have the data needed to answer critical
              questions, but it is trapped across disconnected systems. Zonda
              connects clinical, operational, and financial information to
              enable AI agents that understand workflows, identify patterns,
              and deliver real-time intelligence.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="#contacto">
                  Talk to our team
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="inverse"
                size="lg"
                className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
                asChild
              >
                <Link href="/#plataforma">Explore Zonda Platform</Link>
              </Button>
            </div>
          </div>

          <figure className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-6 lg:mt-20 lg:p-8">
            <figcaption className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
              <span className="text-sm font-semibold text-white">
                From fragmented systems to better decisions
              </span>
              <span className="rounded-full border border-dashed border-white/20 px-3 py-1.5 font-mono text-[10px] text-white/45">
                Visual placeholder · healthcare-intelligence-flow.png
              </span>
            </figcaption>

            <div
              role="img"
              aria-label="Disconnected healthcare source systems flow through the Zonda data and intelligence layer into clinical, operational, and financial AI agents that produce insights, alerts, and decisions."
              className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1.05fr_auto_1fr]"
            >
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Disconnected systems
                </p>
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {sourceSystems.map((system, index) => {
                    const Icon = system.icon;

                    return (
                      <div
                        key={system.label}
                        className={`flex min-h-11 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.07] px-3 text-xs font-medium text-white/75 ${
                          index === sourceSystems.length - 1
                            ? "col-span-2 lg:col-span-1"
                            : ""
                        }`}
                      >
                        <Icon
                          className="size-4 shrink-0 text-white/55"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        {system.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              <FlowArrow label="Connect" />

              <div className="relative flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-accent/45 bg-[#0e3c75] p-5 shadow-[0_0_60px_rgba(31,212,245,0.14)] sm:p-6">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 size-56 rounded-full bg-secondary/30 blur-3xl"
                />
                <div className="relative">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-accent">
                    <Network className="size-5" strokeWidth={1.7} />
                  </span>
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/80">
                    Zonda
                  </p>
                  <p className="mt-2 max-w-[15rem] font-display text-2xl font-semibold leading-tight text-white">
                    Data &amp; Intelligence Layer
                  </p>
                </div>
                <div className="relative mt-8 flex flex-wrap gap-2">
                  {[
                    "Unified data",
                    "Healthcare context",
                    "Workflow relationships",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1.5 text-[10px] font-medium text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <FlowArrow label="Understand" />

              <div className="flex flex-col rounded-2xl border border-white/10 bg-black/10 p-4 sm:p-5">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Context-aware agents
                </p>
                <div className="flex flex-1 flex-col gap-2">
                  {intelligenceAgents.map((agent) => {
                    const Icon = agent.icon;

                    return (
                      <div
                        key={agent.label}
                        className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-3"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#72dcff]">
                          <Icon className="size-4" strokeWidth={1.7} />
                        </span>
                        <span className="text-xs font-semibold text-white/80">
                          {agent.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {["Insights", "Alerts", "Decisions"].map((output) => (
                    <span
                      key={output}
                      className="rounded-lg bg-accent px-1.5 py-2 text-center text-[9px] font-bold uppercase tracking-wide text-accent-foreground"
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </figure>

          <p className="mx-auto mt-9 max-w-3xl text-center font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
            AI is only as powerful as the healthcare data and context it can
            access.
          </p>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              The missing layer
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">
              Healthcare data exists. Intelligence does not.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-foreground sm:text-2xl">
              Healthcare organizations already collect massive amounts of
              clinical, operational, and financial information.
            </p>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              The problem is that this data lives across systems that were
              never designed to work together. A single question often
              requires teams to manually combine information from different
              platforms, databases, and workflows.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Clinical", icon: HeartPulse },
                { label: "Operational", icon: Building2 },
                { label: "Financial", icon: BadgeDollarSign },
              ].map((domain) => {
                const Icon = domain.icon;

                return (
                  <div
                    key={domain.label}
                    className="rounded-2xl border border-border/80 bg-white p-4 shadow-[0_10px_30px_rgba(14,60,117,0.06)]"
                  >
                    <Icon
                      className="size-5 text-primary"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm font-semibold">
                      {domain.label} data
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Rich in signals. Isolated by design.
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex gap-4 rounded-2xl border border-[#e5df47]/55 bg-[#ffffe7] p-5 sm:p-6">
              <CircleAlert
                className="mt-0.5 size-5 shrink-0 text-[#6c6800]"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="font-display text-lg font-semibold leading-relaxed text-[#313000]">
                AI cannot create meaningful value without context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Healthcare-native reasoning
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                AI agents built for healthcare workflows
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Zonda enables AI agents that operate on top of connected
              healthcare data. They understand the relationships between
              patients, providers, treatments, operations, and financial
              processes—not just individual records.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] bg-primary p-6 text-white sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(31,212,245,0.28),transparent_36%),radial-gradient(circle_at_0%_100%,rgba(34,111,253,0.32),transparent_42%)]"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-accent">
                    <Bot className="size-5" strokeWidth={1.7} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Connected context
                  </span>
                </div>

                <div className="my-auto py-12 text-center">
                  <p className="text-sm font-medium text-white/55">
                    Ask a complex healthcare question
                  </p>
                  <p className="mx-auto mt-4 max-w-xl font-display text-2xl font-semibold leading-snug sm:text-4xl">
                    “What is happening, why is it happening, and where should we
                    act?”
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    "Explore questions",
                    "Detect patterns",
                    "Uncover insight",
                  ].map((action) => (
                    <div
                      key={action}
                      className="rounded-xl border border-white/10 bg-white/[0.07] px-2 py-4 text-center text-[10px] font-semibold leading-snug text-white/70 sm:px-4 sm:text-xs"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  title: "Understands relationships",
                  copy: "Connects care events to the people, processes, and financial activity around them.",
                  icon: Network,
                },
                {
                  title: "Works in natural language",
                  copy: "Lets teams investigate high-value questions without manually assembling each dataset.",
                  icon: Search,
                },
                {
                  title: "Supports better decisions",
                  copy: "Turns cross-system signals into timely insights that teams can investigate and act on.",
                  icon: Check,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`rounded-2xl border border-border/80 bg-white p-6 shadow-[0_12px_30px_rgba(14,60,117,0.05)] ${
                      index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                      <Icon className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Intelligence in action
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Examples of AI-powered intelligence
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              One connected intelligence layer gives each team a clearer way
              to investigate the questions that matter to them.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {intelligenceExamples.map((example) => {
              const Icon = example.icon;

              return (
                <article
                  key={example.eyebrow}
                  className={`flex min-h-[34rem] flex-col rounded-[1.5rem] border p-6 sm:p-7 ${example.accent}`}
                >
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl ${example.iconStyle}`}
                  >
                    <Icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/55">
                    {example.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-[-0.02em]">
                    “{example.question}”
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {example.description}
                  </p>

                  <div className="mt-7 border-t border-foreground/10 pt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/45">
                      The agent analyzes
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
                      {example.inputs.map((input) => (
                        <li
                          key={input}
                          className="flex items-start gap-2 text-xs font-medium leading-5 text-foreground/75"
                        >
                          <span className="mt-1 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-white/70">
                            <Check
                              className="size-2.5 text-primary"
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                          </span>
                          {input}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="rounded-xl bg-white/70 p-4 shadow-[0_6px_18px_rgba(14,60,117,0.04)]">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-foreground/45">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6">
                        {example.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#060b14] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-36 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(31,212,245,0.22),rgba(34,111,253,0.08)_44%,transparent_70%)] blur-2xl"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77dcff]">
                The intelligence foundation
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                From disconnected systems to intelligent healthcare operations
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                Zonda combines the essential infrastructure and healthcare
                understanding AI needs to operate reliably. Unlike generic AI
                tools, Zonda agents are built with healthcare context at their
                core.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">
              {foundationCapabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.title}
                    className="min-h-56 bg-[#0b1320] p-6 sm:p-7"
                  >
                    <Icon
                      className="size-5 text-accent"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <h3 className="mt-8 font-display text-lg font-semibold text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {capability.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {[
              {
                number: "01",
                title: "Connect healthcare",
                copy: "Unify data across systems.",
              },
              {
                number: "02",
                title: "Understand healthcare",
                copy: "Add context and relationships.",
              },
              {
                number: "03",
                title: "Enable AI to operate",
                copy: "Turn context into intelligence.",
              },
            ].map((step, index) => (
              <div key={step.number} className="contents">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[10px] font-bold tracking-[0.14em] text-accent">
                    {step.number}
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold text-white">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{step.copy}</p>
                </div>
                {index < 2 ? (
                  <ArrowRight
                    className="mx-auto size-4 rotate-90 text-white/25 sm:rotate-0"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#eff6ff] to-transparent"
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary text-accent shadow-[0_12px_30px_rgba(14,60,117,0.18)]">
            <Sparkles className="size-5" strokeWidth={1.7} />
          </span>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            The foundation for the next generation of healthcare AI
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            The future of healthcare will not be driven only by better AI
            models. It will be driven by organizations that can connect their
            data, understand their workflows, and enable intelligent systems to
            act on top of them. Zonda provides the infrastructure layer that
            makes this possible.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="black" size="lg" asChild>
              <Link href="#contacto">
                Talk to our team
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#plataforma">Explore Zonda Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
