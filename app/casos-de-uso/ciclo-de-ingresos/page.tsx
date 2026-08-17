import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  CircleAlert,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileText,
  GitBranch,
  Layers3,
  Link2,
  Network,
  RefreshCcw,
  Route,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  TrendingDown,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  MetricSlot,
  ProductVisual,
  SectionIntro,
} from "@/components/use-cases/UseCasePrimitives";

export const metadata: Metadata = {
  title: "Ciclo de ingresos en salud | Zonda",
  description:
    "Conectá prestaciones, validaciones, facturación, cobros y liquidaciones en un único flujo. Zonda automatiza el ciclo de ingresos entre múltiples financiadores.",
  keywords: [
    "ciclo de ingresos salud",
    "revenue cycle management",
    "facturación salud",
    "automatización facturación médica",
    "gestión de prestaciones",
    "conciliación salud",
    "healthcare revenue cycle",
  ],
};

const revenueStages = [
  "Prestación realizada",
  "Validada",
  "Facturada",
  "Presentada",
  "Aprobada",
  "Cobrada",
  "Liquidada",
] as const;

const problemOutcomes = [
  {
    title: "Reducí débitos evitables",
    copy: "Validá cada prestación contra las reglas del financiador antes de presentarla.",
    icon: ShieldCheck,
  },
  {
    title: "Eliminá la carga repetitiva",
    copy: "Conectá los datos que ya existen y automatizá los procesos que hoy requieren carga manual.",
    icon: RefreshCcw,
  },
  {
    title: "Sabé dónde está cada ingreso",
    copy: "Seguí qué fue realizado, facturado, presentado, aprobado, debitado, cobrado y liquidado.",
    icon: Route,
  },
] as const;

const preBillingRules = [
  "Nomenclador",
  "Cobertura",
  "Autorización",
  "Documentación",
  "Frecuencia",
  "Valores",
  "Fechas",
  "Reglas de presentación",
] as const;

const revenueQuestions = [
  {
    title: "¿Cuánto realizamos?",
    copy: "Ingresos generados por prestaciones realizadas.",
    icon: Layers3,
  },
  {
    title: "¿Cuánto pudimos facturar?",
    copy: "Prestaciones listas, pendientes y bloqueadas.",
    icon: FileCheck2,
  },
  {
    title: "¿Cuánto aprobaron?",
    copy: "Revenue reconocido frente a lo presentado.",
    icon: BadgeCheck,
  },
  {
    title: "¿Dónde perdemos ingresos?",
    copy: "Débitos, errores y diferencias por causa.",
    icon: TrendingDown,
  },
  {
    title: "¿Cuánto falta cobrar?",
    copy: "Saldos y tiempos por financiador.",
    icon: Clock3,
  },
  {
    title: "¿Qué debemos liquidar?",
    copy: "Obligaciones pendientes con profesionales.",
    icon: UsersRound,
  },
] as const;

const platformCapabilities = [
  {
    title: "Payer Rules",
    copy: "Centralizá nomencladores, coberturas, requisitos, autorizaciones y reglas particulares de cada financiador.",
    icon: SlidersHorizontal,
  },
  {
    title: "Billing & Claims",
    copy: "Transformá prestaciones validadas en información lista para presentar y conectala con los sistemas del financiador.",
    icon: GitBranch,
  },
  {
    title: "Reconciliation & Settlements",
    copy: "Conectá respuestas, débitos, cobros, conciliaciones y liquidaciones con la prestación original.",
    icon: Link2,
  },
  {
    title: "Revenue Intelligence",
    copy: "Analizá el ciclo completo, detectá excepciones y entendé dónde recuperar ingresos.",
    icon: Search,
  },
] as const;

function FlowArrow({ inverse = false }: { inverse?: boolean }) {
  return (
    <ArrowRight
      className={`mx-auto size-4 rotate-90 sm:rotate-0 ${
        inverse ? "text-white/25" : "text-primary/25"
      }`}
      aria-hidden="true"
    />
  );
}

function DataPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-border/80 bg-white p-4">
      <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-primary/25">
        —
      </p>
      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export default function CicloDeIngresosPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 sm:pt-40 lg:px-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_14%,rgba(34,111,253,0.4),transparent_31%),radial-gradient(circle_at_88%_60%,rgba(234,234,0,0.11),transparent_28%),linear-gradient(145deg,#07172d_0%,#0a2d58_54%,#07172d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              <CircleDollarSign
                className="size-3.5 text-accent"
                aria-hidden="true"
              />
              Ciclo de ingresos
            </p>
            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              De cada prestación realizada a cada ingreso{" "}
              <span className="text-accent">cobrado.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg lg:text-xl">
              Automatizá el recorrido completo de una prestación, desde la
              atención hasta la facturación, el cobro y la liquidación. Zonda
              conecta la operación asistencial con las reglas de cada
              financiador para reducir tareas manuales, prevenir pérdidas y dar
              visibilidad sobre todo el ciclo.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="#contacto">
                  Hablar con nuestro equipo
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="inverse"
                size="lg"
                className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
                asChild
              >
                <Link href="#como-funciona">Ver cómo funciona</Link>
              </Button>
            </div>
          </div>

          <ProductVisual
            inverse
            label="Prestación realizada → ingreso cobrado"
            filename="end-to-end-revenue-cycle.png"
            className="mt-16 lg:mt-20"
            bodyClassName="overflow-x-auto"
          >
            <div
              role="img"
              aria-label="Una prestación avanza de realizada a validada, facturada, presentada, aprobada, cobrada y liquidada mientras Zonda aplica las reglas de múltiples financiadores."
              className="min-w-[880px]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {["Payer A", "Payer B", "Payer C"].map((payer) => (
                    <span
                      key={payer}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-semibold text-white/50"
                    >
                      {payer}
                    </span>
                  ))}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-accent/70">
                  Zonda connected workflow
                </span>
              </div>

              <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] items-center gap-2">
                {revenueStages.map((stage, index) => (
                  <div key={stage} className="contents">
                    <div
                      className={`col-span-1 flex min-h-32 flex-col items-center justify-between rounded-xl border p-3 text-center ${
                        index === 0 || index === revenueStages.length - 1
                          ? "border-accent/30 bg-accent/[0.08]"
                          : "border-white/10 bg-white/[0.05]"
                      }`}
                    >
                      <span
                        className={`flex size-7 items-center justify-center rounded-full ${
                          index === revenueStages.length - 1
                            ? "bg-accent text-accent-foreground"
                            : "bg-white/10 text-[#77dcff]"
                        }`}
                      >
                        <Check className="size-3.5" strokeWidth={2.4} />
                      </span>
                      <p className="text-[10px] font-semibold leading-4 text-white/75">
                        {stage}
                      </p>
                      <span className="font-mono text-[8px] text-white/30">
                        0{index + 1}
                      </span>
                    </div>
                    {index < revenueStages.length - 1 ? (
                      <div className="relative">
                        <span className="block h-px bg-gradient-to-r from-secondary/60 to-accent/60" />
                        <ArrowRight className="absolute -right-1 top-1/2 size-3 -translate-y-1/2 text-accent" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </ProductVisual>

          <p className="mx-auto mt-9 max-w-3xl text-center font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            Zonda conecta la atención realizada con el ingreso cobrado.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="El problema"
            title="Cada proceso manual es una oportunidad para perder ingresos."
            copy="Cuando una organización trabaja con múltiples financiadores, cada uno tiene sus propios nomencladores, reglas de validación, documentación, valores, formatos y fechas de presentación. Los problemas suelen descubrirse demasiado tarde: al presentar o cuando el débito ya fue aplicado."
            className="max-w-5xl"
          />

          <div className="mt-14 grid gap-10 border-t border-border/80 pt-10 lg:grid-cols-3 lg:gap-14">
            {problemOutcomes.map((outcome, index) => {
              const Icon = outcome.icon;

              return (
                <article key={outcome.title}>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf4ff] text-primary">
                      <Icon className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/55">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold leading-snug">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {outcome.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <div>
              <SectionIntro
                eyebrow="Transacción de origen"
                title="Todo empieza con una prestación bien registrada."
                copy="Cada prestación genera una transacción que conecta al paciente, el profesional, el financiador, la práctica realizada y la documentación asociada. Zonda estructura esa información desde el origen y mantiene su trazabilidad durante todo el ciclo."
                className="max-w-xl"
              />
              <p className="mt-7 border-l-2 border-accent pl-5 text-sm font-semibold leading-7 text-primary">
                Cuanto antes se detecta una inconsistencia, menor es el costo de
                corregirla.
              </p>
            </div>

            <ProductVisual
              label="Prestación como transacción conectada"
              filename="connected-care-transaction.png"
              bodyClassName="relative min-h-[32rem]"
            >
              <div
                role="img"
                aria-label="La prestación central se conecta con el paciente, profesional, financiador, práctica, autorización y documentación."
                className="relative mx-auto hidden h-[27rem] max-w-2xl sm:block"
              >
                {[
                  "left-[20%] top-[24%] w-[30%] rotate-[23deg]",
                  "left-[49%] top-[24%] w-[30%] -rotate-[23deg]",
                  "left-[16%] top-[52%] w-[34%] -rotate-[18deg]",
                  "left-[49%] top-[52%] w-[35%] rotate-[18deg]",
                  "left-[28%] top-[72%] w-[22%] -rotate-[36deg]",
                  "left-[49%] top-[72%] w-[23%] rotate-[36deg]",
                ].map((line) => (
                  <span
                    key={line}
                    className={`absolute h-px origin-left bg-gradient-to-r from-secondary/35 to-primary/35 ${line}`}
                    aria-hidden="true"
                  />
                ))}

                {[
                  {
                    label: "Paciente",
                    value: "¿A quién?",
                    icon: UserRound,
                    position: "left-[3%] top-[8%]",
                  },
                  {
                    label: "Profesional",
                    value: "¿Quién atendió?",
                    icon: UsersRound,
                    position: "right-[3%] top-[8%]",
                  },
                  {
                    label: "Financiador",
                    value: "¿Quién cubre?",
                    icon: Building2,
                    position: "left-0 top-[55%]",
                  },
                  {
                    label: "Práctica",
                    value: "¿Qué realizó?",
                    icon: Layers3,
                    position: "right-0 top-[55%]",
                  },
                  {
                    label: "Autorización",
                    value: "¿Está autorizada?",
                    icon: BadgeCheck,
                    position: "left-[17%] bottom-0",
                  },
                  {
                    label: "Documentación",
                    value: "¿Cumple requisitos?",
                    icon: FileCheck2,
                    position: "right-[16%] bottom-0",
                  },
                ].map((node) => {
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.label}
                      className={`absolute w-40 rounded-xl border border-border/80 bg-white p-4 shadow-[0_12px_30px_rgba(14,60,117,0.08)] ${node.position}`}
                    >
                      <Icon className="size-4 text-primary" strokeWidth={1.7} />
                      <p className="mt-4 text-xs font-semibold">{node.label}</p>
                      <p className="mt-1 text-[9px] text-muted-foreground">
                        {node.value}
                      </p>
                    </div>
                  );
                })}

                <div className="absolute left-1/2 top-1/2 z-10 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary p-6 text-center text-white shadow-[0_20px_50px_rgba(14,60,117,0.28)]">
                  <GitBranch className="mx-auto size-5 text-accent" />
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.14em] text-accent/75">
                    Transacción
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    Prestación #28491
                  </p>
                  <p className="mt-2 text-[9px] text-white/50">
                    Lista para validar
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:hidden">
                {[
                  "Paciente ↔ Profesional",
                  "Financiador ↔ Práctica",
                  "Autorización ↔ Documentación",
                ].map((connection) => (
                  <div
                    key={connection}
                    className="rounded-xl border border-border/80 bg-muted/60 p-4 text-center text-xs font-semibold"
                  >
                    {connection}
                  </div>
                ))}
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Inteligencia pre-facturación"
            title="Detectá problemas antes de facturar."
            copy="Las reglas que determinan si una prestación puede cobrarse no deberían vivir en planillas, instructivos o en la memoria de los administrativos. Zonda aplica las reglas de cada financiador y detecta inconsistencias antes de que lleguen a facturación."
            className="max-w-5xl"
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {preBillingRules.map((rule) => (
              <span
                key={rule}
                className="rounded-full border border-border/80 bg-white px-4 py-2 text-xs font-semibold text-muted-foreground"
              >
                {rule}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ProductVisual
              label="Prestación #28491 · Validación completa"
              filename="pre-billing-validation-ready.png"
              className="border-[#8bd6b9]/55"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#287658]">
                    Ready
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    Lista para presentar
                  </p>
                </div>
                <CheckCircle2 className="size-8 text-[#287658]" />
              </div>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  "Cobertura válida",
                  "Código correcto",
                  "Autorización encontrada",
                  "Documentación completa",
                  "Frecuencia válida",
                  "Reglas de presentación cumplidas",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-[#f3faf7] p-3 text-[10px] font-semibold"
                  >
                    <Check className="size-3.5 shrink-0 text-[#287658]" />
                    {item}
                  </div>
                ))}
              </div>
            </ProductVisual>

            <ProductVisual
              label="Prestación #28496 · Excepción"
              filename="pre-billing-validation-exception.png"
              className="border-[#e8b63c]/55"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8b620b]">
                    Atención requerida
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    Falta autorización
                  </p>
                </div>
                <CircleAlert className="size-8 text-[#9a6800]" />
              </div>
              <div className="mt-6 rounded-xl border border-[#e8b63c]/40 bg-[#fffaf0] p-5">
                <p className="text-xs font-semibold">
                  El sistema detuvo el avance antes de billing.
                </p>
                <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
                  Completá la autorización o revisá la cobertura para resolver
                  la excepción.
                </p>
              </div>
              <button className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-xs font-semibold text-white">
                Resolver excepción
                <ArrowRight className="size-3.5" />
              </button>
            </ProductVisual>
          </div>

          <p className="mx-auto mt-12 max-w-5xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl">
            No corrijas débitos después. Evitalos antes de presentar.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-36 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,111,253,0.3),transparent_68%)] blur-2xl"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <SectionIntro
              inverse
              eyebrow="Infraestructura multi-financiador"
              title="Un solo flujo. Múltiples financiadores."
              copy="Cada financiador puede tener reglas, sistemas y formas de presentación diferentes. Zonda absorbe esa complejidad para que la organización trabaje sobre un flujo común."
              className="max-w-xl"
            />

            <ProductVisual
              inverse
              label="Múltiples financiadores · un revenue workflow"
              filename="multi-payer-revenue-infrastructure.png"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Financiador A", "Token + API"],
                  ["Financiador B", "Orden + archivo"],
                  ["Financiador C", "Autorización digital"],
                  ["Financiador D", "Documentación particular"],
                ].map(([payer, method]) => (
                  <div
                    key={payer}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-white/80">
                        {payer}
                      </p>
                      <Network className="size-3.5 text-[#77dcff]" />
                    </div>
                    <p className="mt-2 text-[10px] text-white/45">{method}</p>
                  </div>
                ))}
              </div>
              <FlowArrow inverse />
              <div className="rounded-2xl border border-accent/30 bg-primary p-6 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                  Zonda
                </p>
                <p className="mt-2 font-display text-2xl font-semibold">
                  Un único revenue workflow
                </p>
              </div>
              <Link
                href="/casos-de-uso/atencion-multi-financiador"
                className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Ver Atención multi-financiador
                <ArrowRight className="size-4 text-accent" />
              </Link>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Automatización"
            title="De prestaciones listas para facturar a presentaciones listas para cobrar."
            copy="Una vez validada, cada prestación puede avanzar automáticamente hacia el proceso correspondiente. Zonda organiza las prestaciones, prepara la información requerida y se conecta con los mecanismos de presentación disponibles."
            className="max-w-5xl"
          />

          <ProductVisual
            label="Procesamiento automático de prestaciones"
            filename="billing-automation-flow.png"
            className="mt-14"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="rounded-2xl bg-primary p-6 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Prestaciones realizadas
                </p>
                <p className="mt-3 font-display text-5xl font-semibold text-accent">
                  —
                </p>
                <div className="mt-7 grid grid-cols-5 gap-1.5">
                  {Array.from({ length: 20 }, (_, index) => (
                    <span
                      key={index}
                      className={`aspect-square rounded-[0.3rem] ${
                        index > 16 ? "bg-[#ffdd82]" : "bg-[#77dcff]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <FlowArrow />
              <div className="space-y-3">
                <div className="rounded-2xl border border-[#8bd6b9]/50 bg-[#effbf7] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#287658]">
                        Listas para presentar
                      </p>
                      <p className="mt-2 font-display text-3xl font-semibold text-[#195c4a]">
                        —
                      </p>
                    </div>
                    <CheckCircle2 className="size-6 text-[#287658]" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#e8b63c]/45 bg-[#fffaf0] p-4">
                    <p className="font-display text-2xl font-semibold text-[#8b620b]">
                      —
                    </p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                      Requieren documentación
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#e8b63c]/45 bg-[#fffaf0] p-4">
                    <p className="font-display text-2xl font-semibold text-[#8b620b]">
                      —
                    </p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                      Tienen una inconsistencia
                    </p>
                  </div>
                </div>
                <button className="flex h-11 w-full items-center justify-between rounded-xl bg-primary px-4 text-xs font-semibold text-white">
                  Ver excepciones
                  <ArrowRight className="size-3.5 text-accent" />
                </button>
              </div>
            </div>
          </ProductVisual>

          <p className="mx-auto mt-10 max-w-4xl text-center font-display text-2xl font-semibold sm:text-3xl">
            Automatizá lo normal. Intervení en lo excepcional.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            eyebrow="Revenue flow"
            title="Seguí el dinero, no las planillas."
            copy="La presentación no es el final. Zonda mantiene conectada cada prestación con la respuesta del financiador, los débitos recibidos, el dinero cobrado y la liquidación correspondiente."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Flujo financiero conectado"
            filename="revenue-flow-visibility.png"
            className="mt-14"
            bodyClassName="overflow-x-auto"
          >
            <div className="min-w-[820px]">
              <div className="grid grid-cols-[repeat(9,minmax(0,1fr))] items-center gap-2">
                {[
                  ["Realizado", "Prestaciones incompletas"],
                  ["Facturado", "Diferencias"],
                  ["Aprobado", "Débitos"],
                  ["Cobrado", "Cobros pendientes"],
                  ["Liquidado", "Pendiente"],
                ].map(([stage, leakage], index, stages) => (
                  <div key={stage} className="contents">
                    <div
                      className={`rounded-2xl border p-5 text-center ${
                        index === stages.length - 1
                          ? "border-secondary/25 bg-[#edf4ff]"
                          : "border-border/80 bg-white"
                      }`}
                    >
                      <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-primary/25">
                        $ —
                      </p>
                      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {stage}
                      </p>
                    </div>
                    {index < stages.length - 1 ? (
                      <div className="text-center">
                        <ArrowRight className="mx-auto size-4 text-primary/25" />
                        <span className="mt-2 block text-[8px] font-semibold leading-3 text-[#9a6800]">
                          {leakage}
                        </span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-primary p-4 text-white">
                <span className="text-xs font-semibold">
                  Visibilidad del revenue entre etapas
                </span>
                <span className="rounded-full bg-accent px-3 py-1.5 text-[9px] font-bold uppercase text-accent-foreground">
                  Datos reales pendientes
                </span>
              </div>
            </div>
          </ProductVisual>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(31,212,245,0.16),transparent_35%)]"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <SectionIntro
              inverse
              eyebrow="Débitos y conciliación"
              title="Entendé cada diferencia."
              copy="Cuando un financiador paga menos o aplica un débito, Zonda conecta esa diferencia con la prestación original y mantiene el motivo dentro de la misma transacción. Así podés detectar patrones y entender dónde se generan pérdidas."
              className="max-w-xl"
            />

            <ProductVisual
              inverse
              label="Análisis de diferencias"
              filename="debits-reconciliation-detail.png"
            >
              <div className="grid gap-6 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-3">
                  {[
                    ["Presentado", "100%", "bg-[#77dcff]"],
                    ["Débitos", "—", "bg-[#ffb98e]"],
                    ["Pendiente", "—", "bg-[#ffdd82]"],
                    ["Reconocido", "—", "bg-[#82d7b5]"],
                  ].map(([label, value, color]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-semibold text-white/65">
                          {label}
                        </span>
                        <span className="font-mono text-white/40">{value}</span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full w-3/4 rounded-full ${color}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Motivos de débito
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "Autorización faltante",
                      "Documentación incompleta",
                      "Código incorrecto",
                      "Fuera de frecuencia",
                      "Otros",
                    ].map((reason) => (
                      <div
                        key={reason}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] p-3"
                      >
                        <span className="text-[10px] font-medium text-white/65">
                          {reason}
                        </span>
                        <span className="font-mono text-[9px] text-accent/55">
                          —%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Por financiador",
                  "Por práctica",
                  "Por profesional",
                  "Evitables",
                  "Tiempo a resolución",
                  "Por motivo",
                ].map((view) => (
                  <span
                    key={view}
                    className="rounded-lg bg-white/[0.05] px-2 py-3 text-center text-[9px] font-semibold text-white/45"
                  >
                    {view}
                  </span>
                ))}
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            eyebrow="Liquidación a profesionales"
            title="Del cobro a la liquidación, sin romper el flujo."
            copy="El mismo dato que origina la facturación puede utilizarse para determinar qué corresponde liquidar a cada profesional. Zonda conecta prestaciones, respuestas del financiador y pagos para mantener la trazabilidad."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Continuidad de la transacción"
            filename="provider-settlement-flow.png"
            className="mt-14"
            bodyClassName="overflow-x-auto"
          >
            <div className="min-w-[760px] grid grid-cols-[repeat(11,minmax(0,1fr))] items-center gap-2">
              {[
                { label: "Prestación", icon: Layers3 },
                { label: "Monto reconocido", icon: BadgeCheck },
                { label: "Regla de liquidación", icon: SlidersHorizontal },
                { label: "Profesional", icon: UserRound },
                { label: "Liquidación", icon: GitBranch },
                { label: "Pago", icon: CheckCircle2 },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="contents">
                    <div
                      className={`flex min-h-28 flex-col items-center justify-center rounded-xl border p-3 text-center ${
                        index === 0 || index === 5
                          ? "border-secondary/25 bg-[#edf4ff]"
                          : "border-border/80 bg-white"
                      }`}
                    >
                      <Icon className="size-4 text-primary" strokeWidth={1.7} />
                      <span className="mt-4 text-[9px] font-semibold leading-4">
                        {step.label}
                      </span>
                    </div>
                    {index < 5 ? (
                      <ArrowRight className="mx-auto size-4 text-primary/25" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </ProductVisual>
        </div>
      </section>

      <section
        id="inteligencia-operativa"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Revenue intelligence"
            title="Convertí el ciclo de ingresos en datos."
            copy="Cuando cada etapa está conectada, ya no necesitás esperar al cierre del mes para reconstruir qué pasó. Zonda transforma el revenue cycle en información operativa en tiempo real."
            className="max-w-5xl"
          />

          <ProductVisual
            label="Revenue command center"
            filename="revenue-cycle-command-center.png"
            className="mt-14"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {revenueQuestions.map((question) => {
                const Icon = question.icon;

                return (
                  <article
                    key={question.title}
                    className="rounded-2xl border border-border/80 bg-white p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-muted text-primary">
                        <Icon className="size-4" strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-2xl font-semibold text-primary/20">
                        —
                      </span>
                    </div>
                    <h3 className="mt-7 text-sm font-semibold">
                      {question.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {question.copy}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-2xl bg-primary p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                      Movimiento del ciclo
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold">
                      Realizado vs. facturado vs. cobrado
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white/50">
                    En tiempo real
                  </span>
                </div>
                <div className="mt-8 flex h-28 items-end gap-2">
                  {[44, 62, 55, 78, 68, 84, 73, 92, 81, 88, 76, 94].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-gradient-to-t from-secondary/55 to-[#77dcff]/70"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Aging", "Pendiente", "Conciliación", "Liquidaciones"].map(
                  (label) => (
                    <DataPlaceholder key={label} label={label} />
                  ),
                )}
              </div>
            </div>
          </ProductVisual>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <SectionIntro
              eyebrow="Inteligencia operativa"
              title="No mires solamente qué pasó. Sabé qué necesita atención."
              copy="Zonda detecta situaciones que requieren intervención dentro del ciclo y lleva al equipo directamente al problema."
              className="max-w-xl"
            />

            <ProductVisual
              label="Situaciones accionables"
              filename="revenue-action-feed.png"
            >
              <div className="space-y-3">
                {[
                  {
                    title: "Prestaciones próximas a vencer",
                    copy: "Revisá las transacciones antes de su fecha límite de presentación.",
                    action: "Revisar prestaciones",
                    icon: Clock3,
                  },
                  {
                    title: "Autorizaciones pendientes",
                    copy: "Completá los requisitos que bloquean el avance del ciclo.",
                    action: "Completar documentación",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Cambio en el patrón de débitos",
                    copy: "Investigá el financiador y las causas que explican la variación.",
                    action: "Ver financiador",
                    icon: TrendingDown,
                  },
                  {
                    title: "Cobros pendientes de conciliación",
                    copy: "Conectá el pago recibido con las prestaciones correspondientes.",
                    action: "Investigar diferencia",
                    icon: Link2,
                  },
                ].map((alert, index) => {
                  const Icon = alert.icon;

                  return (
                    <article
                      key={alert.title}
                      className="grid gap-4 rounded-2xl border border-border/80 bg-white p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                    >
                      <span
                        className={`flex size-10 items-center justify-center rounded-xl ${
                          index === 2
                            ? "bg-[#fff0dd] text-[#9a5600]"
                            : "bg-muted text-primary"
                        }`}
                      >
                        <Icon className="size-4" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-xs font-semibold">{alert.title}</h3>
                        <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                          {alert.copy}
                        </p>
                      </div>
                      <button className="inline-flex items-center gap-2 text-[10px] font-semibold text-primary">
                        {alert.action}
                        <ArrowRight className="size-3" />
                      </button>
                    </article>
                  );
                })}
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(31,212,245,0.2),transparent_68%)] blur-2xl"
        />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            inverse
            eyebrow="Capacidades de plataforma"
            title="Una infraestructura para todo el ciclo de ingresos."
            copy="Las capacidades trabajan conectadas sobre la misma transacción. No son módulos aislados ni un nuevo ERP."
            className="max-w-4xl"
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {platformCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="min-h-64 bg-[#0b1422] p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.07] text-accent">
                      <Icon className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#77dcff]">
                      Connected capability
                    </span>
                  </div>
                  <h3 className="mt-9 font-display text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                    {capability.copy}
                  </p>
                </article>
              );
            })}
          </div>

          <nav
            aria-label="Páginas relacionadas"
            className="mt-10 flex flex-wrap gap-2"
          >
            {[
              [
                "Atención multi-financiador",
                "/casos-de-uso/atencion-multi-financiador",
              ],
              ["Fraud & Risk Prevention", "/use-cases/fraud-risk-prevention"],
              ["Operational Intelligence", "#inteligencia-operativa"],
              ["Customer Story", "#customer-story"],
              ["Zonda Platform", "/#plataforma"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/60 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-ring"
              >
                {label}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section
        id="customer-story"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Customer story"
            title="Cómo [CLIENTE] está transformando su ciclo de ingresos con Zonda."
            className="max-w-5xl"
          />

          <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_24px_70px_rgba(14,60,117,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-primary p-7 text-white sm:p-9 lg:p-12">
              <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.06] p-5 text-center">
                <div>
                  <p className="font-display text-xl font-semibold">
                    Logo cliente
                  </p>
                  <p className="mt-2 font-mono text-[9px] text-white/40">
                    Placeholder · revenue-customer-logo.svg
                  </p>
                </div>
              </div>
              <div className="mt-8 min-h-36 rounded-2xl border border-dashed border-white/20 p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Quote pendiente
                </p>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  Obtener una frase real sobre el problema y el cambio producido.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-base leading-8 text-foreground">
                El cliente trabaja entre una red de profesionales y múltiples
                financiadores. Antes recibía prestaciones en formatos distintos
                y necesitaba volver a revisar y cargar la información de forma
                manual.
              </p>
              <p className="mt-5 text-base font-semibold leading-8 text-primary">
                Zonda está conectando el registro con la validación,
                facturación, presentación, respuesta, conciliación y
                liquidación.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <DataPlaceholder label="Carga administrativa" />
                <DataPlaceholder label="Débitos evitables" />
                <DataPlaceholder label="Horas ahorradas" />
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Prestaciones mensuales",
              "Cantidad de financiadores",
              "Cantidad de profesionales",
              "Tiempo hasta presentación",
              "Tiempo hasta cobro",
              "Revenue recuperado",
            ].map((metric) => (
              <MetricSlot
                key={metric}
                label={metric}
                supportText="Métrica real pendiente"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
          <div>
            <SectionIntro
              eyebrow="Use case relacionado"
              title="Mejor revenue empieza en el punto de atención."
              copy="Muchos problemas de facturación nacen antes de que comience la facturación. Con Zonda, los profesionales registran y validan prestaciones bajo las reglas de múltiples financiadores desde una única experiencia."
              className="max-w-xl"
            />
            <Link
              href="/casos-de-uso/atencion-multi-financiador"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Conocer Atención multi-financiador
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ProductVisual
            label="Point of care → revenue cycle"
            filename="point-of-care-to-revenue.png"
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <div className="rounded-2xl border border-border/80 bg-white p-5 text-center">
                <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                  <UserRound className="size-4.5" />
                </div>
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Point of care
                </p>
                <p className="mt-2 text-xs font-semibold">
                  Profesional + paciente
                </p>
              </div>
              <FlowArrow />
              <div className="rounded-2xl bg-primary p-5 text-center text-white">
                <ShieldCheck className="mx-auto size-5 text-accent" />
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.14em] text-accent/75">
                  Zonda
                </p>
                <p className="mt-2 text-xs font-semibold">
                  Prestación validada
                </p>
              </div>
              <FlowArrow />
              <div className="rounded-2xl border border-secondary/20 bg-[#edf4ff] p-5 text-center">
                <GitBranch className="mx-auto size-5 text-primary" />
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.14em] text-secondary">
                  Revenue cycle
                </p>
                <p className="mt-2 text-xs font-semibold">
                  Facturación + cobro + liquidación
                </p>
              </div>
            </div>
          </ProductVisual>
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
            Hacé que cada prestación cuente.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Conectá atención, validación, facturación, cobro y liquidación en un
            único flujo.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" asChild>
              <Link href="#contacto">
                Hablar con nuestro equipo
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="inverse"
              size="lg"
              className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
              asChild
            >
              <Link href="/#plataforma">Conocer la plataforma</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
