import type { Metadata } from "next";
import Image from "next/image";
import { Bot, Cog, Fingerprint, Workflow } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import {
  BenefitStories,
  CapabilityGrid,
  ChecklistSection,
  FaqList,
  MetricSlot,
  RelatedLinks,
  SplitFeature,
  Testimonial,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";

// SECTOR NUEVO: recetas programadas, reserva de stock y receta con médico asignado no figuran hoy en zondahealth.com ni en site-new.
// DECISIÓN PHARM-1 (producto): enlazada en la navegación a pedido del equipo; mantener noindex hasta confirmar qué existe y qué es roadmap.
// DECISIÓN PHARM-2 (normativa): todo claim sobre receta electrónica queda como <Pending> hasta revisión legal
// (Ley 27.553; Decreto 98/2023 modificado por Decreto 345/2024; Resolución 2214/2025; Disposición 1/2025 DNSISA; ReNaPDiS; adhesión provincial).
// WhatsApp: el único respaldo publicado es "Recordatorios automáticos por WhatsApp" (zondahealth.com/products/profesionales, para turnos).

const title = "Farmacias";
const description =
  "Zonda conoce a cada paciente, su tratamiento y su cobertura. Programá las recetas de los tratamientos crónicos, avisale cuando su medicación está lista y conectalo con su médico sin que tenga que salir a buscar una receta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/pharmacies" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/industries/pharmacies",
  },
  robots: { index: false },
};

const showEditorialBadge = process.env.NODE_ENV !== "production";

const benefits = [
  {
    title: "Cada paciente, identificado",
    copy: "Una identidad única con su historia, sus preferencias y su cobertura, en cualquier sucursal.",
    href: "/use-cases/identity",
    cta: "Ver identidad",
    // Archivo final sugerido: public/assets/industries/pharmacies/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Cada paciente, identificado». Composición: una tarjeta…"
        fill
      />
    ),
  },
  {
    title: "Tratamientos que no se cortan",
    copy: "Medicamentos regulares y crónicos con recetas programadas y reposición anticipada.",
    href: "/use-cases/automation",
    cta: "Ver automatización",
    // Archivo final sugerido: public/assets/industries/pharmacies/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Tratamientos que no se cortan». Composición: una…"
        fill
      />
    ),
  },
  {
    title: "Coberturas sin vueltas",
    copy: "Validá la cobertura de cada financiador antes de dispensar, en un solo flujo.",
    href: "/use-cases/multi-payer-care",
    cta: "Ver atención multi-financiador",
    // Archivo final sugerido: public/assets/industries/pharmacies/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Coberturas sin vueltas». Composición: una tarjeta de…"
        fill
      />
    ),
  },
];

const prescriptionSteps = [
  "Zonda detecta que se acerca la fecha de reposición",
  "Solicita la receta al médico asignado",
  "El médico la revisa y la firma electrónicamente",
  "La farmacia la recibe, valida la cobertura y prepara la medicación",
  "El paciente recibe el aviso y la retira",
];

const capabilities = [
  {
    title: "Identidad",
    copy: "Un mismo paciente en todas tus sucursales, profesionales y financiadores.",
    href: "/use-cases/identity",
    icon: Fingerprint,
  },
  {
    title: "Automatización",
    copy: "Recetas programadas, recordatorios y alertas sin trabajo manual.",
    href: "/use-cases/automation",
    icon: Cog,
  },
  {
    title: "Atención multi-financiador",
    copy: "Las reglas de cada financiador validadas antes de dispensar.",
    href: "/use-cases/multi-payer-care",
    icon: Workflow,
  },
  {
    title: "Agentes de inteligencia en salud",
    copy: "Asistentes que se anticipan a cada reposición y le preparan el contexto a tu equipo.",
    href: "/use-cases/normalized-ai",
    icon: Bot,
  },
];

const strongClassName = "font-semibold text-foreground";

const faqItems = [
  {
    question: "¿La farmacia puede recetar?",
    answer:
      "No. Las recetas las emite siempre un médico matriculado; Zonda conecta a la farmacia con el médico asignado y la farmacia dispensa.",
  },
  {
    question: "¿Tengo que cambiar mi sistema de farmacia?",
    answer: <Pending>A CONFIRMAR</Pending>,
  },
  {
    question: "¿Qué pasa con los medicamentos de venta restringida?",
    answer: <Pending>NORMATIVA A CONFIRMAR</Pending>,
  },
  {
    question: "¿Cómo se entera el paciente de que su medicación está lista?",
    answer: (
      <>
        Por el canal que eligió: <Pending>CANALES A CONFIRMAR</Pending>.
      </>
    ),
  },
  {
    question: "¿Mis datos y los de mis pacientes están seguros?",
    answer:
      "Cifrado en tránsito y en reposo, permisos granulares y aislamiento multi-tenant.",
  },
];

const relatedLinks = [
  { label: "Identidad", href: "/use-cases/identity" },
  { label: "Automatización", href: "/use-cases/automation" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
  {
    label: "Agentes de inteligencia",
    href: "/use-cases/normalized-ai",
  },
  { label: "Atención primaria", href: "/industries/primary-care" },
  { label: "Telemedicina", href: "/industries/telehealth" },
];

export default function PharmaciesPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow={
          <>
            Farmacias
            {showEditorialBadge ? (
              <span className="ml-2 inline-block normal-case tracking-normal">
                <Pending>Sector sugerido · validar</Pending>
              </span>
            ) : null}
          </>
        }
        title="No pierdas tiempo en nada: pacientes con medicamentos siempre disponibles"
        copy={description}
        primary={{ label: "Hablemos", href: "/contact" }}
        secondary={{ label: "Ver cómo funciona", href: "#recetas-programadas" }}
        secondaryVariant="inverse"
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[340px] w-full sm:h-[440px] lg:h-full">
            <Image
              src="/assets/sectors/pharma/hero.png"
              alt="Higía tomando un frasco del botiquín, con la serpiente de la medicina"
              width={1398}
              height={793}
              priority
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="absolute bottom-0 left-1/2 h-auto w-[min(112%,560px)] max-w-none -translate-x-1/2 translate-y-[6%] sm:w-[min(100%,720px)] sm:translate-y-[8%] lg:left-[-9rem] lg:w-[1180px] lg:translate-x-0 lg:translate-y-[14%]"
            />
          </div>
        }
      />

      <BenefitStories
        title="Lo que Zonda hace por las farmacias."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <MetricSlot
            label="pacientes crónicos con reposición programada"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="menos tiempo de espera en mostrador"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="menos tratamientos interrumpidos"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        id="identidad"
        title="Sabé quién es antes de que llegue al mostrador"
        copy="Zonda unifica la identidad del paciente entre sucursales, profesionales y financiadores: datos de contacto, cobertura vigente, medicamentos que usa y cómo prefiere que lo atiendan."
        bullets={[
          "Identidad única validada, sin cargar los datos en cada visita",
          <>
            Preferencias: canal de aviso, horario, sucursal de retiro, marca o
            genérico <Pending>A CONFIRMAR</Pending>
          </>,
          "Cobertura y plan vigentes de cada financiador",
          "Historial de dispensas en todas tus sucursales",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/pharmacies/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="ficha del 'Paciente 8F21' con identidad verificada, 'Financiador A · Plan 210', preferencias e historial de dispensas…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        id="cronicos"
        title="Que al paciente crónico nunca le falte su medicación"
        copy="Zonda sigue cada tratamiento regular: qué toma, cada cuánto y cuándo se le termina. La farmacia se anticipa, reserva la medicación y el paciente la retira sin esperas."
        mediaSide="left"
        bullets={[
          "Calendario de tratamiento por paciente y por medicamento",
          "Alertas de reposición antes de que se termine el tratamiento",
          <>
            Reserva anticipada de stock en la sucursal elegida{" "}
            <Pending>INTEGRACIÓN CON SISTEMA DE STOCK A CONFIRMAR</Pending>
          </>,
          "Vista de pacientes crónicos con dispensas pendientes",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/pharmacies/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="tablero 'Pacientes crónicos' con días restantes por medicamento, chips 'Reponer en 3 días' y 'Reservado'…"
            className="rounded-[1.5rem]"
          />
        }
      />

      {/* NORMATIVA (PHARM-2): la vigencia, las renovaciones y los medicamentos excluidos dependen de la normativa — A CONFIRMAR. */}
      <SplitFeature
        id="recetas-programadas"
        title="Recetas que llegan solas, cuando se necesitan"
        copy="Para los tratamientos que se repiten, Zonda programa la solicitud de cada receta electrónica antes de la fecha de reposición. El médico la revisa y la emite; la farmacia la recibe lista para dispensar."
        media={
          // Archivo final sugerido: public/assets/industries/pharmacies/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="línea de tiempo: Reposición próxima → Solicitud al médico → Receta firmada → Cobertura validada → Lista para retirar"
            className="rounded-[1.5rem]"
          />
        }
      >
        <ol className="mt-8 grid gap-4">
          {prescriptionSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-4 text-base leading-7 text-foreground/80"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </SplitFeature>

      {/* NORMATIVA (PHARM-2): el envío requiere el consentimiento del paciente (Ley 25.326) — A CONFIRMAR CON LEGALES. */}
      <SplitFeature
        id="alertas"
        title="Avisá en el momento justo, por el canal que el paciente prefiere"
        copy="Zonda avisa automáticamente cuando la receta está lista, cuando se acerca la reposición o cuando el medicamento llegó a la sucursal. Y le avisa a tu equipo cuando un tratamiento está por cortarse."
        mediaSide="left"
        bullets={[
          <>
            Avisos automáticos por WhatsApp{" "}
            <Pending>USO PARA FARMACIAS A CONFIRMAR</Pending>
          </>,
          <>
            Otros canales:{" "}
            <Pending>
              CANALES A CONFIRMAR: SMS, email, notificaciones en la app
            </Pending>
          </>,
          "Recordatorios de reposición y de retiro",
          "Alertas internas: receta vencida, cobertura rechazada, tratamiento sin reposición",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/pharmacies/feature-4.png (mensajería genérica, sin logo de WhatsApp)
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="teléfono con mensajería genérica 'Hola, tu medicación está lista para retirar en Sede 04' y cola de alertas internas…"
            className="rounded-[1.5rem]"
          />
        }
      />

      {/* NORMATIVA (PHARM-2): la plataforma debe estar inscripta en el ReNaPDiS, con validación de identidad y matrícula del prescriptor — NORMATIVA A CONFIRMAR. */}
      <SplitFeature
        id="receta-en-farmacia"
        title="Si falta la receta, que no falte el médico"
        copy="Cuando el paciente llega sin receta o necesita renovar la de su tratamiento, la farmacia lo conecta con su médico asignado, que lo atiende y emite la receta electrónica en el momento. La farmacia no receta: receta el médico, y la farmacia dispensa."
        bullets={[
          <>
            Médico asignado a cada paciente o a cada sucursal{" "}
            <Pending>MODELO A CONFIRMAR</Pending>
          </>,
          <>
            Atención desde la farmacia:{" "}
            <Pending>
              MODALIDAD A CONFIRMAR: teleconsulta en la farmacia / consultorio
              en la sucursal
            </Pending>
          </>,
          "Receta electrónica emitida por un profesional matriculado",
          "La receta llega a la farmacia lista para validar cobertura y dispensar",
        ]}
        media={
          // Archivo final sugerido: public/assets/industries/pharmacies/feature-5.png (sin rostros reales)
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="farmacéutica con tablet 'Conectando con Médico asignado', vista del médico con 'Emitir receta electrónica' y receta 'Lista para dispensar'…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <ChecklistSection
        title="Hecho para trabajar dentro de la normativa"
        items={[
          "Recetas electrónicas emitidas solo por profesionales matriculados, con identidad validada",
          "Registro de cada dispensa y de cada sustitución de medicamento",
          "Datos del paciente cifrados en tránsito y en reposo, con permisos granulares",
          <Pending key="certificaciones">
            CERTIFICACIONES E INSCRIPCIONES A CONFIRMAR: ReNaPDiS, ANMAT,
            jurisdicciones
          </Pending>,
        ]}
      />

      <ChecklistSection
        title="Para quién"
        items={[
          <>
            <strong className={strongClassName}>Farmacias independientes</strong>{" "}
            que quieren fidelizar a sus pacientes crónicos
          </>,
          <>
            <strong className={strongClassName}>Cadenas de farmacias</strong>{" "}
            con muchas sucursales y un mismo paciente en todas
          </>,
          <>
            <strong className={strongClassName}>
              Farmacias de obras sociales, mutuales y hospitales
            </strong>{" "}
            <Pending>A CONFIRMAR</Pending>
          </>,
        ]}
      />

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Testimonial
            quote={
              <>
                “
                <Pending>
                  TESTIMONIO A DEFINIR — farmacéutico/a o responsable de una
                  cadena
                </Pending>
                ”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>CARGO</Pending>, <Pending>FARMACIA</Pending>
              </>
            }
          />
        </div>
      </section>

      <FaqList items={faqItems} />

      <CtaBanner
        title="No pierdas tiempo en nada"
        subtitle="Pacientes con medicamentos siempre disponibles, recetas que llegan a tiempo y un médico a un paso del mostrador."
        buttonText="Hablemos"
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
