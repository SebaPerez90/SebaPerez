import { Link } from 'react-router-dom'
import { navLinks } from '@/constants/index'

const NavLinks = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='row-center gap-10'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            aria-label={link.ariaLabel}
            className='font-medium text-black/80 hover:text-purple-400 hover:duration-200 duration-200 relative before:-bottom-1 before:absolute before:left-0 before:w-0 before:h-1 before:bg-purple-400 hover:before:w-full hover:before:duration-200 before:duration-200 before:rounded-full'>
            <Link
              to={link.href}
              className='text-sm'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
