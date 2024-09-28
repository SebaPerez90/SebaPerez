import PrincigCard from '@/components/PrincigCard'
import pricingData from '@/jsons/pricing.json'
import { IoIosInformationCircle } from 'react-icons/io'

const Princing = () => {
  return (
    <main className=' col-center min-h-dvh max-h-max gap-24 pb-28 pt-36 bg-secondary'>
      <header className='col-center [width:clamp(300px,80%,700px)] pl-8 sm:px-0'>
        <h1 className='title text-5xl'>
          ¿Estás listo para expandir tu negocio?
        </h1>
        <p className='paragraph sm:text-lg text-xl'>
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
      </header>
      <section>
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
        <div className='flex justify-center items-center gap-4 w-[70%] mx-auto mt-16 p-5 bg-white rounded-lg shadow-lg'>
          <IoIosInformationCircle
            size={80}
            className='text-blue-600'
          />
          <p className='text-gray-700 font-medium'>
            Los precios son indicativos y se ajustan según la complejidad del
            proyecto. Cada presupuesto es personalizado para adaptarse a tus
            necesidades. <br />
            Una vez pactado el precio, no habrá sorpresas: no se realizarán
            modificaciones posteriores.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Princing
