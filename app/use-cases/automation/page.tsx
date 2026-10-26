import type { Metadata } from "next";
import { ClipboardList, Plug, Sparkles, Webhook } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
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

const title = "Automatización para organizaciones de salud";
const description =
  "Validaciones con financiadores, conciliaciones, reclamos, asignaciones y reportes que se ejecutan automáticamente sobre datos ya conectados.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/automation" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/automation",
  },
};

const benefits = [
  {
    title: "Validaciones automáticas",
    copy: "Lo que antes se chequeaba a mano contra el financiador se valida en el momento, reduciendo errores y débitos.",
    // Archivo final sugerido: public/assets/use-cases/automation/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Validaciones automáticas». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Flujos que reaccionan a eventos",
    copy: "Cada visita, resultado o reclamo puede disparar la siguiente acción vía webhook.",
    // Archivo final sugerido: public/assets/use-cases/automation/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Flujos que reaccionan a eventos». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Sin desarrollo desde cero",
    copy: "Usá flujos listos o construí los tuyos sobre la API de Zonda.",
    // Archivo final sugerido: public/assets/use-cases/automation/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Sin desarrollo desde cero». Composición: una tarjeta…"
        fill
      />
    ),
  },
];

const capabilities = [
  { title: "Webhooks", icon: Webhook },
  { title: "Zonda Connectors", icon: Plug },
  {
    title: "IA normalizada",
    href: "/use-cases/normalized-ai",
    icon: Sparkles,
  },
  {
    title: "Operaciones digitales",
    href: "/use-cases/operations",
    icon: ClipboardList,
  },
];

const faqItems = [
  {
    question: "¿Qué procesos puedo automatizar?",
    answer:
      "Validaciones con financiadores, liquidación, conciliación, reclamos, asignación de visitas, recordatorios y reportes, entre otros.",
  },
  {
    question: "¿Necesito un equipo técnico?",
    answer:
      "No para los flujos incluidos. Si querés construir los tuyos, tenés API, webhooks y SDKs.",
  },
  {
    question: "¿Se conecta con mi sistema de facturación?",
    answer: (
      <>
        Zonda se integra vía Connectors, API REST o DataDrop.{" "}
        <Pending>LISTA DE SISTEMAS SOPORTADOS A DEFINIR</Pending>
      </>
    ),
  },
];

const relatedLinks = [
  { label: "Operaciones digitales", href: "/use-cases/operations" },
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
];

export default function AutomationPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Automatización"
        title="Lo que hoy hacés a mano, que se haga solo"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver webhooks y API", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/automation/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="flujo animado 'Visita registrada → Prestación validada → Liquidación generada → Enviada al financiador'…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Menos administración. Más atención."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {/* VALIDAR: tareas administrativas liberadas para profesionales (dato publicado en zondahealth.com/empresa — validar) */}
          <StatSlot
            value="−30%"
            label="tareas administrativas liberadas para profesionales"
          />
          <MetricSlot
            label="validaciones automatizadas por mes"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Facturación y liquidación sin segunda carga"
        copy={
          <>
            Para el flujo completo de la prestación al cobro, ver{" "}
            <InlineLink href="/use-cases/revenue-cycle">
              Ciclo de ingresos
            </InlineLink>
            .
          </>
        }
        bullets={[
          "Liquidación y conciliación automática por financiador",
          "Reportes por obra social en tiempo real",
          "Comprobantes listos para presentar y auditar",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/automation/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="registro de visita que se convierte en una línea de liquidación con estado 'Match con prescripción', como…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Reclamos y asignaciones automáticas"
        mediaSide="left"
        bullets={[
          "Resolución automatizada de reclamos con reglas configurables",
          "Asignación de profesionales según especialidad, disponibilidad y recorrido",
          "Reasignación rápida ante urgencias",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/automation/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tablero de asignaciones con profesionales en un mapa y una visita reasignándose sola, como en…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Comunicación con pacientes en piloto automático"
        bullets={[
          "Recordatorios y cambios de turno por WhatsApp",
          "Encuestas pre-consulta configurables",
          "Seguimiento post-consulta disparado por evento",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/automation/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="conversación de WhatsApp con recordatorio de turno y confirmación del paciente, como en plaid.com/…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote="Procesos que hacíamos a mano desde siempre, como coordinación, reclamos y asignación de pacientes, de repente los teníamos integrados en un solo lugar.”"
            name="Gabriel Alonso"
            role={
              <>
                Coordinación General de Operaciones, Interdom Argentina (
                <InlineLink href="/customer-stories/interdom">
                  caso publicado
                </InlineLink>
                )
              </>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Liberá a tu equipo del trabajo repetitivo"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
