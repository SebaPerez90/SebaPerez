import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '@/locales/en/translation.json'
import esTranslation from '@/locales/es/translation.json'

// Configurar los recursos de idioma
const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
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
