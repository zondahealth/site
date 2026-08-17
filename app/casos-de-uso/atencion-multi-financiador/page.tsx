import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Braces,
  Check,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  FileText,
  Fingerprint,
  GitBranch,
  KeyRound,
  Layers3,
  Network,
  RefreshCcw,
  Repeat2,
  Route,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  UserRound,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button/button";
import {
  MetricSlot,
  ProductVisual,
  SectionIntro,
} from "@/components/use-cases/UseCasePrimitives";

export const metadata: Metadata = {
  title: "Atención multi-financiador en salud | Zonda",
  description:
    "Simplificá la operación de profesionales que trabajan con múltiples financiadores. Zonda aplica reglas, validaciones y requisitos automáticamente desde el punto de atención.",
  keywords: [
    "atención multi financiador",
    "healthcare interoperability",
    "validación prestación proveedores salud",
    "integración financiadores salud",
    "healthcare workflows",
  ],
};

const payerExamples = [
  {
    name: "Paciente OS A",
    requirements: ["Token", "Autorización", "Orden médica", "Firma digital"],
  },
  {
    name: "Paciente OS B",
    requirements: ["Elegibilidad", "Frecuencia", "Código de práctica"],
  },
  {
    name: "Paciente OS C",
    requirements: ["Documentación adicional", "Validación de cobertura"],
  },
] as const;

const capabilityCards = [
  {
    title: "Elegibilidad",
    copy: "Verificá que el paciente pueda recibir la atención bajo esa cobertura.",
    icon: BadgeCheck,
  },
  {
    title: "Autorizaciones",
    copy: "Validá requisitos previos antes de realizar o cerrar una prestación.",
    icon: KeyRound,
  },
  {
    title: "Reglas de práctica",
    copy: "Aplicá nomencladores, códigos y condiciones específicas.",
    icon: Braces,
  },
  {
    title: "Documentación",
    copy: "Capturá la evidencia requerida por cada financiador.",
    icon: FileText,
  },
  {
    title: "Frecuencias",
    copy: "Controlá límites y condiciones particulares.",
    icon: Repeat2,
  },
  {
    title: "Validaciones digitales",
    copy: "Integrá tokens, firmas u otros mecanismos requeridos.",
    icon: Fingerprint,
  },
] as const;

const operationalInsights = [
  {
    title: "Volumen de atención",
    copy: "Cuánto se está realizando.",
    icon: Layers3,
  },
  {
    title: "Excepciones",
    copy: "Qué prestaciones requieren intervención.",
    icon: CircleAlert,
  },
  {
    title: "Cumplimiento",
    copy: "Dónde existen problemas recurrentes.",
    icon: ClipboardCheck,
  },
  {
    title: "Financiadores",
    copy: "Cómo se comporta cada cobertura.",
    icon: Split,
  },
  {
    title: "Profesionales",
    copy: "Patrones operativos y calidad del registro.",
    icon: UsersRound,
  },
] as const;

const platformCapabilities = [
  {
    eyebrow: "Payer rules",
    title: "Reglas centralizadas",
    copy: "Centralizá reglas, nomencladores, requisitos y validaciones.",
    icon: Settings2,
  },
  {
    eyebrow: "Provider experience",
    title: "Una única experiencia",
    copy: "Una forma consistente de registrar atención para toda la red.",
    icon: Smartphone,
  },
  {
    eyebrow: "Care validation",
    title: "Validación en origen",
    copy: "Validá requisitos antes de cerrar cada prestación.",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Connected transactions",
    title: "Datos que continúan",
    copy: "Conectá la atención con los procesos administrativos y financieros posteriores.",
    icon: GitBranch,
  },
] as const;

function DownArrow({ inverse = false }: { inverse?: boolean }) {
  return (
    <ArrowRight
      className={`mx-auto size-4 rotate-90 ${
        inverse ? "text-white/30" : "text-primary/25"
      }`}
      aria-hidden="true"
    />
  );
}

function RuleChip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[9px] font-medium text-white/60">
      {children}
    </span>
  );
}

export default function AtencionMultiFinanciadorPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 pb-20 pt-32 text-white sm:px-10 sm:pb-24 sm:pt-40 lg:px-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_17%_14%,rgba(34,111,253,0.4),transparent_31%),radial-gradient(circle_at_86%_62%,rgba(31,212,245,0.17),transparent_28%),linear-gradient(145deg,#07172d_0%,#0a2d58_54%,#07172d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              <Workflow className="size-3.5 text-accent" aria-hidden="true" />
              Atención multi-financiador
            </p>
            <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Una sola forma de trabajar, sin importar el{" "}
              <span className="text-accent">financiador.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg lg:text-xl">
              Registrá y validá prestaciones de múltiples financiadores desde
              una única experiencia. Zonda identifica quién financia la
              atención, aplica automáticamente sus reglas y guía al profesional
              para capturar todo lo necesario desde el punto de atención.
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
            label="Provider → Zonda → múltiples financiadores"
            filename="multi-payer-provider-workflow.png"
            className="mt-16 lg:mt-20"
          >
            <div
              role="img"
              aria-label="Un profesional usa un único workflow en Zonda, mientras la plataforma aplica automáticamente requisitos diferentes para múltiples financiadores."
              className="grid gap-5 lg:grid-cols-[0.9fr_auto_1.1fr_auto_1.4fr] lg:items-center"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-white/10 text-[#77dcff]">
                  <UserRound className="size-5" strokeWidth={1.7} />
                </span>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Provider
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  Registra la atención una vez
                </p>
              </div>

              <DownArrow inverse />

              <div className="relative overflow-hidden rounded-2xl border border-accent/35 bg-primary p-6 shadow-[0_0_55px_rgba(31,212,245,0.13)]">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-44 rounded-full bg-secondary/25 blur-3xl"
                />
                <div className="relative">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-accent">
                    <Workflow className="size-5" strokeWidth={1.7} />
                  </span>
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-accent/75">
                    Zonda
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    Un único workflow para el profesional
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <RuleChip>Identifica cobertura</RuleChip>
                    <RuleChip>Aplica reglas</RuleChip>
                    <RuleChip>Guía el registro</RuleChip>
                  </div>
                </div>
              </div>

              <DownArrow inverse />

              <div className="space-y-2">
                {payerExamples.map((payer) => (
                  <div
                    key={payer.name}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-white/80">
                        {payer.name}
                      </p>
                      <span className="text-[8px] font-bold uppercase tracking-wide text-[#77dcff]">
                        Reglas propias
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {payer.requirements.map((requirement) => (
                        <RuleChip key={requirement}>{requirement}</RuleChip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ProductVisual>

          <p className="mx-auto mt-9 max-w-3xl text-center font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            One workflow. Multiple payers.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
            <SectionIntro
              eyebrow="El problema"
              title="Cada financiador funciona distinto. El profesional no debería tener que hacerlo."
              copy="Un mismo profesional puede trabajar con múltiples financiadores durante el día. La complejidad administrativa termina trasladándose a quien debería estar concentrado en brindar atención."
              className="max-w-xl"
            />

            <div>
              <p className="text-lg leading-8 text-foreground">
                Recordar procesos diferentes, completar información adicional,
                utilizar distintos sistemas y resolver errores posteriormente
                no debería ser parte del trabajo clínico.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ProductVisual
                  label="Antes"
                  filename="payer-workflows-before.png"
                  className="shadow-none"
                >
                  <div className="text-center">
                    <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                      <UserRound className="size-4.5" />
                    </span>
                    <p className="mt-3 text-xs font-semibold">Provider</p>
                    <DownArrow />
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {["Payer A", "Payer B", "Payer C", "Payer D"].map(
                        (payer) => (
                          <div
                            key={payer}
                            className="rounded-xl border border-[#e5a965]/45 bg-[#fff8ef] p-3 text-[10px] font-semibold text-[#71430d]"
                          >
                            {payer} rules
                          </div>
                        ),
                      )}
                    </div>
                    <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
                      El profesional interpreta cada proceso.
                    </p>
                  </div>
                </ProductVisual>

                <ProductVisual
                  label="Después"
                  filename="payer-workflows-after.png"
                  className="border-secondary/20 shadow-none"
                >
                  <div className="text-center">
                    <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                      <UserRound className="size-4.5" />
                    </span>
                    <p className="mt-3 text-xs font-semibold">Provider</p>
                    <DownArrow />
                    <div className="mt-2 rounded-xl bg-primary p-4 text-white">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-accent">
                        Zonda
                      </p>
                      <p className="mt-2 text-xs font-semibold">
                        Una experiencia
                      </p>
                    </div>
                    <DownArrow />
                    <div className="rounded-xl border border-[#85d5c0]/50 bg-[#effbf7] p-3 text-[10px] font-semibold text-[#195c4a]">
                      Multiple payer rules
                    </div>
                    <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
                      Zonda interpreta la complejidad.
                    </p>
                  </div>
                </ProductVisual>
              </div>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[1.5rem] border border-border/80 sm:grid-cols-2">
            <div className="bg-white p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Zonda no suma otra carga
              </p>
              <p className="mt-4 max-w-xl font-display text-xl font-semibold leading-relaxed">
                No es una app de carga, un formulario digital ni el reemplazo
                de cada sistema de financiador.
              </p>
            </div>
            <div className="bg-primary p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                Zonda crea la capa común
              </p>
              <p className="mt-4 max-w-xl font-display text-xl font-semibold leading-relaxed">
                Es la infraestructura que abstrae reglas diferentes y hace que
                cada prestación nazca correctamente estructurada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Reglas y requisitos"
            title="Las reglas viven en Zonda. No en la cabeza del profesional."
            copy="Cada financiador tiene una lógica diferente. Zonda conoce qué información y validaciones corresponden en cada caso y presenta al profesional únicamente lo que necesita completar."
            className="max-w-4xl"
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/80 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="min-h-56 bg-white p-6 sm:p-7"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-primary">
                    <Icon className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-7 font-display text-lg font-semibold">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {capability.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <SectionIntro
              eyebrow="Antes de la atención"
              title="Sabé qué necesitás antes de empezar."
              copy="Muchos problemas administrativos aparecen después de la atención. Una documentación incompleta o una prestación fuera de frecuencia puede convertirse semanas después en una corrección, demora o débito. Zonda identifica los requisitos antes de cerrar la atención."
              className="max-w-xl"
            />

            <ProductVisual
              label="Checklist dinámico de atención"
              filename="dynamic-payer-requirements-checklist.png"
            >
              <div className="grid gap-4 sm:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-2xl bg-muted/70 p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Contexto
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Paciente", "Paciente 8F21"],
                      ["Financiador", "OS A"],
                      ["Prestación", "Práctica 4201"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[9px] text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-secondary/15 bg-white p-3 text-[10px] font-semibold text-primary">
                    Financiador identificado
                  </div>
                </div>

                <div className="rounded-2xl border border-border/80 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-secondary">
                        Reglas aplicadas
                      </p>
                      <p className="mt-2 font-display text-lg font-semibold">
                        Requisitos para completar
                      </p>
                    </div>
                    <span className="rounded-full bg-[#d9f5e9] px-3 py-1.5 text-[9px] font-bold uppercase text-[#176344]">
                      Listo
                    </span>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Cobertura válida",
                      "Autorización encontrada",
                      "Documentación requerida",
                      "Prestación habilitada",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-[#f3faf7] p-3 text-xs font-semibold"
                      >
                        <span className="flex size-6 items-center justify-center rounded-full bg-[#d9f5e9] text-[#176344]">
                          <Check className="size-3.5" strokeWidth={2.4} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-36 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,111,253,0.3),transparent_68%)] blur-2xl"
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
            <SectionIntro
              inverse
              eyebrow="En el punto de atención"
              title="Registrá la atención una sola vez."
              copy="El profesional documenta lo ocurrido durante la atención. Zonda adapta automáticamente la experiencia según paciente, práctica y financiador. No hace falta cambiar de sistema, recordar procesos distintos, duplicar información ni volver a cargar datos."
              className="max-w-xl"
            />

            <ProductVisual
              inverse
              label="Experiencia del profesional"
              filename="provider-care-mobile-app.png"
              className="mx-auto w-full max-w-2xl"
              bodyClassName="flex justify-center py-8 sm:py-10"
            >
              <div className="w-full max-w-sm rounded-[2rem] border border-white/15 bg-[#0e1828] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
                <div className="rounded-[1.45rem] bg-[#f7f9fd] p-5 text-foreground">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-semibold text-muted-foreground">
                        Atención en curso
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold">
                        Registrar prestación
                      </p>
                    </div>
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
                      <UserRound className="size-4" />
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(14,60,117,0.06)]">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        ["Paciente", "Paciente 8F21"],
                        ["Financiador", "OS A"],
                        ["Prestación", "Práctica 4201"],
                        ["Profesional", "Profesional 472"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {label}
                          </p>
                          <p className="mt-1.5 text-[10px] font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl border border-secondary/15 bg-[#edf4ff] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-accent">
                        <Sparkles className="size-3.5" />
                      </span>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wide text-secondary">
                          Validaciones OS A
                        </p>
                        <p className="mt-1 text-[10px] font-semibold">
                          4 de 4 requisitos completos
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-xs font-semibold text-white">
                    Cerrar atención
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </ProductVisual>
          </div>

          <p className="mx-auto mt-12 max-w-4xl text-center font-display text-3xl font-semibold text-white sm:text-4xl">
            Una atención. Un registro. Un único workflow.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            centered
            eyebrow="Validación en tiempo real"
            title="Detectá lo que falta antes de cerrar la atención."
            copy="Zonda valida la información necesaria antes de que la prestación avance. Los errores aparecen cuando todavía pueden resolverse."
            className="max-w-4xl"
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            <ProductVisual
              label="Estado · Ready"
              filename="care-validation-ready.png"
              className="border-[#8bd6b9]/55"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#287658]">
                    Prestación lista
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    Puede avanzar
                  </p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-full bg-[#d9f5e9] text-[#176344]">
                  <CheckCircle2 className="size-5" />
                </span>
              </div>
              <div className="mt-7 space-y-2">
                {[
                  "Paciente elegible",
                  "Autorización válida",
                  "Práctica cubierta",
                  "Documentación completa",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f3faf7] p-3 text-xs font-semibold"
                  >
                    <Check className="size-3.5 text-[#287658]" strokeWidth={2.4} />
                    {item}
                  </div>
                ))}
              </div>
            </ProductVisual>

            <ProductVisual
              label="Estado · Exception"
              filename="care-validation-exception.png"
              className="border-[#e8b63c]/55"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8b620b]">
                    Requiere acción
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">
                    Falta autorización
                  </p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-full bg-[#ffebba] text-[#8b620b]">
                  <CircleAlert className="size-5" />
                </span>
              </div>
              <div className="mt-7 rounded-xl border border-[#e8b63c]/45 bg-[#fffaf0] p-4">
                <p className="text-xs font-semibold">
                  Este financiador requiere autorización previa para la práctica
                  seleccionada.
                </p>
                <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
                  La prestación queda en borrador hasta completar el requisito.
                </p>
              </div>
              <button className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-xs font-semibold text-white">
                Resolver ahora
                <ArrowRight className="size-3.5" />
              </button>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <SectionIntro
              eyebrow="Capa de abstracción"
              title="Una experiencia para el profesional. Todas las reglas por detrás."
              copy="Cada financiador puede mantener sus propios sistemas y procesos. Zonda conecta esa diversidad dentro de una infraestructura común."
              className="max-w-xl"
            />

            <ProductVisual
              label="Capa de complejidad por financiador"
              filename="payer-complexity-layer.png"
            >
              <div
                role="img"
                aria-label="APIs, portales, archivos, tokens, órdenes y firmas de múltiples financiadores se conectan con Zonda y se transforman en un único workflow para el profesional."
              >
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {[
                    ["API", Code2],
                    ["Portal", Blocks],
                    ["Archivo", FileText],
                    ["Token", KeyRound],
                    ["Orden", FileCheck2],
                    ["Firma", Fingerprint],
                  ].map(([label, Icon]) => (
                    <div
                      key={label as string}
                      className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-border/80 bg-muted/60 p-3 text-center"
                    >
                      <Icon className="size-4 text-primary" strokeWidth={1.8} />
                      <span className="mt-3 text-[10px] font-semibold">
                        {label as string}
                      </span>
                    </div>
                  ))}
                </div>
                <DownArrow />
                <div className="rounded-2xl bg-primary p-6 text-center text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                    Zonda
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold">
                    Normaliza sistemas, reglas y requisitos
                  </p>
                </div>
                <DownArrow />
                <div className="rounded-2xl border border-[#85d5c0]/55 bg-[#effbf7] p-5 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#287658]">
                    Provider workflow
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    Una experiencia consistente
                  </p>
                </div>
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#060b14] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_55%_45%,rgba(34,111,253,0.2),transparent_42%)]"
        />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            inverse
            centered
            eyebrow="Escala de red"
            title="Una sola experiencia para toda la red."
            copy="Cuando cientos o miles de profesionales trabajan con múltiples financiadores, estandarizar la operación se vuelve complejo. Zonda permite que toda la red trabaje de la misma manera mientras la plataforma maneja las diferencias."
            className="max-w-4xl"
          />

          <ProductVisual
            inverse
            label="Operación estandarizada en toda la red"
            filename="multi-payer-provider-network.png"
            className="mx-auto mt-14 max-w-5xl"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_0.8fr_auto_1fr] lg:items-center">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }, (_, index) => (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/50"
                  >
                    <UserRound className="size-4" strokeWidth={1.6} />
                  </div>
                ))}
              </div>
              <DownArrow inverse />
              <div className="rounded-2xl border border-accent/30 bg-primary p-6 text-center">
                <Network className="mx-auto size-6 text-accent" strokeWidth={1.6} />
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-accent/75">
                  Zonda
                </p>
                <p className="mt-2 font-display text-xl font-semibold">
                  Un workflow compartido
                </p>
              </div>
              <DownArrow inverse />
              <div className="grid grid-cols-2 gap-2">
                {["Payer A", "Payer B", "Payer C", "Payer D"].map((payer) => (
                  <div
                    key={payer}
                    className="flex min-h-20 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-xs font-semibold text-white/65"
                  >
                    {payer}
                  </div>
                ))}
              </div>
            </div>
          </ProductVisual>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Onboarding más simple",
              "Menos conocimiento informal",
              "Menor entrenamiento",
              "Operación más escalable",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-center text-xs font-semibold text-white/65"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fd] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <div>
              <SectionIntro
                eyebrow="Conexión con revenue"
                title="Registrá una vez. Usá el dato durante todo el ciclo."
                copy="Una prestación correctamente registrada desde el origen no necesita reconstruirse semanas después. La misma transacción puede continuar hacia cada proceso administrativo y financiero posterior."
                className="max-w-xl"
              />
              <p className="mt-7 border-l-2 border-accent pl-5 font-display text-xl font-semibold leading-relaxed">
                Mejor revenue empieza en el punto de atención.
              </p>
            </div>

            <ProductVisual
              label="Atención conectada al ciclo de ingresos"
              filename="care-to-revenue-cycle.png"
            >
              <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                {[
                  { label: "Validación", icon: ShieldCheck },
                  { label: "Facturación", icon: FileText },
                  { label: "Presentación", icon: Route },
                  { label: "Respuesta", icon: RefreshCcw },
                  { label: "Cobro", icon: Database },
                  { label: "Liquidación", icon: GitBranch },
                ].map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === 5;

                  return (
                    <div
                      key={step.label}
                      className={`${isLast ? "sm:col-start-3" : ""} contents`}
                    >
                      <div
                        className={`flex min-h-24 flex-col items-center justify-center rounded-xl border p-3 text-center ${
                          isLast
                            ? "border-secondary/25 bg-[#edf4ff]"
                            : "border-border/80 bg-white"
                        }`}
                      >
                        <Icon className="size-4 text-primary" strokeWidth={1.7} />
                        <span className="mt-3 text-[10px] font-semibold">
                          {step.label}
                        </span>
                      </div>
                      {index < 4 ? (
                        <ArrowRight className="mx-auto hidden size-4 text-primary/25 sm:block" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <Link
                href="/casos-de-uso/ciclo-de-ingresos"
                className="mt-6 flex items-center justify-between rounded-xl bg-primary p-4 text-white outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Use case conectado
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    Ciclo de ingresos
                  </span>
                </span>
                <ArrowRight className="size-4 text-accent" />
              </Link>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Inteligencia operativa"
            title="Convertí cada atención en información operativa."
            copy="Al registrar prestaciones de múltiples financiadores, Zonda permite entender la operación en tiempo real."
            className="max-w-4xl"
          />

          <ProductVisual
            label="Vista operativa multi-financiador"
            filename="multi-payer-operational-intelligence.png"
            className="mt-14"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {operationalInsights.map((insight, index) => {
                const Icon = insight.icon;

                return (
                  <article
                    key={insight.title}
                    className={`rounded-2xl border border-border/80 p-5 ${
                      index === 1 ? "bg-[#fffaf0]" : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`size-4.5 ${
                        index === 1 ? "text-[#9a6800]" : "text-primary"
                      }`}
                      strokeWidth={1.8}
                    />
                    <h3 className="mt-8 text-sm font-semibold leading-snug">
                      {insight.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {insight.copy}
                    </p>
                    <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-secondary/55"
                        style={{ width: `${42 + index * 9}%` }}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </ProductVisual>
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
            title="Una infraestructura para operar con múltiples financiadores."
            className="max-w-4xl"
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {platformCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.eyebrow}
                  className="min-h-64 bg-[#0b1422] p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.07] text-accent">
                      <Icon className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#77dcff]">
                      {capability.eyebrow}
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
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Customer story"
            title="Cómo una red de prestadores simplificó la operación multi-financiador"
            className="max-w-5xl"
          />

          <div className="mt-14 grid overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-[0_24px_70px_rgba(14,60,117,0.08)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-primary p-7 text-white sm:p-9 lg:p-12">
              <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.06] p-5 text-center">
                <div>
                  <p className="font-display text-xl font-semibold">
                    Logo cliente
                  </p>
                  <p className="mt-2 font-mono text-[9px] text-white/40">
                    Placeholder · multi-payer-customer-logo.svg
                  </p>
                </div>
              </div>
              <div className="mt-8 min-h-36 rounded-2xl border border-dashed border-white/20 p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Quote verificado
                </p>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  Este espacio queda preparado para una cita real del cliente.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-base leading-8 text-foreground">
                La red trabajaba con múltiples financiadores, cada uno con
                reglas diferentes. Los profesionales debían conocer esos
                requerimientos y luego entregar información al equipo
                administrativo para reconstruir las prestaciones y preparar la
                facturación.
              </p>
              <p className="mt-5 text-base font-semibold leading-8 text-primary">
                Zonda cambió el punto donde comienza el proceso.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Una única experiencia para el profesional",
                  "Reglas aplicadas automáticamente",
                  "Prestación estructurada desde el origen",
                  "Información conectada con revenue cycle",
                ].map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 rounded-xl bg-muted/70 p-4 text-xs font-semibold leading-5"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cantidad de profesionales",
              "Cantidad de financiadores",
              "Prestaciones mensuales",
              "Reducción de carga administrativa",
              "Reducción de errores",
              "Tiempo ahorrado",
            ].map((metric) => (
              <MetricSlot
                key={metric}
                label={metric}
                supportText="Métrica real del Customer Story"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#eef5ff] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_110%,rgba(31,212,245,0.2),transparent_38%),radial-gradient(circle_at_88%_0%,rgba(234,234,0,0.2),transparent_27%)]"
        />
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary text-accent shadow-[0_12px_30px_rgba(14,60,117,0.16)]">
            <Zap className="size-5" strokeWidth={1.7} />
          </span>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Los profesionales no deberían aprender cómo funciona cada
            financiador.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Zonda convierte múltiples reglas en una sola experiencia.
          </p>
          <Button variant="black" size="lg" className="mt-9" asChild>
            <Link href="#contacto">
              Hablar con nuestro equipo
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
