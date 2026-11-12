"use client";

import { useEffect, useState } from "react";

import { cn } from "@/components/ui/utils";

export type BrandbookChapter = { id: string; number: string; label: string };

/** Sticky chapter rail that highlights the section currently being read. */
export function BrandbookNav({ chapters }: { chapters: BrandbookChapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const sections = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as "current" once its top crosses the upper third of
    // the viewport, which is where the eye rests while reading.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav aria-label="Capítulos del brand book">
      <ol className="flex flex-col gap-0.5 border-l border-border">
        {chapters.map(({ id, number, label }) => {
          const current = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "-ml-px flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  current
                    ? "border-primary font-semibold text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="font-mono text-[11px] tabular-nums opacity-60">
                  {number}
                </span>
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
