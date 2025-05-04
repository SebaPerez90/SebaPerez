import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import { useState, Suspense, lazy } from 'react'
import { createContext, Dispatch, SetStateAction } from 'react'
import Loader from './components/core/Loader'

const Header = lazy(() => import('@/components/core/header/index'))
const Hero = lazy(() => import('@/components/Hero'))
const AboutMe = lazy(() => import('@/components/AboutMe'))
const Services = lazy(() => import('@/components/Services'))
const HowWorks = lazy(() => import('@/components/HowWorks'))
const Benefits = lazy(() => import('@/components/Benefits'))
const ContactMeForm = lazy(() => import('@/components/forms/ContactMeForm'))
const FAQContainer = lazy(() => import('@/components/FAQContainer'))
const Slider = lazy(() => import('@/components/Slider'))
const Footer = lazy(() => import('@/components/core/Footer'))

export const Context = createContext<{
  subject: string
  setSubject: Dispatch<SetStateAction<string>>
}>({
  subject: '',
  setSubject: () => '',
})

const App = () => {
  const { t } = useTranslation()
  const [subject, setSubject] = useState('')

  return (
    <Context.Provider value={{ subject, setSubject }}>
      <Suspense fallback={<Loader />}>
        <Header />
        <main
          id='main-section'
          className='col-center gap-24 dark:bg-dark-deep overflow-hidden'>
          <Hero />
          <AboutMe />
          <Services />
          <HowWorks />
          <Benefits />
          <FAQContainer />
          <Slider />
          <section className='flex flex-col gap-24 justify-center items-start sm:items-center mt-32 w-[80%] sm:w-[28em] '>
            <h1 className='text-lg font-semibold w-[95%] sm:w-max text-foreground'>
              {t('formInputs.header.text1')}
              <br /> {t('formInputs.header.text2')}
            </h1>
            <ContactMeForm />
          </section>
        </main>
        <Footer />
        <Toaster />
      </Suspense>
    </Context.Provider>
  )
}

export default App
