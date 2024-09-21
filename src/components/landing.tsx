import { Button } from './ui/button'

const Landing = () => {
  return (
    <section
      className='min-h-dvh max-h-max col-center gap-4 w-[60%] 
    xl:[width:clamp(300px,75%,1500px)] text-center '>
      <h1 className='font-bold text-5xl xl:text-7xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-3'>
        Impulsa tu negocio con soluciones digitales personalizadas.
      </h1>
      <p className='text-xl text-slate-100 max-w-[500px] xl:max-w-[700px]'>
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
