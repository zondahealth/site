type MissingComponentPlaceholderProps = {
  name: string;
  className?: string;
};

export function MissingComponentPlaceholder({
  name,
  className = "min-h-80",
}: MissingComponentPlaceholderProps) {
  return (
    <section
      aria-label={`${name} pendiente`}
      className={`flex items-center justify-center border-y border-dashed border-foreground/20 bg-muted/30 px-6 py-12 ${className}`}
    >
      <p className="text-center text-sm font-medium text-foreground/50">
        Componente pendiente: {name}
      </p>
    </section>
  );
}
