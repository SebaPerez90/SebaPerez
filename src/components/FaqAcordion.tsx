import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LocaleFaqData } from '@/types'
import { useTranslation } from 'react-i18next'

const FaqAccordion = () => {
  const { t } = useTranslation()
  const paymentsContent = t('content', { returnObjects: true })

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full px-10 flex gap-14 flex-wrap items-start justify-between max-[560px]:justify-center'>
      {Object.entries(paymentsContent).map(([section, items]) => (
        <div
          key={section}
          className='w-[20em] flex-grow max-w-[25em] mt-10'>
          <h2 className='title text-purple-500'>{section}</h2>
          {(items as Array<LocaleFaqData>).map((item, index) => (
            <AccordionItem
              key={index}
              value={item.question}
              className='border-b-purple-500 mt-3'>
              <AccordionTrigger className='text-start text-base font-semibold'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-start font-medium text-black/60'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
