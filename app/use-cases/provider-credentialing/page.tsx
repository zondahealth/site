import type { Metadata } from "next";
import { Briefcase, Fingerprint, KeyRound, UserRound } from "lucide-react";

import { LOGIN_URL } from "@/lib/navigation";
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

// Los CTAs de profesional usan LOGIN_URL: dependen de la DECISIÓN NAV-2. Si no se confirma, cambiarlos a /contact.

const title = "Credencialización y conexión de prestadores";
const description =
  "El profesional sube su matrícula, títulos, especialidades y documentación una sola vez. Zonda los verifica y los comparte, con su consentimiento, con cada clínica, hospital y financiador con el que trabaja.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/use-cases/provider-credentialing" },
  openGraph: {
    title: `${title} | Zonda`,
    description,
    url: "/use-cases/provider-credentialing",
  },
};

const benefits = [
  {
    title: "Para el profesional",
    copy: "Una sola carga. Nada de mandar el mismo PDF de la matrícula a cada institución.",
    // Archivo final sugerido: public/assets/use-cases/provider-credentialing/benefit-1.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Para el profesional». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Para la organización",
    copy: "Altas más rápidas con credenciales ya cargadas y alertas de vencimiento.",
    // Archivo final sugerido: public/assets/use-cases/provider-credentialing/benefit-2.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Para la organización». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
  {
    title: "Para el sistema",
    copy: "Una red de prestadores confiable que mejora con cada conexión.",
    // Archivo final sugerido: public/assets/use-cases/provider-credentialing/benefit-3.png
    media: (
      <ImagePlaceholder
        width={1280}
        height={720}
        label="Ilustración horizontal de producto para la tarjeta «Para el sistema». Composición: una tarjeta de UI…"
        fill
      />
    ),
  },
];

const capabilities = [
  { title: "Identidad", href: "/use-cases/identity", icon: Fingerprint },
  { title: "Portal Profesional", icon: UserRound },
  {
    title: "Outbound OAuth2",
    copy: "Zonda se conecta a terceros sin exponer credenciales.",
    icon: KeyRound,
  },
  { title: "RRHH", href: "/use-cases/workforce", icon: Briefcase },
];

const faqItems = [
  {
    question: "¿Qué es la credencialización de prestadores?",
    answer:
      "Es el proceso por el cual una organización verifica la matrícula, formación y documentación de un profesional antes de que atienda. Con Zonda, el profesional lo carga una vez y lo reutiliza.",
  },
  {
    question: "¿Quién controla mis datos?",
    answer: (
      <>
        Vos. Compartís tus credenciales solo con las organizaciones que elegís,
        y podés revocar el acceso.{" "}
        <Pending>MECÁNICA DE REVOCACIÓN A CONFIRMAR</Pending>
      </>
    ),
  },
  {
    question: "¿Mis contraseñas de financiadores quedan expuestas?",
    answer:
      "No. Se usan solo para autenticarte durante los flujos de atención; nunca se muestran en pantalla ni se comparten con terceros.",
  },
  {
    question: "¿Cuánto cuesta para el profesional?",
    answer: (
      <>
        <Pending>PRECIO A DEFINIR</Pending> — ver{" "}
        <InlineLink href="/pricing">Precios</InlineLink>.
      </>
    ),
  },
];

const relatedLinks = [
  { label: "Asociaciones médicas", href: "/industries/medical-associations" },
  { label: "Clínicas y redes", href: "/industries/clinics-provider-networks" },
  { label: "Financiadores", href: "/industries/payers" },
  { label: "RRHH", href: "/use-cases/workforce" },
  { label: "Atención multi-financiador", href: "/use-cases/multi-payer-care" },
];

const splitImageClassName = "rounded-[1.5rem]";

export default function ProviderCredentialingPage() {
  return (
    <main lang="es" className="overflow-hidden bg-background text-foreground">
      <UseCaseHero
        eyebrow="Conexión de prestadores y credenciales"
        title="Cargá tus datos una vez. Trabajá con todas tus organizaciones."
        copy={description}
        primary={{ label: "Soy profesional: crear mi perfil", href: LOGIN_URL }}
        secondary={{ label: "Soy organización: hablemos", href: "/contact" }}
        secondaryVariant="inverse"
        media={
          // Archivo final sugerido: public/assets/use-cases/provider-credentialing/hero.png
          <ImagePlaceholder
            width={1200}
            height={1245}
            label="modal tipo 'Conectá tu perfil con Clínica Centro' donde el profesional elige qué credenciales compartir y…"
            className="object-contain max-w-[1200px] mx-auto"
          />
        }
      />

      <BenefitStories
        title="Credencialización sin formularios repetidos."
        items={benefits}
      />

      <div className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-2">
          <MetricSlot
            label="días ahorrados en el alta de un prestador"
            supportText="Métrica a definir"
          />
          <MetricSlot
            label="profesionales con perfil reutilizable"
            supportText="Métrica a definir"
          />
        </div>
      </div>

      <SplitFeature
        title="Un perfil profesional que te acompaña"
        bullets={[
          "Matrícula, títulos, especialidades, seguros y documentación en un perfil único",
          "Actualizás una vez y se refleja en todas tus organizaciones",
          "Vos decidís qué compartir y con quién",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/provider-credentialing/feature-1.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="perfil del profesional con secciones 'Matrícula ✓', 'Especialidad ✓', 'Seguro de mala praxis · vence en 30…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Una sola carga, todas tus organizaciones"
        copy={
          <>
            Ver también{" "}
            <InlineLink href="/use-cases/multi-payer-care">
              Atención multi-financiador
            </InlineLink>
            : las reglas de cada financiador viven en Zonda, no en la cabeza del
            profesional.
          </>
        }
        mediaSide="left"
        bullets={[
          "Conectá las organizaciones y financiadores con los que trabajás (por ejemplo, OSDE, Swiss Medical, PAMI, Galeno)",
          "Registrá tus visitas en Zonda y que lleguen a cada uno",
          "Seguí tus finanzas en tiempo real con liquidación y conciliación automática",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/provider-credentialing/feature-2.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="pantalla 'Conectar con PAMI' con usuario y aviso de privacidad, y al lado la lista de organizaciones…"
            className={splitImageClassName}
          />
        }
      />

      <SplitFeature
        title="Validación para las organizaciones"
        bullets={[
          <span key="verificacion">
            Verificación de credenciales al momento del alta{" "}
            <Pending>
              FUENTES DE VERIFICACIÓN A CONFIRMAR: registros de matrícula,
              colegios médicos
            </Pending>
          </span>,
          "Alertas de vencimiento y renovación",
          "Historial auditado de cada credencial compartida",
        ]}
        media={
          // Archivo final sugerido: public/assets/use-cases/provider-credentialing/feature-3.png
          <ImagePlaceholder
            width={1000}
            height={1000}
            label="panel de la organización con la lista de prestadores y el estado de credenciales en verde/amarillo/rojo,…"
            className={splitImageClassName}
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
                  TESTIMONIO A DEFINIR — idealmente un profesional que trabaja
                  con varias organizaciones
                </Pending>
                ”
              </>
            }
            name={<Pending>NOMBRE</Pending>}
            role={
              <>
                <Pending>ESPECIALIDAD</Pending>, <Pending>CIUDAD</Pending>
              </>
            }
          />
        </div>
      </section>

      <CapabilityGrid title="Lo que lo hace posible" items={capabilities} />

      <FaqList items={faqItems} />

      <CtaBanner
        title="Una matrícula, un perfil, todas tus organizaciones"
        buttonText="Crear mi perfil profesional"
        buttonHref={LOGIN_URL}
      />

      <RelatedLinks links={relatedLinks} />
    </main>
  );
}
