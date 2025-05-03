import '@/styles/global.css'
import '@/styles/custom.css'
import '@/styles/animations.css'

import '@/locales/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
