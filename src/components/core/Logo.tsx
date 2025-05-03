import avatar_profile from '@/assets/avatar-profile.webp'

const Logo = ({ position = 'absolute' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${position} left-0`}>
      <figure className='rounded-full overflow-hidden size-[3em]'>
        <img
          src={avatar_profile}
          loading='lazy'
          alt='avatar-profile-image'
          className='size-full object-cover animate-[image-filter_600ms_ease-out_forwards]'
        />
      </figure>
      <span className='text-dark dark:text-white text-lg architects-daughter-regular'>
        Seba Perez
      </span>
    </div>
  )
}

export default Logo
