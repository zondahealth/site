import type { Metadata } from "next";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  InlineLink,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Recursos humanos para equipos de salud";
const description =
  "Legajos, matrículas, disponibilidad, agendas, productividad y liquidación de profesionales en un solo lugar, conectados con la operación clínica.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/workforce" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/workforce",
  },
};

const benefits = [
  {
    title: "Legajo vivo de cada profesional",
    copy: "Datos, matrícula, especialidades y documentación siempre actualizados, con alertas de vencimiento.",
    // Archivo final sugerido: public/assets/use-cases/workforce/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Legajo vivo de cada profesional». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Disponibilidad y carga en tiempo real",
    copy: "Sabé cuánto tiene asignado cada profesional y reasigná en un click.",
    // Archivo final sugerido: public/assets/use-cases/workforce/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Disponibilidad y carga en tiempo real». Composición:…"
        fill
      />
    ),
  },
  {
    title: "Productividad y liquidación conectadas",
    copy: "Lo que el profesional hizo en la práctica alimenta directamente su liquidación.",
    // Archivo final sugerido: public/assets/use-cases/workforce/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Productividad y liquidación conectadas». Composición:…"
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Zonda reemplaza mi sistema de RRHH o nómina?",
    answer: (
      <>
        No necesariamente. Zonda gestiona la información clínica y operativa de
        tus profesionales y puede alimentar tu sistema de nómina existente.{" "}
        <Pending>ALCANCE A CONFIRMAR</Pending>
      </>
    ),
  },
  {
    question:
      "¿Sirve para profesionales independientes que trabajan con varias organizaciones?",
    answer:
      "Sí. Cada profesional tiene un perfil propio que se vincula con cada organización.",
  },
  {
    question: "¿Cómo se controla quién ve los datos de cada profesional?",
    answer: "Con permisos granulares por rol y sede, y auditoría completa.",
  },
];

const relatedLinks = [
  { label: "Conexión de prestadores", href: "/use-cases/provider-credentialing" },
  { label: "Identidad", href: "/use-cases/identity" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
  { label: "Hospitales", href: "/industries/hospitals" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
];

export default function WorkforcePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Recursos humanos"
        title="Tus equipos de salud, organizados de punta a punta"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver la API", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/workforce/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="panel de equipo con profesionales, su especialidad, sede, estado de matrícula y carga del día, como en…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que necesitás para gestionar equipos clínicos."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="tiempo de alta de un profesional"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="reducción de errores de liquidación"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Altas sin papeles"
        bullets={[
          <>
            Onboarding digital del profesional con su perfil de{" "}
            <InlineLink href="/use-cases/identity">identidad</InlineLink>
          </>,
          <>
            Reutilización de credenciales ya cargadas vía{" "}
            <InlineLink href="/use-cases/provider-credentialing">
              conexión de prestadores
            </InlineLink>
          </>,
          "Asignación de roles y permisos por sede desde el primer día",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/workforce/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="flujo de alta de profesional en 3 pasos con datos pre-completados, como en…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Agendas y asignaciones"
        mediaSide="left"
        bullets={[
          "Asignación por zona, disponibilidad y especialidad",
          "Cobertura de ausencias y urgencias",
          "Historial de cada cambio",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/workforce/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="calendario semanal de un equipo con huecos de cobertura resaltados, como en plaid.com/use-cases/ (UI de…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Liquidación y productividad"
        bullets={[
          "Prestaciones realizadas por profesional, sede y financiador",
          <>
            Base para liquidación de honorarios{" "}
            <Pending>INTEGRACIÓN CON SISTEMAS DE NÓMINA A CONFIRMAR</Pending>
          </>,
          "Indicadores de productividad y calidad",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/workforce/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tarjeta de resumen mensual por profesional (visitas, horas, prestaciones, monto), como en…"
            className="rounded-[1.5rem]"
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

      <FaqList items={faqItems} />

      <CtaBanner
        title="Ordená a tu equipo hoy"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
