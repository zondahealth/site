"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { SolutionsBox, useCases } from "@/components/layout/SolutionsBox";
import { Button } from "@/components/ui/button/button";
import { useLanguage } from "@/components/LanguageProvider";
import { supportedLocales } from "@/lib/locale";

const navigationItems = [
  { label: "Historias", href: "/customer-stories" },
  { label: "Desarrolladores", href: "/developers" },
] as const;

const navigationItemClassName =
  "inline-flex h-9 items-center justify-center gap-1 rounded-full px-2.5 text-[11px] font-medium text-foreground/80 outline-none transition-[background-color,color] duration-200 hover:bg-white/35 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:px-3.5 sm:text-[13px]";

export function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const navigationRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!solutionsOpen && !mobileOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
        (mobileOpen ? menuButtonRef : solutionsButtonRef).current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, solutionsOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileOpen(false);
      } else {
        setSolutionsOpen(false);
      }
    }

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function closeMenus() {
    setSolutionsOpen(false);
    setMobileOpen(false);
  }

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
          <div className="flex min-w-0 items-center gap-2 sm:gap-5">
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="shrink-0 rounded-full py-0.5 pr-0.5 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Logo
                priority
                className="size-7 sm:size-8"
                variant="mark"
                color="dark-blue"
              />
            </Link>

            <ul className="hidden min-w-0 items-center gap-1 md:flex sm:gap-4">
              <li>
                <button
                  ref={solutionsButtonRef}
                  type="button"
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-box"
                  onClick={() => setSolutionsOpen((open) => !open)}
                  className={`${navigationItemClassName} ${
                    solutionsOpen ? "bg-white/45 text-foreground" : ""
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div
              aria-label="Seleccionar idioma"
              className="flex items-center text-[10px] font-semibold uppercase sm:text-xs"
            >
              {supportedLocales.map((option, index) => (
                <span key={option} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setLocale(option)}
                    aria-pressed={locale === option}
                    className={`rounded-full px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-1.5 uppercase ${
                      locale === option
                        ? "text-foreground"
                        : "text-foreground/45 hover:text-foreground"
                    }`}
                  >
                    {option}
                  </button>
                  {index < supportedLocales.length - 1 ? (
                    <span aria-hidden="true" className="text-foreground/35">
                      |
                    </span>
                  ) : null}
                </span>
              ))}
            </div>

            <Button
              asChild
              variant="black"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="#contacto">Contactar</Link>
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => {
                setMobileOpen((open) => !open);
                setSolutionsOpen(false);
              }}
              className="inline-flex size-9 items-center justify-center rounded-full text-foreground outline-none transition-colors hover:bg-white/35 focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" strokeWidth={2} />
              ) : (
                <Menu className="size-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>

        {solutionsOpen ? (
          <div className="hidden md:block">
            <SolutionsBox onNavigate={closeMenus} />
          </div>
        ) : null}

        {mobileOpen ? (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+0.65rem)] overflow-hidden rounded-[1.35rem] border border-border/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(20,34,61,0.18)] backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col">
              <li>
                <button
                  type="button"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((open) => !open)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Soluciones
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 opacity-60 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {solutionsOpen ? (
                  <ul className="mb-1 ml-1 flex flex-col border-l border-border/70 pl-2">
                    {useCases.map((useCase) => (
                      <li key={useCase.href}>
                        <Link
                          href={useCase.href}
                          onClick={closeMenus}
                          className="flex rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 outline-none hover:bg-muted/70 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {useCase.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="flex rounded-xl px-3 py-3 text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/70 p-2 sm:hidden">
              <Button asChild variant="black" size="sm" className="w-full">
                <Link href="#contacto" onClick={closeMenus}>
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
