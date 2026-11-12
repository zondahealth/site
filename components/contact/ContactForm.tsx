"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { cn } from "@/components/ui/utils";

type Status = "idle" | "sending" | "sent" | "error";

/** `light` on white cards and regular pages, `dark` straight on skies and deep backgrounds. */
type ContactFormTone = "light" | "dark";

const TOPICS = [
  "Quiero ver una demo",
  "Integrar mis sistemas",
  "Soy de la prensa",
  "Otra consulta",
];

const tones = {
  light: {
    title: "text-foreground",
    box: "border-foreground/25 bg-card hover:border-foreground/50 focus-within:border-primary focus-within:ring-secondary/20",
    label: "text-muted-foreground",
    input: "text-foreground placeholder:text-foreground/35",
    option: "",
    muted: "text-muted-foreground",
    link: "text-foreground",
    checkbox: "accent-primary",
    error: "text-red-700",
  },
  dark: {
    title: "text-white",
    box: "border-white/25 bg-white/[0.06] hover:border-white/45 focus-within:border-white focus-within:ring-white/15",
    label: "text-white/60",
    input: "text-white placeholder:text-white/35",
    option: "[&>option]:text-[#151b2b]",
    muted: "text-white/65",
    link: "text-white",
    checkbox: "accent-[#eaea00]",
    error: "text-[#ffb4a8]",
  },
} satisfies Record<ContactFormTone, Record<string, string>>;

/** A boxed field whose label sits inside the box, above the value. */
function Field({
  label,
  optional = false,
  tone,
  className,
  children,
}: {
  label: string;
  optional?: boolean;
  tone: ContactFormTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "relative block rounded-xl border px-4 pb-2.5 pt-2 transition-[border-color,box-shadow] duration-200 focus-within:ring-4 has-[:disabled]:opacity-60",
        tones[tone].box,
        className,
      )}
    >
      <span className={cn("block text-xs font-medium", tones[tone].label)}>
        {label}
        {optional ? <span className="opacity-70"> (opcional)</span> : null}
      </span>
      {children}
    </label>
  );
}

type ContactFormProps = {
  tone?: ContactFormTone;
  /** Heading shown above the fields. Pass `null` to hide it. */
  title?: React.ReactNode;
  className?: string;
};

export function ContactForm({
  tone = "light",
  title = "Contanos qué necesitás",
  className,
}: ContactFormProps) {
  const [status, setStatus] = React.useState<Status>("idle");
  const sending = status === "sending";
  const t = tones[tone];
  const inputClass = cn(
    "mt-0.5 block w-full border-0 bg-transparent p-0 text-base outline-none",
    t.input,
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          organization: data.get("organization"),
          topic: data.get("topic"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
          privacyAccepted: data.get("privacyAccepted") === "on",
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className={cn("flex min-h-[26rem] flex-col items-start justify-center", className)}
      >
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check aria-hidden="true" className="size-6" />
        </span>
        <h2
          className={cn(
            "mt-7 font-display text-3xl font-semibold tracking-[-0.035em]",
            t.title,
          )}
        >
          ¡Listo! Recibimos tu mensaje.
        </h2>
        <p className={cn("mt-3 max-w-sm leading-relaxed", t.muted)}>
          Alguien del equipo te va a responder a la brevedad.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={cn(
            "mt-8 rounded-md text-sm font-semibold underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
            t.link,
          )}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {title ? (
        <h2
          className={cn(
            "mb-8 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl",
            t.title,
          )}
        >
          {title}
        </h2>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" tone={tone}>
          <input
            name="firstName"
            type="text"
            required
            maxLength={100}
            autoComplete="given-name"
            disabled={sending}
            className={inputClass}
          />
        </Field>
        <Field label="Apellido" tone={tone}>
          <input
            name="lastName"
            type="text"
            required
            maxLength={100}
            autoComplete="family-name"
            disabled={sending}
            className={inputClass}
          />
        </Field>
        <Field label="Email de trabajo" tone={tone}>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="nombre@organizacion.com"
            disabled={sending}
            className={inputClass}
          />
        </Field>
        <Field label="Organización" tone={tone}>
          <input
            name="organization"
            type="text"
            required
            maxLength={200}
            autoComplete="organization"
            disabled={sending}
            className={inputClass}
          />
        </Field>
        <Field label="Motivo" tone={tone}>
          <select
            name="topic"
            required
            defaultValue=""
            disabled={sending}
            className={cn(inputClass, "cursor-pointer appearance-none pr-8", t.option)}
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className={cn("pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2", t.label)}
          />
        </Field>
        <Field label="Teléfono" optional tone={tone}>
          <input
            name="phone"
            type="tel"
            maxLength={50}
            autoComplete="tel"
            disabled={sending}
            className={inputClass}
          />
        </Field>
        <Field label="Mensaje" tone={tone} className="sm:col-span-2">
          <textarea
            name="message"
            required
            rows={3}
            maxLength={5000}
            placeholder="¿Qué datos querés conectar? ¿Qué querés resolver?"
            disabled={sending}
            className={cn(inputClass, "min-h-20 resize-none")}
          />
        </Field>
      </div>

      {/* Honeypot: oculto para personas, tentador para bots. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Sitio web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={cn("mt-5 flex items-start gap-3 text-sm leading-6", t.muted)}>
        <input
          name="privacyAccepted"
          type="checkbox"
          required
          disabled={sending}
          className={cn("mt-1 size-4 shrink-0", t.checkbox)}
        />
        <span>
          Leí y acepto la{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            className={cn("font-medium underline underline-offset-4", t.link)}
          >
            política de privacidad de Zonda
          </Link>
          .
        </span>
      </label>

      <Button type="submit" variant="primary" disabled={sending} className="mt-7">
        {sending ? (
          <>
            Enviando
            <LoaderCircle aria-hidden="true" className="animate-spin" />
          </>
        ) : (
          <>
            Hablar con el equipo
            <ArrowRight aria-hidden="true" />
          </>
        )}
      </Button>

      {status === "error" ? (
        <p role="alert" className={cn("mt-5 text-sm font-medium", t.error)}>
          No pudimos enviar tu mensaje. Probá de nuevo o escribinos a{" "}
          <a href="mailto:support@zondahealth.com" className="underline underline-offset-4">
            support@zondahealth.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

export type { ContactFormProps, ContactFormTone };
