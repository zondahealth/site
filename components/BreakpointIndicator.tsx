/**
 * Dev-only overlay pinned to the top of the viewport showing the current
 * Tailwind breakpoint (base, sm, md, lg, xl, 2xl). Pure CSS — each label is
 * shown/hidden with the same responsive utilities as the rest of the app,
 * so it always matches what's actually active.
 */
function BreakpointIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[9999] flex justify-center"
    >
      <span className="mt-2 rounded-full bg-black px-3 py-1 font-mono text-xs font-semibold text-white shadow-lg">
        <span className="sm:hidden">base</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline">2xl</span>
      </span>
    </div>
  );
}

export { BreakpointIndicator };
