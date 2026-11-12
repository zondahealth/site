"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/components/ui/utils";

type CopyValueProps = {
  /** What lands on the clipboard. */
  value: string;
  /** Visible text. Defaults to `value`. */
  label?: string;
  className?: string;
};

export function CopyValue({ value, label, className }: CopyValueProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure origin, denied permission); the
      // value stays visible and selectable, so there is nothing to recover.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar ${value}`}
      className={cn(
        "group/copy inline-flex items-center gap-1.5 rounded-md font-mono text-xs outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span>{copied ? "Copiado" : (label ?? value)}</span>
      {copied ? (
        <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
      ) : (
        <Copy
          aria-hidden="true"
          className="size-3.5 opacity-50 transition-opacity group-hover/copy:opacity-100"
        />
      )}
      <span aria-live="polite" className="sr-only">
        {copied ? `${value} copiado` : ""}
      </span>
    </button>
  );
}
