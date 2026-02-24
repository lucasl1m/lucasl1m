import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'portfolio-lang';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'pt-BR';
const initialLang = savedLang || (browserLang.startsWith('en') ? 'en' : 'pt-BR');

import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
export { STORAGE_KEY };
