import type { Metadata } from "next";
import { BarChart3, Fingerprint, Sparkles, Workflow } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  InlineLink,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Segmentación poblacional en salud";
const description =
  "Agrupá pacientes y afiliados por riesgo, condición, territorio y cobertura con datos clínicos y operativos reales, no con estimaciones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/population-segmentation" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/population-segmentation",
  },
};

const benefits = [
  {
    title: "Una sola foto de toda tu población",
    copy: "Zonda une historias clínicas, turnos, encuestas, laboratorios y padrones en un perfil por paciente, con identidad unificada.",
    // Archivo final sugerido: public/assets/use-cases/population-segmentation/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Una sola foto de toda tu población». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Segmentos que se actualizan solos",
    copy: "Definí criterios una vez (edad, diagnóstico ICD-10, resultados LOINC, última consulta, zona) y los segmentos se recalculan con cada dato nuevo.",
    // Archivo final sugerido: public/assets/use-cases/population-segmentation/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Segmentos que se actualizan solos». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Del segmento a la acción",
    copy: "Dispará campañas, turnos, visitas o seguimientos para cada grupo desde la misma plataforma o vía API.",
    // Archivo final sugerido: public/assets/use-cases/population-segmentation/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Del segmento a la acción». Composición: una tarjeta de…"
        fill
      />
    ),
  },
];

const capabilities = [
  {
    title: "Identidad",
    copy: "Un paciente, un registro.",
    href: "/use-cases/identity",
    icon: Fingerprint,
  },
  {
    title: "IA normalizada",
    copy: "Diagnósticos y resultados codificados.",
    href: "/use-cases/normalized-ai",
    icon: Sparkles,
  },
  {
    title: "Analítica",
    copy: "Seguimiento de cada segmento en el tiempo.",
    href: "/use-cases/analytics",
    icon: BarChart3,
  },
  {
    title: "Automatización",
    copy: "Acciones disparadas por segmento.",
    href: "/use-cases/automation",
    icon: Workflow,
  },
];

const faqItems = [
  {
    question: "¿Qué es la segmentación poblacional en salud?",
    answer:
      "Es agrupar a una población según características clínicas, demográficas, territoriales o de cobertura para priorizar acciones preventivas y asignar recursos donde más impacto tienen.",
  },
  {
    question: "¿Necesito tener todos mis datos digitalizados?",
    answer:
      "No. Zonda ingesta desde PDFs, planillas y carga manual además de sistemas como HL7 o FHIR.",
  },
  {
    question: "¿Se puede usar para programas de salud pública?",
    answer: (
      <>
        Sí. Ver{" "}
        <InlineLink href="/industries/government-public-sector">
          Sector público
        </InlineLink>
        .
      </>
    ),
    jsonLdAnswer: "Sí. Ver Sector público.",
  },
  {
    question: "¿Quién puede ver cada segmento?",
    answer:
      "Los permisos son granulares por rol y sede, y cada acceso queda auditado.",
  },
];

const relatedLinks = [
  { label: "Analítica", href: "/use-cases/analytics" },
  { label: "Sector público", href: "/industries/government-public-sector" },
  { label: "Financiadores", href: "/industries/payers" },
  { label: "Atención primaria", href: "/industries/primary-care" },
  {
    label: "Agentes de inteligencia en salud",
    href: "/use-cases/healthcare-intelligence-agents",
  },
];

const splitImageClassName = "rounded-[1.5rem]";

export default function PopulationSegmentationPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Segmentación poblacional"
        title="Conocé a tu población antes de que llegue a la guardia"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver la API", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/population-segmentation/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="mapa de una provincia dividido en zonas coloreadas por nivel de riesgo, con un panel lateral que filtra…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que necesitás para planificar mejor."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="pacientes segmentados"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="reducción de internaciones evitables"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Segmentá con datos que ya tenés"
        copy="Los datos de tu población ya existen, pero están repartidos en sistemas que no se hablan. Zonda los normaliza en un modelo canónico para que puedas cruzarlos."
        bullets={[
          "Ingesta desde EHR, laboratorios, padrones de financiadores, encuestas y planillas",
          "Codificación automática de diagnósticos (ICD-10) y resultados (LOINC)",
          "Deduplicación de pacientes entre fuentes",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/population-segmentation/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="varias fuentes (planilla Excel, HL7 de laboratorio, padrón PAMI) convergiendo en una tabla única de…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Construí segmentos sin código"
        mediaSide="left"
        bullets={[
          "Constructor visual de criterios clínicos, demográficos, geográficos y de cobertura",
          "Segmentos dinámicos que se actualizan en tiempo real",
          "Comparación entre segmentos, sedes y períodos",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/population-segmentation/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="constructor de reglas tipo 'SI edad > 65 Y diagnóstico = E11 Y sin HbA1c en 180 días' con un contador de…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Activá cada segmento"
        bullets={[
          "Envío de recordatorios y encuestas pre-consulta (por ejemplo, por WhatsApp)",
          "Asignación de visitas domiciliarias o turnos prioritarios",
          "Exportación a FHIR, CSV o vía webhook a tus propios sistemas",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/population-segmentation/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="segmento 'Alto riesgo cardiovascular' con botones 'Programar turnos', 'Enviar recordatorio' y 'Exportar',…"
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
        title="Empezá a ver a tu población completa"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
