import type { Metadata } from "next";
import Image from "next/image";

import {
  BenefitStories,
  FeatureShot,
  SectionIntro,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { IndustryProducts } from "@/components/industries/IndustryProducts";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

// SECTOR SUGERIDO: no listado por el founder; validar. Publicado en la navegación a pedido del equipo antes de esa aprobación.

const title = "Laboratorios y diagnóstico";
const description =
  "Procesá resultados, vinculalos al paciente correcto y mantené trazabilidad desde que una muestra ingresa hasta que el resultado llega a quien tiene que actuar.";

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

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Resultados que se entienden fuera del laboratorio",
    copy: "Terminología propia y resultados normalizados para que hospitales, profesionales y financiadores los puedan usar con contexto.",
    href: "/use-cases/ai-agents",
    cta: "Ver agentes de IA",
    media: (
      <Image
        src="/assets/industries/laboratories/benefit-1.png"
        alt="Resultados de laboratorio normalizados con terminología LOINC para uso fuera del laboratorio."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Un resultado, todas las salidas necesarias",
    copy: "Cada destinatario puede recibir la información en el formato y el canal que necesita, sin reconstruirla a mano.",
    media: (
      <Image
        src="/assets/industries/laboratories/benefit-2.png"
        alt="Un resultado de laboratorio distribuido en múltiples formatos y canales de salida."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Cada resultado llega al paciente correcto",
    copy: "La identidad unificada ayuda a vincular estudios entre instituciones y evitar que un resultado valioso se pierda o se duplique.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    media: (
      <Image
        src="/assets/industries/laboratories/benefit-3.png"
        alt="Identidad unificada del paciente vinculando resultados entre instituciones."
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const features = [
  {
    title: "Cada resultado conserva su recorrido",
    copy: "Una muestra no debería desaparecer en el camino entre la recepción, el procesamiento, la validación y la entrega. Zonda conecta cada evento para que el laboratorio pueda entender qué entró, qué se procesó y qué salió.",
    details: [
      {
        title: "Ingreso identificable",
        copy: "Muestras, órdenes, paciente, origen y momento de recepción vinculados desde el comienzo.",
      },
      {
        title: "Estado durante el proceso",
        copy: "Información visible sobre el recorrido del resultado y los puntos que requieren intervención.",
      },
      {
        title: "Salida trazable",
        copy: "Cada informe conserva el vínculo con el estudio, la persona y el canal por el que fue entregado.",
      },
    ],
    label:
      "Línea de tiempo de una muestra desde su ingreso, procesamiento y validación hasta la entrega del resultado.",
  },
  {
    title: "Los resultados se integran a la historia del paciente",
    copy: "El valor de un resultado crece cuando llega con la identidad, el contexto y la codificación que permiten usarlo en la siguiente decisión clínica.",
    details: [
      {
        title: "Identidad que conecta instituciones",
        copy: "Resultados asociados al paciente correcto aunque la atención ocurra en distintas organizaciones.",
      },
      {
        title: "Datos clínicos comparables",
        copy: "LOINC y otros estándares para que un resultado pueda leerse junto a antecedentes, tratamientos y estudios previos.",
      },
      {
        title: "Historia que no se fragmenta",
        copy: "El profesional recibe el resultado dentro del contexto de la persona, no como un archivo aislado.",
      },
    ],
    label:
      "Perfil de paciente con resultados de laboratorio normalizados, estudios previos y contexto clínico.",
  },
  {
    title: "Las alertas llegan cuando un resultado necesita atención",
    copy: "No todos los resultados requieren el mismo recorrido. Zonda puede hacer visible una anomalía, un valor crítico o una demora y conservar el contexto para que el equipo adecuado responda a tiempo.",
    details: [
      {
        title: "Señales clínicas y operativas",
        copy: "Valores críticos, resultados pendientes o desvíos de tiempos que necesitan seguimiento.",
      },
      {
        title: "Contexto para responder",
        copy: "Paciente, estudio, profesional y evento de origen disponibles junto a cada alerta.",
      },
      {
        title: "Información lista para compartir",
        copy: "FHIR, HL7, CSV, API u otros formatos según el hospital, profesional o sistema que la recibe.",
      },
    ],
    label:
      "Alerta de resultado crítico con paciente, estudio, estado de comunicación y trazabilidad de entrega.",
  },
];

function FeatureDetails({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-sm font-semibold text-foreground">
            {item.title}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function LaboratoriesPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Laboratorios y diagnóstico"
        title="Cada resultado, conectado a quien necesita usarlo"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-full">
            <Image
              src="/assets/industries/laboratories/higea.png"
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
        title="Resultados que no se pierden al salir del laboratorio."
        copy="Zonda conserva el vínculo entre muestra, resultado, paciente y destinatario para que la información llegue completa, se pueda rastrear y habilite la siguiente decisión."
        items={benefits}
      />

      <section className="px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Del ingreso de una muestra a una decisión con contexto"
            copy="El laboratorio puede ser una fuente de información crítica para todo el sistema de salud. Cuando los resultados se procesan, normalizan y distribuyen sobre una misma capa, cada salida queda lista para usar y cada paso puede verificarse."
            className="max-w-4xl"
            titleClassName="text-5xl sm:text-6xl"
          />
        </div>
      </section>

      {features.map((item, index) => (
        <SplitFeature
          key={item.label}
          title={item.title}
          copy={item.copy}
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={
            <FeatureShot
              src={`/assets/industries/laboratories/feature-${index + 1}.png`}
              alt={item.label}
            />
          }
        >
          <FeatureDetails items={item.details} />
        </SplitFeature>
      ))}

      <IndustryProducts
        title="Del resultado al paciente correcto, y a quien tiene que actuar."
        subtitle="Normalización, identidad, analítica y automatización sobre cada estudio."
        keys={["ai-agents", "identity", "analytics", "automation"]}
      />

      <CtaBanner
        title="Hacé que cada resultado llegue más lejos"
        subtitle="Procesá, vinculá, alertá y distribuí resultados sin perder el registro de lo que entra ni de lo que sale."
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
