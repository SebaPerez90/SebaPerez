import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { useContext, useState } from 'react'
import { useField } from 'formik'

import { BsCheckAll } from 'react-icons/bs'
import { Context } from '@/App'

interface InputLiveFeedbackProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  helpText: string
  formikValue?: string
}

const InputLiveFeedback = ({
  label,
  helpText,
  formikValue,
  ...props
}: InputLiveFeedbackProps) => {
  const [field, meta] = useField({ ...props, name: props.name as string })
  const [didFocus, setDidFocus] = useState(false)
  const { subject } = useContext(Context)

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
      } w-full relative ${props.name === 'topic' && subject ? 'valid' : ''}`}>
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

        {subject && props.name === 'topic' && (
          <BsCheckAll
            size={20}
            color='#22c55e'
          />
        )}
      </div>
      <Input
        {...props}
        {...field}
        value={props.name === 'topic' && !formikValue ? subject : formikValue}
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
