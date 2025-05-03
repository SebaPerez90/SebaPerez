import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { IoIosArrowForward } from 'react-icons/io'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className='dark:bg-dark-deep py-28 w-full h-dvh relative bg-gradient-to-b from-white via-white to-slate-300 '>
      <div className='flex flex-col items-center justify-center h-full gap-20 text-center w-[45em] lg:w-[65em] mx-auto'>
        <TextGenerateEffect
          words={t('landing.title')}
          dark:gradient-title-dark
          className='text-5xl lg:text-7xl text-pretty tracking-tight text-[#1f1f1f] hero-title '
        />
        <Button
          type='button'
          size={'custom'}
          variant={'primary'}
          className='animate-[appear-element_200ms_ease-out_forwards] [animation-delay:0.2s]'>
          <a href='#services'>{t('landing.CTA')}</a>
          <IoIosArrowForward size={18} />
        </Button>
      </div>
    </section>
  )
}

export default Hero
