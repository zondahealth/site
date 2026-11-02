export type Testimonial = {
  id: string;
  title: string;
  image: string;
  href?: string;
  summary?: string;
  /** Route-shaped slugs. A page passes the ones it cares about as `filter`. */
  tags: readonly string[];
};

export const testimonials: readonly Testimonial[] = [
  {
    id: "interdom",
    title: "Interdom transforma su organización y se hace más eficiente",
    href: "/customer-stories/interdom",
    // VALIDAR: fuente métricas Interdom — dato publicado en site-new
    summary: "Internación domiciliaria · −23% costos operativos",
    image: "/assets/home/testimonials/t1.png",
    tags: ["home-health", "fraud-risk-prevention", "revenue-cycle"],
  },
  {
    id: "ams",
    title: "AMS por primera vez tiene control sobre sus finanzas",
    image: "/assets/home/testimonials/t2.png",
    tags: ["revenue-cycle"],
  },
  {
    id: "pami",
    title:
      "Profesionales no pierden tiempo al interactuar con diferentes obras sociales, caso PAMI",
    image: "/assets/home/testimonials/t3.png",
    tags: ["multi-payer-care", "government-public-sector"],
  },
];

/** Stories that share at least one tag. No filter returns every story. */
export function filterTestimonials(filter?: readonly string[]) {
  if (!filter || filter.length === 0) return testimonials;

  const wanted = new Set(filter);
  return testimonials.filter((story) =>
    story.tags.some((tag) => wanted.has(tag)),
  );
}

export function hasTestimonials(filter?: readonly string[]) {
  return filterTestimonials(filter).length > 0;
}
