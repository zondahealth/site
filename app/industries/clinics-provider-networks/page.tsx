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

// SECTOR SUGERIDO: aparece en zondahealth.com/products/organizaciones; validar como página propia. Publicado en la navegación a pedido del equipo antes de esa aprobación.

const title = "Clínicas y redes de prestadores";
const description =
  "Operación clínica y facturación en un solo panel, para una clínica con varias especialidades o un holding con varias entidades jurídicas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/clinics-provider-networks" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/clinics-provider-networks",
  },
};

const showEditorialBadge = process.env.NODE_ENV !== "production";

const benefits = [
  {
    title: "Clínicas",
    copy: "1 entidad jurídica, varias especialidades, facturación integrada.",
    // Archivo final sugerido: public/assets/industries/clinics-provider-networks/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Clínicas». Composición: una tarjeta de UI principal de…"
        fill
      />
    ),
  },
  {
    title: "Redes de prestadores",
    copy: "Multi-entidad, reportes consolidados y permisos por sede.",
    // Archivo final sugerido: public/assets/industries/clinics-provider-networks/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Redes de prestadores». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Empresas de salud",
    copy: "Domiciliarias, telemedicina y prepagas chicas que necesitan conectar lo administrativo con lo clínico.",
    // Archivo final sugerido: public/assets/industries/clinics-provider-networks/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Empresas de salud». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
];

const keyUseCases = [
  <>
    <InlineLink href="/use-cases/analytics">Analítica</InlineLink> consolidada
    por holding, entidad y sede
  </>,
  <>
    <InlineLink href="/use-cases/identity">Identidad</InlineLink> y permisos
    granulares
  </>,
  <>
    <InlineLink href="/use-cases/provider-credentialing">
      Conexión de prestadores
    </InlineLink>{" "}
    para profesionales que rotan entre sedes
  </>,
  <>
    <InlineLink href="/use-cases/automation">Automatización</InlineLink> de
    liquidación
  </>,
];

const faqItems = [
  {
    question: "¿Puedo manejar varias razones sociales?",
    answer: "Sí, desde un mismo lugar sin perder trazabilidad.",
  },
  {
    question: "¿Puedo compartir reportes con socios o auditores externos?",
    answer: "Sí, con roles de solo lectura y sin romper el compliance.",
  },
];

const relatedLinks = [
  { label: "Hospitales", href: "/industries/hospitals" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
];

export default function ClinicsProviderNetworksPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow={
          <>
            Clínicas y redes de prestadores
            {showEditorialBadge ? (
              <span className="ml-2 inline-block normal-case tracking-normal">
                <Pending>Sector sugerido · validar</Pending>
              </span>
            ) : null}
          </>
        }
        title="Una sola visibilidad para todas tus entidades y sedes"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver analítica", href: "/use-cases/analytics" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/clinics-provider-networks/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="árbol 'Red Salud Sur S.A. · Holding → Clínica Centro → Sede Centro / Sede Anexa → HomeCare Sur', como en…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por clínicas y redes."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot label="sedes conectadas" supportText="Métrica a definir" />
          <MetricSlot
            label="reducción del tiempo de cierre mensual"
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
        title="Toda tu red, en un panel"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
