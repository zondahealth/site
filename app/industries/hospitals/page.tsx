import type { Metadata } from "next";
import Image from "next/image";

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
    href: "/use-cases/normalized-ai",
  },
];

function Shot({ label }: { label: string }) {
  return (
    <ImagePlaceholder
      width={1200}
      height={900}
      label={label}
      className="rounded-[1.5rem]"
    />
  );
}

const features = [
  {
    title: "Historia clínica unificada",
    copy: "Entre servicios y sedes.",
    // Archivo final sugerido: public/assets/sectors/hospital/feature-1.png
    label:
      "Ilustración de una historia clínica compartida entre servicios y sedes de un hospital.",
  },
  {
    title: "Alertas clínicas y operativas",
    copy: "Por ejemplo, tiempo de espera mayor a 30 minutos en una sala.",
    // Archivo final sugerido: public/assets/sectors/hospital/feature-2.png
    label:
      "Ilustración de una alerta de tiempo de espera en un tablero de guardia.",
  },
  {
    title: "Credenciales del staff",
    copy: "Con conexión de prestadores.",
    // Archivo final sugerido: public/assets/sectors/hospital/feature-3.png
    label:
      "Ilustración de las credenciales del staff conectadas a la red de prestadores.",
  },
  {
    title: "Auditoría y facturación",
    copy: "Con automatización.",
    href: "/use-cases/automation",
    // Archivo final sugerido: public/assets/sectors/hospital/feature-4.png
    label:
      "Ilustración de una auditoría y una facturación hospitalaria automatizadas.",
  },
];

export default function HospitalsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Hospitales"
        title="Todos los servicios de tu hospital, sobre una misma capa de datos"
        copy={<span className="lg:block lg:max-w-[17rem]">{description}</span>}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver interoperabilidad", href: "/developers" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-full">
            <Image
              src="/assets/sectors/hospital/hero.png"
              alt="Ilustración del edificio de un hospital"
              width={1774}
              height={887}
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-[min(100%,680px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[min(100%,820px)] lg:top-[62%] lg:left-0 lg:w-[min(1200px,calc(50vw+11rem))] lg:translate-x-0 lg:-translate-y-1/2"
            />
          </div>
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

      {features.map((item, index) => (
        <SplitFeature
          key={item.title}
          title={
            item.href ? (
              <InlineLink href={item.href}>{item.title}</InlineLink>
            ) : (
              item.title
            )
          }
          copy={
            item.href ? (
              <>
                Con{" "}
                <InlineLink href={item.href}>automatización</InlineLink>.
              </>
            ) : (
              item.copy
            )
          }
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={<Shot label={item.label} />}
        />
      ))}

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
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
