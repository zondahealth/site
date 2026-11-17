import type { Metadata } from "next";
import Link from "next/link";

import {
  DOCS_URL,
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
import { Pending } from "@/components/ui/pending/Pending";
import {
  FaqList,
  SectionIntro,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const description =
  "Casos de uso y sectores sobre una misma capa de datos de salud: agentes de IA, atención multi-financiador, ciclo de ingresos, fraude y más.";

export const metadata: Metadata = {
  title: "Soluciones",
  description,
};

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
        <Link
          href={DOCS_URL}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Ver desarrolladores
        </Link>
      </>
    ),
  },
];

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

      <FaqList title="Preguntas frecuentes" items={faqItems} />

      <CtaBanner
        title="¿No sabés por dónde empezar?"
        subtitle="Contanos tu operación y te proponemos el primer caso de uso con más impacto."
        buttonText="Contactar"
      />
    </main>
  );
}
