import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from './en/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: eng },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
});

export default i18n;
