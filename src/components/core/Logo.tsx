import icon from '@/assets/icon.png'
import { Routes } from '@/routes/paths'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='row-center gap-1 items-center'>
      <figure>
        <img
          src={icon}
          alt='CodeVibes Logo'
          className='h-[1.5em] w-[1.5em]'
        />
      </figure>
      <Link
        to={Routes.home}
        aria-label='Ir al inicio'
        className='gradient-title dark:gradient-title-dark translate-y-[5px] text-2xl'>
        CodeVibes
      </Link>
    </div>
  )
}

export default Logo
