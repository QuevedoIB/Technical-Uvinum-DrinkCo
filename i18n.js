import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './src/public/locales/es.json';

const resources = {
  es: { translation: translationES },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'es',
  keySeparator: '.',
  interpolation: { escapeValue: false },
});

export default i18n;
