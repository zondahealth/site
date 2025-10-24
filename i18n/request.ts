import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if locale is undefined
  const validLocale = locale || routing.defaultLocale;

  return {
    messages: (await import(`../messages/${validLocale}.json`)).default,
    locale: validLocale,
  };
});
