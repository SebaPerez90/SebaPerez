import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useTranslation } from 'react-i18next'
import { LocaleProjectRequestForm } from '@/types'
import { useFormik } from 'formik'
import { useRef } from 'react'
import { ContactSchema } from '../schemas/contact.schema'

const ContactMeForm = () => {
  //usamos este tipo para poder hacer un type assertion y evitar problemas de tipado
  //con los types de "initialValues" y los strings del mapeo de los inputs
  type FormFieldName = keyof typeof formik.values
  const { t } = useTranslation()

  const projectRequestForm = t('projectRequestForm.inputs', {
    returnObjects: true,
  })
  const submitBtnRef = useRef(null)

  const formik = useFormik({
    initialValues: {
      topic: '',
      name: '',
      email: '',
      message: '',
    },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      console.log(submitBtnRef.current)
      // await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form
      id='signup-form'
      name='signup-form'
      onSubmit={formik.handleSubmit}
      className='col-center bg-white dark:bg-dark-neutral backdrop-blur-md rounded-lg w-full max-w-lg p-10 gap-5 shadow-purple-500/30 shadow-2xl'>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-slate-50'>
        {t('projectRequestForm.subtitle')}
      </h2>
      {(projectRequestForm as Array<LocaleProjectRequestForm>).map((item) => (
        <Label
          key={item.id}
          className='flex flex-col gap-1 relative w-[90%]'
          htmlFor={item.name}>
          {item.label}
          <Input
            id={item.id}
            autoComplete='on'
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item.name as FormFieldName]}
            className='bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
          />
          {formik.touched[item.name as FormFieldName] && (
            <span className='text-red-500 text-sm'>
              {formik.errors[item.name as FormFieldName]}
            </span>
          )}
        </Label>
      ))}
      <Label
        htmlFor='message'
        className='flex flex-col gap-1  relative w-[90%]'>
        {t('projectRequestForm.textarea.label')}
        <Textarea
          id='message'
          placeholder={t('projectRequestForm.textarea.placeholder')}
          onChange={formik.handleChange}
          className='bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500 min-h-[10em]'
        />
      </Label>

      <div className='w-[90%] row-center'>
        <Button
          type='button'
          variant={'outline'}
          onClick={() => formik.resetForm()}
          className='w-full dark:text-purple-400 border-purple-400 asdasd dark:hover:text-purple-300 hover:duration-200 duration-200 dark:hover:bg-transparent dark:hover:border-purple-300'>
          {t('projectRequestForm.buttonLabel.cancel')}
        </Button>
        <Button
          ref={submitBtnRef}
          type='submit'
          className='w-full custom-btn2 dark:text-white'>
          {t('projectRequestForm.buttonLabel.submit')}
        </Button>
      </div>
    </form>
  )
}

export default ContactMeForm
