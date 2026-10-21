import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  CircleDollarSign,
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

const benefits = [
  {
    title: "Reducí débitos evitables",
    copy: "Validá cada prestación contra las reglas del financiador antes de presentarla, no cuando el débito ya fue aplicado.",
    href: "#como-funciona",
    image: "/assets/fraud/validated.png",
    imageAlt: "Prestación validada lista para avanzar en el ciclo de ingresos",
  },
  {
    title: "Eliminá la carga repetitiva",
    copy: "Conectá los datos que ya existen y automatizá los procesos que hoy requieren carga manual entre sistemas.",
    href: "#como-funciona",
    image: "/assets/fraud/zonda-info.png",
    imageAlt:
      "Zonda conectando tratamiento, pagos y cobertura en una sola vista",
  },
  {
    title: "Sabé dónde está cada ingreso",
    copy: "Seguí qué fue realizado, facturado, presentado, aprobado, debitado, cobrado y liquidado.",
    href: "#como-funciona",
    image: "/assets/fraud/search.png",
    imageAlt:
      "Búsqueda para localizar prestaciones y el estado de cada ingreso",
  },
] as const;

const faqItems = [
  {
    question: "¿Qué es el ciclo de ingresos en salud?",
    answer:
      "Es el recorrido de una prestación desde la atención hasta la facturación, el cobro y la liquidación. Zonda conecta cada etapa en un único flujo.",
  },
  {
    question: "¿Cómo evita Zonda los débitos?",
    answer:
      "Aplica las reglas de cada financiador —nomenclador, cobertura, autorización, documentación, frecuencia y presentación— antes de facturar.",
  },
  {
    question: "¿Reemplaza al sistema de facturación o al ERP?",
    answer:
      "No. Zonda conecta la atención con los sistemas existentes y mantiene la trazabilidad de cada transacción a lo largo del ciclo.",
  },
  {
    question: "¿Puede trabajar con múltiples financiadores?",
    answer:
      "Sí. Cada financiador puede tener reglas, sistemas y formas de presentación distintas. Zonda absorbe esa complejidad en un flujo común.",
  },
  {
    question: "¿Qué pasa cuando una prestación no está lista?",
    answer:
      "Queda como excepción. El equipo interviene solo en lo que falta —autorización, documentación o inconsistencia— mientras el resto avanza.",
  },
  {
    question: "¿Cómo se conecta con el punto de atención?",
    answer:
      "Una prestación bien registrada y validada desde el origen no necesita reconstruirse semanas después para facturar, cobrar o liquidar.",
  },
  {
    question: "¿Qué visibilidad da sobre el dinero?",
    answer:
      "Podés ver cuánto se realizó, cuánto se facturó, cuánto se aprobó, dónde hay débitos, cuánto falta cobrar y qué corresponde liquidar.",
  },
  {
    question: "¿Incluye la liquidación a profesionales?",
    answer:
      "Sí. El mismo dato que origina la facturación puede usarse para determinar qué corresponde liquidar a cada profesional.",
  },
] as const;

export default function CicloDeIngresosPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <FeatureHero backgroundSrc={SOLUTION_HERO_BACKGROUND}>
        <FeaturePanelBleed
          src="/assets/fraud/fraud-hero-bleed.png"
          side="right"
        />
        <FeatureHeroContent>
          <div className="">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.10em] text-foreground">
              Ciclo de ingresos
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground">
              De cada prestación realizada a cada ingreso cobrado.
            </h1>
            <p className="mt-2 text-lg leading-7 text-foreground/80">
              Conectá atención, validación, facturación, cobro y liquidación en
              un único flujo.
            </p>
            <div className="mt-4">
              <Button variant="black" asChild>
                <Link href="#contacto">
                  Hablar con nuestro equipo
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </FeatureHeroContent>
        <FeatureHeroMedia>
          <Image
            src="/assets/fraud/hipocrates-fraud.png"
            alt="Hipócrates verificando identidad, documentación y ubicación de una operación válida"
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
          title="Lo que necesitás para que cada prestación cuente."
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
        id="como-funciona"
        className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionIntro
            compact
            eyebrow="Transacción de origen"
            title="Todo empieza con una prestación bien registrada"
            copy="Cada prestación genera una transacción que conecta paciente, profesional, financiador, práctica y documentación. Zonda estructura esa información desde el origen y la mantiene durante todo el ciclo."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/timeline-validation.png"
            alt="Línea de tiempo de una prestación desde el procedimiento hasta la validación"
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
            eyebrow="Inteligencia pre-facturación"
            title="Detectá problemas antes de facturar"
            copy="Las reglas que determinan si una prestación puede cobrarse no deberían vivir en planillas. Zonda las aplica y detiene las inconsistencias antes de que lleguen a billing."
            className="max-w-lg lg:order-2"
          />

          <Image
            src="/assets/fraud/fraud-risk-score.png"
            alt="Puntaje de riesgo que señala una prestación que requiere revisión"
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
            eyebrow="Revenue flow"
            title="Seguí el dinero, no las planillas"
            copy="La presentación no es el final. Zonda mantiene conectada cada prestación con la respuesta del financiador, los débitos, el cobro y la liquidación correspondiente."
            className="max-w-lg"
          />

          <Image
            src="/assets/revenue-cycle/revenue-workflow-hero-placeholder.png"
            alt="Flujo conectado de una prestación desde la atención hasta el cobro y la liquidación"
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
              eyebrow="Excepción"
              title="Automatizá lo normal. Intervení en lo excepcional."
              copy="Entendé la prestación, el motivo por el que se detuvo y la evidencia necesaria para resolverla desde una sola vista operativa."
              className="max-w-xl"
            />

            <ProductVisual
              label="Pre-facturación · Prestación #28496"
              filename="pre-billing-validation-exception.png"
            >
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border/70 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#fff0dd] text-[#9a5600]">
                      <CircleDollarSign className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        Atención requerida
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Falta autorización para presentar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-primary px-4 py-3 text-right text-white">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-white/50">
                    Estado
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-accent">
                    Excepción
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl bg-muted/70 p-5">
                  {[
                    ["Paciente", "Paciente 8F21"],
                    ["Profesional", "Profesional 472"],
                    ["Financiador", "Financiador B"],
                    ["Prestación", "Práctica 4201"],
                    ["Realizado", "14 may · 10:32"],
                    ["Presentado", "—"],
                    ["Aprobado", "—"],
                    ["Cobrado", "—"],
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
                    Señales pre-facturación
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {[
                      "Autorización faltante",
                      "Documentación incompleta",
                      "Fuera de frecuencia",
                      "Regla de presentación",
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
                  Recorrido del ingreso
                </p>
                <div className="flex min-w-[660px] items-start">
                  {[
                    "Realizada",
                    "Validada",
                    "Facturada",
                    "Presentada",
                    "Cobrada",
                    "Liquidada",
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
                  Resolver excepción
                </button>
                <button className="rounded-full border border-[#d7755f]/40 bg-[#fff4f0] px-4 py-2.5 text-xs font-semibold text-[#913a27]">
                  Detener presentación
                </button>
                <button className="rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold">
                  Pedir evidencia
                </button>
                <Link
                  href="/casos-de-uso/atencion-multi-financiador"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold"
                >
                  Ver punto de atención
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            centered
            title="Tus preguntas, respondidas"
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
            Hacé que cada prestación cuente.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Conectá atención, validación, facturación, cobro y liquidación.
            Automatizá lo normal e intervení solo en lo excepcional.
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
