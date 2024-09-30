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

export function LanguageSelect() {
  const [currentLang, setCurrentLang] = useState('')
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'es'
  )

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <Select
      value={currentLang}
      onValueChange={(value) => {
        setCurrentLang(value)
        setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'))
      }}>
      <SelectTrigger className='w-max overflow-visible custom-btn px-2 border-2 border-purple-500'>
        <div className='row-center gap-1'>
          <span className='text-sm'>
            {language === 'en' ? 'English' : 'Español'}
          </span>
          <img
            width={20}
            height={20}
            src={language === 'en' ? englishIcon : spanishIcon}
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
