import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeButton from './ThemeButton'
import { LanguageSelect } from './LanguageSelect'
import HamburguerButton from './HamburguerButton'
import NavegationLinks from './NavegationLinks'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative sm:hidden'>
      <HamburguerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{
              type: 'spring',
              bounce: 0.5,
              staggerChildren: 0.4,
            }}
            initial={{ x: 100, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, width: 0 }}
            className='shadow-xl absolute z-50 w-[21em] h-[25em] -right-20 -top-10 bg-white dark:bg-dark-soft rounded-[0_0_0_0.5em] overflow-hidden'>
            <div className='col-center gap-10 h-full z-[60] '>
              <NavegationLinks
                disappear={'mt-8'}
                flexDirection={'col-center'}
              />
              <div className='col-center'>
                <LanguageSelect />
                <ThemeButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
