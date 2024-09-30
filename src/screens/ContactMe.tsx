import contactme from '@/assets/get_services.webp'
import { lazy, Suspense } from 'react'
import Loader from '@/components/Loader'
import { useTranslation } from 'react-i18next'
const ContactMeForm = lazy(() => import('@/components/ContactMeForm'))

const ContactMe = () => {
  const { t } = useTranslation()

  return (
    <main className='min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-14 px-6 bg-secondary'>
      <div className='bg-blacaak w-[40em] col-center gap-8 items-start p-6'>
        <div className=''>
          <h1 className='text-5xl gradient-title pb-2'>
            {t('projectRequestForm.title')}
          </h1>
          <p className='text-lg text-gray-600 mt-3 leading-relaxed fontme'>
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
