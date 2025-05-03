import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

const images = [
  '/footer-1.webp',
  '/footer-2.webp',
  '/footer-3.webp',
  '/footer-4.webp',
  '/footer-5.webp',
  '/footer-6.webp',
]
const Slider = () => {
  const { t } = useTranslation()

  return (
    <section className='bg-white dark:bg-dark-neutral col-center gap-28 pt-32 my-24'>
      <div className='flex items-center gap-16'>
        <div className='w-[25em] sm:w-[22em] flex flex-col gap-28'>
          <div>
            <h1 className='text-3xl font-light'>
              {t('footer.title')}{' '}
              <strong className='font-black'>{t('footer.strong')}!</strong>
            </h1>
            <p className='paragraph mt-5'>{t('footer.description')}</p>
          </div>
          <Button
            size={'lg'}
            className='py-6'>
            <a href='#contact-me-form'>{t('footer.CTA')}</a>
          </Button>
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: 700 }}
          className='w-[25em] h-[30em] rounded-2xl overflow-hidden'>
          {images.map((item, index) => (
            <SwiperSlide
              className='size-full overflow-hidden'
              key={index}>
              <img
                className='size-full object-cover'
                loading='lazy'
                src={item}
                alt='categories-images'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Slider
