import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  CircleDollarSign,
  ClipboardList,
  Cog,
  Fingerprint,
  FlaskConical,
  Hospital,
  House,
  Landmark,
  Newspaper,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  UsersRound,
  Workflow,
} from "lucide-react";

// DECISIÓN SLUG-1: slugs en inglés, planos, estilo plaid.com.

export type RouteStatus = "live" | "soon";

export type NavLink = {
  title: string;
  href: string;
  status: RouteStatus;
  icon?: LucideIcon;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavLink[];
};

export const LOGIN_URL = "https://azul.zondahealth.com"; // DECISIÓN NAV-2: confirmar URL de la app

export const DOCS_URL =
  "https://zondahealth.readme.io/reference/getting-started-with-your-api";

export const useCaseGroups: NavGroup[] = [
  {
    title: "Inteligencia y datos",
    items: [
      {
        title: "IA y agentes",
        href: "/use-cases/normalized-ai",
        status: "live",
        icon: Sparkles,
        description:
          "Datos clínicos codificados (LOINC, ICD-10) y agentes que razonan sobre clínica, operación y finanzas.",
      },
      {
        title: "Analítica",
        href: "/use-cases/analytics",
        status: "live",
        icon: BarChart3,
        description:
          "Dashboards, alertas y reportes por región, sede, unidad o profesional.",
      },
      {
        title: "Segmentación poblacional",
        href: "/use-cases/population-segmentation",
        status: "live",
        icon: Users,
        description:
          "Agrupá a tu población por riesgo, cobertura, territorio y condición.",
      },
    ],
  },
  {
    title: "Transacción e ingresos",
    items: [
      {
        title: "Atención multi-financiador",
        href: "/use-cases/multi-payer-care",
        status: "live",
        icon: Workflow,
        description:
          "Tu organización se conecta una vez y opera con todos sus financiadores.",
      },
      {
        title: "Ciclo de ingresos",
        href: "/use-cases/revenue-cycle",
        status: "live",
        icon: CircleDollarSign,
        description:
          "De cada prestación realizada a cada ingreso cobrado y liquidado.",
      },
      {
        title: "Fraude y prevención de riesgos",
        href: "/use-cases/fraud-risk-prevention",
        status: "live",
        icon: ShieldCheck,
        description:
          "Riesgo explicable por transacción, antes del pago.",
      },
    ],
  },
  {
    title: "Identidad y profesionales",
    items: [
      {
        title: "Identidad",
        href: "/use-cases/identity",
        status: "live",
        icon: Fingerprint,
        description:
          "Un registro único para cada paciente, profesional y organización.",
      },
    ],
  },
  {
    title: "Operación",
    items: [
      {
        title: "Automatización",
        href: "/use-cases/automation",
        status: "live",
        icon: Cog,
        description:
          "Validaciones, conciliaciones, reclamos y asignaciones que se ejecutan solas.",
      },
      {
        title: "Operaciones digitales",
        href: "/use-cases/operations",
        status: "live",
        icon: ClipboardList,
        description:
          "Herramientas listas para organizaciones que todavía trabajan en papel.",
      },
    ],
  },
];

export const industryGroups: NavGroup[] = [
  {
    title: "Sector público",
    items: [
      {
        title: "Gobiernos y sector público",
        href: "/industries/government-public-sector",
        status: "live",
        icon: Landmark,
      },
    ],
  },
  {
    title: "Sector privado",
    items: [
      {
        title: "Internación domiciliaria",
        href: "/industries/home-health",
        status: "live",
        icon: House,
      },
      {
        title: "Hospitales",
        href: "/industries/hospitals",
        status: "live",
        icon: Hospital,
      },
      {
        title: "Atención primaria",
        href: "/industries/primary-care",
        status: "live",
        icon: Stethoscope,
      },
      {
        title: "Asociaciones médicas",
        href: "/industries/medical-associations",
        status: "live",
        icon: UsersRound,
      },
      {
        title: "Obras sociales, prepagas y aseguradoras",
        href: "/industries/payers",
        status: "live",
        icon: Building2,
      },
      {
        title: "Laboratorios y diagnóstico",
        href: "/industries/laboratories",
        status: "live",
        icon: FlaskConical,
      },
      {
        title: "Farmacias",
        href: "/industries/pharmacies",
        // DECISIÓN PHARM-1: publicado en la navegación a pedido del equipo; la página sigue con noindex hasta validar producto y normativa.
        status: "live",
        icon: Pill,
      },
    ],
  },
];

export const pages: NavLink[] = [
  { title: "Inicio", href: "/", status: "live" },
  { title: "Soluciones", href: "/solutions", status: "live" },
  { title: "Desarrolladores", href: "/developers", status: "live" },
  { title: "Precios", href: "/pricing", status: "soon" },
  { title: "Recursos", href: "/resources", status: "live" },
  { title: "Historias de clientes", href: "/customer-stories", status: "live" },
  { title: "Interdom", href: "/customer-stories/interdom", status: "live" },
  { title: "AMS", href: "/customer-stories/ams", status: "live" },
  {
    title: "PAMI",
    href: "/customer-stories/pami",
    status: "live",
  },
  { title: "Nosotros", href: "/company", status: "soon" },
  { title: "Contacto", href: "/contact", status: "live" },
  { title: "Política de privacidad", href: "/privacy-policy", status: "live" },
];

export const resourceLinks: NavLink[] = [
  {
    title: "Historias de clientes",
    href: "/customer-stories",
    status: "live",
    icon: Users,
  },
  {
    title: "Zonda en las noticias",
    href: "/news",
    status: "live",
    icon: Newspaper,
  },
];

/** Flat list of every use case. Render with `liveOnly` so soon routes stay hidden. */
export const useCases: NavLink[] = useCaseGroups.flatMap((group) => group.items);

const all = [
  ...pages,
  ...resourceLinks,
  ...useCaseGroups.flatMap((group) => group.items),
  ...industryGroups.flatMap((group) => group.items),
];

export function isLiveRoute(href: string) {
  if (/^(https?:|mailto:|#)/.test(href)) return true;
  const path = href.split("#")[0];
  return all.some((link) => link.href === path && link.status === "live");
}

export const liveOnly = (items: NavLink[]) =>
  items.filter((item) => item.status === "live");

export function liveGroups(groups: NavGroup[]): NavGroup[] {
  return groups
    .map((group) => ({
      ...group,
      items: liveOnly(group.items),
    }))
    .filter((group) => group.items.length > 0);
}

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export function getFooterColumns(): FooterColumn[] {
  const columns: FooterColumn[] = [
    {
      title: "Soluciones",
      links: [
        ...useCaseGroups.flatMap((group) =>
          group.items.map((item) => ({ label: item.title, href: item.href })),
        ),
        { label: "Ver todas", href: "/solutions" },
      ],
    },
    {
      title: "Sectores",
      links: industryGroups.flatMap((group) =>
        group.items.map((item) => ({ label: item.title, href: item.href })),
      ),
    },
    {
      title: "Desarrolladores",
      links: [
        { label: "Documentación", href: DOCS_URL },
        { label: "Referencia de la API", href: DOCS_URL },
        { label: "Desarrolladores", href: "/developers" },
      ],
    },
    {
      title: "Recursos",
      links: [
        ...resourceLinks.map((item) => ({
          label: item.title,
          href: item.href,
        })),
        { label: "Recursos", href: "/resources" },
        { label: "Precios", href: "/pricing" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Nosotros", href: "/company" },
        { label: "Contacto", href: "/contact" },
        { label: "Política de privacidad", href: "/privacy-policy" },
        { label: "Iniciar sesión", href: LOGIN_URL },
      ],
    },
  ];

  return columns
    .map((column) => ({
      ...column,
      links: column.links.filter((link) => isLiveRoute(link.href)),
    }))
    .filter((column) => column.links.length > 0);
}
