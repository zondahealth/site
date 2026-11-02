"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import { Pending } from "@/components/ui/pending/Pending";
import {
  industryGroups,
  isLiveRoute,
  useCaseGroups,
  type NavGroup,
  type NavLink,
} from "@/lib/navigation";

type SolutionsBoxProps = {
  onNavigate?: () => void;
};

type SolutionTab = {
  id: string;
  label: string;
  groups: NavGroup[];
};

const tabs: SolutionTab[] = [
  {
    id: "use-cases",
    label: "Por caso de uso",
    groups: useCaseGroups,
  },
  {
    id: "industries",
    label: "Por sector",
    groups: industryGroups,
  },
];

const iconChipClassName =
  "relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554]";

const itemListClassName =
  "grid grid-cols-2 content-start gap-x-6 gap-y-4";

function SolutionItem({
  item,
  onNavigate,
}: {
  item: NavLink;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  if (!isLiveRoute(item.href)) {
    return (
      <li className="flex min-w-0 items-center gap-3">
        <span className={`${iconChipClassName} opacity-60`}>
          {Icon ? (
            <Icon
              aria-hidden="true"
              className="relative size-[18px]"
              strokeWidth={1.6}
            />
          ) : null}
        </span>
        <span className="flex min-w-0 flex-col items-start gap-1">
          <span className="text-[13px] font-medium leading-snug text-[#1a2a3d]/60">
            {item.title}
          </span>
          <span className="text-[10px] leading-none">
            <Pending>Próximamente</Pending>
          </span>
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="group flex min-w-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span
          className={`${iconChipClassName} transition-colors duration-200 group-hover:border-transparent group-hover:text-white`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,#2f7dff_0%,#8fd0ff_100%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
          {Icon ? (
            <Icon className="relative size-[18px]" strokeWidth={1.6} />
          ) : null}
        </span>
        <span className="min-w-0 text-[13px] font-medium leading-snug text-[#1a2a3d]">
          {item.title}
        </span>
      </Link>
    </li>
  );
}

export function SolutionsBox({ onNavigate }: SolutionsBoxProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!activeTab) return null;

  function moveTab(direction: 1 | -1) {
    const index = tabs.findIndex((tab) => tab.id === activeId);
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    if (!next || next.id === activeId) return;
    setActiveId(next.id);
    document.getElementById(`solutions-tab-${next.id}`)?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowDown" &&
      event.key !== "ArrowUp"
    ) {
      return;
    }

    event.preventDefault();
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    moveTab(forward ? 1 : -1);
  }

  return (
    <div
      id="solutions-box"
      className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[1.4rem] border border-white/40 bg-white/25 p-1.5 shadow-[0_24px_60px_rgba(12,40,80,0.22)] backdrop-blur-xl"
    >
      <div className="flex max-h-[calc(100dvh-6rem)] overflow-hidden rounded-2xl bg-white">
        <div
          role="tablist"
          aria-label="Tipos de soluciones"
          aria-orientation="vertical"
          onKeyDown={onTabKeyDown}
          className="flex w-[220px] shrink-0 flex-col gap-1 border-r border-[#eef2f7] bg-[linear-gradient(200deg,#e6fbff_0%,#f3f7ff_55%,#fdf0fa_100%)] p-1.5"
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeTab.id;

            return (
              <button
                key={tab.id}
                id={`solutions-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`solutions-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                className={`flex w-full items-center justify-between rounded-[10px] px-4 py-[11px] text-left text-[14px] font-medium text-[#13243a] outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  selected
                    ? "bg-[linear-gradient(90deg,#e4f1ff_0%,#ebeaff_100%)]"
                    : "hover:bg-white/70"
                }`}
              >
                {tab.label}
                {selected ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-[#13243a]"
                    strokeWidth={1.75}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`solutions-panel-${activeTab.id}`}
          aria-labelledby={`solutions-tab-${activeTab.id}`}
          className="flex min-w-0 flex-1 flex-col"
        >
          <div className="grid min-h-0 gap-5 overflow-y-auto overscroll-contain px-7 py-5">
            {activeTab.id === "use-cases" ? (
              <ul className={itemListClassName}>
                {activeTab.groups.flatMap((group) =>
                  group.items.map((item) => (
                    <SolutionItem
                      key={item.href}
                      item={item}
                      onNavigate={onNavigate}
                    />
                  )),
                )}
              </ul>
            ) : (
              activeTab.groups.map((group) => (
                <section key={group.title} aria-label={group.title}>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className={itemListClassName}>
                    {group.items.map((item) => (
                      <SolutionItem
                        key={item.href}
                        item={item}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </ul>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
