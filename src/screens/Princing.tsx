import PrincigCard from '@/components/PrincigCard'
import pricing_data from '@/jsons/pricing.json'

const Princing = () => {
  return (
    <main className=' col-center min-h-dvh max-h-max gap-24 pb-28 pt-36'>
      <div className='col-center [width:clamp(300px,80%,700px)]'>
        <h1 className='title text-5xl w-max'>
          ¿Estás listo para expandir tu negocio?
        </h1>
        <p className='paragraph'>
          En la actualidad, no tener una tienda en línea es perder
          oportunidades. Con 5.45 mil millones de usuarios de internet y un
          crecimiento constante en las compras digitales, es el momento ideal
          para expandir tu negocio.
          <br></br>
          <br></br>
          ¡Estás a unos clics de lograrlo! Se espera que la conexión a internet
          continúe expandiéndose, así que no dejes pasar la oportunidad de ser
          parte de esta transformación.
        </p>
      </div>
      <div className='grid grid-cols-3 justify-center gap-10 mx-8 z-10'>
        {pricing_data.map((item) => (
          <PrincigCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            listItems={item.services}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </div>
    </main>
  )
}

export default Princing
