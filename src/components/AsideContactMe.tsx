import contact from '@/assets/contact.webp'
import contact_2 from '@/assets/contact-2.webp'
import contact_3 from '@/assets/contact-3.webp'

const AsideContactMe = () => {
  return (
    <div className='w-1/2 relative'>
      <figure className='z-20 shadow-bottom  -top-44 absolute w-[17em] h-[16em] rounded-xl overflow-hidden'>
        <img
          className='size-full object-cover'
          src={contact_2}
          alt=''
        />
      </figure>
      <figure className='z-20 shadow-bottom w-[23em] h-[20em] relative left-60  rounded-xl overflow-hidden'>
        <img
          className='size-full object-cover'
          src={contact}
          alt=''
        />
      </figure>
      <figure className='z-30 shadow-bottom absolute -bottom-48 left-20 w-[20em] h-[15em] rounded-xl overflow-hidden'>
        <img
          className='size-full object-cover'
          src={contact_3}
          alt=''
        />
      </figure>
    </div>
  )
}

export default AsideContactMe
