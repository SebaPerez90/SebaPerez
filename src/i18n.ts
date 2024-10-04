import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importar todos los archivos JSON de traducción
import enLanding from '@/locales/en/landing.json'
import esLanding from '@/locales/es/landing.json'
import enPricing from '@/locales/en/pricing.json'
import esPricing from '@/locales/es/pricing.json'
import enContact from '@/locales/en/contact.json'
import esContact from '@/locales/es/contact.json'
import enToaster from '@/locales/en/toaster.json'
import esToaster from '@/locales/es/toaster.json'

// Configurar los recursos de idioma
const resources = {
  en: {
    translation: {
      ...enLanding, // Expande el objeto de landing
      ...enPricing, // Expande el objeto de pricing
      ...enContact, // Expande el objeto de pricing
      ...enToaster, 
    },
  },
  es: {
    translation: {
      ...esLanding, // Expande el objeto de landing
      ...esPricing, // Expande el objeto de pricing
      ...esContact, // Expande el objeto de pricing
      ...esToaster,
    },
  },
}

// Inicializar i18n
i18n
  .use(initReactI18next) // Integración con react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en', // Idioma predeterminado basado en localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  })

export default i18n
