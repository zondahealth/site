import type { Metadata } from "next";

import { LOGIN_URL } from "@/lib/navigation";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Atención primaria";
const description =
  "Agenda inteligente, pre-consulta, registros clínicos con IA y segmentación de tu población a cargo, para que la atención primaria sea realmente preventiva.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/primary-care" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/primary-care",
  },
};

const benefits = [
  {
    title: "Pacientes informados",
    copy: "Recordatorios por WhatsApp y encuestas pre-consulta configurables.",
    href: "/use-cases/automation",
    cta: "Ver automatización",
    // Archivo final sugerido: public/assets/industries/primary-care/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Pacientes informados». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Menos tiempo administrativo",
    copy: "Dictado por voz y resumen estructurado (SOAP).",
    href: "/use-cases/normalized-ai",
    cta: "Ver IA normalizada",
    // Archivo final sugerido: public/assets/industries/primary-care/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Menos tiempo administrativo». Composición: una tarjeta…"
        fill
      />
    ),
  },
  {
    title: "Prevención basada en datos",
    copy: "Detectá pacientes sin control o con riesgo creciente.",
    href: "/use-cases/population-segmentation",
    cta: "Ver segmentación",
    // Archivo final sugerido: public/assets/industries/primary-care/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Prevención basada en datos». Composición: una tarjeta…"
        fill
      />
    ),
  },
];

const faqItems = [
  {
    question: "¿Necesito instalar algo en mi consultorio?",
    answer: "No. Funciona en el navegador y en la app móvil.",
  },
  {
    question: "¿Puedo migrar mis pacientes desde otro sistema?",
    answer: "Sí, desde planillas, CSV u otros sistemas.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Cifrado en tránsito y en reposo, permisos granulares y aislamiento multi-tenant.",
  },
];

const relatedLinks = [
  { label: "Sector público", href: "/industries/government-public-sector" },
  { label: "Asociaciones médicas", href: "/industries/medical-associations" },
  { label: "Operaciones digitales", href: "/use-cases/operations" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
];

const strongClassName = "font-semibold text-foreground";

export default function PrimaryCarePage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Atención primaria"
        title="Seguí a cada paciente, no solo cada consulta"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        // DECISIÓN NAV-2: confirmar URL de la app; si no se confirma, apuntar a /contact.
        secondary={{ label: "Crear mi perfil profesional", href: LOGIN_URL }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/primary-care/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="vista del médico de cabecera con su lista de pacientes y alertas de 'control pendiente', como en…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por la atención primaria."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="reducción de ausentismo a turnos"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="pacientes con seguimiento activo"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Para quién"
        bullets={[
          <>
            <strong className={strongClassName}>Centros de salud y CAPS</strong>{" "}
            (públicos o privados)
          </>,
          <strong className={strongClassName}>
            Consultorios y médicos de cabecera
          </strong>,
          <strong className={strongClassName}>
            Programas de medicina familiar y crónicos
          </strong>,
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/primary-care/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tres tarjetas con el perfil de cada tipo de organización, como en…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote={
              <>
                “
                <Pending>
                  TESTIMONIO A DEFINIR — médico/a de atención primaria
                </Pending>
                ”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>ESPECIALIDAD</Pending>, <Pending>CENTRO</Pending>
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Más atención, menos administración"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
