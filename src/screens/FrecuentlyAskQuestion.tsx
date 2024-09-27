import { Button } from '@/components/ui/button'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Routes } from '@/routes/paths'

const FaqAcordion = lazy(() => import('@/components/FaqAcordion'))
const QuestionBox = lazy(() => import('@/components/QuestionBox'))

const FrecuentlyAskQuestion = () => {
  return (
    <main className='py-14 col-center gap-20'>
      <header className='relative w-full'>
        <Link
          to={Routes.home}
          className='absolute left-6 top-0'>
          <Button>
            <IoMdArrowRoundBack />
          </Button>
        </Link>
        <h1 className='title text-3xl text-center'>Preguntas frecuentes</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <FaqAcordion />
      </Suspense>
      <hr className='w-[80%]' />
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionBox />
      </Suspense>
    </main>
  )
}

export default FrecuentlyAskQuestion
