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
    href: "/use-cases/provider-credentialing",
    cta: "Ver conexión de prestadores",
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

const keyUseCases = [
  <>
    <InlineLink href="/use-cases/multi-payer-care">
      Atención multi-financiador
    </InlineLink>
    : tus reglas aplicadas en el punto de atención
  </>,
  <>
    <InlineLink href="/use-cases/revenue-cycle">Ciclo de ingresos</InlineLink>:
    respuesta del financiador, débitos y cobro conectados a cada prestación
  </>,
  "Auditoría médica y de facturación automatizada",
  "Integración con prestadores vía API y Connectors",
  "Tableros de consumo por prestador, región y plan",
  "Identidad unificada de afiliados",
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
        media={
          // Archivo final sugerido: public/assets/industries/payers/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="liquidación de un prestador con cada prestación marcada 'verificada' o 'observada', como en…"
            className="object-contain max-w-[1200px] mx-auto"
          />
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

      <ChecklistSection title="Casos de uso clave" items={keyUseCases} />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
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

      <CtaBanner
        title="Auditá antes de pagar"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
