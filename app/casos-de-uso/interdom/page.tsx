import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { InterdomCaseStudy } from '@/components/case-studies/InterdomCaseStudy';
import { getSupportedLocale, localeCookieName } from '@/lib/locale';
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
    title: metadataMessages[locale].site.caseStudies.detail.interdom.metaTitle,
    description:
      metadataMessages[locale].site.caseStudies.detail.interdom.metaDescription,
  };
}

export default function InterdomPage() {
  return <InterdomCaseStudy />;
}
