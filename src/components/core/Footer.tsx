import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from '../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { FaLocationDot } from 'react-icons/fa6'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { LocaleData } from '@/types'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Routes } from '@/routes/paths'
import { Link } from 'react-router-dom'

const images = [
  '/footer.webp',
  '/footer2.webp',
  '/footer3.webp',
  '/footer4.webp',
  '/footer5.webp',
  '/footer6.webp',
]

const iconDictionary: { [key: number | string]: JSX.Element } = {
  1: (
    <FaLocationDot
      size={20}
      color='#a855f7'
    />
  ),
  2: (
    <HiOutlineMailOpen
      size={20}
      color='#a855f7'
    />
  ),
  3: (
    <FaPhoneAlt
      size={20}
      color='#a855f7'
    />
  ),
}
const Footer = () => {
  const btnRef = useRef(null)
  const isInView = useInView(btnRef)
  const { t } = useTranslation()

  const contactData = t('footer.content', { returnObjects: true })

  return (
    <motion.footer className='bg-ligth-soft dark:bg-dark-neutral col-center gap-28 pt-32'>
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
          <Link to={Routes.contact} className='w-full'>
            <Button
              ref={btnRef}
              style={{
                animation: isInView
                  ? 'appear-element 300ms ease-out forwards'
                  : '',
              }}
              className='opacity-0 w-full py-6 dark:custom-btn2'>
              {t('footer.action')}
            </Button>
          </Link>
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

      <div className='col-center bg-white dark:bg-dark-deep dark:text-white text-black gap-10 w-full pt-16'>
        <div className='col-center'>
          <Logo />
          <p className='font-semibold text-lg w-[90%] text-center'>
            {t('footer.slogan')}
          </p>
          <div className='mt-8 col-center'>
            <ul className='flex flex-col items-start gap-10 pl-16 sm:flex sm:items-center sm:flex-row sm:gap-20 sm:pl-0 my-10'>
              {(contactData as Array<LocaleData>).map((element, index) => (
                <li
                  key={index}
                  className='flex items-center gap-1'>
                  {iconDictionary[element.id]}
                  <div className='flex flex-col'>
                    <span className='font-bold'>{element.title}</span>
                    <span className='font-medium text-sm'>
                      {element.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <SocialLinks />
          </div>
        </div>
        <hr className='h-[2px] bg-gray-300 w-[70%]' />
        <span className='w-max font-medium text-sm my-2'>
          © 2024 CodeVibes | codevibes.arg@gmail.com
        </span>
      </div>
    </motion.footer>
  )
}

export default Footer
