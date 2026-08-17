"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { SolutionsBox } from "@/components/layout/SolutionsBox";
import { Button } from "@/components/ui/button/button";

const navigationItems = [
  { label: "Desarrolladores", href: "#api" },
  { label: "Recursos", href: "#recursos" },
] as const;

const navigationItemClassName =
  "inline-flex h-9 items-center justify-center gap-1 rounded-full px-2.5 text-[11px] font-medium text-foreground/80 outline-none transition-[background-color,color,box-shadow] duration-200 hover:bg-white/80 hover:text-foreground hover:shadow-[0_1px_8px_rgba(21,27,43,0.08)] focus-visible:ring-2 focus-visible:ring-ring max-[430px]:px-1.5 max-[430px]:text-[9px] sm:px-3.5 sm:text-[13px]";

export function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!solutionsOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        solutionsButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [solutionsOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        ref={navigationRef}
        className="pointer-events-auto relative w-full max-w-5xl"
      >
        <nav
          aria-label="Navegación principal"
          className="flex w-full items-center justify-between gap-2 rounded-full border border-white/55 bg-white/65 px-2.5 py-2 shadow-[0_8px_30px_rgba(21,27,43,0.09)] backdrop-blur-xl sm:gap-4 sm:px-4"
        >
          <div className="flex min-w-0 items-center gap-1 sm:gap-3">
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="shrink-0 rounded-full py-0.5 pr-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring max-[480px]:hidden"
            >
              <Logo
                priority
                className="size-7 sm:size-8"
                variant="mark"
                color="dark-blue"
              />
            </Link>

            <ul className="flex min-w-0 items-center sm:gap-1">
              <li>
                <button
                  ref={solutionsButtonRef}
                  type="button"
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-box"
                  onClick={() => setSolutionsOpen((open) => !open)}
                  className={`${navigationItemClassName} ${
                    solutionsOpen
                      ? "bg-white text-foreground shadow-[0_1px_8px_rgba(21,27,43,0.08)]"
                      : ""
                  }`}
                >
                  Soluciones
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-3.5 opacity-60 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
              </li>

              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={navigationItemClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            variant="black"
            size="sm"
            className="shrink-0 max-[430px]:scale-[0.82]"
          >
            <Link href="#contacto">Contactar</Link>
          </Button>
        </nav>

        {solutionsOpen ? (
          <SolutionsBox onNavigate={() => setSolutionsOpen(false)} />
        ) : null}
      </div>
    </header>
  );
}
