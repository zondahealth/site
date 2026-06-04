import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { getSupportedLocale, localeCookieName } from '@/app/lib/locale';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

import { PrivacyPolicyContent } from './PrivacyPolicyContent';

const metadataMessages = {
  en: enMessages,
  es: esMessages,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = getSupportedLocale(
    (await cookies()).get(localeCookieName)?.value
  );

  return {
    title: metadataMessages[locale].site.privacyPolicy.metaTitle,
    description: metadataMessages[locale].site.privacyPolicy.metaDescription,
  };
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-32 text-foreground">
      <section className="layout-shell">
        <PrivacyPolicyContent />
      </section>
    </main>
  );
}
