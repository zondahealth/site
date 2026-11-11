"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/layout/Logo";
import { SolutionsBox } from "@/components/layout/SolutionsBox";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button/button";
import { Pending } from "@/components/ui/pending/Pending";
import { cn } from "@/components/ui/utils";
import { englishLocaleEnabled, supportedLocales } from "@/lib/locale";
import {
  LOGIN_URL,
  industryGroups,
  isLiveRoute,
  resourceLinks,
  useCaseGroups,
  type NavGroup,
  type NavLink,
} from "@/lib/navigation";

const navigationItemClassName =
  "inline-flex h-9 items-center justify-center gap-1 whitespace-nowrap rounded-full px-2.5 text-[11px] font-medium text-foreground/80 outline-none transition-[background-color,color] duration-200 hover:bg-white/35 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:px-3.5 sm:text-[13px]";

const solutionTabs: { id: string; label: string; groups: NavGroup[] }[] = [
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

function MobileSolutionLink({
  item,
  onNavigate,
}: {
  item: NavLink;
  onNavigate: () => void;
}) {
  if (isLiveRoute(item.href)) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 outline-none hover:bg-muted/70 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          {item.title}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex flex-wrap items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground/50">
      {item.title}
      <span className="text-[10px]">
        <Pending>Próximamente</Pending>
      </span>
    </li>
  );
}

const showPricing = isLiveRoute("/pricing");
const showDevelopers = isLiveRoute("/developers");

function ResourceLink({
  item,
  onNavigate,
}: {
  item: NavLink;
  onNavigate: () => void;
}) {
  const Icon = item.icon;
  const live = isLiveRoute(item.href);

  const body = (
    <>
      <span
        className={`relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e2ebf7] bg-[#f5f9ff] text-[#1c3554] ${
          live
            ? "transition-colors duration-200 group-hover:border-transparent group-hover:text-white"
            : "opacity-60"
        }`}
      >
        {live ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,#2f7dff_0%,#8fd0ff_100%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        ) : null}
        {Icon ? (
          <Icon
            aria-hidden="true"
            className="relative size-4"
            strokeWidth={1.6}
          />
        ) : null}
      </span>
      <span className="flex min-w-0 flex-col items-start gap-1">
        <span
          className={`text-[13px] font-medium leading-snug ${
            live ? "text-[#1a2a3d]" : "text-[#1a2a3d]/60"
          }`}
        >
          {item.title}
        </span>
        {live ? null : (
          <span className="text-[10px] leading-none">
            <Pending>Próximamente</Pending>
          </span>
        )}
      </span>
    </>
  );

  if (!live) {
    return (
      <li className="flex items-center gap-3 rounded-xl px-2.5 py-2">
        {body}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="group flex items-center gap-3 rounded-xl px-2.5 py-2 outline-none hover:bg-[#f5f9ff] focus-visible:ring-2 focus-visible:ring-ring"
      >
        {body}
      </Link>
    </li>
  );
}

export function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionTab, setMobileSolutionTab] = useState<string | null>(
    solutionTabs[0]?.id ?? null,
  );
  const { locale, setLocale } = useLanguage();
  const [resourcesLeft, setResourcesLeft] = useState(0);
  const navigationRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const resourcesButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!solutionsOpen && !resourcesOpen && !mobileOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setSolutionsOpen(false);
        setResourcesOpen(false);
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setSolutionsOpen(false);
      setResourcesOpen(false);
      setMobileOpen(false);
      if (mobileOpen) {
        menuButtonRef.current?.focus();
      } else if (resourcesOpen) {
        resourcesButtonRef.current?.focus();
      } else {
        solutionsButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, resourcesOpen, solutionsOpen]);

  useEffect(() => {
    if (!resourcesOpen) return;

    function placeMenu() {
      const button = resourcesButtonRef.current;
      const container = navigationRef.current;
      if (!button || !container) return;
      setResourcesLeft(
        button.getBoundingClientRect().left -
          container.getBoundingClientRect().left,
      );
    }

    placeMenu();
    window.addEventListener("resize", placeMenu);
    return () => window.removeEventListener("resize", placeMenu);
  }, [resourcesOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileOpen(false);
      } else {
        setSolutionsOpen(false);
        setResourcesOpen(false);
      }
    }

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function closeMenus() {
    setSolutionsOpen(false);
    setResourcesOpen(false);
    setMobileOpen(false);
  }

  function toggleSolutions() {
    setSolutionsOpen((open) => !open);
    setResourcesOpen(false);
  }

  function toggleResources() {
    setResourcesOpen((open) => !open);
    setSolutionsOpen(false);
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        ref={navigationRef}
        className="pointer-events-auto relative w-full max-w-7xl"
      >
        <nav
          aria-label="Navegación principal"
          className="flex w-full items-center justify-between gap-2 rounded-full border border-white/55 bg-white/65 px-2.5 py-2 shadow-[0_8px_30px_rgba(21,27,43,0.09)] backdrop-blur-xl sm:gap-4 sm:px-4"
        >
          <div className="flex min-w-0 items-center gap-2 sm:gap-5">
            <Link
              href="/"
              aria-label="Ir al inicio"
              onClick={closeMenus}
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
                  onClick={toggleSolutions}
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

              {showDevelopers ? (
                <li>
                  <Link
                    href="/developers"
                    onClick={closeMenus}
                    className={navigationItemClassName}
                  >
                    Desarrolladores
                  </Link>
                </li>
              ) : null}

              <li>
                <button
                  ref={resourcesButtonRef}
                  type="button"
                  aria-expanded={resourcesOpen}
                  aria-controls="resources-menu"
                  onClick={toggleResources}
                  className={`${navigationItemClassName} ${
                    resourcesOpen ? "bg-white/45 text-foreground" : ""
                  }`}
                >
                  Recursos
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-3.5 opacity-60 transition-transform duration-200 ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
              </li>

              {showPricing ? (
                <li>
                  <Link
                    href="/pricing"
                    onClick={closeMenus}
                    className={navigationItemClassName}
                  >
                    Precios
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {englishLocaleEnabled ? (
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
                      className={`rounded-full px-1 py-1 uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-1.5 ${
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
            ) : null}

            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(navigationItemClassName, "hidden md:inline-flex")}
            >
              Iniciar sesión
            </a>

            <Button
              asChild
              variant="black"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link href="/contact" onClick={closeMenus}>
                Contactar
              </Link>
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
                setResourcesOpen(false);
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

        {resourcesOpen ? (
          <div
            id="resources-menu"
            style={{ left: resourcesLeft }}
            className="absolute top-[calc(100%+0.75rem)] z-50 hidden w-[280px] rounded-2xl border border-[#e6eef8] bg-white p-1.5 shadow-[0_18px_50px_rgba(20,34,61,0.16)] md:block"
          >
            <ul className="flex flex-col">
              {resourceLinks.map((item) => (
                <ResourceLink
                  key={item.href}
                  item={item}
                  onNavigate={closeMenus}
                />
              ))}
            </ul>
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
                  onClick={toggleSolutions}
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
                  <div className="mb-1 ml-1 flex flex-col border-l border-border/70 pl-2">
                    {solutionTabs.map((tab) => {
                      const open = mobileSolutionTab === tab.id;

                      return (
                        <div key={tab.id}>
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() =>
                              setMobileSolutionTab((current) =>
                                current === tab.id ? null : tab.id,
                              )
                            }
                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-foreground/80 outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {tab.label}
                            <ChevronDown
                              aria-hidden="true"
                              className={`size-3.5 opacity-60 transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                              }`}
                              strokeWidth={2}
                            />
                          </button>
                          {open ? (
                            <div className="mb-1 ml-2 flex flex-col gap-3 border-l border-border/70 py-1 pl-2">
                              {tab.id === "use-cases" ? (
                                <ul>
                                  {tab.groups.flatMap((group) =>
                                    group.items.map((item) => (
                                      <MobileSolutionLink
                                        key={item.href}
                                        item={item}
                                        onNavigate={closeMenus}
                                      />
                                    )),
                                  )}
                                </ul>
                              ) : (
                                tab.groups.map((group) => (
                                  <div key={group.title}>
                                    <p className="px-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                      {group.title}
                                    </p>
                                    <ul>
                                      {group.items.map((item) => (
                                        <MobileSolutionLink
                                          key={item.href}
                                          item={item}
                                          onNavigate={closeMenus}
                                        />
                                      ))}
                                    </ul>
                                  </div>
                                ))
                              )}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </li>

              {showDevelopers ? (
                <li>
                  <Link
                    href="/developers"
                    onClick={closeMenus}
                    className="flex rounded-xl px-3 py-3 text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Desarrolladores
                  </Link>
                </li>
              ) : null}

              <li>
                <button
                  type="button"
                  aria-expanded={resourcesOpen}
                  onClick={toggleResources}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Recursos
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 opacity-60 transition-transform duration-200 ${
                      resourcesOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {resourcesOpen ? (
                  <ul className="mb-1 ml-1 border-l border-border/70 pl-2">
                    {resourceLinks.map((item) => (
                      <MobileSolutionLink
                        key={item.href}
                        item={item}
                        onNavigate={closeMenus}
                      />
                    ))}
                  </ul>
                ) : null}
              </li>

              {showPricing ? (
                <li>
                  <Link
                    href="/pricing"
                    onClick={closeMenus}
                    className="flex rounded-xl px-3 py-3 text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Precios
                  </Link>
                </li>
              ) : null}

              <li>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="flex rounded-xl px-3 py-3 text-sm font-semibold text-foreground outline-none hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Iniciar sesión
                </a>
              </li>
            </ul>

            <div className="border-t border-border/70 p-2 sm:hidden">
              <Button asChild variant="black" size="sm" className="w-full">
                <Link href="/contact" onClick={closeMenus}>
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
