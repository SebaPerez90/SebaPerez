import PrincigCard from '@/components/PrincigCard'
import pricingData from '@/jsons/pricing.json'

const Princing = () => {
  return (
    <main className=' col-center min-h-dvh max-h-max gap-24 pb-28 pt-36'>
      <div className='col-center [width:clamp(300px,80%,700px)] test'>
        <h1 className='title text-5xl'>
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
      <div className='row-center flex-wrap gap-10 mx-8 z-10'>
        {pricingData.map((item) => (
          <PrincigCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            listItems={item.services}
          />
        ))}
      </div>
    </main>
  )
}

export default Princing
