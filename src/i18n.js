import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './i18n/en.json'
import sv from './i18n/sv.json'
import pt from './i18n/pt.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sv: { translation: sv },
      pt: { translation: pt }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
