import 'swiper/css'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
// import SocialLinks from './SocialLinks'
// import { FaLocationDot } from 'react-icons/fa6'
// import { HiOutlineMailOpen } from 'react-icons/hi'
// import { FaPhoneAlt } from 'react-icons/fa'
// import { LocaleData } from '@/types'
// import Logo from './Logo'

const images = [
  '/footer.webp',
  '/footer2.webp',
  '/footer3.webp',
  '/footer4.webp',
  '/footer5.webp',
  '/footer6.webp',
]

// const iconDictionary: { [key: number | string]: JSX.Element } = {
//   1: (
//     <FaLocationDot
//       size={20}
//       color='#a855f7'
//     />
//   ),
//   2: (
//     <HiOutlineMailOpen
//       size={20}
//       color='#a855f7'
//     />
//   ),
//   3: (
//     <FaPhoneAlt
//       size={20}
//       color='#a855f7'
//     />
//   ),
// }
const Footer = () => {
  const { t } = useTranslation()

  // const contactData = t('footer.content', { returnObjects: true })

  return (
    <footer
      id='footer-section'
      className='bg-ligth-soft dark:bg-dark-neutral col-center gap-28 pt-32'>
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
            <p className='paragraph mt-4 text-lg md:text-base'>
              {t('footer.description')}
            </p>
          </div>
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

      {/* <div className='flex flex-col items-center'>
        <div className='flex justify-between w-[700px] items-center'>
          <Logo position='relative' />
          <SocialLinks />
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
