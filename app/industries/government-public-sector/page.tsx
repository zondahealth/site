import type { Metadata } from "next";
import {
  Building,
  ClipboardList,
  Hospital,
  Landmark,
  Siren,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { isLiveRoute } from "@/lib/navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card/card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  InlineLink,
  MetricSlot,
  RelatedLinks,
  SectionIntro,
  StatSlot,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Gobiernos y sector público";
const description =
  "Ayudamos a ministerios, secretarías y redes públicas a conectar hospitales, centros de salud y programas sanitarios en una sola capa de datos, sin reemplazar los sistemas que ya existen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/government-public-sector" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/government-public-sector",
  },
};

const benefits = [
  {
    title: "Conocer a la población",
    copy: "Segmentá por riesgo, territorio y condición para planificar programas preventivos.",
    href: "/use-cases/population-segmentation",
    cta: "Ver segmentación",
    // Archivo final sugerido: public/assets/industries/government-public-sector/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Conocer a la población». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Reducir fraude y prestaciones indebidas",
    copy: "Validá prestaciones y facturación de prestadores contratados en tiempo real.",
    href: "/use-cases/fraud-risk-prevention",
    cta: "Ver fraude",
    // Archivo final sugerido: public/assets/industries/government-public-sector/benefit-2.png
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
    title: "Conectar la red pública",
    copy: "Interoperabilidad entre efectores con identidad unificada de pacientes y profesionales.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/government-public-sector/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Conectar la red pública». Composición: una tarjeta de…"
        fill
      />
    ),
  },
];

const audiences: {
  title: string;
  copy: ReactNode;
  href?: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Ministerios y secretarías de salud",
    copy: "Tableros consolidados de toda la red con datos normalizados.",
    icon: Landmark,
  },
  {
    title: "Hospitales públicos",
    copy: "Integración con sistemas legacy (HL7/FHIR) y auditoría completa.",
    href: "/industries/hospitals",
    icon: Hospital,
  },
  {
    title: "Centros de atención primaria",
    copy: "Agenda, registros clínicos y seguimiento de población a cargo.",
    href: "/industries/primary-care",
    icon: Stethoscope,
  },
  {
    title: "Programas sanitarios",
    copy: "Padrones, seguimiento de beneficiarios e indicadores de cobertura.",
    icon: ClipboardList,
  },
  {
    title: "Compras y contratación de prestadores",
    copy: (
      <>
        Control de prestaciones contratadas y{" "}
        <InlineLink href="/use-cases/provider-credentialing">
          conexión de prestadores
        </InlineLink>
        .
      </>
    ),
    icon: Building,
  },
  {
    title: "Emergencias y epidemiología",
    copy: (
      <>
        Alertas tempranas sobre datos clínicos normalizados.{" "}
        <Pending>ALCANCE A CONFIRMAR</Pending>
      </>
    ),
    icon: Siren,
  },
];

const faqItems = [
  {
    question: "¿Zonda reemplaza el sistema de historia clínica provincial?",
    answer:
      "No. Se conecta a los sistemas existentes y unifica sus datos en un modelo canónico.",
  },
  {
    question: "¿Dónde se alojan los datos?",
    answer: (
      <Pending>
        DATO A CONFIRMAR: región de hosting y opciones de soberanía de datos
      </Pending>
    ),
  },
  {
    question: "¿Cómo se contrata?",
    answer: (
      <>
        <Pending>
          MODALIDAD A CONFIRMAR: licitación, convenio, contratación directa
        </Pending>{" "}
        — <InlineLink href="/contact">Hablemos</InlineLink>
      </>
    ),
  },
  {
    question: "¿Cumple con la normativa de protección de datos?",
    answer: <Pending>CERTIFICACIÓN / NORMATIVA A CONFIRMAR</Pending>,
  },
];

const relatedLinks = [
  {
    label: "Segmentación poblacional",
    href: "/use-cases/population-segmentation",
  },
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Analítica", href: "/use-cases/analytics" },
  {
    label: "Agentes de inteligencia en salud",
    href: "/use-cases/healthcare-intelligence-agents",
  },
];

export default function GovernmentPublicSectorPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Gobiernos y sector público"
        title="Infraestructura de datos para sistemas de salud pública modernos"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver soluciones", href: "/solutions" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/government-public-sector/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="mapa provincial con hospitales y centros de atención primaria conectados y un tablero de indicadores…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por el sector público."
        items={benefits}
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Ponelo a trabajar para tu sistema de salud"
            className="max-w-3xl"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => {
              const Icon = item.icon;
              const href =
                item.href && isLiveRoute(item.href) ? item.href : undefined;

              return (
                <li key={item.title} className="flex">
                  <Card
                    variant="default"
                    hoverable={Boolean(href)}
                    href={href}
                    aria-label={href ? item.title : undefined}
                    className="w-full"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-6 text-secondary"
                      strokeWidth={1.75}
                    />
                    <CardTitle className="mt-5">{item.title}</CardTitle>
                    <CardContent>{item.copy}</CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MetricSlot
            label="efectores conectados"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="ciudadanos con identidad unificada"
            supportText="Métrica a definir"
          />
          {/* VALIDAR: del gasto en salud en LatAm que podría ahorrarse con interoperabilidad (cifra citada en zondahealth.com/empresa — validar fuente) */}
          <StatSlot
            value="~10%"
            label="del gasto en salud en LatAm que podría ahorrarse con interoperabilidad"
          />
        </div>
      </div>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote={
              <>
                “<Pending>TESTIMONIO A DEFINIR — organismo público</Pending>”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>ORGANISMO</Pending>
              </>
            }
          />

          {/* Archivo final sugerido: public/assets/industries/government-public-sector/logo-cliente-N.png (provisto por el cliente, no generar) */}
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[1, 2].map((n) => (
              <li key={n} className="w-full max-w-[308px]">
                <ImagePlaceholder
                  width={308}
                  height={103}
                  label="Logo de cliente ⟦A DEFINIR⟧ en escala de grises, fondo transparente (mismo tamaño que…"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Conectemos tu red de salud pública"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
