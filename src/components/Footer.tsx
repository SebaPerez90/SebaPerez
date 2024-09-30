import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { images, listData } from '@/constants/index'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='bg-white col-center gap-5 sm:gap-20 pt-32 pb-4'>
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
            className='w-full py-6'>
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

      <div className='col-center w-full'>
        <div className='flex justify-evenly [width:clamp(300px,100%,900px)] py-6 sm:py-16'>
          {listData.map((data) => (
            <ul
              key={data.id}
              className='flex flex-col gap-1'>
              <span className='font-bold text-lg py-2 text-black'>
                {data.title}
              </span>
              {data.items.map((item) => (
                <li
                  key={item}
                  className='text-slate-400 font-medium text-sm cursor-pointer hover:text-slate-600 hover:duration-150'>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <span className='w-max mt-4 font-medium'>
          CodeVibes © 2024 | codevibes@gmail.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
