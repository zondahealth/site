import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { ContactForm } from '@/components/ContactForm';
import { getSupportedLocale, localeCookieName } from '@/lib/locale';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import {
  FeaturePanel,
  FeaturePanelBackgroundStyle,
  FeaturePanelColor,
} from '@/components/panel';
import { BACKGROUNDS } from '@/components/ui/colors';

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
    <div className="min-h-screen bg-background text-foreground">
      <FeaturePanel
        backgroundImageSrc="/assets/shared/bg/bg-platform.png"
        background={BACKGROUNDS.transparent}
        backgroundImageClassName="object-cover"
        contentClassName="flex h-full flex-col items-center justify-center py-20 md:py-42 lg:py-62 "
      >
        <section className="layout-shell rounded-xl">
          <ContactForm />
        </section>
      </FeaturePanel>
    </div>
  );
}
