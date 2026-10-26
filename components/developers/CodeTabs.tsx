"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/components/ui/utils";

type CodeTab = {
  label: string;
  code: string;
};

export function CodeTabs({
  tabs,
  footer,
}: {
  tabs: CodeTab[];
  footer?: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + step + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.045] p-1">
      <div
        role="tablist"
        aria-label="Ejemplo de request"
        className="flex gap-1 border border-white/10 px-3 py-2"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#eaea00] motion-reduce:transition-none",
              active === index
                ? "bg-white/10 text-[#f8f9ff]"
                : "text-[#f8f9ff]/60 hover:text-[#f8f9ff]",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={active !== index}
          tabIndex={0}
          className="outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#eaea00]"
        >
          <pre className="overflow-x-auto p-5 text-sm leading-7 text-[#eaea00] sm:p-8">
            <code>{tab.code}</code>
          </pre>
        </div>
      ))}
      {footer ? (
        <div className="border-t border-white/10 px-5 py-3 text-xs text-white/50">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
