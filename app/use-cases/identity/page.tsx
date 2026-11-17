import type { Metadata } from "next";
import Image from "next/image";
import { Building2, KeyRound, ShieldCheck } from "lucide-react";

import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  FeatureShot,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

const title = "Identidad de pacientes, profesionales y organizaciones";
const description =
  "Una identidad confiable para pacientes, profesionales y organizaciones, con la estructura, los roles y los permisos que necesita cada operación de salud.";

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

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Pacientes sin duplicados",
    copy: "El mismo paciente registrado en un hospital, laboratorio y financiador se reconoce como una sola persona.",
    media: (
      <Image
        src="/assets/solutions/identity/benefit-1.png"
        alt="Perfil único de una paciente conectado a familiares, pagos, turnos, ubicación, estudios y atención médica"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Profesionales con perfil propio",
    copy: "Matrícula, especialidades y vínculos de trabajo en un perfil que acompaña al profesional entre organizaciones.",
    media: (
      <Image
        src="/assets/solutions/identity/benefit-2.png"
        alt="Perfil profesional con matrícula 12331 verificada: Juan Dumas, médico clínico, Guatemala 4953"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Organizaciones modeladas como son",
    copy: "Holdings, entidades jurídicas, sedes, servicios y equipos representados con su jerarquía real.",
    media: (
      <Image
        src="/assets/solutions/identity/benefit-3.png"
        alt="Una organización conectada a sus sedes: hospitales, centros de salud, atención domiciliaria y ambulancias"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
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
];

function FeatureDetails({
  items,
}: {
  items: { title: string; copy: string }[];
}) {
  return (
    <dl className="mt-8 grid max-w-lg gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="text-sm font-semibold text-foreground">
            {item.title}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.copy}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const faqItems = [
  {
    question: "¿Qué es la identidad unificada en salud?",
    answer:
      "Es tener un registro único y confiable para cada paciente, profesional y organización, aunque sus datos provengan de sistemas distintos.",
  },
  {
    question: "¿Cómo evita Zonda los pacientes duplicados?",
    answer:
      "Relaciona identificadores y datos demográficos entre fuentes para construir un registro longitudinal y señalar inconsistencias que requieren revisión.",
  },
  {
    question: "¿Puedo gestionar identidades de forma programática?",
    answer:
      "Sí. Podés crear organizaciones, asignar roles y gestionar permisos desde la API.",
  },
];

export default function IdentityPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        title="Una identidad confiable para cada paciente, profesional y organización"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
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
        title="Cada persona, una identidad que se sostiene en toda la operación."
        copy="Cuando los datos dejan de duplicarse, cada equipo puede trabajar sobre el mismo paciente, profesional u organización, con contexto y permisos consistentes."
        items={benefits}
      />

      <SplitFeature
        title="Identidad de pacientes"
        copy="Una atención segura empieza por saber que la información pertenece a la persona correcta, aunque haya pasado por varios sistemas y momentos de atención."
        media={
          <FeatureShot
            src="/assets/solutions/identity/feature-1.png"
            alt="Paciente con identidad verificada junto a su documento nacional de identidad argentino"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Relacioná identidades entre fuentes",
              copy: "Documento, datos demográficos y cobertura para reconocer a la misma persona.",
            },
            {
              title: "Conservá una historia longitudinal",
              copy: "La información clínica y operativa se acumula sobre un único registro de paciente.",
            },
            {
              title: "Auditá cada acceso",
              copy: "Consentimientos y accesos vinculados al paciente para saber quién consultó o modificó información.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Identidad de profesionales"
        mediaSide="left"
        copy="El perfil profesional no debería reconstruirse en cada alta. Zonda conserva las credenciales y los vínculos que permiten a cada organización operar con confianza."
        media={
          <FeatureShot
            src="/assets/solutions/identity/feature-2.png"
            alt="Perfil de profesional con matrícula 12331 y datos verificados: Juan Dumas, médico clínico, Guatemala 4953"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Un perfil profesional completo",
              copy: "Matrícula, especialidades y credenciales reunidas en una misma identidad.",
            },
            {
              title: "Vínculos que reflejan la realidad",
              copy: "Un profesional puede trabajar con múltiples organizaciones y financiadores sin perder su contexto.",
            },
            {
              title: "Altas más simples",
              copy: "Cada organización puede usar la identidad existente como base para habilitar y gestionar su relación laboral.",
            },
          ]}
        />
      </SplitFeature>

      <SplitFeature
        title="Identidad de organizaciones y accesos"
        copy="La estructura de una organización define quién puede hacer qué, dónde y sobre qué información. Zonda la modela para que los permisos acompañen la operación real."
        media={
          <FeatureShot
            src="/assets/solutions/identity/feature-3.png"
            alt="Gestión de integrantes de una clínica con roles como Director Médico, Médico, Enfermería, Administración y Auditor, y su estado de acceso"
          />
        }
      >
        <FeatureDetails
          items={[
            {
              title: "Modelá tu estructura real",
              copy: "Holding, entidades, sedes, servicios y equipos en una misma jerarquía.",
            },
            {
              title: "Gestioná cada alta",
              copy: "Legajo, matrícula y alertas de vencimiento para cada integrante del equipo.",
            },
            {
              title: "Asigná con contexto",
              copy: "Disponibilidad y asignaciones por sede, zona y especialidad, con historial de cambios.",
            },
            {
              title: "Definí permisos precisos",
              copy: "Accesos por rol y sede, con auditoría de quién hizo qué y cuándo.",
            },
            {
              title: "Conectá aplicaciones",
              copy: "OAuth 2.0 para herramientas propias y de terceros que necesitan operar de forma segura.",
            },
          ]}
        />
      </SplitFeature>

      <CapabilityGrid
        title="Una identidad preparada para integrarse"
        items={capabilities}
      />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Dale a tu operación una identidad confiable"
        buttonText="Hablá con nuestro equipo"
      />
    </main>
  );
}
