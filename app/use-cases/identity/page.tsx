import type { Metadata } from "next";
import Image from "next/image";
import { Building2, KeyRound, ShieldCheck } from "lucide-react";

import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  SplitFeature,
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

const benefitImageSizes =
  "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

const benefits = [
  {
    title: "Pacientes sin duplicados",
    copy: "El mismo paciente cargado en el hospital, el laboratorio y la obra social se reconoce como uno solo.",
    media: (
      <Image
        src="/assets/solutions/identity/patient-data-pills-rectangular.png"
        alt="Perfil único de una paciente conectado a familiares, pagos, turnos, ubicación, estudios y atención médica"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Profesionales con perfil propio",
    copy: "Matrícula, especialidades y organizaciones con las que trabaja, en un perfil que lo acompaña.",
    media: (
      <Image
        src="/assets/solutions/identity/profesional-data.png"
        alt="Perfil profesional con matrícula 12331 verificada: Juan Dumas, médico clínico, Guatemala 4953"
        fill
        className="object-cover"
        sizes={benefitImageSizes}
      />
    ),
  },
  {
    title: "Organizaciones modeladas como son",
    copy: "Holdings, entidades jurídicas, sedes, servicios y equipos, con su jerarquía real.",
    media: (
      <Image
        src="/assets/solutions/identity/multiorg.png"
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

      <SplitFeature
        title="Identidad de pacientes"
        bullets={[
          "Resolución de identidad entre fuentes (documento, datos demográficos, cobertura)",
          "Historia clínica longitudinal sobre un único registro",
          "Consentimientos y accesos auditados",
        ]}
        media={
          <Image
            src="/assets/solutions/identity/patient-verified.png"
            alt="Paciente con identidad verificada junto a su documento nacional de identidad argentino"
            width={1080}
            height={1080}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <SplitFeature
        title="Identidad de profesionales"
        mediaSide="left"
        bullets={[
          "Perfil único con matrícula, especialidades y credenciales",
          "Vinculación con múltiples organizaciones y financiadores",
          "Base para compartir matrícula y credenciales con cada organización",
        ]}
        media={
          <Image
            src="/assets/solutions/identity/doctor-profile.png"
            alt="Perfil de profesional con matrícula 12331 y datos verificados: Juan Dumas, médico clínico, Guatemala 4953"
            width={1402}
            height={1122}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <SplitFeature
        title="Identidad de organizaciones y accesos"
        bullets={[
          "Estructura multi-entidad: holding, entidades, sedes y equipos",
          "Alta digital de cada miembro del equipo, con legajo, matrícula y alertas de vencimiento",
          "Disponibilidad y asignaciones por sede, zona y especialidad, con historial de cambios",
          "Permisos granulares por rol y sede, con auditoría de quién hizo qué y cuándo",
          "OAuth 2.0 inbound y outbound para apps propias y de terceros",
        ]}
        media={
          <Image
            src="/assets/solutions/identity/staff.png"
            alt="Gestión de integrantes de una clínica con roles como Director Médico, Médico, Enfermería, Administración y Auditor, y su estado de acceso"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
        }
      />

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Empezá por saber quién es quién"
        buttonText="Hablemos"
      />
    </main>
  );
}
