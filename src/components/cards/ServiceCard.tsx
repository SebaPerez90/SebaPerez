import { Context } from '@/App'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'

import service_1 from '@/assets/service-1.webp'
import service_2 from '@/assets/service-2.webp'
import service_3 from '@/assets/service-3.webp'

export interface ServiceCardProps {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  CTA: string
}

const ServiceCard = ({
  id,
  icon,
  title,
  description,
  CTA,
}: ServiceCardProps) => {
  const { setSubject } = useContext(Context)

  return (
    <div className='flex flex-col gap-6 w-[17em] sm:w-[22em] mx-auto'>
      <div className='flex flex-col items-center w-full relative'>
        <figure className='w-full h-[15em] rounded-lg overflow-hidden'>
          <img
            loading='lazy'
            className='size-full object-cover'
            src={id === 1 ? service_1 : id === 2 ? service_2 : service_3}
            alt='avatar de desarrollador Seba'
          />
        </figure>
        <span className='rounded-full p-4 bg-white/60 backdrop-blur-sm absolute -bottom-8 border'>
          {icon}
        </span>
      </div>

      <div className='mt-5'>
        <h3 className='text-center text-xl font-semibold'>{title}</h3>
        <p className='paragraph mt-5'>{description}</p>
      </div>
      <Button
        size={'custom'}
        className='mx-auto'
        onClick={() => setSubject(CTA)}>
        <a href='#contact-me-form'>{CTA}</a>
      </Button>
    </div>
  )
}

export default ServiceCard
