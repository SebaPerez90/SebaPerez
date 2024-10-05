import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Routes } from '@/routes/paths'

const Landing = () => {
  const { t } = useTranslation()
  const benefits = t('landing.benefits', { returnObjects: true })

  return (
    <section className='dark:bg-dark-deep py-28 w-full h-dvh relative flex justify-center bg-white'>
      <div className='z-10 col-center gap-0 w-[50em] text-center px-4'>
        <TextGenerateEffect
          words={t('landing.title')}
          className='font-bold  text-5xl/tight sm:text-6xl/tight bg-clip-text bg-no-repeat text-transparent bg-gradient-to-b from-purple-800 via-violet-500 to-pink-600
            dark:gradient-title-dark [font-family:"Poppins",sans-serif]
            '
        />

        <motion.p
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-xl md:text-lg font-medium mt-3 dark:text-ligth-soft text-slate-700 w-[80%] sm:w-[70%]'>
          {t('landing.description')}
        </motion.p>
        <motion.ul
          transition={{
            duration: 0.4,
            delay: 1.6,
            type: 'spring',
            damping: 10,
          }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='row-center my-12'>
          {(benefits as Array<string>).map((item, index: number) => (
            <motion.li
              key={index}
              className='flex gap-1 items-center'>
              <span className='row-center w-5 h-5 bg-[#8731f6] rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 text-white'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'></path>
                  <title>check svg icon</title>
                </svg>
              </span>
              <span className='font-medium text-sm dark:text-ligth-soft text-slate-600'>
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        <Link to={Routes.contact}>
          <Button
            type='button'
            className='animate-[appear-element_300ms_ease-out_forwards] [animation-delay:2s] p-6 rounded-full dark:custom-btn2 opacity-0 bg-black text-white border-black'>
            {t('landing.action')}
          </Button>
        </Link>
      </div>

      <div className='custom-shape-divider-bottom-1727069719'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className='shape-fill'></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className='shape-fill'></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='shape-fill'></path>
        </svg>
      </div>
    </section>
  )
}

export default Landing
