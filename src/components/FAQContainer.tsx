import { useTranslation } from 'react-i18next'

import FAQAcordion from '@/components/FAQAcordion'
import { QuestionFormModal } from '@/components/forms/QuestionFormModal'

const FAQContainer = () => {
  const { t } = useTranslation()

  return (
    <section className='flex flex-col items-center gap-32 my-20'>
      <h1 className='title text-lg'>{t('faq.title')}</h1>
      <FAQAcordion />
      <QuestionFormModal
        description={t('faq.subtitle')}
        modalLabel={t('faq.subtitle')}
      />
    </section>
  )
}

export default FAQContainer
