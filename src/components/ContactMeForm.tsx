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
      className='col-center bg-white /50 backdrop-blur-md shadow-lg rounded-lg w-full max-w-lg p-10 gap-5'>
      <h2 className='text-2xl font-semibold text-gray-800'>
        {t('projectRequestForm.subtitle')}
      </h2>
      {(projectRequestForm as Array<LocaleProjectRequestForm>).map((item) => (
        <Label
          key={item.id}
          className='flex flex-col gap-1 relative  w-[70%]'
          htmlFor={item.name}>
          {item.label}
          <Input
            id={item.id}
            autoComplete='on'
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className='bg-white border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
          />
        </Label>
      ))}
      <Label
        htmlFor='message'
        className='flex flex-col gap-1  relative w-[70%]'>
        {t('projectRequestForm.textarea.label')}
        <Textarea
          id='message'
          placeholder={t('projectRequestForm.textarea.placeholder')}
          className='bg-white border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500 min-h-[10em]'
        />
      </Label>

      <div className='w-[70%] row-center'>
        <Button
          variant={'outline'}
          className='w-full'>
          {t('projectRequestForm.buttonLabel.cancel')}
        </Button>
        <Button className='w-full custom-btn2'>
          {t('projectRequestForm.buttonLabel.submit')}
        </Button>
      </div>
    </form>
  )
}

export default ContactMeForm
