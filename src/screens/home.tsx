import { Suspense, lazy } from 'react'

const AboutUs = lazy(() => import('@/components/AboutUs'))
const Landing = lazy(() => import('@/components/Landing'))
const OurServices = lazy(() => import('@/components/OurServices'))
const Benefits = lazy(() => import('@/components/Benefits'))

const Home = () => {
  return (
    <main className='col-center gap-0'>
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <AboutUs />
        <OurServices />
        <Benefits />
      </Suspense>
    </main>
  )
}

export default Home
