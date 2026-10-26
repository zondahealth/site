import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Cpu, Database, Shuffle } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  StatSlot,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "IA normalizada: datos clínicos listos para usar";
const description =
  "Zonda convierte texto libre, PDFs, CSV, HL7, FHIR y XML en un modelo canónico normalizado y codificado, listo para que lo use cualquier sistema o modelo de IA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/normalized-ai" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/normalized-ai",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Cualquier input",
    copy: "Texto plano, PDFs, CSVs, HL7, FHIR, XML: sin plantillas fijas.",
    media: (
      <Image
        src="/assets/solutions/normalization/formats.png"
        alt="Texto plano, PDF, CSV, HL7, FHIR y XML aceptados como entrada"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Un modelo canónico",
    copy: "Estructurado, normalizado y con terminología estándar.",
    media: (
      <Image
        src="/assets/solutions/normalization/record.png"
        alt="Registro de salud estructurado con diagnósticos ICD-10 y observaciones LOINC"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Nada se pierde",
    copy: "Información clínica, social y operacional.",
    media: (
      <Image
        src="/assets/solutions/normalization/patient-data.png"
        alt="Ficha del paciente con datos clínicos, sociales y operacionales"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const capabilities = [
  { title: "Procesamiento AI", icon: Cpu },
  { title: "Modelo canónico", icon: Database },
  { title: "Output flexible", icon: Shuffle },
  { title: "Analítica", href: "/use-cases/analytics", icon: BarChart3 },
];

const faqItems = [
  {
    question: "¿Qué significa \"IA normalizada\"?",
    answer:
      "Que los datos clínicos llegan a la IA ya estructurados, deduplicados y codificados con estándares (LOINC, ICD-10), en vez de crudos y fragmentados.",
  },
  {
    question: "¿Puedo usar mis propios modelos?",
    answer:
      "Sí. Zonda te da los datos normalizados vía API; vos elegís qué modelo usar.",
  },
  {
    question: "¿Qué pasa con los datos sensibles?",
    answer: (
      <>
        La plataforma cifra en tránsito y en reposo, con permisos granulares y
        aislamiento multi-tenant.{" "}
        <Pending>POLÍTICA DE USO DE DATOS PARA IA A CONFIRMAR</Pending>
      </>
    ),
  },
];

const relatedLinks = [
  { label: "Analítica", href: "/use-cases/analytics" },
  { label: "Segmentación poblacional", href: "/use-cases/population-segmentation" },
  { label: "Laboratorios", href: "/industries/laboratories" },
  {
    label: "Agentes de inteligencia en salud",
    href: "/use-cases/healthcare-intelligence-agents",
  },
];

const splitImageClassName = "rounded-[1.5rem]";

export default function NormalizedAiPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="IA normalizada"
        title="La IA en salud es tan buena como sus datos. Nosotros los ordenamos."
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{
          label: "Ver el modelo de datos",
          href: "/developers#modelo-canonico",
        }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/normalized-ai/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="un PDF escaneado de un análisis de laboratorio transformándose línea por línea en un JSON con códigos…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      {/* Bajada de la sección sin publicar: la fuente solo trae una nota editorial (mensajes de site-new: "De notas a datos clínicos listos para usar" y "De datos fragmentados a información segura que la IA puede usar"; en el footer figura como "Datos listos para IA"). */}
      <BenefitStories
        title="De notas a datos clínicos listos para usar."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="precisión de codificación"
            supportText="Métrica a definir"
          />
          {/* VALIDAR: registros clínicos procesados en el caso Interdom (dato publicado — validar) */}
          <StatSlot
            value="+1 M"
            label="registros clínicos procesados en el caso Interdom"
          />
        </div>
      </div>

      <SplitFeature
        title="Normalización con estándares universales"
        bullets={[
          <>
            <strong className="font-semibold text-foreground">LOINC:</strong>{" "}
            mapeo semántico de observaciones y resultados de laboratorio
          </>,
          <>
            <strong className="font-semibold text-foreground">ICD-10:</strong>{" "}
            codificación de diagnósticos a partir de texto clínico libre con NLP
          </>,
          "Mapeo automático de esquemas legacy",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/normalized-ai/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tabla de 'término propietario → código estándar' (ej. 'GLUC AYUNAS' → LOINC [CÓDIGO]), como en…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Registros clínicos superinteligentes"
        mediaSide="left"
        bullets={[
          "Dictado por voz con transcripción al instante",
          "Resumen estructurado por IA (SOAP, evolución)",
          "Búsqueda semántica en toda la historia",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/normalized-ai/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="app móvil con una evolución dictada y estructurada en Subjetivo / Objetivo / Plan, como en…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Una base confiable para tus propios modelos"
        bullets={[
          "Datos consistentes entre fuentes y en el tiempo",
          "Trazabilidad del origen de cada dato",
          "Acceso vía API para entrenar, evaluar o alimentar agentes y modelos",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/normalized-ai/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="diagrama 'Zonda → tu modelo de IA → predicción de riesgo', como en plaid.com/ en 'The AI infrastructure…"
            className={splitImageClassName}
          />
        }
      />

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
                <Pending>CARGO</Pending>, <Pending>ORGANIZACIÓN</Pending>
              </>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Dale a tu IA los datos que se merece"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
