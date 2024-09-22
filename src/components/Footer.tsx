import 'swiper/css'
import 'swiper/css/effect-fade'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

const listData = [
  {
    id: 1,
    title: 'Company',
    items: ['Preguntas frecuentes', 'Nosotros', 'Contactanos'],
  },
  {
    id: 2,
    title: 'Usuarios',
    items: ['Publica tu servicio', 'Profesionales', 'Trabajos'],
  },
  {
    id: 3,
    title: 'Sobre nosotros',
    items: ['Seba Perez', 'Dami Garbarini', 'Apoya el proyecto'],
  },
]

const images = [
  '/footer.webp',
  '/footer2.webp',
  '/footer4.webp',
  '/footer5.webp',
  '/footer6.webp',
]

const Footer = () => {
  return (
    <footer className='bg-[#e6e6e6] col-center gap-16 pt-40 pb-6'>
      <div className='flex items-start h-[20em] gap-16'>
        <div className='w-[20em] col-center h-full justify-between items-starat'>
          <div>
            <h1 className='text-3xl font-bold text-black'>
              Únete a la revolución digital para potenciar tus negocio.
            </h1>
            <p className='text-slate-500 mt-4'>
              Sin importar el rubro al que te dediques, estas a solo un mensaje
              de mejorar tus ingresos y prescencia digital.
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
          className='w-[20em] h-[20em] rounded-2xl overflow-hidden'>
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
        <h2 className='text-2xl font-extrabold'>CodeVibes</h2>
        <div className='flex justify-evenly [width:clamp(600px,60%,1200px)] py-5'>
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
