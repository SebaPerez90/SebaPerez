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
  const [engLang, setEngLang] = useState(false)
  const [currentLang, setCurrentLang] = useState('')

  console.log(currentLang)
  useEffect(() => {
    localStorage.setItem('engLangActive', String(engLang))
  }, [engLang, currentLang])

  return (
    <Select
      value={currentLang}
      onValueChange={(value) => {
        setCurrentLang(value)
        setEngLang(value === 'english')
      }}>
      <SelectTrigger className='w-max overflow-visible custom-btn px-2 border-2 border-purple-500'>
        <div className='row-center gap-1'>
          <span className='text-sm'>{engLang ? 'English' : 'Español'}</span>
          <img
            width={20}
            height={20}
            src={engLang ? englishIcon : spanishIcon}
            alt='icono de idioma'
          />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='español' className='hover:bg-purple-400'>
            <span className='text-sm font-medium'>
              Español
            </span>
          </SelectItem>
          <SelectItem value='english' className='hover:bg-purple-400'>
            <span className='text-sm font-medium'>
              English
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
