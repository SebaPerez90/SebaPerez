import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { BenefitData } from '@/types'
import { motion } from 'framer-motion'

const Benefits = () => {
  const { t } = useTranslation()
  const benefitsContent = t('benefits.content', { returnObjects: true })

  return (
    <section className='w-full bg-gradient-to-br from-black via-slate-800 to-gray-400 text-white min-h-dvh flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center gap-24 w-full max-w-[1200px] px-10 py-32 lg:py-0'>
        <div className='flex flex-col items-start gap-5 w-[90%] lg:w-auto'>
          <h1 className='text-3xl md:text-5xl font-semibold'>
            {t('benefits.title')}
          </h1>
          <p className='paragraph text-white w-[90%]'>
            {t('benefits.paragraph')}
          </p>
          <Button
            size={'lg'}
            variant={'secondary'}
            className='mt-4'>
            <a href='#contact-me-form'>{t('benefits.CTA')}</a>
          </Button>
        </div>
        <motion.div className='flex justify-center flex-row flex-wrap lg:flex-nowrap lg:flex-col gap-6'>
          {(benefitsContent as Array<BenefitData>).map((data) => (
            <motion.div
              key={data.id}
              transition={{
                duration: 0.6,
                delay: data.id * 0.4,
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='flex flex-col flex-grow lg:flex-grow-0 gap-3 px-5 py-9 bg-black/40 rounded-xl w-[25em]'>
              <header className='flex items-center gap-2'>
                <span className='text-2xl font-semibold'>{data.icon}</span>
                <h2 className='text-xl font-semibold'>{data.title}</h2>
              </header>
              <p className='paragraph text-slate-200 font-light'>
                {data.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
