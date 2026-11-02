import type { Metadata } from "next";
import Image from "next/image";
import { Fingerprint, ShieldCheck, Sparkles, Users } from "lucide-react";

import { useCases } from "@/lib/navigation";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Analítica de salud";
const description =
  "Dashboards que se adaptan a lo que necesitás ver, alertas en tiempo real cuando algo se sale de rango y reportes por región, unidad o profesional.";

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
    title: "Todo en un solo tablero",
    copy: "Clínica, operación y facturación cruzadas sobre el mismo modelo de datos.",
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
    title: "Alertas que llegan a tiempo",
    copy: "Umbrales configurables y detección automática de outliers.",
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
    title: "Reportes listos para compartir",
    copy: "Exportables a PDF, Excel o FHIR, y compartibles con stakeholders sin romper el compliance.",
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
    answer: (
      <>
        Las alertas y dashboards trabajan sobre datos en tiempo real a medida
        que se ingestan.{" "}
        <Pending>DETALLE TÉCNICO A CONFIRMAR: latencia por tipo de fuente</Pending>
      </>
    ),
  },
];

const relatedLinks = [
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Hospitales", href: "/industries/hospitals" },
  { label: "Clínicas y redes", href: "/industries/clinics-provider-networks" },
  {
    label: "Agentes de inteligencia en salud",
    href: "/use-cases/normalized-ai",
  },
];

export default function AnalyticsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Analítica"
        title="Visibilidad total de tu operación de salud. Cero puntos ciegos."
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
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="horas de reporting ahorradas por mes"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="indicadores monitoreados en tiempo real"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Dashboards que se adaptan a tu organización"
        bullets={[
          "Vistas por holding, entidad jurídica, sede, servicio o profesional",
          "Indicadores clínicos, operativos y financieros en el mismo lugar",
          "Filtros por período, financiador y especialidad",
        ]}
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
      />

      <SplitFeature
        title="Detectá patrones y anomalías"
        mediaSide="left"
        bullets={[
          "Alertas en tiempo real (tiempos de espera, picos de consultas, desvíos de facturación)",
          "Identificación automática de tendencias en datos clínicos",
          "Historial de cada alerta y su resolución",
        ]}
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
      />

      <SplitFeature
        title="Observabilidad de tus datos e integraciones"
        bullets={[
          "Volumen de transacciones y performance de cada integración activa",
          "Calidad de datos por fuente",
          "Acceso a los datos vía API para tu propio BI",
        ]}
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
      />

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
                <Pending>CARGO</Pending>, <Pending>ORGANIZACIÓN</Pending>
              </>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Dejá de operar a ciegas"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
