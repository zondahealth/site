import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { ContactForm } from '@/app/components/ContactForm';
import { getSupportedLocale, localeCookieName } from '@/app/lib/locale';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

const metadataMessages = {
  en: enMessages,
  es: esMessages,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = getSupportedLocale(
    (await cookies()).get(localeCookieName)?.value
  );

  return {
    title: metadataMessages[locale].site.contact.metaTitle,
    description: metadataMessages[locale].site.contact.metaDescription,
  };
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="layout-shell">
        <ContactForm />
      </section>
    </main>
  );
}
