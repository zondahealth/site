"use client";

import Link from "next/link";
import { Bot, CircleDollarSign, ShieldCheck, Workflow } from "lucide-react";

export const useCases = [
  {
    title: "Agentes de inteligencia en salud",
    href: "/use-cases/healthcare-intelligence-agents",
    icon: Bot,
  },
  {
    title: "Fraude y prevención de riesgos",
    href: "/use-cases/fraud-risk-prevention",
    icon: ShieldCheck,
  },
  {
    title: "Atención multi-financiador",
    href: "/casos-de-uso/atencion-multi-financiador",
    icon: Workflow,
  },
  {
    title: "Ciclo de ingresos",
    href: "/casos-de-uso/ciclo-de-ingresos",
    icon: CircleDollarSign,
  },
] as const;

type SolutionsBoxProps = {
  onNavigate?: () => void;
};

export function SolutionsBox({ onNavigate }: SolutionsBoxProps) {
  return (
    <div
      id="solutions-box"
      className="absolute left-0 top-[calc(100%+0.65rem)] w-[min(24rem,calc(100vw-1.5rem))] overflow-hidden rounded-[1.35rem] border border-border/80 bg-white/95 p-3 shadow-[0_18px_50px_rgba(20,34,61,0.18)] backdrop-blur-2xl sm:p-4"
    >
      <ul className="flex flex-col gap-0.5">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;

          return (
            <li key={useCase.href}>
              <Link
                href={useCase.href}
                onClick={onNavigate}
                className="group flex min-w-0 items-center gap-3 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-secondary/15 bg-[#f5f8ff] text-primary group-hover:border-transparent group-hover:text-white">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(135deg,#1B6CFF_0%,#0DADF2_100%)] opacity-0 group-hover:opacity-100"
                  />
                  <Icon className="relative size-4" strokeWidth={1.7} />
                </span>
                <span className="min-w-0 text-sm font-semibold leading-snug text-foreground">
                  {useCase.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
