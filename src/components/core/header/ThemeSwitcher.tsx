import { Button } from '@/components/ui/button'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import { IoMdInformationCircle } from 'react-icons/io'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdNightlightRound } from 'react-icons/md'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const { t } = useTranslation()

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    toast.custom(
      <p className='py-3 px-5 bg-white text-foreground shadow-lg dark:bg-dark-soft font-medium rounded-md flex items-center mt-4 gap-2 text-xs border dark:border-slate-700'>
        <IoMdInformationCircle
          size={20}
          color='#6897fc'
        />
        {t('navbar.toggleTheme')}
      </p>
    )
  }

  return (
    <Button
      size={'icon'}
      onClick={toggleTheme}
      className='rounded-full'>
      {theme === 'light' ? (
        <MdNightlightRound size={17} />
      ) : (
        <MdOutlineLightMode size={17} />
      )}
    </Button>
  )
}

export default ThemeSwitcher
