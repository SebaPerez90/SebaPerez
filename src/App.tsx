import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import Header from '@/components/core/header/index'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import HowWorks from '@/components/HowWorks'
import ContactMeForm from '@/components/forms/ContactMeForm'
import Footer from '@/components/core/Footer'

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
        <div className='flex flex-col gap-24 justify-center items-start sm:items-center mt-32 w-[80%] sm:w-[28em] '>
          <h1 className='text-lg font-semibold w-[95%] sm:w-max'>
            {t('formInputs.header.text1')}
            <br /> {t('formInputs.header.text2')}
          </h1>
          <ContactMeForm />
        </div>
      </main>
      <Footer />
      <Toaster />
    </Context.Provider>
  )
}

export default App
