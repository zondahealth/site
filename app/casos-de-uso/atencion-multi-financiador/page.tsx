import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";

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
import {
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

const benefits = [
  {
    title: "Las reglas viven en Zonda, no en la cabeza del profesional",
    copy: "Cada financiador tiene una lógica diferente. Zonda conoce qué información y validaciones corresponden y presenta únicamente lo necesario.",
    href: "#como-funciona",
    image: "/assets/fraud/zonda-info.png",
    imageAlt:
      "Zonda conectando tratamiento, pagos, ubicación y cobertura en una sola vista",
  },
  {
    title: "Sabé qué necesitás antes de empezar",
    copy: "Identificá cobertura, autorización y documentación antes de cerrar la atención, no semanas después.",
    href: "#como-funciona",
    image: "/assets/fraud/search.png",
    imageAlt:
      "Búsqueda en lenguaje natural para identificar pacientes y requisitos de atención",
  },
  {
    title: "Detectá lo que falta antes de cerrar",
    copy: "Validá en origen. Los errores aparecen cuando todavía pueden resolverse, no cuando ya hay un débito.",
    href: "#como-funciona",
    image: "/assets/fraud/validated.png",
    imageAlt: "Visita validada para un profesional de la salud",
  },
] as const;

const faqItems = [
  {
    question: "¿Qué es la atención multi-financiador?",
    answer:
      "Es la operación de registrar y validar prestaciones cuando un mismo profesional trabaja con múltiples coberturas, cada una con reglas, requisitos y sistemas distintos.",
  },
  {
    question: "¿Cómo identifica Zonda el financiador de cada atención?",
    answer:
      "Zonda conecta paciente, práctica y cobertura para aplicar automáticamente las reglas que corresponden a esa prestación.",
  },
  {
    question: "¿El profesional tiene que aprender las reglas de cada financiador?",
    answer:
      "No. Zonda abstrae esa complejidad y muestra únicamente lo que hay que completar en cada caso.",
  },
  {
    question: "¿Zonda reemplaza los sistemas de cada financiador?",
    answer:
      "No. Cada financiador puede mantener sus propios sistemas y procesos. Zonda crea la capa común que conecta esa diversidad.",
  },
  {
    question: "¿Qué se valida en el punto de atención?",
    answer:
      "Elegibilidad, autorizaciones, nomencladores, documentación, frecuencias y validaciones digitales como tokens o firmas, según lo que exija cada cobertura.",
  },
  {
    question: "¿Qué pasa si falta un requisito?",
    answer:
      "La prestación queda en borrador hasta completar lo necesario. El profesional ve la excepción en el momento, no después de facturar.",
  },
  {
    question: "¿Cómo se conecta con el ciclo de ingresos?",
    answer:
      "Una prestación bien registrada desde el origen continúa hacia facturación, presentación, cobro y liquidación sin reconstruir el dato semanas después.",
  },
  {
    question: "¿Sirve para una red de prestadores?",
    answer:
      "Sí. Toda la red puede trabajar de la misma manera mientras Zonda maneja las diferencias entre financiadores.",
  },
] as const;

export default function AtencionMultiFinanciadorPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <FeatureHero>
        <FeaturePanelBleed
          src="/assets/fraud/fraud-hero-bleed.png"
          side="right"
        />
        <FeatureHeroContent>
          <div className="">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.10em] text-foreground">
              Atención multi-financiador
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground">
              Una sola forma de trabajar, sin importar el financiador.
            </h1>
            <p className="mt-2 text-lg leading-7 text-foreground/80">
              Registrá y validá prestaciones de múltiples financiadores desde
              una única experiencia.
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
          title="Lo que necesitás para operar con múltiples financiadores."
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
            eyebrow="El problema"
            title="Cada financiador funciona distinto. El profesional no debería tener que hacerlo."
            copy="Un mismo profesional puede trabajar con múltiples financiadores durante el día. La complejidad administrativa termina trasladándose a quien debería estar concentrado en brindar atención."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/timeline-validation.png"
            alt="Línea de tiempo de una atención desde el procedimiento hasta la validación"
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
            eyebrow="En el punto de atención"
            title="Registrá la atención una sola vez"
            copy="El profesional documenta lo ocurrido. Zonda adapta automáticamente la experiencia según paciente, práctica y financiador, sin cambiar de sistema ni duplicar información."
            className="max-w-lg lg:order-2"
          />

          <Image
            src="/assets/multi-payer/provider-mobile-workflow-placeholder.png"
            alt="Aplicación móvil para registrar una atención y validar requisitos del financiador"
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
            eyebrow="Capa de abstracción"
            title="Una experiencia para el profesional. Todas las reglas por detrás."
            copy="Cada financiador puede mantener sus propios sistemas y procesos. Zonda conecta esa diversidad dentro de una infraestructura común y hace que cada prestación nazca correctamente estructurada."
            className="max-w-lg"
          />

          <Image
            src="/assets/fraud/heath-panel.png"
            alt="Panel de salud para monitorear atenciones y actividad clínica"
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
              eyebrow="Validación en origen"
              title="Detectá lo que falta antes de cerrar la atención"
              copy="Zonda identifica el financiador, aplica sus reglas y muestra al profesional únicamente lo que necesita completar."
              className="max-w-xl"
            />

            <ProductVisual
              label="Checklist dinámico · Prestación #4201"
              filename="dynamic-payer-requirements-checklist.png"
            >
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border/70 pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#d9f5e9] text-[#176344]">
                      <ShieldCheck className="size-4.5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        Prestación lista
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Financiador identificado · OS A
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-primary px-4 py-3 text-right text-white">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-white/50">
                    Estado
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-accent">
                    Listo
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl bg-muted/70 p-5">
                  {[
                    ["Paciente", "Paciente 8F21"],
                    ["Financiador", "OS A"],
                    ["Profesional", "Profesional 472"],
                    ["Prestación", "Práctica 4201"],
                    ["Cobertura", "Válida"],
                    ["Autorización", "Encontrada"],
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
                    Requisitos aplicados
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {[
                      "Cobertura válida",
                      "Autorización encontrada",
                      "Documentación requerida",
                      "Prestación habilitada",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-[#85d5c0]/35 bg-[#f3faf7] p-3 text-xs font-semibold"
                      >
                        <Check
                          className="size-3.5 shrink-0 text-[#176344]"
                          strokeWidth={2.4}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80 p-4">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Flujo de la atención
                </p>
                <div className="flex min-w-[660px] items-start">
                  {[
                    "Identificar cobertura",
                    "Aplicar reglas",
                    "Registrar atención",
                    "Validar requisitos",
                    "Cerrar prestación",
                    "Enviar a revenue",
                  ].map((step, index) => (
                    <div key={step} className="flex flex-1 items-start">
                      <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                        <span
                          className={`flex size-7 items-center justify-center rounded-full ${
                            index >= 4
                              ? "bg-[#fff0dd] text-[#9a5600]"
                              : "bg-[#d9f5e9] text-[#176344]"
                          }`}
                        >
                          {index >= 4 ? (
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
                  Cerrar atención
                </button>
                <button className="rounded-full border border-[#e8b63c]/40 bg-[#fffaf0] px-4 py-2.5 text-xs font-semibold text-[#8b620b]">
                  Completar requisito
                </button>
                <button className="rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold">
                  Guardar borrador
                </button>
                <Link
                  href="/casos-de-uso/ciclo-de-ingresos"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold"
                >
                  Ver ciclo de ingresos
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
            Los profesionales no deberían aprender cómo funciona cada
            financiador.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Zonda convierte múltiples reglas en una sola experiencia y deja
            cada prestación lista para el resto del ciclo.
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
