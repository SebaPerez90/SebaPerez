import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { Button } from '../ui/button'
import { Routes } from '@/routes/paths'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (window.scrollY !== 0) {
        header?.classList.add('[box-shadow:0_0_30px_0_#00000033]')
      } else {
        header?.classList.remove('[box-shadow:0_0_30px_0_#00000033]')
      }
    }

    handleScroll()
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <header
      id='header'
      className='flex items-center fixed w-full justify-between p-7 text-black backdrop-blur-[8px] bg-white/50 z-50'>
      <div className='row-center gap-9'>
        <Link
          to={Routes.home}
          aria-label='Ir al inicio'
          className='hover:text-purple-600 duration-200 hover:duration-200 text-2xl pb-1 flex items-center gap-1 font-extrabold text-purple-500'>
          CodeVibes
        </Link>
        <NavLinks />
      </div>
      <div className='row-center'>
        <Link to={Routes.contact}>
          <Button
            variant={'outline'}
            className='text-black'>
            Contáctame
          </Button>
        </Link>
        <Link
          to={Routes.auth.login}
          className='row-center'>
          <Button>Inicia sesión</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
