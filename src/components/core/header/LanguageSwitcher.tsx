import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { IoMdInformationCircle } from 'react-icons/io'

import { Button } from '@/components/ui/button'
import { IoIosArrowForward } from 'react-icons/io'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  )

  useEffect(() => {
    i18n.changeLanguage(currentLang)
    localStorage.setItem('lang', currentLang)
  }, [currentLang, i18n])

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'en' ? 'es' : 'en')
    toast.custom(
      <p className='py-3 px-5 bg-white shadow-lg dark:bg-dark-soft font-medium rounded-md flex items-center mt-4 gap-2'>
        <IoMdInformationCircle
          size={20}
          color='#6897fc'
        />
        {t('navbar.toggleLang')}
      </p>
    )
  }

  return (
    <Button
      variant={'outline'}
      size={'sm'}
      onClick={toggleLanguage}
      className='text-xs flex gap-1 items-center'>
      {currentLang === 'en' ? 'ESP' : 'ENG'}
      <IoIosArrowForward
        size={17}
        className='relative -top-[1px]'
      />
    </Button>
  )
}
