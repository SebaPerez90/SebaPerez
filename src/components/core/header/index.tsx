import { useEffect, useRef } from 'react'
import Logo from '@/components/core/Logo'
import { Button } from '@/components/ui/button'
import HamburguerButton from './HamburguerButton'
import { IoIosSend } from 'react-icons/io'

// import ThemeButton from './ThemeButton'
// import { LanguageSelect } from './LanguageSelect'
// import MobileMenu from './MobileMenu'

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
      className='flex items-center fixed w-full px-7 py-4 backdrop-blur-[8px] bg-white/50 z-50 dark:bg-dark-deep'>
      <div className='relative flex items-center gap-4 justify-end w-full max-w-[1400px] mx-auto'>
        <Logo />
        <Button
          size={'sm'}
          className='flex gap-2 items-center'>
          Contáctame
          <IoIosSend size={15} />
        </Button>
        <HamburguerButton />
      </div>
    </header>
  )
}

export default Header
{
  /* <div className='hidden min-[640px]:row-center  gap-2'>
        <LanguageSelect />
        <ThemeButton />
      </div> */
}
{
  /* mobile menu is available when viewport width is less than 640 px */
}
{
  /* <MobileMenu /> */
}
