import { useContext, useState } from 'react'
import { useField } from 'formik'

import { BsCheckAll } from 'react-icons/bs'
import { Context } from '@/App'
import CustomTextArea from './CustomTextArea'

interface TextareaLiveFeedback
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  helpText: string
  helpTextPosition?: string
  onChangeFormik: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaLiveFeedback = ({
  id,
  label,
  helpText,
  helpTextPosition = '-bottom-9',
  onChangeFormik,
  ...props
}: TextareaLiveFeedback) => {
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
      <div className='flex items-center justify-between absolute right-0 -top-1'>
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
      <CustomTextArea
        {...props}
        {...field}
        id={id}
        onFocus={handleFocus}
        onChangeFormik={onChangeFormik}
        label={label}
      />
      {showFeedback && meta.error && (
        <div
          tabIndex={-1}
          className={`${helpTextPosition} text-xs absolute select-none left-0`}>
          {helpText}
        </div>
      )}
    </div>
  )
}

export default TextareaLiveFeedback
