import { Toaster } from 'react-hot-toast'

// import Benefits from '@/components/Benefits'
import Header from '@/components/core/header/index'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import HowWorks from '@/components/HowWorks'
// import Footer from '@/components/core/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main
        id='main-section'
        className='col-center gap-24 dark:bg-dark-deep overflow-hidden'>
        <Hero />
        <AboutMe />
        <Services />
        <HowWorks />
        {/* <Benefits /> */}
      </main>
      {/* <Footer /> */}
      <Toaster />
    </>
  )
}

export default App
