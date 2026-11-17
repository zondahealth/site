import type { Metadata } from "next";
import Image from "next/image";
import {
  BrainCircuit,
  Cable,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  BenefitStories,
  CapabilityGrid,
  ChecklistSection,
  FeatureShot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Agentes de inteligencia para salud";
const description =
  "Zonda implementa agentes de IA que se conectan a tus sistemas, entienden los procesos de salud y responden en lenguaje natural sobre datos clínicos, operativos y financieros.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "agentes de IA en salud",
    "inteligencia artificial para salud",
    "datos de salud en lenguaje natural",
    "interoperabilidad en salud",
  ],
  alternates: { canonical: "/use-cases/ai-agents" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/ai-agents",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const agentBenefits = [
  {
    title: "Conectá los sistemas que ya tenés",
    copy: "Historias clínicas, turnos, facturación, sistemas de financiadores y herramientas operativas quedan vinculados, sin reemplazar ninguno.",
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
    copy: "Zonda interpreta las notas de los clínicos y las transforma en información que los agentes pueden usar, sin sumar tareas administrativas a la atención.",
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
    title: "Cualquier fuente, un mismo modelo",
    copy: "PDFs, texto, audio, FHIR, HL7, CSV y XML entran como llegan y quedan disponibles en un modelo común sobre el que razonan los agentes.",
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

const criticalQuestions = [
  "¿Qué pacientes tienen riesgo de interrumpir su tratamiento?",
  "¿Por qué disminuyeron nuestros ingresos este mes?",
  "¿Dónde existen ineficiencias en la operación?",
  "¿Qué profesionales o prácticas requieren atención?",
  "¿Qué patrones pueden indicar fraude o sobreutilización?",
];

const pillars: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Conectividad",
    copy: "Integración con los sistemas existentes, en los formatos en que ya trabajan.",
    icon: Cable,
  },
  {
    title: "Contexto",
    copy: "Información clínica, operativa y financiera vinculada a cada paciente, profesional y prestación.",
    icon: Layers,
  },
  {
    title: "Workflows de salud",
    copy: "Comprensión de cómo funcionan la atención, la autorización, la facturación y la liquidación.",
    icon: Workflow,
  },
  {
    title: "Razonamiento",
    copy: "Capacidades avanzadas de IA para relacionar eventos, detectar patrones y explicar lo que encuentran.",
    icon: BrainCircuit,
  },
];

const impactItems = [
  "Transformar datos fragmentados en inteligencia accionable.",
  "Reducir la dependencia de análisis y reportes manuales.",
  "Detectar riesgos e ineficiencias antes.",
  "Mejorar la visibilidad clínica, operativa y financiera.",
  "Tomar decisiones proactivas basadas en datos.",
  "Habilitar nuevos workflows impulsados por inteligencia artificial.",
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

export default function AiAgentsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Convertí datos fragmentados en inteligencia accionable"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
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
        title="Cada sistema contiene solo una parte de la realidad."
        copy="Las organizaciones de salud generan a diario enormes volúmenes de información, distribuidos en sistemas desconectados. Zonda construye la capa que los agentes necesitan para entender toda la organización."
        items={agentBenefits}
      />

      <SplitFeature
        title="Los datos de salud existen. La inteligencia, no."
        copy="Las organizaciones ya tienen gran parte de la información para responder sus preguntas más críticas, pero vive en sistemas que no fueron diseñados para trabajar juntos. Ninguno puede responderlas por sí solo."
        bullets={criticalQuestions}
        media={
          <FeatureShot
            src="/assets/solutions/ai/feature-1.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
          />
        }
      />

      <SplitFeature
        title="Preguntá en lenguaje natural, con toda la organización detrás"
        mediaSide="left"
        copy="En lugar de armar reportes manuales o consultar sistemas aislados, tus equipos hacen preguntas complejas y obtienen respuestas basadas en una visión completa."
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
              title: "Inteligencia clínica",
              copy: "“¿Qué pacientes muestran señales de interrupción del tratamiento?” El agente analiza tratamientos indicados, visitas realizadas, evolución clínica y actividad del paciente para identificar casos que requieren intervención.",
            },
            {
              title: "Inteligencia operativa",
              copy: "“¿Dónde estamos teniendo problemas en nuestra operación asistencial?” El agente combina turnos, profesionales, pacientes y procesos para detectar demoras, desvíos y oportunidades de mejora.",
            },
            {
              title: "Inteligencia financiera",
              copy: "“¿Por qué disminuyeron nuestros ingresos este mes?” El agente conecta prestaciones, autorizaciones, facturación, reglas de financiadores y liquidaciones para identificar las causas de la pérdida de ingresos.",
            },
          ]}
        />
      </SplitFeature>

      <CapabilityGrid
        id="como-funciona"
        className="scroll-mt-24"
        title="Cómo funciona"
        copy="Zonda construye la capa de inteligencia para que los agentes no solo recuperen información, sino que entiendan relaciones entre eventos, detecten patrones y ayuden a decidir. A diferencia de los asistentes genéricos, están diseñados para salud, donde el contexto, la precisión y la confiabilidad son fundamentales."
        items={pillars}
      />

      <SplitFeature
        title="Cada paciente, con un perfil listo para usar"
        copy="Un ejemplo de lo que producen los agentes: la información relevante de cada paciente reunida en un perfil actualizado, para decidir sin recorrer una historia clínica fragmentada."
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

      <ChecklistSection
        title="Impacto"
        copy="Lo que cambia cuando los agentes trabajan sobre datos de salud conectados."
        items={impactItems}
      />

      <CtaBanner
        title="Hacele a tus datos las preguntas que importan"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
