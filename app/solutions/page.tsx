import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  industryGroups,
  isLiveRoute,
  useCaseGroups,
  type NavGroup,
  type NavLink,
} from "@/lib/navigation";
import {
  Card,
  CardCTA,
  CardContent,
  CardTitle,
} from "@/components/ui/card/card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  FaqList,
  SectionIntro,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const description =
  "Casos de uso y sectores sobre una misma capa de datos de salud: agentes de IA, atención multi-financiador, ciclo de ingresos, fraude y más.";

export const metadata: Metadata = {
  title: "Soluciones",
  description,
};

const steps = [
  {
    verb: "Conectá",
    copy: "tus fuentes: Zonda Connectors, APIs REST o DataDrop (HL7, FHIR, CSV y formatos arbitrarios).",
  },
  {
    verb: "Normalizá",
    copy: "todo en un modelo canónico, con identidad unificada y cada prestación como una transacción trazable.",
  },
  {
    verb: "Activá",
    copy: "soluciones listas para usar, agentes de inteligencia o tus propias herramientas sobre la API.",
  },
];

const faqItems = [
  {
    question: "¿Tengo que reemplazar mis sistemas actuales?",
    answer:
      "No. Zonda se conecta a lo que ya usás (HCE, facturación, ERP, sistemas de financiadores, planillas) y suma una capa de datos e inteligencia por encima.",
  },
  {
    question: "¿Puedo empezar con una sola solución?",
    answer:
      "Sí. Podés arrancar por un caso de uso puntual y sumar otros sobre la misma base de datos, sin volver a integrar.",
  },
  {
    question: "¿Puedo construir mis propias herramientas?",
    answer: (
      <>
        Sí. Todo lo que hace la plataforma está disponible vía API y eventos
        en tiempo real.{" "}
        {isLiveRoute("/developers") ? (
          <Link
            href="/developers"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Ver desarrolladores
          </Link>
        ) : (
          "Ver desarrolladores"
        )}
      </>
    ),
  },
];

const storyHref = "/customer-stories/interdom";

function SolutionCard({ item }: { item: NavLink }) {
  const Icon = item.icon;
  const live = isLiveRoute(item.href);

  return (
    <li className="flex">
      <Card
        hoverable={live}
        href={live ? item.href : undefined}
        aria-label={live ? item.title : undefined}
        className={live ? "flex w-full flex-col" : "flex w-full flex-col opacity-70"}
      >
        <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554]">
          {Icon ? (
            <Icon
              aria-hidden="true"
              className="relative size-[18px]"
              strokeWidth={1.6}
            />
          ) : null}
        </span>
        {live ? (
          <CardCTA
            aria-hidden
            tabIndex={-1}
            className="pointer-events-none"
          />
        ) : (
          <span className="absolute right-6 top-6 text-xs sm:right-8 sm:top-8">
            <Pending>Próximamente</Pending>
          </span>
        )}
        <CardTitle className="mt-5 max-w-none text-lg md:text-xl lg:text-xl">
          {item.title}
        </CardTitle>
        {item.description ? (
          <CardContent className="mt-3 text-muted-foreground">
            {item.description}
          </CardContent>
        ) : null}
      </Card>
    </li>
  );
}

function SolutionGroups({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="mt-12 grid gap-12">
      {groups.map((group) => (
        <section key={group.title} aria-labelledby={slug(group.title)}>
          <h3
            id={slug(group.title)}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
          >
            {group.title}
          </h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <SolutionCard key={item.href} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function slug(text: string) {
  return `grupo-${text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
}

export default function SolutionsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Soluciones"
        title="Una plataforma. Todo el sistema de salud conectado."
        copy="Elegí por lo que querés resolver o por el tipo de organización que sos. Todas las soluciones corren sobre la misma capa de datos: identidad unificada, modelo canónico, transacción de salud conectada e integraciones con lo que ya usás."
        primary={{ label: "Contactar", href: "/contact" }}
        secondary={{ label: "Ver la documentación", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/solutions/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="Diagrama isométrico en tres capas apiladas: abajo las fuentes (HCE, laboratorio, financiador, planilla…"
          />
        }
      />

      <section
        id="por-caso-de-uso"
        className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Por caso de uso" />
          <SolutionGroups groups={useCaseGroups} />
        </div>
      </section>

      <section
        id="por-sector"
        className="scroll-mt-24 bg-muted/50 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Por sector" />
          <SolutionGroups groups={industryGroups} />
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Cómo funciona" />
          <ol className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.verb}
                className="rounded-2xl border border-border/80 bg-white p-6 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-semibold tracking-[-0.04em] text-primary/25"
                >
                  {index + 1}
                </span>
                <p className="mt-6 text-base leading-7 text-foreground/80">
                  <strong className="font-semibold text-foreground">
                    {step.verb}
                  </strong>{" "}
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote="Zonda se convirtió en el sistema nervioso de nuestra operación.”"
            name="Gabriel Alonso"
            role="Coordinación General de Operaciones, Interdom Argentina"
          />
          {isLiveRoute(storyHref) ? (
            <Link
              href={storyHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              Leer la historia
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          ) : (
            <p className="mt-6 text-sm font-medium">Leer la historia</p>
          )}

          {/* Archivo final sugerido: public/assets/solutions/logo-cliente-N.png (provisto por el cliente, no generar) */}
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n}>
                <ImagePlaceholder
                  width={308}
                  height={103}
                  label="Logo de cliente ⟦A DEFINIR⟧ en escala de grises, fondo transparente."
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList title="Preguntas frecuentes" items={faqItems} />

      <CtaBanner
        title="¿No sabés por dónde empezar?"
        subtitle="Contanos tu operación y te proponemos el primer caso de uso con más impacto."
        buttonText="Contactar"
      />
    </main>
  );
}
