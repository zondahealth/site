import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Rutas movidas dentro del sitio nuevo (301). Sin prefijo /[locale]:
      // I18N-1 opción A todavía no está adoptada.
      {
        source: "/casos-de-uso/atencion-multi-financiador",
        destination: "/use-cases/multi-payer-care",
        permanent: true,
      },
      {
        source: "/casos-de-uso/ciclo-de-ingresos",
        destination: "/use-cases/revenue-cycle",
        permanent: true,
      },
      // URLs del sitio en vivo (zondahealth.com)
      {
        source: "/casos-de-uso/interdom",
        destination: "/customer-stories/interdom",
        permanent: true,
      },
      {
        source: "/casos-de-uso/fraude",
        destination: "/use-cases/fraud-risk-prevention",
        permanent: true,
      },
      {
        source: "/casos-de-uso",
        destination: "/customer-stories",
        permanent: true,
      },
      {
        source: "/desarrolladores",
        destination:
          "https://zondahealth.readme.io",
        permanent: true,
      },
      {
        source: "/developers",
        destination:
          "https://zondahealth.readme.io",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/products/interoperabilidad",
        destination: "/use-cases/ai-agents",
        permanent: true,
      },
      {
        source: "/use-cases/healthcare-intelligence-agents",
        destination: "/use-cases/ai-agents",
        permanent: true,
      },
      {
        source: "/use-cases/normalized-ai",
        destination: "/use-cases/ai-agents",
        permanent: true,
      },
      {
        source: "/products/profesionales",
        destination: "/use-cases/identity",
        permanent: true,
      },
      // Temporales (307) hasta que exista el destino definitivo; pasar a permanent:true y al destino final cuando la página esté live
      {
        source: "/products/internacion-domiciliaria",
        destination: "/industries/home-health",
        permanent: true,
      },
      {
        source: "/products/organizaciones",
        destination: "/solutions",
        permanent: false,
      },
      { source: "/empresa", destination: "/", permanent: false }, // final: /company
    ];
  },
};

export default nextConfig;
