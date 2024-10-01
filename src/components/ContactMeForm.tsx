import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { useTranslation } from 'react-i18next'
import { LocaleProjectRequestForm } from '@/types'

const ContactMeForm = () => {
  const { t } = useTranslation()

  const projectRequestForm = t('projectRequestForm.inputs', {
    returnObjects: true,
  })

  return (
    <form
      id='signup-form'
      name='signup-form'
      className='col-center bg-white dark:bg-dark-neutral backdrop-blur-md rounded-lg w-full max-w-lg p-10 gap-5 shadow-purple-500/30 shadow-2xl'>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-slate-50'>
        {t('projectRequestForm.subtitle')}
      </h2>
      {(projectRequestForm as Array<LocaleProjectRequestForm>).map((item) => (
        <Label
          key={item.id}
          className='flex flex-col gap-1 relative  w-[90%]'
          htmlFor={item.name}>
          {item.label}
          <Input
            id={item.id}
            autoComplete='on'
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className='bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
          />
        </Label>
      ))}
      <Label
        htmlFor='message'
        className='flex flex-col gap-1  relative w-[90%]'>
        {t('projectRequestForm.textarea.label')}
        <Textarea
          id='message'
          placeholder={t('projectRequestForm.textarea.placeholder')}
          className='bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500 min-h-[10em]'
        />
      </Label>

      <div className='w-[90%] row-center'>
        <Button
          variant={'outline'}
          className='w-full dark:text-purple-400 border-purple-400 asdasd dark:hover:text-purple-300 hover:duration-200 duration-200 dark:hover:bg-transparent dark:hover:border-purple-300'>
          {t('projectRequestForm.buttonLabel.cancel')}
        </Button>
        <Button className='w-full custom-btn2 dark:text-white'>
          {t('projectRequestForm.buttonLabel.submit')}
        </Button>
      </div>
    </form>
  )
}

export default ContactMeForm
