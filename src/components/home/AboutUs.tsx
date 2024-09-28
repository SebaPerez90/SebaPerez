import { aboutData } from '@/constants/index'
import avatar_image from '@/assets/avatar-image.jpg'
import { MdLocationPin } from 'react-icons/md'

const AboutUs = () => {
  return (
    <>
      {/* Self-introduce */}
      <section className='w-full h-[50em] relative col-center gap-32'>
        <h1 className='title text-lg'>¿Quién soy?</h1>
        <div className='max-[640px]:col-center row-center items-start gap-20'>
          <div>
            <figure className='w-[13em] h-[13em] rounded-full overflow-hidden'>
              <img
                className='h-full w-full object-cover'
                src={avatar_image}
                alt='avatar de desarrollador Seba'
              />
            </figure>
            <span className='mt-3 text-slate-500 justify-center text-sm font-semibold flex items-center'>
              <MdLocationPin
                color='#f00'
                size={20}
              />
              Argentina, Buenos Aires.
            </span>
          </div>
          <p className='w-[25em] paragraph text-black'>
            ¡Hola! Soy Seba, desarrollador de software, creo soluciones
            digitales adaptadas las necesidades de cada negocio. Mi objetivo es
            ayudarte a mejorar tu presencia online y atraer más clientes,
            asegurando que tu negocio esté optimizado para crecer en el mundo
            digital.
            <br></br>
            <br></br>
            Con mi experiencia, no solo podrás mejorar la apariencia y
            funcionalidad de tu sitio o aplicación web, sino también organizar
            mejor tu negocio con herramientas que te permitirán gestionar toda
            la información de manera eficiente y sin complicaciones.
          </p>
        </div>

        <div className='custom-shape-divider-top-1727131451'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            aria-hidden='true'
            preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'></path>
          </svg>
        </div>
      </section>

      {/* Steps by step */}
      <section className='z-10 col-center gap-44 [width:clamp(300px,80%,1200px)] pt-20 pb-32'>
        <h1 className='title text-lg'>¿Como vamos a trabajar?</h1>
        {aboutData.map((data) => (
          <div
            key={data.id}
            className='row-center'
            style={
              data.id === '02' || data.id === '04'
                ? { alignSelf: 'flex-end', flexDirection: 'row-reverse' }
                : { alignSelf: 'flex-start' }
            }>
            <span
              className='text-9xl font-bold relative before:absolute before:left-14 before:top-10 before:w-12 before:h-12 before:rounded-full before:border-[#ec4899] before:border-[10px] before:blur-lg before:scale-[5] before:bg-purple-600 before:-z-10 before:opacity-40'
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              {data.id}
            </span>
            <div className='w-[18em] z-20'>
              <h2 className='title w-max max-[400px]:w-auto text-purple-500'>{data.title}</h2>
              <p className='paragraph text-black mt-4'>{data.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default AboutUs
