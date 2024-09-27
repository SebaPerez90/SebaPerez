import { Button } from '@/components/ui/button'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Routes } from '@/routes/paths'
import Loader from '@/components/Loader'

const FaqAcordion = lazy(() => import('@/components/FaqAcordion'))
const QuestionBox = lazy(() => import('@/components/QuestionBox'))

const FrecuentlyAskQuestion = () => {
  return (
    <main className='py-14 col-center gap-20'>
      <header className='relative w-full'>
        <Link
          to={Routes.home}
          className='absolute left-8 top-0'>
          <Button className='tooltip-container'>
          <span className='tooltip'>Volver</span>
            <IoMdArrowRoundBack />
          </Button>
        </Link>
        <h1 className='title text-4xl text-center'>Preguntas frecuentes</h1>
      </header>
      <Suspense fallback={<Loader />}>
        <FaqAcordion />
      </Suspense>
      <hr className='w-[80%]' />
      <Suspense fallback={<Loader />}>
        <QuestionBox />
      </Suspense>
    </main>
  )
}

export default FrecuentlyAskQuestion
