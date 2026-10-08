import Link from "next/link";
import { ArrowUpRight, Braces, Code2, ShieldCheck, Webhook } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import Shader from "@/components/ui/shader/Shader";

const capabilities = [
  {
    icon: Braces,
    title: "API diseñada para construir",
    description:
      "Recursos predecibles, endpoints claros y una integración que se adapta a tu stack.",
  },
  {
    icon: Webhook,
    title: "Eventos en tiempo real",
    description:
      "Mantené tus sistemas sincronizados con eventos que acompañan cada momento del cuidado.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad desde el inicio",
    description:
      "Autenticación y permisos preparados para conectar información sensible con confianza.",
  },
] as const;

const requestExample = `curl https://api.zonda.health/v1/patients \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json"`;

export default function DevelopersPage() {
  return (
    <main className="overflow-hidden bg-[#071a38] text-[#f8f9ff]">
      <section className="relative isolate flex min-h-[44rem] items-end overflow-hidden px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:min-h-[46rem] lg:px-16 lg:pb-24">
        <Shader
          variant="fluid"
          ink="#eaea00"
          bg="#071a38"
          angle={-12}
          shiftX={0.18}
          shiftY={-0.08}
          maxDpr={1}
          className="opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_80%,rgba(7,26,56,0.05),rgba(7,26,56,0.76)_54%,#071a38_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#eaea00]/40 bg-[#071a38]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#eaea00] backdrop-blur-sm">
              <Code2 className="size-3.5" aria-hidden="true" />
              Zonda para desarrolladores
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Infraestructura para el cuidado que querés construir.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f8f9ff]/72 sm:text-lg">
              Conectá experiencias de salud con una plataforma pensada para
              equipos que necesitan avanzar rápido, sin perder contexto.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="https://zondahealth.readme.io/reference/getting-started-with-your-api">
                  Ver documentación
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#f8f9ff]/35 text-[#f8f9ff] hover:bg-white/10">
                <Link href="#empezar">Hablar con el equipo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] px-6 py-20 text-[#071a38] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e3c75]">
              Hecha para integrar
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Menos fricción entre tu producto y el sistema de salud.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-[#071a38]/65">
              Usá Zonda como la capa de conexión para historias clínicas,
              operaciones y experiencias de pacientes. Empezá con lo que
              necesitás y expandite a tu ritmo.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#071a38] p-1 shadow-2xl shadow-[#071a38]/20">
            <div className="border border-white/10 px-5 py-4 text-xs text-[#f8f9ff]/45">
              GET /v1/patients
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-7 text-[#eaea00] sm:p-8">
              <code>{requestExample}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Shader
          variant="tide"
          transparent
          ink="#eaea00"
          bg="#071a38"
          angle={90}
          maxDpr={1}
          className="opacity-25"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#eaea00]">
            Base sólida
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/12 bg-white/[0.045] p-7 backdrop-blur-sm"
              >
                <Icon className="size-6 text-[#eaea00]" aria-hidden="true" />
                <h3 className="mt-12 text-xl font-semibold tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#f8f9ff]/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="empezar" className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#eaea00]">
              Empezá hoy
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Construyamos una mejor experiencia de salud.
            </h2>
          </div>
          <Button asChild variant="accent" size="lg">
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
