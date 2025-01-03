import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale; // Await the Promise to get the actual locale value

  if (!locales.includes(locale as string)) notFound();

  return {
    locale, // Explicitly return the resolved locale
    messages: (await import(`./messages/${locale}.json`)).default, // Use the resolved locale
  };
});
