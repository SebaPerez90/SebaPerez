import { Button } from '@/components/ui/button'

export interface ServiceCardProps {
  id: number
  img: string
  icon: React.ReactNode
  title: string
  description: string
  CTA: string
  setsubject: (subject: string) => void
}

const ServiceCard = ({
  img,
  icon,
  title,
  description,
  CTA,
  setsubject,
}: ServiceCardProps) => {
  return (
    <div className='flex flex-col gap-6 w-[22em] mx-auto'>
      <div className='flex flex-col items-center w-full relative'>
        <figure className='w-full h-[15em] rounded-lg overflow-hidden'>
          <img
            loading='lazy'
            className='size-full object-cover'
            src={img}
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
        variant={'primary'}
        className='mx-auto'
        onClick={() => setsubject(CTA)}>
        <a href='#contact-me-form'>{CTA}</a>
      </Button>
    </div>
  )
}

export default ServiceCard
