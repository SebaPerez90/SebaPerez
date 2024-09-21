import { Button } from './ui/button'

const Landing = () => {
  return (
    <section className='h-[60vh] col-center gap-4 [width:clamp(300px,70%,1500px)] text-center'>
      {/* bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 */}
      <h1 className='font-bold text-5xl xl:text-7xl text-white [line-height:1.1em]'>
        Impulsa tu negocio con soluciones digitales personalizadas.
      </h1>
      <p className='text-xl text-slate-300 max-w-[500px] xl:max-w-[700px]'>
        Aumenta tu presencia digital y optimiza tu negocio con sitios y
        aplicaciones web, funcionales y diseñadas a tu medida.
      </p>
      <div className='mt-6 row-center'>
        <Button
          size={'lg'}
          variant={'outline'}>
          Consulta por presupuesto
        </Button>
        <Button
          size={'lg'}
          variant={'outline'}>
          Ver trabajos
        </Button>
      </div>
    </section>
  )
}

export default Landing
  