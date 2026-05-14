import type { Metadata } from 'next';

import { ContactForm } from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Zonda Health',
  description:
    'Contactá al equipo de Zonda Health para conversar sobre operación, interoperabilidad e infraestructura digital para salud.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="layout-shell">
        <ContactForm />
      </section>
    </main>
  );
}
