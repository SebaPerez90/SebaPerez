import benefits from '@/assets/benefits.webp'
import benefits2 from '@/assets/benefits-2.webp'
import benefits3 from '@/assets/benefits-3.webp'

const benefitsData = [
  {
    id: 1,
    title: 'Precios super accesibles',
    description:
      'Con CodeVibes, conectamos con clientes potenciales para ofrecer soluciones personalizadas y efectivas.',
    image: benefits,
  },
  {
    id: 2,
    title: 'Plata asegurada',
    description:
      'Con CodeVibes, administras tus datos de manera segura y confiable.',
    image: benefits2,
  },
  {
    id: 3,
    title: 'Soporte',
    description: 'Con CodeVibes, optimizas tus tiempos de entrega y ofertas.',
    image: benefits3,
  },
]

const Benefits = () => {
  return (
    <section className='col-center h-dvh justify-evenly w-full px-10'>
      <h1 className='title text-lg'>¿Porqué elegir CodeVibes?</h1>
      <div className='row-center justify-between test w-full px-10'>
        {benefitsData.map((data) => (
          <div
            key={data.id}
            className='col-center w-[15em] text-center'>
            <figure className='w-[14em] h-[14em] rounded-md overflow-hidden'>
              <img
                loading='lazy'
                className='h-full w-full object-cover'
                src={data.image}
                alt='image-service'
              />
            </figure>
            <div>
              <h2 className='title'>Garantia asegurada</h2>
              <p className='paragraph mt-2'>
                Podes probar los beneficios de tu producto sin problemas y paga
                solo si cumple tus expectativas
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
