import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeButton from './ThemeSwitcher'
import { LanguageSelect } from './LanguageSwitcher'
import HamburguerButton from './HamburguerButton'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HamburguerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id='modal'
            transition={{
              type: 'spring',
              bounce: 0.5,
              staggerChildren: 0.4,
            }}
            className='bg-black/10 backdrop-blur-lg w-full fixed left-0 top-0 h-screen flex justify-end items-start shadow-xl'>
            <div className='col-center'>
              <LanguageSelect />
              <ThemeButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
