import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { useState } from 'react'
import { useField } from 'formik'

import { BsCheckAll } from 'react-icons/bs'

interface InputLiveFeedbackProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  helpText: string
}

const InputLiveFeedback = ({
  label,
  helpText,
  ...props
}: InputLiveFeedbackProps) => {
  const [field, meta] = useField({ ...props, name: props.name as string })
  const [didFocus, setDidFocus] = useState(false)

  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched

  const handleFocus = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setDidFocus(true)
  }

  return (
    <div
      className={`${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      } w-full relative`}>
      <div className='flex items-center justify-between'>
        <Label
          htmlFor={props.id}
          className='mb-1'>
          {label}
        </Label>
        {showFeedback && (
          <div
            className={`text-sm ${
              meta.error ? 'text-red-500' : 'text-green-500'
            }`}>
            {meta.error ? meta.error : <BsCheckAll size={20} />}
          </div>
        )}
      </div>
      <Input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
        className={`${props.id === 'name' && 'capitalize'}`}
      />
      {showFeedback && meta.error && (
        <div
          tabIndex={-1}
          className='text-xs absolute -bottom-9 left-0'>
          {helpText}
        </div>
      )}
    </div>
  )
}

export default InputLiveFeedback
