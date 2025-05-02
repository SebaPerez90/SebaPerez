import { useTranslation } from 'react-i18next'
import { CiShop } from 'react-icons/ci'
import { TfiWorld } from 'react-icons/tfi'
import { RiComputerLine } from 'react-icons/ri'

import ServiceCard, { ServiceCardProps } from './cards/ServiceCard'

import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const iconDictionary: { [key: number | string]: JSX.Element } = {
  1: <CiShop size={40} />,
  2: <TfiWorld size={40} />,
  3: <RiComputerLine size={40} />,
}

const Services = () => {
  const { t } = useTranslation()
  const services = t('services.content', { returnObjects: true })

  return (
    <section className='flex flex-col items-center justify-center '>
      <h1 className='title text-center mb-28 text-lg'>{t('services.title')}</h1>
      <div className='w-[90%] max-w-[1000px]'>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          // effect='fade'
          // fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className='h-[38em] custom-swiper'>
          {(services as ServiceCardProps[]).map((service) => (
            <SwiperSlide
              key={service.id}
              className='py-5'>
              <ServiceCard
                id={service.id}
                img={service.img}
                icon={iconDictionary[service.id]}
                title={service.title}
                description={service.description}
                CTA={service.CTA}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Services
