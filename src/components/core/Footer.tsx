import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from '../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

const images = [
  '/footer.webp',
  '/footer2.webp',
  '/footer3.webp',
  '/footer4.webp',
  '/footer5.webp',
  '/footer6.webp',
]

const Footer = () => {
  const { t } = useTranslation()

  const styles = {
    color: '#fff',
  }

  return (
    <footer className='bg-white dark:bg-dark-neutral col-center gap-28 pt-32 pb-1'>
      <div className='flex-col-reverse sm:flex-row flex items-center justify-center h-[50em] sm:h-[20em] gap-0 sm:gap-16'>
        <div className='w-[25em] sm:w-[22em] col-center h-full justify-center sm:justify-between items-starat'>
          <div>
            <h1 className='title text-3xl'>
              {t('footer.title')}
              <strong className='text-3xl text-purple-500'>
                {t('footer.strong')}
              </strong>
              .
            </h1>
            <p className='paragraph mt-4'>{t('footer.description')}</p>
          </div>
          <Button
            size={'lg'}
            className='w-full py-6 dark:custom-btn2'>
            {t('footer.action')}
          </Button>
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className='w-[22em] h-full sm:w-[18em] sm:h-[25em] rounded-2xl overflow-hidden'>
          {images.map((item, index) => (
            <SwiperSlide
              className='w-[10em] h-[15em] overflow-hidden'
              key={index}>
              <img
                className='w-full h-full object-cover'
                loading='lazy'
                src={item}
                alt='categories-images'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='col-center gap-0 w-full'>
        <div className='col-center w-full py-10 gap-3 bg-gradient-to-b from-[#793dfa] to-[#9C6DF3] dark:to-dark-soft text-slate-200'>
          <Logo styles={styles} />
          <h2 className='font-medium italic '>
            Convierte tu visión en una experiencia digital excepcional.
          </h2>
          <SocialLinks />
        </div>
        <span className='w-max font-medium text-xs my-1'>
          © 2024 CodeVibes | codevibes.arg@gmail.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
