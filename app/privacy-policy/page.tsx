import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Conocé cómo Zonda Health recopila, utiliza y protege tus datos personales.",
};

const sections = [
  {
    id: "recopilacion",
    title: "Recopilación de datos",
    content:
      "Recopilamos información personal que proporcionás al usar nuestro formulario de contacto, crear una cuenta o interactuar con nuestra plataforma. Esto puede incluir tu nombre, dirección de correo electrónico, número de teléfono, nombre de tu organización y los mensajes que nos envíes.",
  },
  {
    id: "uso",
    title: "Cómo usamos tus datos",
    content:
      "Usamos la información que recopilamos para responder a tus consultas, proporcionar y mejorar nuestros servicios, enviar comunicaciones relevantes sobre nuestra plataforma y cumplir con obligaciones legales. No utilizamos tus datos para fines no relacionados con los servicios que solicitaste.",
  },
  {
    id: "compartir",
    title: "Compartir datos",
    content:
      "No vendemos tus datos personales. Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestra plataforma, siempre que acepten mantener tu información confidencial. También podemos divulgar información cuando la ley lo requiera.",
  },
  {
    id: "seguridad",
    title: "Seguridad de los datos",
    content:
      "Implementamos medidas de seguridad estándar de la industria para proteger tu información personal, incluyendo cifrado en tránsito y en reposo, controles de acceso y auditorías de seguridad periódicas. Nuestra infraestructura está diseñada para cumplir con los requisitos de protección de datos de salud.",
  },
  {
    id: "derechos",
    title: "Tus derechos",
    content:
      "Tenés derecho a acceder, corregir o eliminar tus datos personales. También podés solicitar una copia de los datos que tenemos sobre vos o pedirnos que restrinjamos su procesamiento.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/70 px-6 pb-14 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label="Contenido de la política"
            className="self-start lg:sticky lg:top-28"
          >
            <p className="mb-4 text-sm font-semibold text-foreground">Contenido</p>
            <ol className="space-y-3 border-l border-border pl-4 text-sm text-muted-foreground">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-foreground focus-visible:text-foreground"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="transition-colors hover:text-foreground focus-visible:text-foreground"
                >
                  6. Contacto
                </a>
              </li>
            </ol>
          </nav>

          <article className="max-w-2xl">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              En Zonda Health cuidamos la información que nos confiás. Esta
              política explica qué datos recopilamos, para qué los usamos y
              cuáles son tus derechos.
            </p>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {section.content}
                  </p>
                  {section.id === "derechos" ? (
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      Para ejercer cualquiera de estos derechos, escribinos a{" "}
                      <a
                        href="mailto:support@zondahealth.com"
                        className="font-medium text-foreground underline decoration-secondary/60 underline-offset-4 hover:decoration-foreground"
                      >
                        support@zondahealth.com
                      </a>
                      .
                    </p>
                  ) : null}
                </section>
              ))}

              <section id="contacto" className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Contacto
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Si tenés preguntas sobre esta política de privacidad o cómo
                  manejamos tus datos, contactanos a{" "}
                  <a
                    href="mailto:support@zondahealth.com"
                    className="font-medium text-foreground underline decoration-secondary/60 underline-offset-4 hover:decoration-foreground"
                  >
                    support@zondahealth.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-14 rounded-2xl bg-[#eef5ff] p-6 sm:p-8">
              <p className="font-display text-xl font-semibold tracking-[-0.02em]">
                ¿Necesitás ayuda?
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Nuestro equipo puede orientarte sobre el tratamiento de tus
                datos personales.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold text-foreground underline decoration-secondary underline-offset-4 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Contactanos
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
