import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { Routes } from '@/routes/paths'
import { useEffect, useRef } from 'react'
import ThemeButton from './ThemeButton'
import { LanguageSelect } from './LanguageSelect'

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          '[box-shadow:0_0_30px_0_#00000033]',
          window.scrollY !== 0
        )
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className='flex items-center fixed w-full justify-between px-7 py-4 text-black backdrop-blur-[8px] bg-white/50 z-50 dark:bg-dark-deep'>
      <div className='row-center gap-9'>
        <Link
          to={Routes.home}
          aria-label='Ir al inicio'
          className='hover:text-purple-600 duration-200 hover:duration-200 text-xl flex items-center gap-1 font-extrabold text-purple-500 title'>
          {'{'} CodeVibes {'}'}
        </Link>
      </div>
      <NavLinks />
      <div className='row-center'>
        <ThemeButton />
        <LanguageSelect />
      </div>
    </header>
  )
}

export default Header
