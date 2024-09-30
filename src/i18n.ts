import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLanding from '@/locales/en/landing.json'
import esLanding from '@/locales/es/landing.json'
import enPricing from '@/locales/en/pricing.json'
import esPricing from '@/locales/es/pricing.json'

// Configurar los recursos de idioma
const resources = {
  en: { translation: enLanding, enPricing },
  es: { translation: esLanding, esPricing },
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
// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// // import enLanding from '@/locales/en/landing.json'
// // import esLanding from '@/locales/es/landing.json'

// // Configurar los recursos de idioma
// // const resources = {
// //   en: {
// //     translation: {
// //       landing: enLanding,
// //     },
// //   },
// //   es: {
// //     translation: {
// //       landing: esLanding,
// //     },
// //   },
// // }

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       es: {
//         translation: {
//           landing: await import('@/locales/es/landing.json'),
//         },
//       },
//       en: {
//         translation: {
//           landing: await import('@/locales/en/landing.json'),
//         },
//       },
//     },
//     lng: localStorage.getItem('lang') || 'en',
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   })

// export default i18n
