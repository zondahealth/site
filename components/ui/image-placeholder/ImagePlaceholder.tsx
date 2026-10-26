import { cn } from "@/components/ui/utils";

type ImagePlaceholderProps = {
  /** Ancho final del asset en px (define la relación de aspecto). */
  width: number;
  /** Alto final del asset en px. */
  height: number;
  /** Descripción de la imagen a generar (también se usa como aria-label). */
  label: string;
  /** Ocupa el contenedor padre (para StoryMedia/CardMedia que ya fijan el aspecto). */
  fill?: boolean;
  /** "dark" para usar sobre banners oscuros (Banner variant="dark", fondos #071a38). */
  tone?: "light" | "dark";
  className?: string;
};

export function ImagePlaceholder({
  width,
  height,
  label,
  fill = false,
  tone = "light",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Imagen pendiente (${width}×${height}): ${label}`}
      data-slot="image-placeholder"
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[inherit] border border-dashed text-center",
        tone === "dark"
          ? "border-white/25 bg-white/[0.04] text-white/65"
          : "border-foreground/20 bg-muted/60 text-muted-foreground",
        fill ? "absolute inset-0 h-full w-full" : "mx-auto w-full",
        className,
      )}
      style={fill ? undefined : { aspectRatio: `${width} / ${height}`, maxWidth: width }}
    >
      <div className="flex max-w-[82%] flex-col items-center gap-2 p-4">
        <span
          className={cn(
            "font-mono text-xs font-semibold tracking-wide sm:text-sm",
            tone === "dark" ? "text-white/80" : "text-foreground/60",
          )}
        >
          {width}×{height}
        </span>
        <span className="line-clamp-5 text-[11px] leading-5 sm:text-xs">{label}</span>
      </div>
    </div>
  );
}
