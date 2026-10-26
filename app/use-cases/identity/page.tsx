import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Building2, KeyRound, ShieldCheck } from "lucide-react";

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
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Identidad de pacientes, profesionales y organizaciones";
const description =
  "Zonda modela la estructura del negocio de salud: identidad unificada para pacientes, profesionales y miembros de cada organización, con roles definidos y permisos granulares.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/identity" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/identity",
  },
};

const benefits = [
  {
    title: "Pacientes sin duplicados",
    copy: "El mismo paciente cargado en el hospital, el laboratorio y la obra social se reconoce como uno solo.",
    // Archivo final sugerido: public/assets/use-cases/identity/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Pacientes sin duplicados». Composición: una tarjeta de…"
        fill
      />
    ),
  },
  {
    title: "Profesionales con perfil propio",
    copy: "Matrícula, especialidades y organizaciones con las que trabaja, en un perfil que lo acompaña.",
    // Archivo final sugerido: public/assets/use-cases/identity/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Profesionales con perfil propio». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Organizaciones modeladas como son",
    copy: "Holdings, entidades jurídicas, sedes, servicios y equipos, con su jerarquía real.",
    // Archivo final sugerido: public/assets/use-cases/identity/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Organizaciones modeladas como son». Composición: una…"
        fill
      />
    ),
  },
];

const capabilities = [
  { title: "Modelo de organizaciones vía API", icon: Building2 },
  { title: "OAuth 2.0", icon: KeyRound },
  {
    title: "Fraude",
    href: "/use-cases/fraud-risk-prevention",
    icon: ShieldCheck,
  },
  {
    title: "Conexión de prestadores",
    href: "/use-cases/provider-credentialing",
    icon: BadgeCheck,
  },
];

const faqItems = [
  {
    question: "¿Qué es la identidad unificada en salud?",
    answer:
      "Es tener un registro único y confiable para cada paciente, profesional y organización, aunque sus datos provengan de sistemas distintos.",
  },
  {
    question: "¿Cómo evita Zonda los pacientes duplicados?",
    answer: (
      <>
        Cruzando identificadores y datos demográficos entre fuentes durante la
        normalización.{" "}
        <Pending>
          DETALLE TÉCNICO A CONFIRMAR: algoritmo y criterios de matching
        </Pending>
      </>
    ),
  },
  {
    question: "¿Puedo gestionar identidades de forma programática?",
    answer:
      "Sí. Podés crear organizaciones, asignar roles y gestionar permisos desde la API.",
  },
  {
    question: "¿Cumple con normativas de protección de datos?",
    answer: (
      <Pending>
        CERTIFICACIÓN / NORMATIVA A CONFIRMAR: p. ej. Ley 25.326 de Protección
        de Datos Personales (AR)
      </Pending>
    ),
  },
];

const relatedLinks = [
  { label: "Conexión de prestadores", href: "/use-cases/provider-credentialing" },
  { label: "RRHH", href: "/use-cases/workforce" },
  { label: "Financiadores", href: "/industries/payers" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
];

export default function IdentityPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Identidad"
        title="Una identidad confiable para cada paciente, profesional y organización"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver la API", href: "/developers" }}
        secondaryVariant="inverse"
        media={
          <div className="flex h-full w-full items-center justify-center px-4 pt-20 pb-6 sm:px-6 sm:pt-24">
            <Image
              src="/assets/solutions/identity/hero.png"
              alt="Perfil examinado con lupa junto a una credencial con huella digital"
              width={1172}
              height={1080}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-auto max-h-[min(560px,100%)] max-w-full object-contain"
            />
          </div>
        }
      />

      <BenefitStories
        title="Después de Zonda, cada persona existe una sola vez."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MetricSlot
            label="reducción de registros duplicados"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="identidades unificadas"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="tiempo de alta de un profesional"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Identidad de pacientes"
        bullets={[
          "Resolución de identidad entre fuentes (documento, datos demográficos, cobertura)",
          "Historia clínica longitudinal sobre un único registro",
          "Consentimientos y accesos auditados",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/identity/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tres registros parecidos ('María Eteria', 'M. Etería', 'ETERIA MARIA') fusionándose en un único perfil,…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Identidad de profesionales"
        mediaSide="left"
        bullets={[
          "Perfil único con matrícula, especialidades y credenciales",
          "Vinculación con múltiples organizaciones y financiadores",
          <>
            Base para{" "}
            <InlineLink href="/use-cases/provider-credentialing">
              conexión de prestadores
            </InlineLink>
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/identity/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="perfil de profesional con sus organizaciones vinculadas como chips (Clínica Centro, HomeCare Sur,…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        title="Identidad de organizaciones y accesos"
        bullets={[
          "Estructura multi-entidad: holding, entidades, sedes y equipos",
          "Permisos granulares por rol y sede, con auditoría de quién hizo qué y cuándo",
          "OAuth 2.0 inbound y outbound para apps propias y de terceros",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/identity/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="matriz de permisos (Director Médico, Médico, Enfermería, Administración, Auditor externo × Pacientes,…"
            className="rounded-[1.5rem]"
          />
        }
      />

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

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Empezá por saber quién es quién"
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
