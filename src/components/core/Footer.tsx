import { useEffect, useRef } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const homeRef = useRef<HTMLAnchorElement | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current && window.scrollY > 800) {
        homeRef.current?.classList.replace('opacity-0', 'opacity-1')
        homeRef.current?.classList.remove('pointer-events-none')
      } else {
        homeRef.current?.classList.replace('opacity-1', 'opacity-0')
        homeRef.current?.classList.add('pointer-events-none')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className='relative flex flex-col items-center pt-20 dark:bg-dark-deep'>
      <a
        ref={homeRef}
        href='#hero-section'
        className='opacity-0 transition-all duration-500 pointer-events-none z-50'>
        <button
          type='button'
          className='fixed right-5 bottom-10 bg-black dark:bg-white dark:text-black text-white rounded-full p-3 cursor-pointer animate-bounce'>
          <FaArrowUp size={15} />
        </button>
      </a>
      <hr className='h-[2px] my-4 bg-gray-300 w-[70%]' />
      <span className='w-max font-medium text-sm my-2 text-foreground'>
        © 2025 Soluciones tecnológicas | Sebastian Perez
      </span>
    </footer>
  )
}

export default Footer
