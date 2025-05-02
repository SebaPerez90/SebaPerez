import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { LocaleformInputs } from '@/types'
import { ContactSchema } from '@/schemas/contact.schema'
import { useDynamicFormik } from '@/hooks/useFormik'
import { FormikProvider } from 'formik'
import InputLiveFeedback from './forms/InputLiveFeedback'
import CustomTextArea from './forms/CustomTextArea'

const ContactMeForm = () => {
  const { t } = useTranslation()
  const { formik, loading } = useDynamicFormik(
    ['topic', 'name', 'message'],
    ContactSchema(t)
  )

  type FormFieldName = keyof typeof formik.values

  const formInputs = t('formInputs.inputs', {
    returnObjects: true,
  })

  return (
    <FormikProvider value={formik}>
      <form
        id='contact-me-form'
        name='contact-me-form'
        onSubmit={formik.handleSubmit}
        className='h-dvh w-[28em] flex flex-col gap-14 justify-center items-center'>
        {(formInputs as Array<LocaleformInputs>).map((item) => (
          <InputLiveFeedback
            id={item.id}
            key={item.id}
            type={item.type}
            name={item.name}
            label={item.label}
            autoComplete='on'
            placeholder={item.placeholder}
            helpText={item.helpText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[item.name as FormFieldName]}
          />
        ))}

        <CustomTextArea
          id='message'
          label={t('formInputs.textarea.label')}
          placeholder={t('formInputs.textarea.placeholder')}
        />

        <div className='grid grid-cols-2 gap-2'>
          <Button
            type='button'
            variant={'outline'}
            onClick={() => formik.resetForm()}
            className=''>
            {t('formInputs.CTA.cancel')}
          </Button>
          <Button
            type='submit'
            loading={loading ? true : false}
            className={`${loading && 'text-transparent'}`}>
            {t('formInputs.CTA.submit')}
          </Button>
        </div>
      </form>
    </FormikProvider>
  )
}

export default ContactMeForm
