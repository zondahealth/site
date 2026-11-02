import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Fingerprint, Sparkles, Workflow } from "lucide-react";

import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  InlineLink,
  MetricSlot,
  SplitFeature,
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

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Una sola foto de toda tu población",
    copy: "Zonda une historias clínicas, turnos, encuestas, laboratorios y padrones en un perfil por paciente, con identidad unificada.",
    media: (
      <Image
        src="/assets/solutions/segmentation/unified-patient.png"
        alt="Perfil unificado de una paciente conectado a medicación, historia clínica, hospital, turnos, vacunas y signos vitales"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Segmentos que se actualizan solos",
    copy: "Definí criterios una vez (edad, diagnóstico ICD-10, resultados LOINC, última consulta, zona) y los segmentos se recalculan con cada dato nuevo.",
    media: (
      <Image
        src="/assets/solutions/segmentation/dynamic-segments.png"
        alt="Segmento dinámico con criterios de edad, diabetes ICD-10 E11 y sin consulta en más de 180 días, con 1.284 pacientes"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Del segmento a la acción",
    copy: "Dispará campañas, turnos, visitas o seguimientos para cada grupo desde la misma plataforma o vía API.",
    media: (
      <Image
        src="/assets/solutions/segmentation/segmentation-action.png"
        alt="El segmento de pacientes de alto riesgo dispara campaña enviada, turnos programados y seguimiento iniciado"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
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

const splitImageClassName = "h-auto w-full rounded-[1.5rem] object-cover";
const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

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
        mediaClassName="overflow-visible"
        media={
          <div className="flex w-full items-center justify-center px-[8.4%] pt-16 pb-6 sm:pt-20 lg:pt-24 lg:pb-10">
            <div className="relative w-full">
              <Image
                src="/assets/solutions/segmentation/hero.png"
                alt="Mapa de una provincia con departamentos coloreados según el nivel de riesgo"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1024px) 47vw, 84vw"
                className="h-auto w-full"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop1.png"
                alt="Zona Norte, bajo riesgo: 312.540 personas, 14% de 60 años o más y 22% con hipertensión o diabetes"
                width={588}
                height={289}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute top-[16%] left-0 z-10 w-[65%] max-w-[240px] -translate-x-[36%] drop-shadow-lg"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop2.png"
                alt="Zona Sur, riesgo medio: 184.210 personas, 20% de 60 años o más y 27% con hipertensión o diabetes"
                width={580}
                height={280}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute bottom-[14%] left-0 z-10 w-[65%] max-w-[240px] -translate-x-[32%] drop-shadow-lg"
              />
              <Image
                src="/assets/solutions/segmentation/hero-pop3.png"
                alt="Zona CABA y Conurbano, alto riesgo: 1.248.320 personas, 28% de 60 años o más y 34% con hipertensión o diabetes"
                width={587}
                height={291}
                sizes="(min-width: 1024px) 220px, 38vw"
                className="pointer-events-none absolute top-[42%] right-0 z-10 w-[60%] max-w-[240px] translate-x-[28%] -translate-y-1/2 drop-shadow-lg"
              />
            </div>
          </div>
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
          <Image
            src="/assets/solutions/segmentation/unified-patient.png"
            alt="Paciente unificada conectada a medicación, historia clínica, hospital, turnos, vacunas y signos vitales"
            width={1497}
            height={1051}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Explorá tu población"
        copy="Recorré tus datos con un agente. Preguntá por riesgo, condición, territorio o cobertura y llegá al perfil de cada paciente."
        mediaSide="left"
        bullets={[
          "Consultas en lenguaje natural sobre la población completa",
          "El agente cruza historias clínicas, turnos, laboratorios y padrones",
          "De una pregunta al segmento o al paciente que la responde",
        ]}
        media={
          <Image
            src="/assets/solutions/segmentation/health-panel.png"
            alt="Panel de salud con 248 pacientes, 1.320 procedimientos y la evolución del estado clínico"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
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
          <Image
            src="/assets/solutions/segmentation/segment-flow.png"
            alt="Segmento de riesgo cardiovascular con recordatorio enviado, campaña de prevención incluida y flujo completado"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      />

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Empezá a ver a tu población completa"
        buttonText="Hablemos"
      />
    </main>
  );
}
