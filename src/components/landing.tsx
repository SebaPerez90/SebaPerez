import { Button } from './ui/button'

const Landing = () => {
  return (
    <section className='h-[60vh] col-center items-start gap-4 [width:clamp(300px,70%,1000px)] pl-[10%]'>
      <h1 className='font-bold text-6xl text-white'>
        Impulsa tu negocio con soluciones digitales personalizadas.
      </h1>
      <p className='text-xl text-slate-300 max-w-[500px]'>
        Aumenta tu presencia digital y optimiza tu negocio con sitios y
        aplicaciones web, funcionales y diseñadas a tu medida.
      </p>
      <div className='mt-6 row-center'>
        <Button size={"lg"} variant={'secondary'}>call to action 1</Button>
        <Button size={"lg"} variant={'secondary'}>call to action 2</Button>
      </div>
    </section>
  )
}

export default Landing
