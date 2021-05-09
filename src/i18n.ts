import frTranslations from '@/assets/json/i18n/fr.json';
import { createI18n } from 'vue-i18n';

const messages = {
  fr: frTranslations
};

export const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'fr', // set fallback locale
  messages
});
