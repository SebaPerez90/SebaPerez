import { Button } from './ui/button'
import landing_image from '@/assets/landing.svg'

const Landing = () => {
  return (
    <section className='py-28  w-full flex justify-center bg-gradient-to-t from-white to-purple-500 z-30'>
      <div className='col-center gap-4 items-start w-[40em]'>
        <h1 className='font-black text-5xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-3'>
          Impulsa tu negocio con soluciones digitales personalizadas.
        </h1>
        <p className='text-xl font-medium text-slate-500 w-[80%]'>
          Aumenta tu presencia digital y optimiza tu negocio con sitios y
          aplicaciones web, funcionales y diseñadas a tu medida.
        </p>
        <div className='row-center w-full justify-start'>
          <Button
            size={'lg'}
            className='py-6'>
            Consulta por presupuesto
          </Button>
        </div>
      </div>

      <figure className='w-[30em] '>
        <img
          src={landing_image}
          alt='landing-image'
          className='object-contain w-full h-full'
        />
      </figure>

      <div className='custom-shape-divider-top-1727069285'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            className='shape-fill'></path>
        </svg>
      </div>
    </section>
  )
}

export default Landing
