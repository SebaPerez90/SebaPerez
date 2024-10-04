import Loader from '@/components/core/Loader'
import { Suspense, lazy } from 'react'

const AboutUs = lazy(() => import('@/components/home/AboutUs'))
const Landing = lazy(() => import('@/components/home/Landing'))
const OurServices = lazy(() => import('@/components/home/OurServices'))
const Benefits = lazy(() => import('@/components/home/Benefits'))

const Home = () => {
  return (
    <main className='col-center gap-0 dark:bg-dark-deep overflow-hidden'>
      <Suspense fallback={<Loader />}>
        <Landing />
        <AboutUs />
        <OurServices />
        <Benefits />
      </Suspense>
    </main>
  )
}

export default Home
