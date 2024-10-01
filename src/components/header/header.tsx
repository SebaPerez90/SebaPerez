import NavLinks from './NavLinks'
import { useEffect, useRef } from 'react'
import ThemeButton from './ThemeButton'
import { LanguageSelect } from './LanguageSelect'
import Logo from '../core/Logo'

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
      className='flex items-center fixed w-full justify-between px-7 py-4 backdrop-blur-[8px] bg-white/50 z-50 dark:bg-dark-deep'>
      <Logo styles={{}} />
      <NavLinks />
      <div className='row-center'>
        <LanguageSelect />
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
