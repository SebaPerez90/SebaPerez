import AboutUs from '@/components/AboutUs'
import Landing from '@/components/Landing'
import avatar_image from '@/assets/avatar-image.jpg'
import { MdLocationPin } from 'react-icons/md'

const Home = () => {
  return (
    <main className='col-center gap-0'>
      <Landing />
      <section className='w-full h-[50em] relative col-center gap-32'>
        <h2 className='title text-lg'>¿Quién soy?</h2>
        <div className='row-center items-start gap-20'>
          <div>
            <figure className='w-[13em] h-[13em] rounded-full overflow-hidden'>
              <img
                className='h-full w-full object-cover'
                src={avatar_image}
                alt='avatar-developer'
              />
            </figure>
            <span className='mt-3 text-black justify-center text-sm font-semibold flex items-center'>
              <MdLocationPin
                color='#f00'
                size={20}
              />
              Argentina, Buenos Aires.
            </span>
          </div>
          <p className='w-[25em] font-medium text-black'>
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
            preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'></path>
          </svg>
        </div>
      </section>
      <AboutUs />
    </main>
  )
}

export default Home
