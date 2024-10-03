import { Link } from 'react-router-dom'
import { navLinks } from '@/constants/index'
import { useAnimate, stagger, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const NavLinks = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'li',
        { opacity: 1, x: 0 },
        { delay: stagger(0.3), duration: 0.4 }
      )
    }
  }, [animate, isInView, scope])
  return (
    <nav className='hidden md:block'>
      <ul
        ref={scope}
        className='row-center gap-10'>
        {navLinks.map((link) => (
          <motion.li
          initial={{ opacity: 0, x: -100 }}
            key={link.id}
            aria-label={link.ariaLabel}
            className='opacity-0 font-medium text-black/80 dark:text-white hover:text-purple-400 hover:duration-200 duration-200 relative before:-bottom-1 before:absolute before:left-0 before:w-0 before:h-1 before:bg-purple-400 hover:before:w-full hover:before:duration-200 before:duration-200 before:rounded-full'>
            <Link
              to={link.href}
              className='text-sm'>
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
