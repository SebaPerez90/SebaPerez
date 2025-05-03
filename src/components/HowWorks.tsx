import { useTranslation } from 'react-i18next'
import { LocaleData } from '@/types'
import { motion } from 'framer-motion'

const HowWorks = () => {
  const { t } = useTranslation()
  const stepByStepContent = t('steps.content', { returnObjects: true })

  return (
    <section className='z-10 col-center gap-52 lg:gap-40 [width:clamp(300px,80%,1000px)] pt-20 pb-32'>
      <h1 className='title text-lg my-16'>{t('steps.title')}</h1>
      {(stepByStepContent as Array<LocaleData>).map((data) => (
        <motion.div
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          key={data.id}
          className='row-center text-foreground'
          style={
            data.id === '02' || data.id === '04'
              ? { alignSelf: 'flex-end', flexDirection: 'row-reverse' }
              : { alignSelf: 'flex-start' }
          }>
          <span
            className='text-9xl font-bold relative before:absolute before:left-12 before:top-12 before:w-12 before:h-12 before:rounded-full before:border-slate-900 dark:before:border-slate-600 before:border-[10px] before:blur-md before:scale-[5] before:bg-slate-400 before:-z-10 before:opacity-40 tracking-tighter'
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            {data.id}
          </span>
          <div className='w-[25em] z-20'>
            <h2 className='text-center text-xl font-bold w-max max-[400px]:w-auto'>
              {data.title}
            </h2>
            <p className='paragraph mt-4 dark:text-ligth-soft'>
              {data.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default HowWorks
