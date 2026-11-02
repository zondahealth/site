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

const keyUseCases: {
  title: string;
  copy: string;
  href?: string;
  label: string;
}[] = [
  {
    title: "Atención multi-financiador",
    copy: "Para socios que trabajan con varias coberturas.",
    href: "/use-cases/multi-payer-care",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-1.png
    label:
      "Ilustración de varias coberturas conectadas a un mismo socio de la asociación.",
  },
  {
    title: "Ciclo de ingresos",
    copy: "De la prestación a la liquidación al socio.",
    href: "/use-cases/revenue-cycle",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-2.png
    label:
      "Ilustración del recorrido de una prestación hasta la liquidación al socio.",
  },
  {
    title: "Credencialización y re-credencialización",
    copy: "De cada socio de la asociación.",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-3.png
    label:
      "Ilustración de una credencial profesional verificada, con fecha de vencimiento.",
  },
  {
    title: "Facturación centralizada",
    copy: "A obras sociales y prepagas.",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-4.png
    label:
      "Ilustración de facturas de varios financiadores reunidas en un solo flujo.",
  },
  {
    title: "Detección de desvíos en prestaciones",
    copy: "El circuito de fraude, aplicado a las prestaciones.",
    href: "/use-cases/fraud-risk-prevention",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-5.png
    label:
      "Ilustración de una prestación marcada como desvío dentro de un lote de facturación.",
  },
  {
    title: "Operaciones digitales",
    copy: "Herramientas para socios que todavía trabajan en papel.",
    href: "/use-cases/operations",
    // Archivo final sugerido: public/assets/sectors/asos/use-case-6.png
    label:
      "Ilustración de una planilla en papel que pasa a un registro digital en el celular.",
  },
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
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-full">
            <Image
              src="/assets/sectors/asos/hero.png"
              alt="Hipócrates conversando con un grupo de médicos alrededor de una mesa, con la vara de Esculapio de fondo"
              width={1871}
              height={882}
              priority
              sizes="(min-width: 1024px) 1680px, 100vw"
              className="absolute top-1/2 left-1/2 h-auto w-[min(130.24%,722px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain object-left sm:w-[min(103.84%,950px)] lg:top-auto lg:bottom-0 lg:left-[-1rem] lg:h-[75.68%] lg:w-auto lg:translate-x-0 lg:translate-y-[2%]"
            />
          </div>
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

      {keyUseCases.map((item, index) => (
        <SplitFeature
          key={item.title}
          title={
            item.href ? (
              <InlineLink href={item.href}>{item.title}</InlineLink>
            ) : (
              item.title
            )
          }
          copy={item.copy}
          mediaSide={index % 2 === 1 ? "left" : "right"}
          media={<Shot label={item.label} />}
        />
      ))}

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
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
