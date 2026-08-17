"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  Cpu,
  GitBranch,
  HeartPulse,
  ScanFace,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useState, type ComponentType } from "react";

type Solution = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type SolutionGroup = {
  id: string;
  label: string;
  solutions: readonly Solution[];
};

// Este contenido es intencionalmente breve para que sea fácil ampliarlo.
const solutionGroups: readonly SolutionGroup[] = [
  {
    id: "use-case",
    label: "Por caso de uso",
    solutions: [
      {
        title: "Interoperabilidad clínica",
        description: "Conectá sistemas y datos de salud de forma segura.",
        href: "#plataforma",
        icon: HeartPulse,
      },
      {
        title: "Identidad del paciente",
        description: "Unificá y verificá identidades sin fricción.",
        href: "#productos",
        icon: ScanFace,
      },
      {
        title: "Datos listos para IA",
        description: "Prepará información confiable para nuevos modelos.",
        href: "#api",
        icon: Bot,
      },
      {
        title: "Agentes de inteligencia en salud",
        description: "Convertí datos conectados en decisiones accionables.",
        href: "/use-cases/healthcare-intelligence-agents",
        icon: Bot,
      },
      {
        title: "Fraude y riesgo",
        description: "Detectá anomalías y protegé cada operación.",
        href: "/use-cases/fraud-risk-prevention",
        icon: ShieldCheck,
      },
      {
        title: "Atención multi-financiador",
        description: "Unificá reglas y validaciones en el punto de atención.",
        href: "/casos-de-uso/atencion-multi-financiador",
        icon: Workflow,
      },
      {
        title: "Ciclo de ingresos",
        description: "Conectá la prestación con el cobro y la liquidación.",
        href: "/casos-de-uso/ciclo-de-ingresos",
        icon: GitBranch,
      },
    ],
  },
  {
    id: "product",
    label: "Por producto",
    solutions: [
      {
        title: "API de salud",
        description: "Una única conexión para acceder a datos clínicos.",
        href: "#api",
        icon: Cpu,
      },
      {
        title: "Identidad del paciente",
        description: "Identidades unificadas y verificadas en cada sistema.",
        href: "#productos",
        icon: ScanFace,
      },
      {
        title: "Infraestructura de IA",
        description: "Datos confiables para desarrollar nuevos modelos.",
        href: "#plataforma",
        icon: Bot,
      },
      {
        title: "Intercambio de datos",
        description: "Información clínica disponible donde se necesita.",
        href: "#plataforma",
        icon: Building2,
      },
    ],
  },
] as const;

type SolutionsBoxProps = {
  onNavigate?: () => void;
};

export function SolutionsBox({ onNavigate }: SolutionsBoxProps) {
  const [activeGroupId, setActiveGroupId] = useState(solutionGroups[0].id);
  const activeGroup =
    solutionGroups.find((group) => group.id === activeGroupId) ??
    solutionGroups[0];

  return (
    <div
      id="solutions-box"
      className="absolute left-0 top-[calc(100%+0.65rem)] w-[min(52rem,calc(100vw-1.5rem))] overflow-hidden rounded-[1.35rem] border border-border/80 bg-white/95 shadow-[0_18px_50px_rgba(20,34,61,0.18)] backdrop-blur-2xl"
    >
      <div className="grid sm:grid-cols-[11rem_1fr]">
        <div className="relative overflow-hidden border-b border-border/70 bg-[#f4f7fd] p-2 sm:min-h-[18rem] sm:border-b-0 sm:border-r sm:p-3">
          <div
            className="relative flex gap-1 sm:flex-col"
            role="tablist"
            aria-label="Filtrar soluciones"
          >
            {solutionGroups.map((group) => {
              const isActive = group.id === activeGroup.id;

              return (
                <button
                  key={group.id}
                  id={`solutions-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`solutions-panel-${group.id}`}
                  onClick={() => setActiveGroupId(group.id)}
                  className={`flex flex-1 items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring sm:flex-none ${
                    isActive
                      ? "bg-white text-primary shadow-[0_1px_5px_rgba(21,27,43,0.08)]"
                      : "text-foreground/70 hover:bg-white/65 hover:text-foreground"
                  }`}
                >
                  {group.label}
                  {isActive ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-3.5 sm:block"
                      strokeWidth={1.8}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`solutions-panel-${activeGroup.id}`}
          role="tabpanel"
          aria-labelledby={`solutions-tab-${activeGroup.id}`}
          className="p-3 sm:p-5"
        >
          <div className="grid gap-1 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2">
            {activeGroup.solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  onClick={onNavigate}
                  className="group flex min-w-0 items-start gap-3 rounded-xl p-2.5 outline-none transition-colors hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-secondary/15 bg-[#f5f8ff] text-primary transition-colors group-hover:bg-white">
                    <Icon className="size-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-sm font-semibold text-foreground">
                      {solution.title}
                    </span>
                    <span className="mt-0.5 hidden text-[11px] leading-relaxed text-muted-foreground sm:block">
                      {solution.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="#productos"
            onClick={onNavigate}
            className="mt-3 flex h-9 w-full items-center justify-center gap-1 rounded-full border border-border/90 text-xs font-semibold text-foreground/80 outline-none transition-colors hover:border-secondary/30 hover:bg-muted/70 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring sm:mt-4"
          >
            Ver todas las soluciones
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
