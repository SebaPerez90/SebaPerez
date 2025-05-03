import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

const Slider = () => {
  const { t } = useTranslation()

  return (
    <section className='bg-white dark:bg-dark-deep col-center gap-28 pt-32'>
      <div className='flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16'>
        <div className='w-[25em] sm:w-[22em] flex flex-col gap-10 lg:gap-28'>
          <div>
            <h1 className='text-3xl font-light text-foreground'>
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
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-1.webp'
              alt='categories-images'
            />
          </SwiperSlide>
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-2.webp'
              alt='categories-images'
            />
          </SwiperSlide>
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-3.webp'
              alt='categories-images'
            />
          </SwiperSlide>
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-4.webp'
              alt='categories-images'
            />
          </SwiperSlide>
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-5.webp'
              alt='categories-images'
            />
          </SwiperSlide>
          <SwiperSlide className='size-full overflow-hidden'>
            <img
              className='size-full object-cover'
              loading='lazy'
              src='/public/footer-6.webp'
              alt='categories-images'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Slider
