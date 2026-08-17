import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  CircleDollarSign,
  FileCheck2,
  FileSearch,
  Fingerprint,
  GitBranch,
  MapPin,
  Network,
  RefreshCcw,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  MetricSlot,
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

const lifecycleStages = [
  "Authorization",
  "Care delivery",
  "Clinical evidence",
  "Billing",
  "Settlement",
] as const;

const benefits = [
  {
    title: "See what disconnected systems miss",
    copy: "Connect operational, clinical, and financial data to detect inconsistencies invisible when each system is analyzed separately.",
    icon: Network,
  },
  {
    title: "Investigate with the full context",
    copy: "Give audit teams one view of the transaction, the signals behind the alert, and the evidence required to decide.",
    icon: FileSearch,
  },
  {
    title: "Focus controls where risk is highest",
    copy: "Continuously evaluate transactions and add validation only when risk signals require it.",
    icon: ShieldCheck,
  },
] as const;

const signalFamilies = [
  {
    title: "Authorization integrity",
    icon: FileCheck2,
    signals: [
      "Authorization expired",
      "Frequency exceeded",
      "Unauthorized service",
      "Outside treatment plan",
    ],
  },
  {
    title: "Delivery integrity",
    icon: MapPin,
    signals: [
      "Duplicate service",
      "Simultaneous visits",
      "Geolocation mismatch",
      "Abnormal professional volume",
    ],
  },
  {
    title: "Clinical integrity",
    icon: Stethoscope,
    signals: [
      "Missing documentation",
      "Clinical/service mismatch",
      "Abnormal documentation patterns",
    ],
  },
  {
    title: "Billing integrity",
    icon: BadgeDollarSign,
    signals: [
      "Duplicate billing",
      "Billed ≠ delivered",
      "Billed ≠ authorized",
      "Unsupported procedure",
    ],
  },
  {
    title: "Settlement integrity",
    icon: CircleDollarSign,
    signals: [
      "Invalid professional payment",
      "Settlement outside contractual rules",
      "Payment linked to rejected transaction",
    ],
  },
  {
    title: "Behavioral intelligence",
    icon: Activity,
    signals: [
      "Sudden changes",
      "Provider outliers",
      "Unusual patient/provider relationships",
      "Coordinated activity",
    ],
  },
] as const;

const queueRows = [
  {
    score: 92,
    transaction: "#48291",
    patient: "Patient 8F21",
    provider: "Provider 143",
    amount: "$ —",
    signals: "4 signals",
    status: "Needs review",
  },
  {
    score: 76,
    transaction: "#48273",
    patient: "Patient 2A04",
    provider: "Provider 287",
    amount: "$ —",
    signals: "3 signals",
    status: "Evidence requested",
  },
  {
    score: 48,
    transaction: "#48266",
    patient: "Patient 6D18",
    provider: "Provider 091",
    amount: "$ —",
    signals: "2 signals",
    status: "Pending validation",
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

function StatusDot({ warning = false }: { warning?: boolean }) {
  return (
    <span
      className={`flex size-5 items-center justify-center rounded-full ${
        warning ? "bg-[#ffdd82] text-[#694700]" : "bg-[#d9f5e9] text-[#176344]"
      }`}
    >
      {warning ? (
        <AlertTriangle className="size-3" strokeWidth={2.3} />
      ) : (
        <Check className="size-3" strokeWidth={2.5} />
      )}
    </span>
  );
}

function FlowArrow() {
  return (
    <ArrowRight
      className="mx-auto size-4 rotate-90 text-primary/25 sm:rotate-0"
      aria-hidden="true"
    />
  );
}

export default function FraudRiskPreventionPage() {
  return (
    <main lang="en" className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 sm:pt-40 lg:px-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(34,111,253,0.38),transparent_32%),radial-gradient(circle_at_88%_58%,rgba(234,234,0,0.11),transparent_28%),linear-gradient(145deg,#07172d_0%,#0a2d58_54%,#07172d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              <ShieldAlert className="size-3.5 text-accent" aria-hidden="true" />
              Fraud &amp; risk prevention
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Detect fraud before it becomes a{" "}
              <span className="text-accent">loss.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg lg:text-xl">
              Healthcare fraud rarely appears in a single data point. Zonda
              connects authorization, care delivery, clinical, billing, and
              settlement data to detect inconsistencies, identify suspicious
              patterns, and surface risk before payment.
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
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>

          <ProductVisual
            inverse
            label="Connected transaction monitor"
            filename="fraud-transaction-lifecycle.png"
            className="mt-16 lg:mt-20"
            bodyClassName="overflow-x-auto"
          >
            <div
              role="img"
              aria-label="Healthcare transactions move through authorization, care delivery, clinical evidence, billing, and settlement. Normal transactions match across stages, while one mismatched transaction generates a risk signal."
              className="min-w-[760px]"
            >
              <div className="grid grid-cols-[7rem_repeat(5,1fr)_7rem] gap-2 px-1 pb-3">
                <span />
                {lifecycleStages.map((stage) => (
                  <span
                    key={stage}
                    className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-white/45"
                  >
                    {stage}
                  </span>
                ))}
                <span />
              </div>

              <div className="space-y-2">
                {["#48288", "#48289"].map((transaction) => (
                  <div
                    key={transaction}
                    className="grid grid-cols-[7rem_repeat(5,1fr)_7rem] items-center gap-2 rounded-xl border border-white/8 bg-white/[0.035] p-2"
                  >
                    <span className="font-mono text-[10px] text-white/45">
                      {transaction}
                    </span>
                    {lifecycleStages.map((stage) => (
                      <div
                        key={stage}
                        className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] text-[10px] font-medium text-white/60"
                      >
                        <StatusDot />
                        Matched
                      </div>
                    ))}
                    <span className="text-center text-[9px] font-bold uppercase tracking-wide text-[#8ce0bd]">
                      Continue
                    </span>
                  </div>
                ))}

                <div className="grid grid-cols-[7rem_repeat(5,1fr)_7rem] items-center gap-2 rounded-xl border border-[#ffdd82]/35 bg-[#ffdd82]/[0.07] p-2 shadow-[0_0_34px_rgba(255,221,130,0.08)]">
                  <span className="font-mono text-[10px] font-semibold text-white/80">
                    #48291
                  </span>
                  {[
                    "8 visits",
                    "10 visits",
                    "Procedure A",
                    "Procedure B",
                    "Payment held",
                  ].map((value, index) => (
                    <div
                      key={value}
                      className={`flex h-11 items-center justify-center gap-2 rounded-lg border px-2 text-center text-[10px] font-semibold ${
                        index === 1 || index === 3
                          ? "border-[#ffdd82]/35 bg-[#ffdd82]/10 text-[#ffe6a7]"
                          : "border-white/8 bg-white/[0.04] text-white/65"
                      }`}
                    >
                      <StatusDot warning={index === 1 || index === 3} />
                      {value}
                    </div>
                  ))}
                  <span className="rounded-lg bg-accent px-2 py-2.5 text-center text-[9px] font-bold uppercase tracking-wide text-accent-foreground">
                    Risk signal
                  </span>
                </div>
              </div>
            </div>
          </ProductVisual>

          <p className="mx-auto mt-8 max-w-3xl text-center font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
            Fraud becomes visible when disconnected events are connected.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="What you need to stay ahead of healthcare fraud"
            className="max-w-4xl"
          />

          <div className="mt-14 grid gap-10 border-t border-border/80 pt-10 lg:grid-cols-3 lg:gap-14">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title}>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf4ff] text-primary">
                      <Icon className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/55">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {benefit.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The transaction layer"
            title="Connect every step of the healthcare transaction"
            copy="Fraud and operational risk often emerge in the gaps between systems. Zonda creates a single view of what was authorized, what happened, what was documented, what was billed, and what was ultimately paid."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Transaction consistency view"
            filename="connected-transaction-mismatches.png"
            className="mt-14"
          >
            <div
              role="img"
              aria-label="A healthcare transaction progresses from authorized through delivered, documented, billed, and settled. Three mismatches produce a combined risk signal."
            >
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                {[
                  { label: "Authorized", value: "8 visits", ok: true },
                  { label: "Delivered", value: "10 visits", ok: false },
                  { label: "Documented", value: "Procedure A", ok: true },
                  { label: "Billed", value: "Procedure B", ok: false },
                  { label: "Settled", value: "Generated", ok: false },
                ].map((stage, index) => (
                  <div key={stage.label} className="contents">
                    <div
                      className={`rounded-2xl border p-4 ${
                        stage.ok
                          ? "border-border/80 bg-white"
                          : "border-[#e8b63c]/55 bg-[#fff8df]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                          {stage.label}
                        </p>
                        <StatusDot warning={!stage.ok} />
                      </div>
                      <p className="mt-7 font-display text-lg font-semibold">
                        {stage.value}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {stage.ok ? "Matches transaction" : "Mismatch found"}
                      </p>
                    </div>
                    {index < 4 ? <FlowArrow /> : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Authorized 8 · Delivered 10",
                  "Delivered A · Billed B",
                  "Rejected claim · Settlement generated",
                ].map((mismatch) => (
                  <div
                    key={mismatch}
                    className="flex items-center gap-3 rounded-xl border border-[#e8b63c]/40 bg-[#fffaf0] p-3"
                  >
                    <CircleAlert
                      className="size-4 shrink-0 text-[#9a6800]"
                      strokeWidth={1.9}
                    />
                    <span className="text-xs font-semibold text-[#5f470f]">
                      {mismatch}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 rounded-xl bg-primary p-4 text-white">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Connected assessment
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Cross-system inconsistencies detected
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-accent px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-foreground">
                  Risk signal
                </span>
              </div>
            </div>
          </ProductVisual>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Signals"
            title="Detect risk across multiple signals"
            copy="Evaluate transaction integrity from authorization through settlement, then add behavioral context to see patterns that individual systems cannot reveal."
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/80 bg-border/70 md:grid-cols-2 lg:grid-cols-3">
            {signalFamilies.map((family) => {
              const Icon = family.icon;

              return (
                <article key={family.title} className="min-h-64 bg-white p-6 sm:p-7">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                    <Icon className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold">
                    {family.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {family.signals.map((signal) => (
                      <li
                        key={signal}
                        className="flex items-start gap-2.5 text-xs leading-5 text-muted-foreground"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-secondary" />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,111,253,0.32),transparent_68%)] blur-2xl"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionIntro
              inverse
              eyebrow="Explainable risk"
              title="Turn signals into actionable risk"
              copy="A single anomaly does not necessarily mean fraud. Zonda combines signals and context to build an explainable risk assessment for each transaction."
              className="max-w-xl"
            />

            <ProductVisual
              inverse
              label="Transaction risk assessment"
              filename="explainable-risk-score.png"
            >
              <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="flex flex-col rounded-2xl border border-[#ffdd82]/25 bg-[#ffdd82]/[0.07] p-5">
                  <p className="font-mono text-[10px] text-white/45">
                    Transaction #48291
                  </p>
                  <div className="my-auto py-8 text-center">
                    <p className="font-display text-7xl font-semibold tracking-[-0.06em] text-accent">
                      87
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#ffe58d]">
                      High risk
                    </p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-[#71d8b1] via-accent to-[#ff9d73]" />
                  </div>
                  <div className="mt-2 flex justify-between text-[8px] font-bold uppercase tracking-wide text-white/35">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Why this transaction was flagged
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "Geolocation mismatch",
                      "Authorization frequency exceeded",
                      "Overlapping professional activity",
                      "Clinical documentation inconsistency",
                    ].map((signal, index) => (
                      <div
                        key={signal}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-3"
                      >
                        <span className="flex items-center gap-3 text-xs font-medium text-white/75">
                          <AlertTriangle
                            className="size-3.5 shrink-0 text-[#ffdd82]"
                            strokeWidth={1.9}
                          />
                          {signal}
                        </span>
                        <span className="font-mono text-[9px] text-white/35">
                          S0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {[
                  {
                    level: "Low risk",
                    action: "Continue automatically",
                    style: "border-[#71d8b1]/25 bg-[#71d8b1]/[0.07]",
                  },
                  {
                    level: "Medium risk",
                    action: "Additional validation",
                    style: "border-accent/25 bg-accent/[0.07]",
                  },
                  {
                    level: "High risk",
                    action: "Investigation",
                    style: "border-[#ff9d73]/25 bg-[#ff9d73]/[0.08]",
                  },
                ].map((path) => (
                  <div key={path.level} className={`rounded-xl border p-3 ${path.style}`}>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">
                      {path.level}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-white/80">
                      {path.action}
                    </p>
                  </div>
                ))}
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Prioritize"
            title="Focus teams on the transactions that matter"
            copy="Healthcare organizations should not need to manually audit every transaction. Zonda surfaces the cases with the highest risk and helps teams prioritize where to investigate."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Investigation queue"
            filename="risk-investigation-queue.png"
            className="mt-14"
            bodyClassName="overflow-x-auto"
          >
            <div className="min-w-[820px]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold">
                    Priority review
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Sorted by risk and operational urgency
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-[10px] font-semibold text-muted-foreground">
                  <SlidersHorizontal className="size-3.5" />
                  Filter queue
                </div>
              </div>

              <div className="grid grid-cols-[5rem_6rem_1fr_1.15fr_6rem_6rem_9rem] gap-4 border-b border-border px-3 pb-3 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                <span>Risk</span>
                <span>Transaction</span>
                <span>Patient</span>
                <span>Professional / provider</span>
                <span>Amount</span>
                <span>Signals</span>
                <span>Status</span>
              </div>
              <div className="divide-y divide-border/70">
                {queueRows.map((row) => (
                  <div
                    key={row.transaction}
                    className="grid grid-cols-[5rem_6rem_1fr_1.15fr_6rem_6rem_9rem] items-center gap-4 px-3 py-4 text-xs"
                  >
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1.5 font-bold ${
                        row.score >= 70
                          ? "bg-[#fff0dd] text-[#8a4900]"
                          : "bg-[#fffbd8] text-[#6f6800]"
                      }`}
                    >
                      {row.score}
                      <span className="text-[8px] uppercase">
                        {row.score >= 70 ? "High" : "Med"}
                      </span>
                    </span>
                    <span className="font-mono font-semibold text-primary">
                      {row.transaction}
                    </span>
                    <span>{row.patient}</span>
                    <span>{row.provider}</span>
                    <span className="text-muted-foreground">{row.amount}</span>
                    <span className="font-semibold">{row.signals}</span>
                    <span className="rounded-full border border-border bg-muted px-2.5 py-1.5 text-center text-[9px] font-semibold">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ProductVisual>
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

      <section className="relative isolate overflow-hidden bg-[#060b14] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_48%,rgba(34,111,253,0.16),transparent_43%)]"
        />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            inverse
            centered
            eyebrow="Network intelligence"
            title="Detect patterns, not just individual anomalies"
            copy="Connecting transactions allows Zonda to identify relationships that isolated systems cannot see."
            className="max-w-4xl"
          />

          <ProductVisual
            inverse
            label="Connected entity network"
            filename="healthcare-risk-network.png"
            className="mx-auto mt-14 max-w-5xl"
            bodyClassName="relative min-h-[34rem]"
          >
            <div
              role="img"
              aria-label="A relationship network connects professionals, patients, providers, transactions, and payers, revealing coordinated and abnormal activity."
              className="relative mx-auto hidden h-[29rem] max-w-4xl sm:block"
            >
              {[
                "left-[14%] top-[17%] w-[36%] rotate-[15deg]",
                "left-[43%] top-[20%] w-[33%] -rotate-[18deg]",
                "left-[24%] top-[48%] w-[30%] -rotate-[26deg]",
                "left-[47%] top-[51%] w-[31%] rotate-[24deg]",
                "left-[20%] top-[70%] w-[51%] rotate-[2deg]",
                "left-[44%] top-[32%] h-[38%] w-px",
              ].map((line) => (
                <span
                  key={line}
                  className={`absolute h-px origin-left bg-gradient-to-r from-white/10 via-secondary/75 to-accent/45 ${line}`}
                  aria-hidden="true"
                />
              ))}

              {[
                {
                  label: "Professional",
                  detail: "Volume outlier",
                  icon: UserRound,
                  position: "left-[5%] top-[8%]",
                  alert: true,
                },
                {
                  label: "Patient",
                  detail: "Shared relationship",
                  icon: Users,
                  position: "right-[8%] top-[11%]",
                  alert: false,
                },
                {
                  label: "Transaction",
                  detail: "#48291 · High risk",
                  icon: GitBranch,
                  position: "left-1/2 top-[39%] -translate-x-1/2",
                  alert: true,
                },
                {
                  label: "Provider",
                  detail: "Abnormal cluster",
                  icon: Building2,
                  position: "left-[8%] bottom-[8%]",
                  alert: true,
                },
                {
                  label: "Payer",
                  detail: "Settlement context",
                  icon: BadgeDollarSign,
                  position: "right-[7%] bottom-[9%]",
                  alert: false,
                },
              ].map((node) => {
                const Icon = node.icon;

                return (
                  <div
                    key={node.label}
                    className={`absolute w-44 rounded-2xl border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${node.position} ${
                      node.alert
                        ? "border-accent/30 bg-[#17243a]"
                        : "border-white/10 bg-[#101a2a]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-white/8 text-[#77dcff]">
                        <Icon className="size-4" strokeWidth={1.7} />
                      </span>
                      {node.alert ? (
                        <span className="size-2 rounded-full bg-accent shadow-[0_0_16px_rgba(234,234,0,0.75)]" />
                      ) : null}
                    </div>
                    <p className="mt-4 text-xs font-semibold text-white">
                      {node.label}
                    </p>
                    <p className="mt-1 text-[10px] text-white/45">
                      {node.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 sm:hidden">
              {[
                "Professional ↔ Patient",
                "Patient ↔ Provider",
                "Provider ↔ Transaction",
                "Transaction ↔ Payer",
              ].map((relationship, index) => (
                <div
                  key={relationship}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <span className="text-xs font-semibold text-white/75">
                    {relationship}
                  </span>
                  {index !== 1 ? (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[8px] font-bold uppercase text-accent-foreground">
                      Pattern
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </ProductVisual>

          <p className="mx-auto mt-10 max-w-4xl text-center font-display text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
            Connecting transactions makes it possible to identify relationships
            that isolated systems cannot see.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Abnormal professional volumes",
              "Repeated activity across patients",
              "Shared devices or locations",
              "Abnormal billing clusters",
              "Coordinated provider activity",
              "Geographic or temporal impossibilities",
            ].map((pattern) => (
              <div
                key={pattern}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-xs text-white/55"
              >
                <ScanSearch className="size-3.5 shrink-0 text-accent" />
                {pattern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            eyebrow="Continuous improvement"
            title="Turn investigations into smarter controls"
            copy="Every investigation generates new information. Confirmed anomalies, false positives, and emerging patterns can improve existing controls and become new detection rules."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Operational feedback loop"
            filename="risk-control-feedback-loop.png"
            className="mt-14"
          >
            <div
              role="img"
              aria-label="Risk signals lead to investigation, outcome, a new rule, and better detection in a continuous operational feedback loop."
              className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center"
            >
              {[
                { label: "Risk signal", icon: AlertTriangle },
                { label: "Investigation", icon: FileSearch },
                { label: "Outcome", icon: CheckCircle2 },
                { label: "New rule", icon: SlidersHorizontal },
                { label: "Better detection", icon: RefreshCcw },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="contents">
                    <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-border/80 bg-white p-4 text-center">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                        <Icon className="size-4.5" strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 text-xs font-semibold">{step.label}</p>
                    </div>
                    {index < 4 ? <FlowArrow /> : null}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-secondary/15 bg-[#eef5ff] p-4 text-xs font-medium text-primary">
              <RefreshCcw className="size-4 shrink-0" />
              Controls improve through real operational outcomes—not an opaque
              model.
            </div>
          </ProductVisual>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <SectionIntro
              eyebrow="Adaptive controls"
              title="Prevent fraud without adding friction"
              copy="More control should not mean more administrative work for every transaction. The level of control adapts to the level of risk."
              className="max-w-xl"
            />

            <ProductVisual
              label="Adaptive transaction controls"
              filename="adaptive-risk-controls.png"
            >
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#82d7b5]/45 bg-[#f0fbf6] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#287658]">
                        Normal path
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Low-risk transactions keep moving
                      </p>
                    </div>
                    <span className="rounded-full bg-[#d7f2e6] px-3 py-1.5 text-[9px] font-bold uppercase text-[#236449]">
                      No friction
                    </span>
                  </div>
                  <div className="mt-6 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                    {[
                      { label: "Transaction", icon: GitBranch },
                      { label: "Invisible checks", icon: Fingerprint },
                      { label: "Continue", icon: CheckCircle2 },
                    ].map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div key={step.label} className="contents">
                          <div className="flex items-center gap-3 rounded-xl bg-white p-3 text-xs font-semibold">
                            <Icon className="size-4 text-[#287658]" />
                            {step.label}
                          </div>
                          {index < 2 ? <FlowArrow /> : null}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#e8b63c]/45 bg-[#fffaf0] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8b620b]">
                        Risk path
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Controls increase when signals require it
                      </p>
                    </div>
                    <span className="rounded-full bg-[#ffebba] px-3 py-1.5 text-[9px] font-bold uppercase text-[#714c00]">
                      Adaptive
                    </span>
                  </div>
                  <div className="mt-6 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                    {[
                      { label: "Transaction", icon: GitBranch },
                      { label: "Risk signals", icon: AlertTriangle },
                      { label: "Validation", icon: FileCheck2 },
                      { label: "Investigation", icon: FileSearch },
                    ].map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div key={step.label} className="contents">
                          <div className="flex items-center gap-2 rounded-xl bg-white p-3 text-[10px] font-semibold">
                            <Icon className="size-3.5 text-[#8b620b]" />
                            {step.label}
                          </div>
                          {index < 3 ? <FlowArrow /> : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f8fafe] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            eyebrow="Impact"
            title="Proof that connects to real outcomes"
            copy="This component is ready for verified metrics from Zonda Customer Stories. No estimates or unverified numbers are displayed."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricSlot label="Financial losses prevented" />
            <MetricSlot label="Transactions automatically analyzed" />
            <MetricSlot label="Reduction in manual audit workload" />
            <MetricSlot label="High-risk transactions identified" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Customer stories"
            title="See how healthcare organizations prevent fraud and risk with Zonda"
            className="max-w-4xl"
          />

          <article className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_24px_70px_rgba(14,60,117,0.08)] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="flex min-h-80 flex-col justify-between bg-primary p-7 text-white sm:p-9">
              <div className="flex min-h-24 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.06] p-5 text-center">
                <div>
                  <p className="font-display text-xl font-semibold">Interdom</p>
                  <p className="mt-2 font-mono text-[9px] text-white/40">
                    Placeholder · interdom-customer-logo.svg
                  </p>
                </div>
              </div>
              <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Healthcare organization
              </p>
            </div>

            <div className="flex flex-col p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Interdom customer story
              </p>
              <h3 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                A closer look at connected healthcare operations with Zonda
              </h3>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Verified result", "Verified customer metric"].map((metric) => (
                  <div
                    key={metric}
                    className="rounded-2xl border border-border/80 bg-muted/60 p-5"
                  >
                    <p className="font-display text-3xl font-semibold text-primary/25">
                      —
                    </p>
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/#historias"
                className="mt-10 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                View customer story
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
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

      <section className="relative isolate overflow-hidden bg-primary px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_110%,rgba(31,212,245,0.28),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(234,234,0,0.16),transparent_30%)]"
        />
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-accent">
            <Zap className="size-5" strokeWidth={1.7} />
          </span>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Ready to see the risk you&apos;ve been missing?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Connect healthcare transactions, detect inconsistencies earlier,
            and focus your teams on the cases that matter.
          </p>
          <Button variant="accent" size="lg" className="mt-9" asChild>
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
