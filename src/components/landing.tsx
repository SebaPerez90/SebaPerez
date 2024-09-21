import { Button } from './ui/button'
// import ShiningButton from './ui/ShiningButton'

const Landing = () => {
  return (
    // min-h-dvh max-h-max 
    <section className='col-center gap-4 [width:clamp(300px,80%,1200px)] text-center '>
      <h1 className='font-black text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-3'>
        Impulsa tu negocio con soluciones digitales personalizadas.
      </h1>
      <p className='text-xl text-slate-100 max-w-[500px] xl:max-w-[600px]'>
        Aumenta tu presencia digital y optimiza tu negocio con sitios y
        aplicaciones web, funcionales y diseñadas a tu medida.
      </p>
      <div className='mt-6 row-center'>
        {/* <ShiningButton
          label='Consulta por presupuesto'
          clickEvent={() => console.log('pepe')}
        /> */}
        <Button
          size={'lg'}
          variant={'outline'}>
          Consulta por presupuesto
        </Button>
        <Button
          size={'lg'}
          variant={'secondary'}>
          Ver trabajos
        </Button>
      </div>
    </section>
  )
}

export default Landing
