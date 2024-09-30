import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import englishIcon from '@/assets/english-icon.png'
import spanishIcon from '@/assets/spanish-icon.png'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lang') || 'en'
  )

  useEffect(() => {
    i18n.changeLanguage(currentLang)
    localStorage.setItem('lang', currentLang)
  }, [currentLang, i18n])

  return (
    <Select
      value={currentLang}
      onValueChange={(value) => setCurrentLang(value)}>
      <SelectTrigger className='w-max overflow-visible custom-btn px-2 border-2 border-purple-500'>
        <div className='row-center gap-1'>
          <span className='text-sm'>
            {currentLang === 'en' ? 'English' : 'Español'}
          </span>
          <img
            width={20}
            height={20}
            src={currentLang === 'en' ? englishIcon : spanishIcon}
            alt='icono de idioma'
          />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value='es'
            className='hover:bg-purple-400'>
            <span className='text-sm font-medium'>Español</span>
          </SelectItem>
          <SelectItem
            value='en'
            className='hover:bg-purple-400'>
            <span className='text-sm font-medium'>English</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
