import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import Header from '@/components/core/header/index'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import HowWorks from '@/components/HowWorks'
import Benefits from '@/components/Benefits'
import ContactMeForm from '@/components/forms/ContactMeForm'
import Slider from '@/components/Slider'
import FAQContainer from '@/components/FAQContainer'

import { useState } from 'react'
import { createContext, Dispatch, SetStateAction } from 'react'

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
      <Header />
      <main
        id='main-section'
        className='col-center gap-24 dark:bg-dark-deep overflow-hidden'>
        <Hero />
        <AboutMe />
        <Services />
        <HowWorks />
        <Slider />
        <Benefits />
        <FAQContainer />

        <section className='flex flex-col gap-24 justify-center items-start sm:items-center mt-32 w-[80%] sm:w-[28em] '>
          <h1 className='text-lg font-semibold w-[95%] sm:w-max'>
            {t('formInputs.header.text1')}
            <br /> {t('formInputs.header.text2')}
          </h1>
          <ContactMeForm />
        </section>
      </main>
      <footer className='flex flex-col items-center pt-20'>
        <hr className='h-[2px] my-4 bg-gray-300 w-[70%]' />
        <span className='w-max font-medium text-sm my-2'>
          © 2025 Soluciones tecnológicas | Sebastian Perez
        </span>
      </footer>
      <Toaster />
    </Context.Provider>
  )
}

export default App
