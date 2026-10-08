import { MissingComponentPlaceholder } from "@/components/MissingComponentPlaceholder";

export const metadata = {
  title: "Contacto | zonda",
  description: "Ponete en contacto con zonda.",
};

export default function ContactPage() {
  return (
    <main className="bg-background pb-16 pt-24 text-foreground">
      <MissingComponentPlaceholder name="Contact form" className="min-h-128" />
    </main>
  );
}
