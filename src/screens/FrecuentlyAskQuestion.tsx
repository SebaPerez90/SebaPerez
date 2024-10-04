import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Routes } from '@/routes/paths'
import Loader from '@/components/core/Loader'
import FaqAccordion from '@/components/FaqAcordion'
import QuestionBox from '@/components/QuestionBox'

const FrecuentlyAskQuestion = () => {
  return (
    <Suspense fallback={<Loader />}>
      <main className='py-14 col-center gap-16'>
        <header className='relative w-full'>
          <Link
            to={Routes.home}
            className='absolute left-8 top-0 max-[500px]:-top-7'>
            <Button className='tooltip-container'>
              <span className='tooltip'>Volver</span>
              <IoMdArrowRoundBack />
            </Button>
          </Link>
          <h1 className='title text-4xl text-center max-[500px]:translate-y-12'>
            Preguntas frecuentes
          </h1>
        </header>
        <FaqAccordion />
        <hr className='w-[80%]' />
        <QuestionBox />
      </main>
    </Suspense>
  )
}

export default FrecuentlyAskQuestion
