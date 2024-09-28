import benefits from '@/assets/benefits.webp'
import benefits2 from '@/assets/benefits-2.webp'
import benefits3 from '@/assets/benefits-3.webp'

const benefitsData = [
  {
    id: 1,
    title: 'Presupuesto Personalizado',
    description:
      'En CodeVibes manejamos una lista de precios super accesibles y personalizados dependiendo de la complejidad de los requisitos.',
    image: benefits2,
  },
  {
    id: 2,
    title: 'Plata asegurada',
    description:
      'Con CodeVibes tu satisfacción, también es la nuestra! paga solo si el producto final cumple con tus expectativas.',
    image: benefits3,
  },
  {
    id: 3,
    title: 'Soporte',
    description:
      'En CodeVibes estamos siempre disponible para optimizar el rendimiento de tu aplicación, garantizando entregas eficientes y soluciones a medida.',
    image: benefits,
  },
]

const Benefits = () => {
  return (
    <section className='col-center justify-evenly w-full py-44 px-12 lg:gap-8'>
      <h1 className='title text-lg'>¿Porqué elegir CodeVibes?</h1>
      <div className='flex-col flex  items-center lg:flex-row justify-between [width:clamp(300px,100%,1500px)] mt-20'>
        {benefitsData.map((data) => (
          <div
            key={data.id}
            className='col-center w-[20em] text-center lg:mt-0 mt-16'>
            <figure className='w-[12em] h-[12em] rounded-md overflow-hidden'>
              <img
                loading='lazy'
                className='h-full w-full object-cover'
                src={data.image}
                alt='image-service'
              />
            </figure>
            <div>
              <h2 className='title text-lg'>{data.title}</h2>
              <p className='paragraph text-sm mt-2'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
