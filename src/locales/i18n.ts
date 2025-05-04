import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importar todos los archivos JSON de traducción
import enLanding from '@/locales/en/landing.json'
import esLanding from '@/locales/es/landing.json'
import enContact from '@/locales/en/contact.json'
import esContact from '@/locales/es/contact.json'
import enToaster from '@/locales/en/toaster.json'
import esToaster from '@/locales/es/toaster.json'
import enFaq from '@/locales/en/faq.json'
import esFaq from '@/locales/es/faq.json'

const resources = {
  en: {
    translation: {
      ...enLanding,
      ...enContact,
      ...enToaster,
      ...enFaq,
    },
  },
  es: {
    translation: {
      ...esLanding,
      ...esContact,
      ...esToaster,
      ...esFaq,
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
