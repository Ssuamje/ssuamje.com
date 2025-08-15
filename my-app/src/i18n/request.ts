import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, type Locale} from './config';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}));