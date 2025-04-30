import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Routes } from '@/routes/paths'
import Loader from '@/components/core/Loader'
import FaqAccordion from '@/components/draft/FaqAcordion'
import QuestionBox from '@/components/draft/QuestionBox'

const FrecuentlyAskQuestion = () => {
  return (
    <Suspense fallback={<Loader />}>
      <main className='py-14 col-center gap-16'>
        <header className='relative w-full'>
          <Link
            to={Routes.home}
            className='fixed left-8 top-4 z-50'>
            <Button className='tooltip-container'>
              <span className='tooltip bg-black dark:bg-[#dddddd] dark:text-black text-white'>
                Volver
              </span>
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
