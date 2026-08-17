import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";

import { Logo } from "@/components/layout/Logo";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: readonly FooterLink[];
};

const columns: readonly (readonly FooterSection[])[] = [
  [
    {
      title: "Productos",
      links: [
        { label: "Instituciones conectadas", href: "#productos" },
        { label: "Trazabilidad clínica", href: "#productos" },
        { label: "Datos clínicos", href: "#productos" },
        {
          label: "Fraude y riesgo",
          href: "/use-cases/fraud-risk-prevention",
        },
        { label: "Infraestructura de IA", href: "#plataforma" },
        { label: "API de salud", href: "#api" },
        { label: "Identidad del paciente", href: "#productos" },
        { label: "Consentimientos", href: "#productos" },
        { label: "Intercambio de datos", href: "#plataforma" },
        { label: "Auditoría", href: "#productos" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentación", href: "#recursos" },
        { label: "Cobertura regional", href: "#recursos" },
        { label: "Blog", href: "#recursos" },
        { label: "Guías de industria", href: "#recursos" },
        { label: "Casos de éxito", href: "#recursos" },
        { label: "Financiamiento inteligente", href: "#recursos" },
      ],
    },
  ],
  [
    {
      title: "Nosotros",
      links: [
        { label: "Compañía", href: "#contacto" },
        { label: "Carreras", href: "#contacto" },
        { label: "Contacto", href: "#contacto" },
        { label: "Partners", href: "#contacto" },
        { label: "Prensa", href: "#contacto" },
        { label: "Seguridad", href: "#contacto" },
        { label: "Legal", href: "#contacto" },
      ],
    },
    {
      title: "Desarrolladores",
      links: [
        { label: "Quickstart", href: "#api" },
        { label: "Documentación API", href: "#api" },
        { label: "Librerías", href: "#api" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Demos de producto", href: "/demo" },
      ],
    },
  ],
  [
    {
      title: "Casos de uso",
      links: [
        { label: "Hospitales", href: "#productos" },
        { label: "Clínicas", href: "#productos" },
        { label: "Obras sociales y prepagas", href: "#productos" },
        { label: "Laboratorios", href: "#productos" },
        { label: "Telemedicina", href: "#productos" },
        { label: "Gobierno y sector público", href: "#productos" },
        { label: "Fraude y riesgo", href: "#productos" },
        {
          label: "Atención multi-financiador",
          href: "/casos-de-uso/atencion-multi-financiador",
        },
        {
          label: "Ciclo de ingresos",
          href: "/casos-de-uso/ciclo-de-ingresos",
        },
        { label: "Trazabilidad de punta a punta", href: "#productos" },
        { label: "Datos listos para IA", href: "#plataforma" },
        {
          label: "Agentes de inteligencia en salud",
          href: "/use-cases/healthcare-intelligence-agents",
        },
      ],
    },
    {
      title: "Para instituciones",
      links: [
        { label: "Conexión clínica", href: "#plataforma" },
        { label: "Intercambio de datos", href: "#plataforma" },
        { label: "Gestión de permisos", href: "#plataforma" },
        { label: "Directorio de apps", href: "#plataforma" },
      ],
    },
  ],
  [
    {
      title: "Para pacientes",
      links: [
        { label: "Cómo funciona", href: "#recursos" },
        { label: "Confianza y seguridad", href: "#recursos" },
        { label: "Portal del paciente", href: "#recursos" },
        { label: "Eliminar mis datos", href: "#recursos" },
        { label: "Política de privacidad", href: "#recursos" },
        { label: "Política biométrica", href: "#recursos" },
        { label: "Preguntas frecuentes", href: "#recursos" },
        { label: "Centro de ayuda", href: "#contacto" },
      ],
    },
  ],
];

function PrivacyChoicesIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 30 14"
      className="h-3.5 w-[30px] shrink-0"
    >
      <rect width="30" height="14" rx="2" fill="#226ffd" />
      <rect x="16.5" y="1.5" width="12" height="11" rx="1.5" fill="#fff" />
      <path
        d="M5.2 7.4 7 9.2l4.2-4.4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden rounded-t-[2rem] bg-[#060b14] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-72 w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.28),rgba(34,111,253,0.12)_42%,transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo variant="full" inverted className="h-8 w-auto" />
            </Link>
          </div>

          {columns.map((sections) => (
            <div key={sections[0].title} className="flex flex-col gap-10">
              {sections.map((section) => (
                <nav
                  key={section.title}
                  aria-labelledby={`footer-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <h2
                    id={`footer-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mb-4 text-sm font-semibold text-white"
                  >
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-20">
          <div className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <p>© {new Date().getFullYear()} Zonda</p>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-left transition-colors hover:text-white"
            >
              <MapPin className="size-3.5" strokeWidth={1.75} />
              Latinoamérica
              <ChevronDown className="size-3.5 opacity-70" strokeWidth={2} />
            </button>
            <Link
              href="#recursos"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              Tus opciones de privacidad
              <PrivacyChoicesIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
