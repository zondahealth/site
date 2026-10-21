"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CircleDollarSign,
  ShieldCheck,
  Workflow,
} from "lucide-react";

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
      className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[1.4rem] border border-white/40 bg-white/25 p-1.5 shadow-[0_24px_60px_rgba(12,40,80,0.22)] backdrop-blur-xl"
    >
      <div className="flex overflow-hidden rounded-2xl bg-white">
        <div className="w-[220px] shrink-0 border-r border-[#eef2f7] bg-[linear-gradient(200deg,#e6fbff_0%,#f3f7ff_55%,#fdf0fa_100%)] p-1.5">
          <button
            type="button"
            aria-current="true"
            className="flex w-full items-center justify-between rounded-[10px] bg-[linear-gradient(90deg,#e4f1ff_0%,#ebeaff_100%)] px-4 py-[11px] text-left text-[14px] font-medium text-[#13243a] outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Por caso de uso
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-[#13243a]"
              strokeWidth={1.75}
            />
          </button>
        </div>

        <ul className="grid min-w-0 flex-1 grid-cols-2 content-start gap-x-8 gap-y-[22px] px-7 py-6">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <li key={useCase.href}>
                <Link
                  href={useCase.href}
                  onClick={onNavigate}
                  className="group flex min-w-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554] transition-colors duration-200 group-hover:border-transparent group-hover:text-white">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(135deg,#6e98ff_0%,#a9cdff_100%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <Icon className="relative size-[18px]" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 text-[13px] font-medium leading-snug text-[#1a2a3d]">
                    {useCase.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
