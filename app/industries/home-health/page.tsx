import type { Metadata } from "next";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  FaqList,
  InlineLink,
  RelatedLinks,
  SplitFeature,
  StatSlot,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Internación domiciliaria (Home Health)";
const description =
  "Organizá visitas, coordiná profesionales y controlá cada paso de la atención domiciliaria desde un solo lugar. Sin planillas, sin llamados, sin sorpresas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/home-health" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/home-health",
  },
};

const interdomHref = "/customer-stories/interdom";

const benefits = [
  {
    title: "Sin puntos ciegos",
    copy: "Cada visita queda registrada con ubicación, horario y detalle.",
    href: "/use-cases/automation",
    cta: "Ver automatización",
    // Archivo final sugerido: public/assets/industries/home-health/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Sin puntos ciegos». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Menos fraude en facturación",
    copy: "Geofence, firma del paciente y match con la prescripción.",
    href: "/use-cases/fraud-risk-prevention",
    cta: "Ver fraude",
    // Archivo final sugerido: public/assets/industries/home-health/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Menos fraude en facturación». Composición: una tarjeta…"
        fill
      />
    ),
  },
  {
    title: "Equipos coordinados",
    copy: "Asignación por zona, disponibilidad y especialidad.",
    href: "/use-cases/workforce",
    cta: "Ver RRHH",
    // Archivo final sugerido: public/assets/industries/home-health/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Equipos coordinados». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
];

const steps = [
  ["Asignación", "desde una sola pantalla, con la mejor ruta y sin duplicaciones."],
  ["Aviso", "el profesional recibe datos del paciente, dirección e indicaciones."],
  [
    "Visita",
    "llegada confirmada automáticamente, registro por voz y firma del paciente, incluso sin internet.",
  ],
  ["Control", "registro instantáneo, listo para presentar al financiador."],
];

const faqItems = [
  {
    question: "¿Funciona sin internet?",
    answer:
      "Sí. La app guarda todo en el celular y lo sube cuando vuelve la señal.",
  },
  {
    question: "¿Sirve para cualquier obra social?",
    answer: (
      <Pending>
        RESPUESTA A COMPLETAR — la FAQ existe en zondahealth.com pero su
        contenido no es visible
      </Pending>
    ),
  },
  {
    question: "¿Se conecta con nuestro sistema de facturación?",
    answer: <Pending>RESPUESTA A COMPLETAR</Pending>,
  },
  {
    question: "¿Cuánto tarda ponerlo en marcha?",
    answer: <Pending>PLAZO A DEFINIR</Pending>,
  },
];

const relatedLinks = [
  { label: "Operaciones digitales", href: "/use-cases/operations" },
  { label: "Fraude", href: "/use-cases/fraud-risk-prevention" },
  { label: "Financiadores", href: "/industries/payers" },
];

export default function HomeHealthPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Internación domiciliaria (Home Health)"
        title="Todo tu equipo conectado, desde la oficina hasta el domicilio"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Leer el caso Interdom", href: interdomHref }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/industries/home-health/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="pantalla de despacho 'Visitas — Jueves · 14 asignadas' junto a la app del profesional con 'Visita en curso…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Por qué Zonda nació acá."
        copy="Zonda nació en San Juan, a partir de tres generaciones y más de 25 años de experiencia en una empresa de internación domiciliaria. Conocemos la operación porque la vivimos."
        items={benefits}
      />

      <SplitFeature
        title="De la oficina al domicilio en cuatro pasos"
        bullets={steps.map(([term, detail]) => (
          <span key={term}>
            <strong className="font-semibold text-foreground">{term}</strong> —{" "}
            {detail}
          </span>
        ))}
        media={
          // Archivo final sugerido: public/assets/industries/home-health/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="cuatro pantallas en secuencia (oficina, celular del profesional, domicilio, panel en tiempo real), como en…"
            className="rounded-[1.5rem]"
          />
        }
      />

      {/* VALIDAR: resultados de Interdom Argentina, publicados en zondahealth.com/casos-de-uso/interdom — validar antes de publicar. */}
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatSlot value="23%" label="menos costos operativos" />
            <StatSlot value="30%" label="menos fraude en facturación" />
            <StatSlot value="+1 M" label="registros clínicos procesados" />
            <StatSlot value="12" label="integraciones activas" />
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <Testimonial
              compact
              quote="Zonda se convirtió en el sistema nervioso de nuestra operación.”"
              name="Gabriel Alonso"
              role={
                <>
                  Coordinación General de Operaciones, Interdom Argentina (
                  <InlineLink href={interdomHref}>caso publicado</InlineLink>)
                </>
              }
            />

            {/* Archivo final sugerido: public/assets/industries/home-health/logo-cliente-N.png (provisto por el cliente, no generar) */}
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {[1, 2].map((n) => (
                <li key={n} className="w-full max-w-[308px]">
                  <ImagePlaceholder
                    width={308}
                    height={103}
                    label="Logo de cliente ⟦LOGO CLIENTE⟧ en escala de grises, fondo transparente."
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="Llevá el control de cada visita"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
