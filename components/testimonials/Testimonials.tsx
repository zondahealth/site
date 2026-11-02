"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Pending } from "@/components/ui/pending/Pending";
import { Story, StoryCTA, StoryMedia, StoryTitle } from "@/components/ui/story/story";
import { cn } from "@/components/ui/utils";
import { isLiveRoute } from "@/lib/navigation";

import { filterTestimonials } from "./stories";

/** Two cards plus the gap fill the content width, so both stay complete. */
const cardClassName = "flex w-[calc((100%-1.5rem)/2)] shrink-0 snap-start";

type TestimonialsProps = {
  /** Tags to match. Empty or omitted shows every case study. */
  filter?: readonly string[];
  className?: string;
};

export function Testimonials({ filter, className }: TestimonialsProps) {
  const filterKey = filter?.join("\0") ?? "";
  const items = useMemo(
    () => filterTestimonials(filterKey ? filterKey.split("\0") : undefined),
    [filterKey],
  );

  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(items.length > 2);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 2);
      setCanNext(el.scrollLeft < max - 2);
    };

    const blockGestureScroll = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    el.addEventListener("wheel", blockGestureScroll, { passive: false });
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      el.removeEventListener("wheel", blockGestureScroll);
      observer.disconnect();
    };
  }, [filterKey]);

  if (items.length === 0) return null;

  const showControls = canPrev || canNext;

  function scrollToCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = [
      ...el.querySelectorAll<HTMLElement>("[data-slot='story-item']"),
    ];
    const origin = el.getBoundingClientRect().left;
    const positions = cards.map(
      (card) => card.getBoundingClientRect().left - origin + el.scrollLeft,
    );
    const current = el.scrollLeft;
    const target =
      direction === 1
        ? (positions.find((position) => position > current + 2) ??
          positions[positions.length - 1])
        : ([...positions].reverse().find((position) => position < current - 2) ??
          0);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    el.scrollTo({
      left: target,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div data-slot="testimonials" className={className}>
      {showControls ? (
        <div className="mb-4 flex justify-end gap-2">
          <CarouselButton
            label="Historia anterior"
            disabled={!canPrev}
            onClick={() => scrollToCard(-1)}
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2} />
          </CarouselButton>
          <CarouselButton
            label="Historia siguiente"
            disabled={!canNext}
            onClick={() => scrollToCard(1)}
          >
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
          </CarouselButton>
        </div>
      ) : null}

      <ul
        ref={scrollerRef}
        aria-label="Historias de clientes"
        className="flex touch-pan-y gap-6 overflow-hidden"
      >
        {items.map((story) => {
          const href =
            story.href && isLiveRoute(story.href) ? story.href : undefined;

          return (
            <Story
              key={story.id}
              href={href}
              itemClassName={cardClassName}
              className="h-full w-full"
            >
              <StoryMedia aria-hidden="true">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                  sizes="50vw"
                />
              </StoryMedia>
              <StoryTitle>{story.title}</StoryTitle>
              {story.summary ? (
                <p className="text-sm text-muted-foreground">{story.summary}</p>
              ) : null}
              {href ? (
                <StoryCTA className="mt-auto">Leer la historia</StoryCTA>
              ) : (
                <span className="mt-auto self-start text-sm">
                  <Pending>Historia en preparación</Pending>
                </span>
              )}
            </Story>
          );
        })}
      </ul>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-foreground/80 text-foreground transition-colors",
        "hover:border-primary hover:bg-primary hover:text-primary-foreground",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      {children}
    </button>
  );
}
