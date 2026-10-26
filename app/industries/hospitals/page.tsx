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
  StatSlot,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Hospitales";
const description =
  "Integrá sistemas legacy, laboratorios y servicios en un modelo canónico, con gobernanza estricta y auditoría completa. Sin reemplazar tu HIS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/hospitals" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/hospitals",
  },
};

const benefits = [
  {
    title: "Interoperabilidad real",
    copy: "FHIR R4, HL7v2, CSV y API REST, con mapeo automático de esquemas legacy.",
    href: "/use-cases/normalized-ai",
    cta: "Ver IA normalizada",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Interoperabilidad real». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Gobernanza por servicio",
    copy: "Roles y permisos por servicio y sede, con auditoría de quién hizo qué y cuándo.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Gobernanza por servicio». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Visibilidad operativa",
    copy: "Tiempos de espera, ocupación y facturación en tiempo real.",
    href: "/use-cases/analytics",
    cta: "Ver analítica",
    // Archivo final sugerido: public/assets/industries/hospitals/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Visibilidad operativa». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Tengo que cambiar mi HIS?",
    answer: "No. Zonda se integra con tus sistemas actuales.",
  },
  {
    question: "¿Qué estándares soporta?",
    answer:
      "FHIR R4, HL7v2, CSV, API REST; normalización LOINC e ICD-10.",
  },
  {
    question: "¿Cómo se gestionan los permisos?",
    answer: "Granulares por rol, servicio y sede, con auditoría completa.",
  },
];

const relatedLinks = [
  { label: "Clínicas y redes", href: "/industries/clinics-provider-networks" },
  { label: "Laboratorios", href: "/industries/laboratories" },
  { label: "Sector público", href: "/industries/government-public-sector" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
  {
    label: "Agentes de inteligencia",
    href: "/use-cases/healthcare-intelligence-agents",
  },
];

const strongClassName = "font-semibold text-foreground";

export default function HospitalsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Hospitales"
        title="Todos los servicios de tu hospital, sobre una misma capa de datos"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver interoperabilidad", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/hospitals/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="diagrama del hospital con servicios (guardia, internación, laboratorio, imágenes, facturación) conectados…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por tu hospital."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* VALIDAR: errores médicos con IA aplicada a datos clínicos (dato publicado en zondahealth.com/empresa — validar) */}
          <StatSlot
            value="−30%"
            label="errores médicos con IA aplicada a datos clínicos"
          />
          {/* VALIDAR: el prompt no indica fuente para esta cifra — confirmar antes de publicar. */}
          <StatSlot
            value="−15%"
            label="tiempos de diagnóstico con alertas automáticas"
          />
          <MetricSlot
            label="servicios integrados"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Casos de uso clave"
        bullets={[
          <>
            <strong className={strongClassName}>
              Historia clínica unificada
            </strong>{" "}
            entre servicios y sedes
          </>,
          <>
            <strong className={strongClassName}>
              Alertas clínicas y operativas
            </strong>{" "}
            (por ejemplo, tiempo de espera &gt; 30 min en una sala)
          </>,
          <>
            <strong className={strongClassName}>Credenciales del staff</strong>{" "}
            con{" "}
            <InlineLink href="/use-cases/provider-credentialing">
              conexión de prestadores
            </InlineLink>
          </>,
          <>
            <strong className={strongClassName}>Auditoría y facturación</strong>{" "}
            con{" "}
            <InlineLink href="/use-cases/automation">automatización</InlineLink>
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/hospitals/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="alerta 'Tiempo de espera > 30 min · Sala 4' en un tablero de guardia, como en…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote={
              <>
                “<Pending>TESTIMONIO A DEFINIR — hospital</Pending>”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>HOSPITAL</Pending>
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Conectá todo tu hospital"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
