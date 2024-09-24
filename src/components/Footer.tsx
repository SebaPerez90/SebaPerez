import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { images, listData } from '@/constants/index'

const Footer = () => {
  return (
    <footer className='bg-white col-center gap-32 pt-32 pb-6'>
      <div className='row-center h-[20em] gap-16'>
        <div className='w-[22em] col-center h-full justify-between items-starat'>
          <div>
            <h1 className='title text-3xl'>
              Únete a la revolución digital para{' '}
              <strong className='text-3xl text-purple-500'>potenciar tu negocio</strong>.
            </h1>
            <p className='text-slate-500 mt-4'>
              Sin importar el rubro al que te dediques, estas a solo un mensaje
              de mejorar tus ingresos y prescencia digital.
              <br></br>
              <br></br>
              Te voy ayudar a encontrar la mejor manera de llevar a cabo tus
              objetivos!
            </p>
          </div>
          <Button
            size={'lg'}
            className='w-full py-6'>
            Contáctame !
          </Button>
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className='w-[18em] h-[25em] rounded-2xl overflow-hidden'>
          {images.map((item, index) => (
            <SwiperSlide
              className='w-[10em] h-[15em] overflow-hidden'
              key={index}>
              <img
                className='w-full h-full object-cover'
                width={1500}
                height={1500}
                src={item}
                alt='categories-images'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='col-center'>
        <div className='flex justify-evenly [width:clamp(600px,60%,1200px)] py-16'>
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
                  className='text-slate-600 cursor-pointer hover:text-slate-400 hover:duration-150'>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <span className='w-max mt-4 text-slate-500'>
          CodeVibes © 2024 | codevibes@gmail.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
