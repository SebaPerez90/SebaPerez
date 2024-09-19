import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <header className='flex items-center fixed w-full justify-between px-4 py-5'>
      <Link to={'/'}>
        <figcaption className='text-2xl pb-1 font-extrabold'>CodeVibes</figcaption>
      </Link>
      <NavLinks />
      <div className='row-center'>
        <Link to={'/contact-me'}>Contáctame</Link>
        <Link to={'/log-in'}>Inicia sesión</Link>
      </div>
    </header>
  )
}

export default Header
