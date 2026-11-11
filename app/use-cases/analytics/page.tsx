import type { Metadata } from "next";
import Image from "next/image";
import { Fingerprint, ShieldCheck, Sparkles, Users } from "lucide-react";

import { useCases } from "@/lib/navigation";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Analítica de salud";
const description =
  "Conectá datos clínicos, operativos y financieros en una misma vista. Entendé cada indicador desde su origen hasta la decisión que habilita.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/analytics" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/analytics",
  },
};

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Una vista para toda la organización",
    copy: "Clínica, operación, facturación e integraciones sobre el mismo modelo de datos, sin consolidaciones manuales.",
    media: (
      <Image
        src="/assets/solutions/analitics/search.png"
        alt="Búsqueda de pacientes con tratamiento activo y procedimiento programado"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Alertas con contexto para actuar",
    copy: "Detectá desvíos y tendencias antes de que se conviertan en un problema, con la información necesaria para entender qué pasó.",
    media: (
      <Image
        src="/assets/solutions/analitics/desvio.png"
        alt="Comparación entre un hospital en el rango esperado y una sala con desvío"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Datos listos para cada destinatario",
    copy: "Compartí y exportá información para dirección, equipos operativos, financiadores o tus propias herramientas de BI.",
    media: (
      <Image
        src="/assets/solutions/analitics/formats.png"
        alt="Salidas en texto plano, PDF, CSV, HL7, FHIR y XML"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
];

const splitImageClassName = "h-auto w-full rounded-[1.5rem] object-cover";
const splitImageSizes = "(min-width: 1024px) 50vw, 100vw";

function FeatureDetails({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-sm font-semibold text-foreground">{item.title}</dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function useCaseDescription(href: string) {
  return useCases.find((item) => item.href === href)?.description ?? "";
}

const capabilities = [
  {
    title: "IA normalizada",
    href: "/use-cases/normalized-ai",
    icon: Sparkles,
  },
  { title: "Identidad", href: "/use-cases/identity", icon: Fingerprint },
  {
    title: "Fraude",
    href: "/use-cases/fraud-risk-prevention",
    icon: ShieldCheck,
  },
  {
    title: "Segmentación poblacional",
    href: "/use-cases/population-segmentation",
    icon: Users,
  },
].map((item) => ({ ...item, copy: useCaseDescription(item.href) }));

const faqItems = [
  {
    question: "¿Puedo conectar mi propia herramienta de BI?",
    answer:
      "Sí. Los datos normalizados están disponibles vía API REST y exportación en múltiples formatos.",
  },
  {
    question: "¿Puedo ver varias entidades jurídicas en un solo tablero?",
    answer:
      "Sí. Zonda es multi-entidad: consolidás holding, entidades y sedes sin perder trazabilidad.",
  },
  {
    question: "¿Qué tan actualizados están los datos?",
    answer:
      "Los tableros y las alertas se actualizan a medida que Zonda recibe y procesa información. La frecuencia final depende de cómo esté conectada cada fuente.",
  },
  {
    question: "¿Puedo saber de dónde sale un indicador?",
    answer:
      "Sí. Cada métrica puede recorrerse hacia atrás hasta las transacciones, eventos y fuentes que la componen. Así podés validar un resultado y entender qué cambió.",
  },
];

export default function AnalyticsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Entendé toda tu operación de salud, de punta a punta"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver la API", href: "/developers" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="flex h-full w-full items-end justify-center px-4 pt-28 sm:px-6 sm:pt-32 lg:justify-start lg:px-0">
            <Image
              src="/assets/solutions/analitics/hero.png"
              alt="Tablero de Médica Salud con ingresos y egresos en vivo y la evolución de los últimos 12 meses"
              width={1668}
              height={943}
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-auto w-full max-w-none lg:w-[1000px] lg:shrink-0"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que necesitás para decidir con datos."
        copy="Una capa analítica que no separa lo clínico de lo operativo ni lo financiero. Podés explorar lo que pasa, detectar desvíos y volver siempre al dato que lo explica."
        items={benefits}
      />

      <SplitFeature
        title="Una lectura de la operación para cada nivel de decisión"
        copy="Dirección, coordinación y equipos de atención pueden trabajar sobre la misma información, con el nivel de detalle que necesitan para decidir y actuar."
        media={
          <Image
            src="/assets/solutions/analitics/health-panel.png"
            alt="Panel de salud con pacientes, procedimientos y tratamientos según el estado clínico"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "De la red al detalle", copy: "Vistas por holding, entidad jurídica, sede, servicio, profesional o paciente." },
            { title: "Todos los datos, una misma lectura", copy: "Indicadores clínicos, operativos y financieros conectados en el mismo tablero." },
            { title: "El contexto justo", copy: "Filtrá por período, financiador, especialidad, territorio o cualquier dimensión relevante." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Detectá lo que cambió antes de que se vuelva urgente"
        mediaSide="left"
        copy="Las alertas no deberían ser solo una señal roja. Zonda ayuda a identificar el desvío, entender a quién afecta y seguir qué se hizo para resolverlo."
        media={
          <Image
            src="/assets/solutions/analitics/anomaly.png"
            alt="Anomalía detectada por un monto y una ubicación sospechosa"
            width={1503}
            height={1047}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "Señales operativas", copy: "Tiempos de espera, picos de consultas, capacidad o desvíos de facturación que salen de rango." },
            { title: "Patrones que no se ven en una planilla", copy: "Tendencias clínicas y operativas detectadas al cruzar múltiples fuentes y períodos." },
            { title: "Seguimiento de cada excepción", copy: "Historial de la alerta, su contexto y las acciones tomadas para resolverla." },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Cada número se puede seguir hasta su origen"
        copy="La analítica es confiable cuando el camino del dato también es visible. Zonda permite observar cómo entra la información, cómo se transforma y dónde impacta."
        media={
          <Image
            src="/assets/solutions/analitics/mismatch.png"
            alt="Profesional conectado a documentación, medicación, agenda, institución y prácticas, con dos fuentes desconectadas"
            width={1254}
            height={1254}
            sizes={splitImageSizes}
            className={splitImageClassName}
          />
        }
      >
        <FeatureDetails
          items={[
            { title: "Integraciones bajo observación", copy: "Volumen de transacciones, estado y performance de cada conexión activa." },
            { title: "Calidad por fuente", copy: "Identificá campos incompletos, inconsistencias y cambios en los datos antes de que afecten un reporte." },
            { title: "Trazabilidad hasta el evento", copy: "Desde un indicador podés volver a las transacciones, eventos y fuentes que explican ese resultado." },
          ]}
        />
      </SplitFeature>

      <CapabilityGrid
        title="Una capa de datos que habilita más decisiones"
        items={capabilities}
      />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Convertí información dispersa en decisiones trazables"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
