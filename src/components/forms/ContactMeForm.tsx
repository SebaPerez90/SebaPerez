import { Button } from '@/components/ui/button'
import InputLiveFeedback from '@/components/forms/InputLiveFeedback'
import CustomTextArea from '@/components/forms/CustomTextArea'

import { useTranslation } from 'react-i18next'
import { LocaleformInputs } from '@/types'

import { FormikProvider } from 'formik'
import { useDynamicFormik } from '@/hooks/useFormik'
import { ContactSchema } from '@/schemas/contact.schema'
import { useContext } from 'react'
import { Context } from '@/App'

const ContactMeForm = () => {
  const { t } = useTranslation()
  const { formik, loading } = useDynamicFormik(
    ['topic', 'name', 'message'],
    ContactSchema(t)
  )

  const { setSubject } = useContext(Context)

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
        className='w-full flex flex-col gap-14 justify-center items-center text-foreground'>
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
            formikValue={formik.values[item.name as FormFieldName]}
          />
        ))}

        <CustomTextArea
          id='message'
          label={t('formInputs.textarea.label')}
          placeholder={t('formInputs.textarea.placeholder')}
          onChangeFormik={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />

        <div className='grid grid-cols-2 gap-3 w-full relative -top-5'>
          <Button
            type='button'
            size={'lg'}
            variant={'outline'}
            onClick={() => {
              setSubject('')
              formik.resetForm()
            }}
            className=''>
            {t('formInputs.CTA.cancel')}
          </Button>
          <Button
            type='submit'
            size={'lg'}
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
