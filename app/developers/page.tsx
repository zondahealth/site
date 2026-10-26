import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderInput, Network, Plug, Webhook } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/image-placeholder/ImagePlaceholder";
import { Pending } from "@/components/ui/pending/Pending";
import { CodeTabs } from "@/components/developers/CodeTabs";
import {
  BenefitStories,
  CapabilityGrid,
  FaqList,
  RelatedLinks,
  SplitFeature,
  UseCaseHero,
} from "@/components/use-cases/UseCasePrimitives";
import { DOCS_URL, isLiveRoute } from "@/lib/navigation";
import { CtaBanner } from "@/components/ui/cta-banner/CtaBanner";
import { Separator } from "@/components/ui/separator/Separator";

const description =
  "APIs abiertas, eventos en tiempo real y un modelo de datos canónico para construir sobre la infraestructura de salud de Zonda.";

export const metadata: Metadata = {
  title: "Desarrolladores",
  description,
};

// DECISIÓN API-1: confirmar host canónico (api.zonda.health vs api.zondahealth.com)
const requestExample = `curl https://api.zonda.health/v1/patients \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json"`;

const responseExample = `// Respuesta ilustrativa — campos a confirmar con la referencia oficial
{
  "id": "pat_[ID]",
  "identity": { "document": "[DNI]", "verified": true },
  "coverage": [{ "payer": "[FINANCIADOR]", "status": "active" }],
  "observations": [{ "code": { "system": "LOINC", "value": "[CÓDIGO]" } }]
}`;

const darkLinkClassName =
  "font-medium text-[#eaea00] underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[#eaea00]";

function DarkLink({ href, children }: { href: string; children: string }) {
  if (!isLiveRoute(href)) return <>{children}</>;
  return (
    <Link href={href} className={darkLinkClassName}>
      {children}
    </Link>
  );
}

const benefits = [
  {
    title: "API diseñada para construir",
    copy: "Recursos predecibles, endpoints claros y una integración que se adapta a tu stack. Documentada con OpenAPI, con autenticación estándar y rate limiting inteligente.",
    // Archivo final sugerido: public/assets/developers/benefit-1.png
    media: (
      <ImagePlaceholder
        tone="dark"
        width={1280}
        height={720}
        label="Ilustración horizontal para la tarjeta «API diseñada para construir». Composición: un editor de código con un endpoint REST…"
        fill
      />
    ),
  },
  {
    title: "Eventos en tiempo real",
    copy: "Mantené tus sistemas sincronizados con eventos que acompañan cada momento del cuidado (webhooks).",
    // Archivo final sugerido: public/assets/developers/benefit-2.png
    media: (
      <ImagePlaceholder
        tone="dark"
        width={1280}
        height={720}
        label="Ilustración horizontal para la tarjeta «Eventos en tiempo real». Composición: un stream de eventos webhook…"
        fill
      />
    ),
  },
  {
    title: "Seguridad desde el inicio",
    copy: "Personal Access Tokens, OAuth 2.0 inbound/outbound, cifrado en tránsito y en reposo, aislamiento multi-tenant.",
    // Archivo final sugerido: public/assets/developers/benefit-3.png
    media: (
      <ImagePlaceholder
        tone="dark"
        width={1280}
        height={720}
        label="Ilustración horizontal para la tarjeta «Seguridad desde el inicio». Composición: un token con scopes y un candado…"
        fill
      />
    ),
  },
];

const connectionOptions = [
  {
    title: "Zonda Connectors",
    copy: "Para sistemas de salud comunes, sin código custom y en formatos nativos del sistema.",
    icon: Plug,
  },
  {
    title: "REST APIs",
    copy: "Para integraciones a medida, desde cualquier stack, en JSON.",
    href: DOCS_URL,
    icon: Network,
  },
  {
    title: "FileSystems & DataDrop",
    copy: "Para ingesta masiva con desarrollo mínimo: HL7, FHIR, CSV y formatos arbitrarios.",
    icon: FolderInput,
  },
  {
    title: "Webhooks",
    copy: "Reaccioná a visitas, resultados, alertas y reclamos en tiempo real.",
    icon: Webhook,
  },
];

const faqItems = [
  {
    question: "¿Cómo me autentico?",
    answer:
      "Con un Personal Access Token para empezar, u OAuth 2.0 para apps de terceros.",
  },
  {
    question: "¿Hay sandbox?",
    answer: (
      <Pending>A CONFIRMAR: entorno de pruebas con datos sintéticos</Pending>
    ),
    jsonLd: false,
  },
  {
    question: "¿Hay SDKs o librerías?",
    answer: <Pending>A CONFIRMAR</Pending>,
    jsonLd: false,
  },
  {
    question: "¿Qué conectores hay disponibles?",
    answer: <Pending>LISTA DE CONECTORES A PUBLICAR</Pending>,
    jsonLd: false,
  },
  {
    question: "¿Qué límites de uso hay?",
    answer: (
      <>
        Rate limiting inteligente. <Pending>LÍMITES A DEFINIR</Pending>
      </>
    ),
    jsonLd: false,
  },
  {
    question: "¿Dónde pido soporte técnico?",
    answer: (
      <a href="mailto:support@zondahealth.com" className={darkLinkClassName}>
        support@zondahealth.com
      </a>
    ),
  },
];

const relatedLinks = [
  { label: "IA normalizada", href: "/use-cases/normalized-ai" },
  { label: "Identidad", href: "/use-cases/identity" },
  { label: "Automatización", href: "/use-cases/automation" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
  { label: "Ciclo de ingresos", href: "/use-cases/revenue-cycle" },
];

const storyHref = "/customer-stories/interdom";

export default function DevelopersPage() {
  return (
    <main lang="es" className="overflow-hidden bg-[#04060c] text-white">
      <UseCaseHero
        inverse
        backgroundSrc="/assets/bg/bg-clouds-black.png"
        eyebrow="Zonda para desarrolladores"
        title="Infraestructura para el cuidado que querés construir"
        copy="Conectá experiencias de salud con una plataforma pensada para equipos que necesitan avanzar rápido, sin perder contexto."
        primary={{ label: "Ver documentación", href: DOCS_URL }}
        mediaClassName="overflow-visible"
        media={
          <div className="relative h-[340px] w-full sm:h-[440px] lg:h-full">
            <Image
              src="/assets/developers/hero.png"
              alt="Hipócrates con auriculares y estetoscopio programando en una laptop"
              width={1416}
              height={1111}
              priority
              sizes="(min-width: 1024px) 760px, 560px"
              className="absolute bottom-0 left-1/2 h-auto w-[440px] max-w-none -translate-x-1/2 sm:w-[560px] lg:left-auto lg:-right-[160px] lg:w-[760px] lg:translate-x-0"
            />
          </div>
        }
      />

      <Separator />

      <BenefitStories inverse title="Una base sólida" items={benefits} />

      <SplitFeature
        inverse
        eyebrow="Hecha para integrar"
        title="Menos fricción entre tu producto y el sistema de salud"
        copy="Usá Zonda como la capa de conexión para historias clínicas, operaciones y experiencias de pacientes. Generá tu Personal Access Token, hacé tu primer request y expandite a tu ritmo."
        media={
          <CodeTabs
            tabs={[
              { label: "cURL", code: requestExample },
              { label: "Respuesta", code: responseExample },
            ]}
            footer={
              <Pending>
                Respuesta ilustrativa: campos a confirmar con la referencia
                oficial
              </Pending>
            }
          />
        }
      >
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-1.5 text-sm ${darkLinkClassName}`}
        >
          Ir al quickstart
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </SplitFeature>

      <SplitFeature
        inverse
        mediaSide="left"
        title="Datos e integración"
        bullets={[
          "Ingesta de FHIR R4, HL7v2, CSV, PDFs, XML y formatos arbitrarios vía API, webhook o DataDrop",
          "Modelo canónico normalizado (LOINC, ICD-10), exportable a JSON, FHIR, CSV, HL7 o esquemas custom",
          "Procesamiento AI: clasificación y extracción de información clínica estructurada en tiempo real",
        ]}
        id="modelo-canonico"
        media={
          // Archivo final sugerido: public/assets/developers/feature-1.png
          <ImagePlaceholder
            tone="dark"
            width={1000}
            height={1000}
            label="archivos HL7, PDF y CSV entrando a un pipeline y saliendo como un único recurso JSON normalizado con códigos LOINC…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        inverse
        title="Identidad y organizaciones"
        bullets={[
          "Creá y administrá múltiples organizaciones; definí estructuras, roles y permisos de forma programática",
          "Identidad unificada de pacientes y profesionales sobre un único registro",
          "OAuth 2.0 inbound (apps externas con tokens scoped) y outbound (Zonda se conecta a terceros sin exponer credenciales)",
        ]}
        media={
          // Archivo final sugerido: public/assets/developers/feature-2.png
          <ImagePlaceholder
            tone="dark"
            width={1000}
            height={1000}
            label="árbol de organizaciones con roles y permisos, y una pantalla de consentimiento OAuth con scopes…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        inverse
        mediaSide="left"
        title="Transacción de salud"
        copy={<Pending>ENDPOINTS A CONFIRMAR</Pending>}
        bullets={[
          <>
            <DarkLink href="/use-cases/multi-payer-care">
              Prestaciones y reglas de financiador
            </DarkLink>
            : validación en origen para atención multi-financiador
          </>,
          <>
            <DarkLink href="/use-cases/revenue-cycle">Ciclo de ingresos</DarkLink>
            : estado de cada prestación de la atención a la liquidación
          </>,
          <>
            <DarkLink href="/use-cases/fraud-risk-prevention">Riesgo</DarkLink>:
            puntaje explicable por transacción
          </>,
        ]}
        media={
          // Archivo final sugerido: public/assets/developers/feature-3.png
          <ImagePlaceholder
            tone="dark"
            width={1000}
            height={1000}
            label="respuesta de API de una prestación con estado de validación por financiador y un score de riesgo explicado…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        inverse
        title="Eventos y observabilidad"
        bullets={[
          "Webhooks para reaccionar a visitas, resultados, alertas y reclamos",
          "Analíticas operativas con el volumen y la performance de cada integración",
        ]}
        media={
          // Archivo final sugerido: public/assets/developers/feature-4.png
          <ImagePlaceholder
            tone="dark"
            width={1000}
            height={1000}
            label="dashboard de integraciones con gráfico de eventos por minuto, latencia y un log de webhooks entregados…"
            className="rounded-[1.5rem]"
          />
        }
      />

      <SplitFeature
        inverse
        mediaSide="left"
        title="Seguridad por diseño"
        copy={
          <>
            Arquitectura cloud-native con cifrado en tránsito y en reposo,
            gestión granular de permisos y aislamiento multi-tenant. La
            seguridad es responsabilidad de la plataforma, no del integrador.{" "}
            <Pending>CERTIFICACIONES A CONFIRMAR</Pending>
          </>
        }
        media={
          // Archivo final sugerido: public/assets/developers/feature-5.png
          <ImagePlaceholder
            tone="dark"
            width={1000}
            height={1000}
            label="capas de seguridad: cifrado, permisos por rol y tenants aislados, representados como bloques apilados…"
            className="rounded-[1.5rem]"
          />
        }
      >
        {isLiveRoute("/privacy-policy") ? (
          <Link
            href="/privacy-policy"
            className={`mt-6 inline-flex text-sm ${darkLinkClassName}`}
          >
            Política de privacidad
          </Link>
        ) : null}
      </SplitFeature>

      <SplitFeature
        inverse
        eyebrow="Construido sobre Zonda"
        title="Interdom construyó su monitor operativo sobre nuestra API"
        copy="Interdom construyó sobre la API de Zonda un monitor que combina ubicación, especialidades, alertas y asignaciones, y un sistema automatizado de resolución de reclamos, con 12 integraciones activas."
        media={
          <Image
            src="/assets/customer-stories/interdomxzonda.png"
            alt="Monitor operativo de Interdom construido sobre Zonda con mapa de profesionales, vehículos GPS, alertas y pacientes sin asignar"
            width={1118}
            height={976}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        }
      >
        {isLiveRoute(storyHref) ? (
          <Link
            href={storyHref}
            className={`mt-6 inline-flex items-center gap-1.5 text-sm ${darkLinkClassName}`}
          >
            Leer la historia
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        ) : null}
      </SplitFeature>

      <CapabilityGrid
        inverse
        title="Formas de conectar"
        items={connectionOptions}
      />

      <FaqList inverse items={faqItems} />

      <CtaBanner
        title="Construyamos una mejor experiencia de salud."
        buttonText="Contactar"
        variant="dark"
      />

      <RelatedLinks inverse links={relatedLinks} />
    </main>
  );
}
