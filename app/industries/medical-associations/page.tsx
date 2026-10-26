import type { Metadata } from "next";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  ChecklistSection,
  FaqList,
  InlineLink,
  MetricSlot,
  RelatedLinks,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Asociaciones médicas";
const description =
  "Para asociaciones, colegios y círculos médicos que representan, credencializan y facturan en nombre de sus profesionales.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/medical-associations" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/medical-associations",
  },
};

const benefits = [
  {
    title: "Padrón vivo de profesionales",
    copy: "Cada socio con un perfil único, credenciales verificadas y alertas de vencimiento.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/medical-associations/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Padrón vivo de profesionales». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Una carga, todos los financiadores",
    copy: "Los socios registran sus prestaciones una vez y llegan a cada financiador.",
    href: "/use-cases/provider-credentialing",
    cta: "Ver conexión de prestadores",
    // Archivo final sugerido: public/assets/industries/medical-associations/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Una carga, todos los financiadores». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Liquidación sin planillas",
    copy: "Conciliación automática y reportes por financiador en tiempo real.",
    href: "/use-cases/automation",
    cta: "Ver automatización",
    // Archivo final sugerido: public/assets/industries/medical-associations/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Liquidación sin planillas». Composición: una tarjeta…"
        fill
      />
    ),
  },
];

const keyUseCases = [
  <>
    <InlineLink href="/use-cases/multi-payer-care">
      Atención multi-financiador
    </InlineLink>{" "}
    para socios que trabajan con varias coberturas
  </>,
  <>
    <InlineLink href="/use-cases/revenue-cycle">Ciclo de ingresos</InlineLink>{" "}
    de la prestación a la liquidación al socio
  </>,
  "Credencialización y re-credencialización de socios",
  "Facturación centralizada a obras sociales y prepagas",
  <>
    Detección de desvíos en prestaciones (
    <InlineLink href="/use-cases/fraud-risk-prevention">fraude</InlineLink>)
  </>,
  <>
    Herramientas para socios que todavía trabajan en papel (
    <InlineLink href="/use-cases/operations">operaciones digitales</InlineLink>)
  </>,
];

const faqItems = [
  {
    question: "¿Los socios tienen que pagar aparte?",
    answer: <Pending>MODELO COMERCIAL A DEFINIR</Pending>,
  },
  {
    question: "¿Qué pasa con los socios que no son digitales?",
    answer:
      "La app es simple, funciona sin conexión y admite dictado por voz.",
  },
  {
    question: "¿Podemos conectar nuestro sistema de facturación actual?",
    answer: "Sí, vía API, Connectors o DataDrop.",
  },
];

const relatedLinks = [
  { label: "Conexión de prestadores", href: "/use-cases/provider-credentialing" },
  { label: "Financiadores", href: "/industries/payers" },
  { label: "Atención primaria", href: "/industries/primary-care" },
];

export default function MedicalAssociationsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Asociaciones médicas"
        title="Tus socios, sus credenciales y sus prestaciones, conectados"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{
          label: "Ver conexión de prestadores",
          href: "/use-cases/provider-credentialing",
        }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/medical-associations/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="padrón de socios con estado de matrícula y prestaciones del mes por financiador, como en…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por tu asociación."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="socios con perfil digital"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="reducción de débitos por errores de carga"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <ChecklistSection title="Casos de uso clave" items={keyUseCases} />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote={
              <>
                “<Pending>TESTIMONIO A DEFINIR — asociación médica</Pending>”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>ASOCIACIÓN</Pending>
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Digitalizá a tus socios sin dejar a nadie afuera"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
