import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LocaleFaqData } from '@/types'
import { useTranslation } from 'react-i18next'

const FAQAcordion = () => {
  const { t } = useTranslation()
  const paymentsContent = t('faq.Q&A', { returnObjects: true })

  return (
    <Accordion
      type='single'
      collapsible
      className='z-10 w-full px-10 flex gap-14 overflow-hidden flex-wrap items-start justify-between max-[560px]:justify-center'>
      {Object.entries(paymentsContent).map(([section, items]) => (
        <div
          key={section}
          className='w-[24em] flex-grow'>
          <h2 className='text-2xl font-semibold'>{section}</h2>
          {(items as Array<LocaleFaqData>).map((item, index) => (
            <AccordionItem
              key={index}
              value={item.question}
              className=''>
              <AccordionTrigger className='text-base'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='paragraaph dark:text-ligth-soft'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  )
}

export default FAQAcordion
