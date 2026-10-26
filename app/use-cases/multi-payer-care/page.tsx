import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleAlert,
  CircleDollarSign,
  BadgeCheck,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";

import { isLiveRoute } from "@/lib/navigation";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  MetricSlot,
  ProductVisual,
  RelatedLinks,
  SectionIntro,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Atención multi-financiador en salud";
const description =
  "Registrá y validá prestaciones de múltiples financiadores desde una única experiencia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/multi-payer-care" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/multi-payer-care",
  },
};

const revenueCycleHref = "/use-cases/revenue-cycle";

const benefits = [
  {
    title: "Las reglas viven en Zonda, no en la cabeza del profesional",
    copy: "Cada financiador tiene una lógica diferente. Zonda conoce qué información y validaciones corresponden y presenta únicamente lo necesario.",
    // Archivo final sugerido: public/assets/use-cases/multi-payer/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Las reglas viven en Zonda, no en la cabeza del…"
        fill
      />
    ),
  },
  {
    title: "Sabé qué necesitás antes de empezar",
    copy: "Identificá cobertura, autorización y documentación antes de cerrar la atención, no semanas después.",
    // Archivo final sugerido: public/assets/use-cases/multi-payer/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Sabé qué necesitás antes de empezar». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Detectá lo que falta antes de cerrar",
    copy: "Validá en origen. Los errores aparecen cuando todavía pueden resolverse, no cuando ya hay un débito.",
    // Archivo final sugerido: public/assets/use-cases/multi-payer/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Detectá lo que falta antes de cerrar». Composición:…"
        fill
      />
    ),
  },
];

const checklistFields = [
  ["Paciente", "Paciente 8F21"],
  ["Financiador", "OS A"],
  ["Profesional", "Profesional 472"],
  ["Prestación", "Práctica 4201"],
  ["Cobertura", "Válida"],
  ["Autorización", "Encontrada"],
];

const appliedRequirements = [
  "Cobertura válida",
  "Autorización encontrada",
  "Documentación requerida",
  "Prestación habilitada",
];

const careFlowSteps = [
  "Identificar cobertura",
  "Aplicar reglas",
  "Registrar atención",
  "Validar requisitos",
  "Cerrar prestación",
  "Enviar a ciclo de ingresos",
];

const capabilities = [
  {
    title: "Conexión de prestadores",
    copy: "El profesional conecta sus organizaciones y financiadores una sola vez.",
    href: "/use-cases/provider-credentialing",
    icon: BadgeCheck,
  },
  {
    title: "Identidad",
    copy: "Paciente, profesional y cobertura correctos.",
    href: "/use-cases/identity",
    icon: Fingerprint,
  },
  {
    title: "Ciclo de ingresos",
    copy: "La prestación sigue hacia facturación, cobro y liquidación.",
    href: revenueCycleHref,
    icon: CircleDollarSign,
  },
];

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
    question: "¿Qué pasa si falta un requisito?",
    answer:
      "La prestación queda en borrador hasta completar lo necesario. El profesional ve la excepción en el momento, no después de facturar.",
  },
  {
    question: "¿Sirve para una red de prestadores?",
    answer:
      "Sí. Toda la red puede trabajar de la misma manera mientras Zonda maneja las diferencias entre financiadores.",
  },
  {
    question: "¿Qué financiadores están soportados hoy?",
    answer: (
      <Pending>
        LISTA A CONFIRMAR — el sitio actual menciona OSDE, Swiss Medical, PAMI y
        Galeno en el Portal Profesional
      </Pending>
    ),
  },
];

const relatedLinks = [
  { label: "Ciclo de ingresos", href: revenueCycleHref },
  { label: "Conexión de prestadores", href: "/use-cases/provider-credentialing" },
  { label: "Asociaciones médicas", href: "/industries/medical-associations" },
  { label: "Clínicas y redes", href: "/industries/clinics-provider-networks" },
];

const splitImageClassName = "rounded-[1.5rem]";

const actionClassName =
  "rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold";

export default function MultiPayerCarePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Atención multi-financiador"
        title="Una sola forma de trabajar, sin importar el financiador"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        secondary={{ label: "Ver cómo funciona", href: "#como-funciona" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/multi-payer/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="tarjeta 'Prestación lista · Financiador identificado · OS A · Estado: Listo · Requisitos aplicados' con…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que necesitás para operar con múltiples financiadores."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="financiadores soportados"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="reducción de prestaciones rechazadas"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        id="como-funciona"
        eyebrow="El problema"
        title="Cada financiador funciona distinto. El profesional no debería tener que hacerlo."
        copy="Un mismo profesional puede trabajar con múltiples financiadores durante el día. La complejidad administrativa termina trasladándose a quien debería estar concentrado en brindar atención."
        media={
          // Archivo final sugerido: public/assets/use-cases/multi-payer/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="línea de tiempo de una atención desde el procedimiento hasta la validación, como en site-new y en…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        eyebrow="En el punto de atención"
        title="Registrá la atención una sola vez"
        copy="El profesional documenta lo ocurrido. Zonda adapta automáticamente la experiencia según paciente, práctica y financiador, sin cambiar de sistema ni duplicar información."
        mediaSide="left"
        media={
          // Archivo final sugerido: public/assets/use-cases/multi-payer/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="app móvil para registrar una atención y validar requisitos del financiador, como en site-new y en el…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        eyebrow="Capa de abstracción"
        title="Una experiencia para el profesional. Todas las reglas por detrás."
        copy={
          <>
            Cada financiador puede mantener sus propios sistemas y procesos.
            Zonda conecta esa diversidad dentro de una infraestructura común y
            hace que cada prestación nazca correctamente estructurada.
            <span className="mt-3 block">
              Se valida en el punto de atención, según lo que exija cada
              cobertura: elegibilidad, autorizaciones, nomencladores,
              documentación, frecuencias y validaciones digitales como tokens o
              firmas.
            </span>
          </>
        }
        media={
          // Archivo final sugerido: public/assets/use-cases/multi-payer/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="varios logos genéricos de financiadores (OS A, OS B, Prepaga C) entrando a una única capa Zonda y saliendo…"
            className={splitImageClassName}
          />
        }
      />

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
            <SectionIntro
              eyebrow="Validación en origen"
              title="Detectá lo que falta antes de cerrar la atención"
              copy="Zonda identifica el financiador, aplica sus reglas y muestra al profesional únicamente lo que necesita completar. Si falta algo, la prestación queda en borrador."
              className="max-w-xl"
            />

            <ProductVisual label="Checklist dinámico · Prestación #4201">
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-border/70 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#d9f5e9] text-[#176344]">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-4.5"
                      strokeWidth={1.8}
                    />
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
                <dl className="grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl bg-muted/70 p-5">
                  {checklistFields.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-xs font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Requisitos aplicados
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {appliedRequirements.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-[#85d5c0]/35 bg-[#f3faf7] p-3 text-xs font-semibold"
                      >
                        <Check
                          aria-hidden="true"
                          className="size-3.5 shrink-0 text-[#176344]"
                          strokeWidth={2.4}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80 p-4">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Flujo de la atención
                </p>
                <ol className="flex min-w-[660px] items-start">
                  {careFlowSteps.map((step, index) => (
                    <li key={step} className="flex flex-1 items-start">
                      <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                        <span
                          className={`flex size-7 items-center justify-center rounded-full ${
                            index >= 4
                              ? "bg-[#fff0dd] text-[#9a5600]"
                              : "bg-[#d9f5e9] text-[#176344]"
                          }`}
                        >
                          {index >= 4 ? (
                            <CircleAlert aria-hidden="true" className="size-3.5" />
                          ) : (
                            <Check
                              aria-hidden="true"
                              className="size-3.5"
                              strokeWidth={2.4}
                            />
                          )}
                        </span>
                        <span className="mt-2 text-[9px] font-semibold text-muted-foreground">
                          {step}
                        </span>
                      </div>
                      {index < careFlowSteps.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="mt-3.5 h-px flex-1 bg-border"
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Acciones ilustrativas: solo "Ver ciclo de ingresos" es navegable. */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white">
                  Cerrar atención
                </span>
                <span className="rounded-full border border-[#e8b63c]/40 bg-[#fffaf0] px-4 py-2.5 text-xs font-semibold text-[#8b620b]">
                  Completar requisito
                </span>
                <span className={actionClassName}>Guardar borrador</span>
                {isLiveRoute(revenueCycleHref) ? (
                  <Link
                    href={revenueCycleHref}
                    className={`${actionClassName} inline-flex items-center gap-2 outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring`}
                  >
                    Ver ciclo de ingresos
                    <ArrowRight aria-hidden="true" className="size-3" />
                  </Link>
                ) : null}
              </div>
            </ProductVisual>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Candidato: historia "Profesionales no pierden tiempo al interactuar con diferentes obras sociales, caso PAMI" (título presente en site-new, sin contenido ni datos todavía; confirmar si PAMI autoriza ser nombrado como caso). */}
          <Testimonial
            quote={
              <>
                “<Pending>TESTIMONIO A DEFINIR</Pending>”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>ORGANIZACIÓN</Pending>
              </>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Los profesionales no deberían aprender cómo funciona cada financiador"
        subtitle="Zonda convierte múltiples reglas en una sola experiencia y deja cada prestación lista para el resto del ciclo."
        buttonText="Hablá con nuestro equipo"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
