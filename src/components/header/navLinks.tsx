import { Link } from 'react-router-dom'
import { useAnimate, stagger, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Routes } from '@/routes/paths'
import { useTranslation } from 'react-i18next'
import { LocaleNavLinks } from '@/types'

const NavLinks = () => {
  const { t } = useTranslation()
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'li',
        { opacity: 1, x: 0 },
        { delay: stagger(0.1), duration: 0.9 }
      )
    }
  }, [animate, isInView, scope])

  const navLinks = t('header.content', { returnObjects: true })

  const pathsDictionary: { [key: number | string]: string } = {
    1: Routes.contact,
    2: Routes.plans,
    3: Routes.faq,
  }
  return (
    <nav className='hidden md:block'>
      <ul
        ref={scope}
        className='row-center gap-10'>
        {(navLinks as Array<LocaleNavLinks>).map((link) => (
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            key={link.id}
            aria-label={link.ariaLabel}
            className='opacity-0 font-medium text-black/80 dark:text-white hover:text-purple-400 hover:duration-200 duration-200 relative before:-bottom-1 before:absolute before:left-0 before:w-0 before:h-1 before:bg-purple-400 hover:before:w-full hover:before:duration-200 before:duration-200 before:rounded-full'>
            <Link
              to={pathsDictionary[link.id]}
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
