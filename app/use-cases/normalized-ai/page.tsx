import type { Metadata } from "next";
import Image from "next/image";
import {
  BenefitStories,
  FeatureShot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "IA normalizada: datos clínicos listos para usar";
const description =
  "Zonda conecta, interpreta y normaliza datos clínicos, operativos y financieros para que tus equipos puedan usarlos con contexto.";

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

const agentBenefits = [
  {
    title: "Detectá pacientes que necesitan seguimiento",
    copy: "Conectá historial de tratamiento, visitas y eventos clínicos para identificar pacientes que pueden necesitar apoyo antes de interrumpir su atención.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-1.png"
        alt="Ilustración de dos manos armando un rompecabezas, datos clínicos conectados"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "De notas a información clínica estructurada",
    copy: "Zonda interpreta las notas de los clínicos y las transforma en información lista para usar, sin sumar tareas administrativas a la atención.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-2.png"
        alt="Ilustración de notas en papel que pasan a una notebook, de notas a datos listos para usar"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
  },
  {
    title: "Unificá cualquier fuente de datos",
    copy: "PDFs, texto, audio, FHIR, HL7, CSV y XML entran como llegan y quedan disponibles en un modelo común.",
    media: (
      <Image
        src="/assets/solutions/ai/benefit-3.png"
        alt="Ilustración de piezas sueltas que se unen en un rompecabezas, cualquier tipo de dato"
        fill
        sizes={benefitImageSizes}
        className="object-cover"
      />
    ),
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

export default function NormalizedAiPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Convertí datos fragmentados en inteligencia accionable"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        secondary={{
          label: "Ver el modelo de datos",
          href: "/developers#modelo-canonico",
        }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="flex h-full w-full items-end justify-center px-4 pt-28 sm:px-6 sm:pt-32 lg:justify-start lg:px-0">
            <Image
              src="/assets/solutions/ai/hero.png"
              alt="Tablero de prestaciones por estado, con el agente pidiendo las prestaciones de PAMI pendientes de facturación"
              width={1512}
              height={772}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto w-full max-w-none lg:w-[1000px] lg:shrink-0"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para convertir datos de salud en inteligencia."
        copy="Los agentes operan sobre datos de salud conectados. Entienden las relaciones entre pacientes, profesionales, tratamientos, operaciones y procesos financieros, no solo registros sueltos."
        items={agentBenefits}
      />

      <SplitFeature
        title="Los datos de salud existen. La inteligencia, no."
        copy="Las organizaciones ya recolectan enormes volúmenes de información clínica, operativa y financiera. El problema es que esos datos viven en sistemas que nunca fueron diseñados para trabajar juntos."
        media={
          <FeatureShot
            src="/assets/solutions/ai/feature-1.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Conectá las fuentes",
              copy: "Incorporá datos clínicos, operativos y financieros aunque vengan de sistemas y formatos distintos.",
            },
            {
              title: "Entendé las relaciones",
              copy: "Paciente, profesional, tratamiento, prestación y pago dejan de ser registros aislados.",
            },
            {
              title: "Usá un modelo común",
              copy: "La información queda preparada para análisis, automatizaciones y nuevas experiencias.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Hacé una pregunta compleja de salud"
        mediaSide="left"
        copy="Dales a tus equipos un solo lugar para explorar qué está pasando, por qué está pasando y dónde tienen que actuar, sin armar cada dataset a mano."
        media={
          <FeatureShot
            src="/assets/solutions/ai/feature-2.png"
            alt="Asistente Zonda respondiendo que encontró 24 tratamientos que requieren seguimiento"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Riesgo clínico",
              copy: "¿Qué pacientes pueden interrumpir su tratamiento y necesitan seguimiento?",
            },
            {
              title: "Operación asistencial",
              copy: "¿Dónde se está trabando la atención y qué equipo tiene que intervenir?",
            },
            {
              title: "Ciclo de ingresos",
              copy: "¿Por qué cambió un reintegro o qué prestaciones siguen pendientes?",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        id="como-funciona"
        title="Cada paciente, con un perfil listo para usar"
        copy="Zonda reúne la información relevante de cada paciente en un perfil actualizado, para que el profesional pueda decidir sin recorrer una historia clínica fragmentada."
        media={
          <FeatureShot
            src="/assets/solutions/ai/feature-3.png"
            alt="Perfil de salud de una paciente: resumen clínico, alergias, medicación, condiciones y datos de contacto"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Lo clínicamente relevante",
              copy: "Medicaciones, alergias, signos vitales, condiciones y alertas en un mismo perfil.",
            },
            {
              title: "Un resumen para atender",
              copy: "El contexto que necesitás para el consultorio, asociado a cada paciente.",
            },
            {
              title: "Información al día",
              copy: "Snapshots periódicos para entender cómo está cada persona en este momento.",
            },
          ]}
        />
      </SplitFeature>

      <CtaBanner
        title="Hacele a tus datos las preguntas que importan"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
