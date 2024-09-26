import { MdDevices } from 'react-icons/md'
import { SlEarphonesAlt } from 'react-icons/sl'
import { MdDesignServices } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { Card } from './ui/card'

const servicesData = [
  {
    id: 1,
    title: 'Sitios web a medida',
    description:
      'Creá una presencia online profesional que atraerá más clientes y hará crecer tu negocio.',
    icon: <FaLaptopCode size={43} />,
  },
  {
    id: 2,
    title: 'Diseños visuales atractivos',
    description:
      'Diseños modernos y llamativos que capturan la atención de tus visitantes y los convierten en clientes.',
    icon: <MdDesignServices size={43} />,
  },
  {
    id: 3,
    title: 'Asistencia y soporte continuo',
    description:
      'Te acompañamos en cada paso, resolviendo problemas para que tu sitio o aplicación siempre esté funcionando sin problemas.',
    icon: <SlEarphonesAlt size={43} />,
  },
  {
    id: 4,
    title: 'Webs adaptables',
    description:
      'Tu sitio web lucirá perfecto en cualquier dispositivo: móvil, tablet o computadora, para que siempre esté accesible.',
    icon: <MdDevices size={43} />,
  },
]

const OurServices = () => {
  return (
    <section className='w-full bg-secondary col-center gap-20 py-36'>
      <h1 className='title text-lg'>Mis servicos</h1>
      <div className='grid grid-cols-2 place-items-center gap-12'>
        {servicesData.map((item) => (
          <Card
            key={item.id}
            className='w-[25em] p-5 bg-white shadow-neutral rounded-lg row-center '>
            <div className='flex flex-col gap-1'>
              <div className='row-center justify-between'>
                <span className='title text-xl text-balance'>
                  {item.title}
                </span>
                <span className='text-purple-500 p-3 rounded-md bg-secondary'>{item.icon}</span>
              </div>
              <p className='paragraph text-sm'>{item.description}</p>
              <button className='mt-5 custom-btn w-max'>Contrata ahora</button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default OurServices
