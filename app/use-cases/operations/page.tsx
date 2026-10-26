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
  SplitFeature,
  StatSlot,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

// DECISIÓN DEL FOUNDER (OPS-1): confirmar que /use-cases/operations queda como caso de uso "Operaciones digitales". Si se descarta, borrar la ruta y redirigir a /industries/home-health.

const title = "Operaciones digitales para organizaciones de salud";
const description =
  "Si tu organización todavía trabaja con planillas, papel y llamados, Zonda te da agenda, pacientes, visitas, registros clínicos y facturación listos para usar desde el primer día.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/operations" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/operations",
  },
};

const benefits = [
  {
    title: "Operativo desde el primer día",
    copy: "Sin instalar nada: funciona en el navegador y en la app móvil.",
    // Archivo final sugerido: public/assets/use-cases/operations/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Operativo desde el primer día». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Pensado para el campo",
    copy: "La app guarda todo sin conexión y sincroniza cuando vuelve la señal.",
    // Archivo final sugerido: public/assets/use-cases/operations/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Pensado para el campo». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Infraestructura para crecer",
    copy: "Cuando estés listo, construí herramientas propias sobre la API.",
    // Archivo final sugerido: public/assets/use-cases/operations/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Infraestructura para crecer». Composición: una tarjeta…"
        fill
      />
    ),
  },
];

const steps = [
  {
    title: "Cargamos lo que ya tenés:",
    copy: "planillas, Excel/CSV o carga manual.",
  },
  {
    title: "Tu equipo empieza a usar Zonda:",
    copy: "agenda, visitas y registros desde la app.",
  },
  {
    title: "La información llega sola:",
    copy: "a coordinación, auditoría y facturación, sin segunda carga.",
  },
];

const faqItems = [
  {
    question: "¿Necesito instalar algo?",
    answer:
      "No. Zonda funciona en el navegador y en la app móvil; solo necesitás internet, incluso desde el celular.",
  },
  {
    question: "¿Puedo migrar mis datos desde planillas u otro sistema?",
    answer:
      "Sí. Zonda ingesta Excel/CSV, PDFs y carga manual, además de sistemas como HL7 o FHIR.",
  },
  {
    question: "¿Funciona sin internet?",
    answer:
      "Sí. La app guarda lo que hace el profesional y lo sube cuando vuelve la señal.",
  },
  {
    question: "¿Cuánto tarda en estar operativo?",
    answer: <Pending>PLAZO A DEFINIR</Pending>,
  },
];

const relatedLinks = [
  { label: "Automatización", href: "/use-cases/automation" },
  { label: "Internación domiciliaria", href: "/industries/home-health" },
  { label: "Atención primaria", href: "/industries/primary-care" },
  { label: "Asociaciones médicas", href: "/industries/medical-associations" },
];

const splitImageClassName = "rounded-[1.5rem]";

export default function OperationsPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Operaciones para organizaciones no digitalizadas"
        title="Digitalizá sin reemplazar lo que ya funciona"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver cómo funciona", href: "#como-funciona" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/operations/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="un escritorio con planillas, carpetas y un teléfono transformándose en una pantalla de Zonda con la agenda…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories title="Herramientas listas para usar." items={benefits} />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="tiempo de implementación"
            supportText="Métrica a definir"
          />
          {/* VALIDAR: menos costos operativos en el caso Interdom (dato publicado — validar) */}
          <StatSlot
            value="23%"
            label="menos costos operativos en el caso Interdom"
          />
        </div>
      </div>

      <SplitFeature
        id="como-funciona"
        title="Cómo funciona"
        bullets={steps.map((step) => (
          <span key={step.title}>
            <strong className="font-semibold text-foreground">
              {step.title}
            </strong>{" "}
            {step.copy}
          </span>
        ))}
        media={
          // Archivo final sugerido: public/assets/use-cases/operations/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tres pasos ilustrados con mini-capturas, como en plaid.com/ (bloques de pasos numerados)"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Agenda, pacientes y registros clínicos"
        mediaSide="left"
        bullets={[
          "Calendario semanal y lista del día",
          "Recordatorios automáticos por WhatsApp",
          "Dictado por voz y resumen estructurado por IA",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/operations/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="app con la agenda del jueves (3 turnos) y una evolución dictada, como en…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="De la oficina al domicilio"
        bullets={[
          "Asignación de visitas con la mejor ruta",
          "Registro en domicilio con ubicación y firma del paciente",
          "Control en tiempo real desde la oficina",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/operations/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="flujo 'Asignación → Aviso → Visita → Control' en cuatro pantallas, como en plaid.com/use-cases/ (secuencia…"
            className={splitImageClassName}
          />
        }
      />

      <ChecklistSection
        title="Facturación y auditoría el mismo día"
        items={[
          "Prestaciones registradas listas para facturar",
          "Reportes por financiador",
          "Auditoría completa antes de que cierre el día",
        ]}
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Testimonial
            quote="Lo que más nos sorprendió no fue la tecnología en sí, sino todo lo que pudimos construir sobre ella.”"
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

      <FaqList items={faqItems} />

      <CtaBanner
        title="Pasá del papel a la operación conectada"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
