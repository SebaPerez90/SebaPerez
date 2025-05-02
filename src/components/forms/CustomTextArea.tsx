import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CustomTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string
  label: string
  onChangeFormik: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea = ({
  label,
  id,
  onChangeFormik,
  ...rest
}: CustomTextAreaProps) => {
  const [textAreaLength, setTextAreaLength] = useState<number>(0)

  const lengthControl = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.selectionEnd)
  }
  return (
    <Label
      htmlFor={id}
      className='grid w-full relative'>
      <span className='mb-1'>{label}</span>
      <Textarea
        {...rest}
        id={id}
        rows={10}
        maxLength={300}
        onChange={(e) => {
          onChangeFormik(e)
          lengthControl(e)
        }}
        className='placeholder:opacity-60 placeholder:font-normal resize-none'
      />
      <span
        className={cn(
          'absolute bottom-4 right-4',
          textAreaLength === 300 ? 'text-red-500 opacity-100' : 'opacity-60'
        )}>
        {textAreaLength}/300
      </span>
    </Label>
  )
}

export default CustomTextArea
