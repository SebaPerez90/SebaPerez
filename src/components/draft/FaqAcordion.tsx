import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { LocaleFaqData } from '@/types'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const FaqAccordion = () => {
  const { t } = useTranslation()
  const paymentsContent = t('content', { returnObjects: true })

  return (
    <Accordion
      type='single'
      collapsible
      className='z-10 w-full px-10 flex gap-14 overflow-hidden flex-wrap items-start justify-between max-[560px]:justify-center'>
      {Object.entries(paymentsContent).map(([section, items]) => (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={section}
          className='w-[24em] flex-grow mt-10'>
          <h2 className='title text-purple-500'>{section}</h2>
          {(items as Array<LocaleFaqData>).map((item, index) => (
            <AccordionItem
              key={index}
              value={item.question}
              className='border-b-purple-500 mt-3'>
              <AccordionTrigger className='text-start text-xl sm:text-base font-semibold'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-start font-medium text-lg sm:text-base  text-black/70 dark:text-ligth-soft'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </motion.div>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
