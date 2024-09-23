import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { LuLogIn } from 'react-icons/lu'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex items-center fixed w-full justify-between p-7 text-black backdrop-blur-[8px] z-50'>
      <div className='row-center gap-9'>
        <Link
          to={'/'}
          aria-label='Ir al inicio'
          className='hover:text-purple-600 duration-200 hover:duration-200 text-2xl pb-1 flex items-center gap-1 font-extrabold text-purple-500'>
          CodeVibes
        </Link>
        <NavLinks />
      </div>
      <div className='row-center'>
        <Link to={'/contact-me'}>
          <Button
            variant={'outline'}
            className='text-black'>
            Contáctame
          </Button>
        </Link>
        <Link
          to={'/log-in'}
          className='row-center'>
          <Button>
            Inicia sesión
            <LuLogIn
              className='ml-1'
              size={20}
            />
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
