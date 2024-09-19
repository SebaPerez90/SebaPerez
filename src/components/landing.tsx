import { Button } from './ui/button'

const Landing = () => {
  return (
    <section className='h-[60vh] col-center items-start gap-4'>
      <h1 className='font-bold text-5xl'>
        Transformá tus ideas en productos digitales modernos y totalmente
        personalizadas.
      </h1>
      <p className='text-lg text-black/70'>
        Impulsa tu negocio con una página web o aplicación diseñada a tu medida.
        Desde sitios simples hasta plataformas completas, te ayudo a crear
        soluciones digitales que destacan por su facilidad de uso, diseño
        atractivo y rendimiento eficiente.
      </p>
      <div className='mt-4 row-center'>
        <Button className='py-6 px-10'>call to action 1</Button>
        <Button className='py-6 px-10'>call to action 2</Button>
      </div>
    </section>
  )
}

export default Landing
