import type { Metadata } from "next";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  MetricSlot,
  RelatedLinks,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

// SECTOR SUGERIDO: no listado por el founder; validar. Publicado en la navegación a pedido del equipo antes de esa aprobación.

const title = "Laboratorios y diagnóstico";
const description =
  "Publicá resultados normalizados con LOINC que cualquier hospital, médico o financiador puede consumir, en el formato que necesite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/laboratories" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/laboratories",
  },
};

const showEditorialBadge = process.env.NODE_ENV !== "production";

const benefits = [
  {
    title: "Normalización LOINC",
    copy: "Mapeo semántico de tu terminología propietaria a códigos universales.",
    href: "/use-cases/normalized-ai",
    cta: "Ver IA normalizada",
    // Archivo final sugerido: public/assets/industries/laboratories/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Normalización LOINC». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Un input, muchos outputs",
    copy: "JSON, FHIR, CSV o HL7 según cada cliente.",
    // Archivo final sugerido: public/assets/industries/laboratories/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Un input, muchos outputs». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Identidad del paciente",
    copy: "Resultados asociados al paciente correcto entre instituciones.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/laboratories/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Identidad del paciente». Composición: una tarjeta de…"
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Qué formatos de salida soportan?",
    answer: "JSON, FHIR, CSV, HL7 o esquemas custom.",
  },
  {
    question: "¿Tengo que cambiar mi LIS?",
    answer: "No. Zonda se integra vía HL7v2, FHIR, API REST o DataDrop.",
  },
];

const relatedLinks = [
  { label: "Hospitales", href: "/industries/hospitals" },
  { label: "IA normalizada", href: "/use-cases/normalized-ai" },
  {
    label: "Agentes de inteligencia",
    href: "/use-cases/healthcare-intelligence-agents",
  },
];

export default function LaboratoriesPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow={
          <>
            Laboratorios y diagnóstico
            {showEditorialBadge ? (
              <span className="ml-2 inline-block normal-case tracking-normal">
                <Pending>Sector sugerido · validar</Pending>
              </span>
            ) : null}
          </>
        }
        title="Tus resultados, entendidos por todo el sistema"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{
          label: "Ver el modelo canónico",
          href: "/developers#modelo-canonico",
        }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/laboratories/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="un mensaje HL7v2 de laboratorio saliendo como FHIR Observation hacia un hospital, un médico y un…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por laboratorios."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="resultados normalizados por mes"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="integraciones activas"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote={
              <>
                “<Pending>TESTIMONIO A DEFINIR</Pending>”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>LABORATORIO</Pending>
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Hacé que tus resultados hablen el mismo idioma"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
