import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import faqData from '@/jsons/faq.json'
import { useEffect } from 'react'

const FaqAccordion = () => {
  useEffect(() => {
    Object.entries(faqData)
  }, [])

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full px-10 flex gap-14 flex-wrap items-start justify-between'>
      {Object.entries(faqData).map(([section, items]) => (
        <div
          key={section}
          className='w-[20em] flex-grow max-w-[25em] mt-10'>
          <h2 className='title text-purple-500'>
            {formatSectionTitle(section)}
          </h2>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.question}
              className='border-b-purple-500 mt-3'>
              <AccordionTrigger className='text-start text-base font-semibold'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-start font-medium'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  )
}

const formatSectionTitle = (section: string) => {
  switch (section) {
    case 'payments':
      return 'Pagos'
    case 'extras':
      return 'Extras'
    case 'warantees':
      return 'Garantías'
    default:
      return section
  }
}

export default FaqAccordion
