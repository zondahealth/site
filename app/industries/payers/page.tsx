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

// SECTOR SUGERIDO: no listado por el founder; validar. Publicado en la navegación a pedido del equipo antes de esa aprobación.

const title = "Financiadores (obras sociales, prepagas y aseguradoras)";
const description =
  "Validá prestaciones en origen, conectá tu red de prestadores y conocé a tu población afiliada con datos clínicos normalizados.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/payers" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/payers",
  },
};

const showEditorialBadge = process.env.NODE_ENV !== "production";

const benefits = [
  {
    title: "Reducir fraude y prestaciones indebidas",
    copy: "Prestaciones verificadas con ubicación, horario, firma y match con prescripción.",
    href: "/use-cases/fraud-risk-prevention",
    cta: "Ver fraude",
    // Archivo final sugerido: public/assets/industries/payers/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Reducir fraude y prestaciones indebidas». Composición:…"
        fill
      />
    ),
  },
  {
    title: "Una red de prestadores confiable",
    copy: "Credenciales verificadas y alta de prestadores más rápida.",
    // Archivo final sugerido: public/assets/industries/payers/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Una red de prestadores confiable». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Gestión de riesgo poblacional",
    copy: "Segmentá afiliados para programas de crónicos y prevención.",
    href: "/use-cases/population-segmentation",
    cta: "Ver segmentación",
    // Archivo final sugerido: public/assets/industries/payers/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Gestión de riesgo poblacional». Composición: una…"
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
  copy?: string;
  href?: string;
  label: string;
}[] = [
  {
    title: "Atención multi-financiador",
    copy: "Tus reglas aplicadas en el punto de atención.",
    href: "/use-cases/multi-payer-care",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-1.png
    label:
      "Ilustración de las reglas del financiador aplicadas en el punto de atención.",
  },
  {
    title: "Ciclo de ingresos",
    copy: "Respuesta del financiador, débitos y cobro conectados a cada prestación.",
    href: "/use-cases/revenue-cycle",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-2.png
    label:
      "Ilustración de la respuesta del financiador, un débito y el cobro de una prestación.",
  },
  {
    title: "Auditoría médica y de facturación automatizada",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-3.png
    label:
      "Ilustración de una auditoría médica y de facturación resuelta de forma automática.",
  },
  {
    title: "Integración con prestadores",
    copy: "Vía API y Connectors.",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-4.png
    label:
      "Ilustración de prestadores conectados al financiador por API y Connectors.",
  },
  {
    title: "Tableros de consumo",
    copy: "Por prestador, región y plan.",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-5.png
    label: "Ilustración de un tablero de consumo por prestador, región y plan.",
  },
  {
    title: "Identidad unificada de afiliados",
    // Archivo final sugerido: public/assets/sectors/payers/use-case-6.png
    label:
      "Ilustración de un afiliado con una sola identidad en todas las coberturas.",
  },
];

const faqItems = [
  {
    question: "¿Mis prestadores tienen que usar Zonda?",
    answer:
      "No necesariamente: podés recibir datos vía integración. Los que usan la app aportan además verificación en origen.",
  },
  {
    question: "¿Se integra con mi sistema de autorizaciones?",
    answer: <Pending>ALCANCE A CONFIRMAR</Pending>,
  },
];

const relatedLinks = [
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
  { label: "Asociaciones médicas", href: "/industries/medical-associations" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
];

export default function PayersPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow={
          <>
            Financiadores (obras sociales, prepagas y aseguradoras)
            {showEditorialBadge ? (
              <span className="ml-2 inline-block normal-case tracking-normal">
                <Pending>Sector sugerido · validar</Pending>
              </span>
            ) : null}
          </>
        }
        title="Pagá por la atención que realmente ocurrió"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{
          label: "Ver fraude",
          href: "/use-cases/fraud-risk-prevention",
        }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-full">
            <Image
              src="/assets/sectors/payers/hero.png"
              alt="Hipócrates conversando con un grupo de médicos alrededor de una mesa, con la vara de Esculapio de fondo"
              width={1427}
              height={1099}
              priority
              sizes="(min-width: 1024px) 720px, 90vw"
              className="absolute bottom-0 left-1/2 h-auto w-[min(100%,560px)] max-w-none -translate-x-1/2 object-contain sm:w-[640px] lg:left-[-2.25rem] lg:w-[720px] lg:translate-x-0"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por los financiadores."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MetricSlot
            label="reducción de prestaciones observadas"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="días menos en auditoría"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="prestadores conectados"
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
                “<Pending>TESTIMONIO A DEFINIR — financiador</Pending>”
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

      <CtaBanner title="Auditá antes de pagar" buttonText="Hablemos" />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
