import type { Metadata } from "next";
import Image from "next/image";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  MetricSlot,
  RelatedLinks,
  SectionIntro,
  SplitFeature,
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

function Shot({ label }: { label: string }) {
  return (
    <ImagePlaceholder
      width={1200}
      height={900}
      label={label}
      className="rounded-[1.5rem]"
    />
  );
}

const features = [
  {
    // Archivo final sugerido: public/assets/sectors/labs/feature-1.png
    label: "Ilustración pendiente para la primera feature de laboratorios.",
  },
  {
    // Archivo final sugerido: public/assets/sectors/labs/feature-2.png
    label: "Ilustración pendiente para la segunda feature de laboratorios.",
  },
  {
    // Archivo final sugerido: public/assets/sectors/labs/feature-3.png
    label: "Ilustración pendiente para la tercera feature de laboratorios.",
  },
];

const relatedLinks = [
  { label: "Hospitales", href: "/industries/hospitals" },
  { label: "IA normalizada", href: "/use-cases/normalized-ai" },
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
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-full">
            <Image
              src="/assets/sectors/labs/higea.png"
              alt="Higía revisando un resultado de laboratorio en una tablet, con la serpiente de la medicina"
              width={1005}
              height={819}
              priority
              sizes="(min-width: 1024px) 720px, 90vw"
              className="absolute bottom-0 left-1/2 h-auto w-[min(118%,520px)] max-w-none -translate-x-1/2 translate-y-[6%] sm:w-[640px] lg:left-[-3.5rem] lg:w-[780px] lg:translate-x-0 lg:translate-y-[12%]"
            />
          </div>
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

      <section className="px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title={<Pending>TÍTULO A DEFINIR</Pending>}
            copy={<Pending>TEXTO A DEFINIR</Pending>}
            className="max-w-4xl"
            titleClassName="text-5xl sm:text-6xl"
          />
        </div>
      </section>

      {features.map((item, index) => (
        <SplitFeature
          key={item.label}
          title={<Pending>FEATURE A DEFINIR</Pending>}
          copy={<Pending>TEXTO A DEFINIR</Pending>}
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={<Shot label={item.label} />}
        />
      ))}

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
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
