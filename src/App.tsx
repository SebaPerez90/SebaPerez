import { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

// import Header from '@/components/core/header/index'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import HowWorks from '@/components/HowWorks'
import ContactMeForm from '@/components/forms/ContactMeForm'

const App = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* <Header /> */}
      <main
        id='main-section'
        className='col-center gap-24 dark:bg-dark-deep overflow-hidden'>
        <Hero />
        <AboutMe />
        <Services />
        <HowWorks />
        <div className='flex flex-col gap-24 justify-center items-center  mt-32'>
          <h1 className='text-lg font-semibold w-max text-centera'>
            {t('formInputs.header.text1')}
            <br /> {t('formInputs.header.text2')}
          </h1>
          <ContactMeForm />
        </div>
      </main>
      <Toaster />
    </>
  )
}

export default App
