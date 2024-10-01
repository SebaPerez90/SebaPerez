import contactme from '@/assets/get_services.webp'
import { lazy, Suspense } from 'react'
import Loader from '@/components/Loader'
import { useTranslation } from 'react-i18next'
const ContactMeForm = lazy(() => import('@/components/ContactMeForm'))

const ContactMe = () => {
  const { t } = useTranslation()
  const beforeStyles =
    ' relative   before:[background:linear-gradient(to_right,#f3f3f3,#b06ab3,#a855f7)] before:absolute before:right-0 before:top-0 before:w-[60%] before:h-full before:-z-10 z-10 before:opacity-40'

  return (
    <main
      className={`${beforeStyles} min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-14 px-6 bg-ligth-soft `}>
      <div className='w-[40em] col-center gap-8 items-start p-6'>
        <div className=''>
          <h1 className='text-5xl gradient-title pb-2'>
            {t('projectRequestForm.title')}
          </h1>
          <p className='paragraph text-lg mt-3'>
            {t('projectRequestForm.description')}
          </p>
        </div>
        <figure className='w-full h-[20em] shadow-bottom rounded-lg overflow-hidden'>
          <img
            loading='lazy'
            className='size-full object-cover'
            src={contactme}
          />
        </figure>
      </div>
      <Suspense fallback={<Loader />}>
        <ContactMeForm />
      </Suspense>
    </main>
  )
}

export default ContactMe
