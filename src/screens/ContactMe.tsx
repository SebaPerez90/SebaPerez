import contactme from '@/assets/get_services.webp'
import { lazy, Suspense } from 'react'
import Loader from '@/components/core/Loader'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Routes } from '@/routes/paths'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const ContactMeForm = lazy(() => import('@/components/auth/ContactMeForm'))

const ContactMe = () => {
  const { t } = useTranslation()

  const beforeStyles =
    'relative dark:before:[background:linear-gradient(to_right,#171717,#b06ab3,#a855f7)] before:[background:linear-gradient(to_right,#f3f3f3,#b06ab3,#a855f7)] before:absolute before:right-0 before:top-0 before:w-[60%] before:h-full before:-z-10 z-10 before:opacity-40'

  return (
    <Suspense fallback={<Loader />}>
      <main
        className={`${beforeStyles} min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-20 px-6 bg-ligth-soft dark:bg-dark-deep`}>
        <Link
          to={Routes.home}
          className='left-8 top-4 fixed'>
          <Button className='tooltip-container'>
            <span className='tooltip bg-black z-50 dark:bg-[#dddddd] dark:text-black text-white'>
              Volver
            </span>
            <IoMdArrowRoundBack />
          </Button>
        </Link>
        <div className='-z-10 w-full text-center sm:text-start sm:w-[40em] col-center gap-8 items-start p-6'>
          <div>
            <TextGenerateEffect
              duration={0.5}
              words={t('projectRequestForm.title')}
              className='text-5xl gradient-title pb-2'
            />
            <p className='paragraph text-xl sm:text-lg mt-3'>
              {t('projectRequestForm.description')}
            </p>
          </div>
          <figure className='w-full h-[20em] shadow-purple-500/30 shadow-2xl rounded-lg overflow-hidden'>
            <img
              loading='lazy'
              className='animate-[image-filter_1s_ease-out_forwards] size-full object-cover'
              src={contactme}
            />
          </figure>
        </div>
        <ContactMeForm />
      </main>
    </Suspense>
  )
}

export default ContactMe
