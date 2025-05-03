import { useTranslation } from 'react-i18next'

import FAQForm from '@/components/forms/FAQForm'
import FAQAcordion from '@/components/FaqAcordion'

const FAQContainer = () => {
  const { t } = useTranslation()

  return (
    <section className='flex flex-col items-center gap-32 my-20'>
      <h1 className='title text-lg'>{t('faq.title')}</h1>
      <FAQAcordion />
      <div className='flex flex-col items-center w-full gap-20'>
        <h2 className='text-lg font-semibold'>{t('faq.subtitle')}</h2>
        <FAQForm />
      </div>
    </section>
  )
}

export default FAQContainer
