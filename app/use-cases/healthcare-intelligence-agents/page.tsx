import type { Metadata } from "next";
import Image from "next/image";
import { BarChart3, Code, Fingerprint, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  ChecklistSection,
  FaqList,
  InlineLink,
  MetricSlot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Agentes de inteligencia en salud";
const description =
  "Conectá datos clínicos, operativos y financieros para que agentes de IA entiendan tus flujos de trabajo y entreguen inteligencia en tiempo real.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/healthcare-intelligence-agents" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/healthcare-intelligence-agents",
  },
};

const benefits = [
  {
    title: "Detectá riesgo clínico en datos conectados",
    copy: "Conectá historial de tratamiento, visitas y eventos clínicos para identificar pacientes que pueden necesitar apoyo proactivo.",
    media: (
      <Image
        src="/assets/solutions/ai/user-connected.png"
        alt="Paciente conectada con su medicación, historia clínica, hospital, agenda y signos vitales"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Mirá dónde se traba la operación",
    copy: "Dales a los equipos de operaciones una sola vista de agendas, capacidad y recorridos de pacientes para detectar cuellos de botella antes.",
    media: (
      <Image
        src="/assets/solutions/ai/data-updated.png"
        alt="Movimientos operativos recién actualizados, con ingresos y egresos de los últimos minutos"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
  {
    title: "Rastreá los resultados financieros hasta la atención",
    copy: "Vinculá atención brindada, autorizaciones, facturación y liquidación para explicar cambios en los reintegros.",
    media: (
      <Image
        src="/assets/solutions/ai/anomaly.png"
        alt="Anomalía detectada en un monto de reintegro, marcada como ubicación sospechosa"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    ),
  },
];

const foundation = [
  { label: "Interoperabilidad", link: "IA normalizada", href: "/use-cases/normalized-ai" },
  { label: "Identidad", link: "Identidad", href: "/use-cases/identity" },
  {
    label: "Transacción de salud",
    link: "Ciclo de ingresos",
    href: "/use-cases/revenue-cycle",
  },
];

const capabilities = [
  { title: "IA normalizada", href: "/use-cases/normalized-ai", icon: Sparkles },
  { title: "Identidad", href: "/use-cases/identity", icon: Fingerprint },
  { title: "Analítica", href: "/use-cases/analytics", icon: BarChart3 },
  { title: "API", href: "/developers", icon: Code },
];

const faqItems = [
  {
    question: "¿Qué son los agentes de inteligencia en salud?",
    answer:
      "Son agentes de IA que operan sobre datos clínicos, operativos y financieros conectados para responder preguntas, detectar patrones y apoyar decisiones en los flujos de trabajo de salud.",
  },
  {
    question: "¿Qué fuentes de datos puede conectar Zonda?",
    answer:
      "HCE/EHR, facturación, plataformas de financiadores, agendas y otros sistemas operativos, sin reemplazarlos.",
  },
  {
    question: "¿En qué se diferencia de herramientas de IA genéricas?",
    answer:
      "Las herramientas genéricas trabajan sobre registros aislados. Los agentes de Zonda entienden las relaciones entre pacientes, profesionales, tratamientos, operaciones y procesos financieros.",
  },
  {
    question: "¿Tengo que reemplazar mi software actual?",
    answer:
      "No. Zonda está pensado para conectar los sistemas que ya operás y sumar una capa de inteligencia por encima.",
  },
  {
    question:
      "¿Los agentes pueden trabajar entre datos clínicos, operativos y financieros?",
    answer:
      "Sí. Zonda crea un contexto de salud compartido para que los agentes razonen entre dominios en vez de analizar cada sistema por separado.",
  },
  {
    question: "¿Cómo les da Zonda contexto de salud a los agentes?",
    answer:
      "Normaliza los datos, preserva las relaciones de los flujos de trabajo y conecta los eventos con las personas, los procesos y la actividad financiera que los rodean.",
  },
  {
    question: "¿Los equipos necesitan conocimientos técnicos?",
    answer: "No. Los agentes se consultan en lenguaje natural.",
  },
  {
    question: "¿Qué pasa con la privacidad de los datos que usan los agentes?",
    answer: (
      <Pending>
        POLÍTICA DE USO DE DATOS PARA IA A CONFIRMAR: modelos usados, dónde
        corren, retención
      </Pending>
    ),
  },
];

const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

export default function HealthcareIntelligenceAgentsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Agentes de inteligencia en salud"
        title="Convertí datos fragmentados en inteligencia accionable"
        copy={description}
        primary={{ label: "Hablá con nuestro equipo", href: "/contact" }}
        media={
          <div className="flex h-full w-full items-center justify-center px-4 pt-28 pb-8 sm:px-6 sm:pt-32">
            <Image
              src="/assets/solutions/ai/hero.png"
              alt="Asistente Zonda con 124 tratamientos activos, 24 pendientes y pacientes que requieren intervención"
              width={1316}
              height={1171}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-auto max-h-[min(560px,100%)] max-w-full object-contain"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para convertir datos de salud en inteligencia."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="preguntas respondidas por los agentes"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="horas de análisis manual ahorradas"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        id="como-funciona"
        eyebrow="La capa que falta"
        title="Los datos de salud existen. La inteligencia, no."
        copy="Las organizaciones ya recolectan enormes volúmenes de información clínica, operativa y financiera. El problema es que esos datos viven en sistemas que nunca fueron diseñados para trabajar juntos."
        media={
          <Image
            src="/assets/solutions/ai/dashboard-centra-nube.png"
            alt="Panel de Médica Salud con ingresos, egresos y categorías como reembolsos, nómina y facturas"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <SplitFeature
        eyebrow="Razonamiento nativo de salud"
        title="Agentes de IA construidos para los flujos de la salud"
        copy="Los agentes de Zonda operan sobre datos de salud conectados. Entienden las relaciones entre pacientes, profesionales, tratamientos, operaciones y procesos financieros, no solo registros sueltos."
        mediaSide="left"
        media={
          // Archivo final sugerido: public/assets/use-cases/agents/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="grafo de relaciones paciente ↔ profesional ↔ tratamiento ↔ prestación ↔ liquidación, con el agente…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <ChecklistSection
        eyebrow="La base de la inteligencia"
        title="De sistemas desconectados a operaciones inteligentes"
        copy="Zonda combina interoperabilidad, normalización de datos, comprensión de flujos de trabajo y razonamiento con IA para que los agentes operen con contexto de salud en su núcleo."
        items={foundation.map((item) => (
          <span key={item.label}>
            <strong className="font-semibold text-foreground">
              {item.label}
            </strong>
            : ver <InlineLink href={item.href}>{item.link}</InlineLink>
          </span>
        ))}
      />

      <SplitFeature
        eyebrow="Inteligencia en acción"
        title="Hacé una pregunta compleja de salud"
        copy={
          <>
            Dales a tus equipos un solo lugar para explorar qué está pasando,
            por qué está pasando y dónde tienen que actuar, sin armar cada
            dataset a mano.
            {/* Nota editorial de la fuente, no se publica: "(tomados del sitio en desarrollo)". */}
            <span className="mt-3 block">Ejemplos de preguntas:</span>
          </>
        }
        bullets={[
          "¿Qué pacientes están en riesgo de interrumpir su tratamiento?",
          "¿Dónde se está trabando la operación asistencial?",
          "¿Por qué cambió el reintegro?",
        ]}
        media={
          <Image
            src="/assets/solutions/payments/assistant-window.png"
            alt="Asistente Zonda respondiendo que encontró 24 tratamientos que requieren seguimiento"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Hacele a tus datos las preguntas que importan"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
