import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Testimonials } from "@/components/testimonials/Testimonials";
import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/button/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  Story,
  StoryList,
  StoryMedia,
  StoryTitle,
} from "@/components/ui/story/story";
import { SectionIntro } from "@/components/use-cases/UseCasePrimitives";
import { DEVELOPERS_URL, isLiveRoute } from "@/lib/navigation";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Guías, casos de clientes y novedades sobre interoperabilidad, fraude, ciclo de ingresos e IA en salud.",
};

// Los artículos todavía no existen: se muestran sin link y como "Próximamente". No crear páginas de blog vacías.
// Archivo final sugerido de cada portada: public/assets/resources/article-N.png
const articles: { title: ReactNode; imageLabel: string }[] = [
  {
    title: "Interoperabilidad en salud: guía práctica para Latinoamérica",
    imageLabel:
      "Portada editorial para el artículo «Interoperabilidad en salud: guía práctica para Latinoamérica»:…",
  },
  {
    title: "FHIR vs. HL7v2: qué conviene en cada caso",
    imageLabel:
      "Portada editorial para el artículo «FHIR vs. HL7v2: qué conviene en cada caso»: composición con una…",
  },
  {
    title: "Cómo detectar fraude en internación domiciliaria",
    imageLabel:
      "Portada editorial para el artículo «Cómo detectar fraude en internación domiciliaria»: composición con una…",
  },
  {
    title:
      "Credencialización de prestadores: por qué tu médico carga la matrícula diez veces",
    imageLabel:
      "Portada editorial para el artículo «Credencialización de prestadores: por qué tu médico carga la matrícula…",
  },
  {
    title: "IA en salud: por qué empieza por datos normalizados",
    imageLabel:
      "Portada editorial para el artículo «IA en salud: por qué empieza por datos normalizados»: composición con…",
  },
  {
    title: "Segmentación poblacional para programas de crónicos",
    imageLabel:
      "Portada editorial para el artículo «Segmentación poblacional para programas de crónicos»: composición con…",
  },
  {
    title: "Débitos evitables: cómo validar prestaciones antes de facturar",
    imageLabel:
      "Portada editorial para el artículo «Débitos evitables: cómo validar prestaciones antes de facturar»:…",
  },
  {
    title:
      "Un profesional, diez financiadores: cómo simplificar la atención multi-financiador",
    imageLabel:
      "Portada editorial para el artículo «Un profesional, diez financiadores: cómo simplificar la atención…",
  },
  {
    title: "Agentes de IA en salud: por qué necesitan contexto, no solo datos",
    imageLabel:
      "Portada editorial para el artículo «Agentes de IA en salud: por qué necesitan contexto, no solo datos»:…",
  },
  {
    title: (
      <>
        Del papel a la operación digital en 30 días{" "}
        <Pending>PLAZO A VALIDAR</Pending>
      </>
    ),
    imageLabel:
      "Portada editorial para el artículo «Del papel a la operación digital en 30 días ⟦PLAZO A VALIDAR⟧»:…",
  },
  {
    title: "LOINC e ICD-10 explicados para equipos no técnicos",
    imageLabel:
      "Portada editorial para el artículo «LOINC e ICD-10 explicados para equipos no técnicos»: composición con…",
  },
];

const topics = [
  { label: "Interoperabilidad", href: "/use-cases/ai-agents" },
  { label: "Fraude y riesgo", href: "/use-cases/fraud-risk-prevention" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
  {
    label: "Agentes de inteligencia",
    href: "/use-cases/ai-agents",
  },
  {
    label: "Identidad y credenciales",
    href: "/use-cases/identity",
  },
  { label: "Sector público", href: "/industries/government-public-sector" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
].filter((topic) => isLiveRoute(topic.href));

const sectionClassName = "px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24";

export default function ResourcesPage() {
  return (
    <main
      lang="es"
      className="min-h-screen overflow-x-clip bg-background text-foreground"
    >
      <section className="px-6 pb-12 pt-32 text-center sm:px-10 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Recursos para la salud conectada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Guías, casos de clientes y novedades para organizaciones de salud
            de Latinoamérica.
          </p>
          <div className="mt-9 flex flex-wrap items-start justify-center gap-3">
            <Button variant="black" asChild>
              <Link href="#historias">Ver historias de clientes</Link>
            </Button>
            {/* Habilitar cuando exista la URL del newsletter */}
            <div className="flex flex-col items-center gap-1.5">
              <Button variant="outline" disabled>
                Suscribite al newsletter
              </Button>
              <span className="text-xs">
                <Pending>URL A DEFINIR</Pending>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Artículos destacados" />
          <StoryList className="mt-12">
            {articles.map((article, index) => (
              <Story key={index}>
                <StoryMedia>
                  <ImagePlaceholder
                    width={1280}
                    height={720}
                    label={article.imageLabel}
                    fill
                  />
                </StoryMedia>
                <StoryTitle>{article.title}</StoryTitle>
                <span className="self-start text-sm">
                  <Pending>Próximamente</Pending>
                </span>
              </Story>
            ))}
          </StoryList>
        </div>
      </section>

      <section id="historias" className={`scroll-mt-24 ${sectionClassName}`}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="Historias de clientes" />
          <Testimonials className="mt-12" />
          {isLiveRoute("/customer-stories") ? (
            <Link
              href="/customer-stories"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver todas las historias →
            </Link>
          ) : null}
        </div>
      </section>

      {topics.length > 0 ? (
        <section className={sectionClassName}>
          <div className="mx-auto max-w-7xl">
            <SectionIntro title="Por tema" />
            <ul className="mt-8 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <Banner
          variant="dark"
          className="mx-auto flex min-h-[400px] max-w-7xl flex-col p-0 sm:p-0 lg:justify-center"
        >
          <div className="relative z-10 max-w-xl p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77dcff]">
              Reporte
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
              <Pending>
                TÍTULO A DEFINIR: p. ej. &quot;El estado de la
                interoperabilidad en salud en Latinoamérica 2026&quot;
              </Pending>
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              <Pending>DESCRIPCIÓN A DEFINIR</Pending>
            </p>
            {/* Habilitar cuando exista la URL del reporte */}
            <Button variant="inverse" disabled className="mt-8">
              Descargar reporte
            </Button>
          </div>
          {/* Archivo final sugerido: public/assets/resources/report-banner.png */}
          <div className="relative aspect-[2304/800] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
            <ImagePlaceholder
              tone="dark"
              width={2304}
              height={800}
              label="Banner apaisado oscuro (#0e3c75): portada de un reporte impreso en perspectiva a la derecha, con gráficos…"
              fill
            />
          </div>
        </Banner>
      </section>

      <section id="novedades" className={`scroll-mt-24 ${sectionClassName}`}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Novedades"
            copy={<Pending>CHANGELOG / LANZAMIENTOS A DEFINIR</Pending>}
          />
        </div>
      </section>

      <section className={sectionClassName}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Para desarrolladores"
            copy="Documentación, quickstart y referencia de la API."
          />
          <Link
            href={DEVELOPERS_URL}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ir a Desarrolladores
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBanner
        title="¿Querés que tu caso sea el próximo?"
        buttonText="Hablemos"
      />
    </main>
  );
}
