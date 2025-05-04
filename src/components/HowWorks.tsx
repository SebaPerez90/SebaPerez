import { useTranslation } from 'react-i18next'
import { LocaleData } from '@/types'
import { motion } from 'framer-motion'

const HowWorks = () => {
  const { t } = useTranslation()
  const stepByStepContent = t('steps.content', { returnObjects: true })

  return (
    <section className='z-10 col-center gap-52 lg:gap-40 w-full px-6 sm:px-10 max-w-[1000px] pt-20 pb-32'>
      <h1 className='title text-lg my-16'>{t('steps.title')}</h1>
      {(stepByStepContent as Array<LocaleData>).map((data, index) => (
        <motion.div
          transition={{
            duration: 0.2,
            delay: index * 0.2,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          key={data.id}
          className='row-center gap-4 sm:gap-10 text-foreground'
          style={
            data.id === '02' || data.id === '04'
              ? { alignSelf: 'flex-end', flexDirection: 'row-reverse' }
              : { alignSelf: 'flex-start' }
          }>
          <span
            className='text-7xl sm:text-9xl font-bold relative before:absolute before:left-12 before:top-12 before:w-12 before:h-12 before:rounded-full before:border-slate-900 dark:before:border-slate-600 before:border-[10px] before:blur-md before:scale-[5] before:bg-slate-400 before:-z-10 before:opacity-40 tracking-tighter'
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            {data.id}
          </span>
          <div
            className={`${
              data.id === '02' || data.id === '04'
                ? 'sm:text-end text-center'
                : ''
            } w-full md:w-[20em] z-20`}>
            <h2 className='text-xl font-bold'>{data.title}</h2>
            <p className='paragraph mt-4 text-pretty dark:text-ligth-soft'>
              {data.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default HowWorks
