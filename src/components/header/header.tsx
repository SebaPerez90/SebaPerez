import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { LuLogIn } from 'react-icons/lu'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex items-center fixed w-full justify-between px-6 py-5 text-white'>
      <Link to={'/'}>
        <figcaption className='text-2xl pb-1 font-extrabold text-[#7CF5FF]'>
          {"{"}CodeVibes{"}"}
        </figcaption>
      </Link>
      <NavLinks />
      <div className='row-center'>
        <Link to={'/contact-me'}>Contáctame</Link>
        <Link
          to={'/log-in'}
          className='row-center'>
          <Button size={"lg"} variant={"secondary"} className='gap-2 px-5'>
            Inicia sesión
            <LuLogIn size={20} />
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
