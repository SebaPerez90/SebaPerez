import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <header className='flex justify-between px-4'>
      <Link to={'/'}>LOGO</Link>
      <NavLinks />
      <div>
        <Link to={'/log-in'}>Inicia sesión</Link>
        <Link to={'/contact-me'}>Contáctame</Link>
      </div>
    </header>
  )
}

export default Header
