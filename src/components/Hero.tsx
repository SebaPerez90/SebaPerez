import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { IoIosArrowForward } from 'react-icons/io'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      id='hero-section'
      className='py-28 w-full h-dvh relative bg-white dark:bg-dark-deep'>
      <div className='flex flex-col gap-12 items-center justify-center h-full'>
        <header className='flex flex-col items-center justify-center gap-10 text-center w-[90%] lg:w-[60em] xl:w-[75em] mx-auto'>
          <TextGenerateEffect
            words={t('landing.title')}
            className='text-3xl sm:text-5xl lg:text-7xl font-semibold text-pretty text-black hero-title dark:text-white'
          />
          <p className='w-full lg:w-3/4 text-[14px] sm:text-base paragraph  dark:text-slate-300 text-balance opacity-0 animate-[appear-element_150ms_ease-out_forwards] [animation-delay:0.8s]'>
            {t('landing.subtitle')}
          </p>
        </header>
        <Button
          type='button'
          size={'custom'}
          className='opacity-0 w-max animate-[appear-element_150ms_ease-out_forwards] [animation-delay:1s]'>
          <a href='#services'>{t('landing.CTA')}</a>
          <IoIosArrowForward size={18} />
        </Button>
      </div>
    </section>
  )
}

export default Hero
