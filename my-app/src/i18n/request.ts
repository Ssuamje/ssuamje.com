import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, type Locale} from './config';

export default getRequestConfig(async ({locale}) => {
  const currentLocale = locale || defaultLocale;
  
  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});