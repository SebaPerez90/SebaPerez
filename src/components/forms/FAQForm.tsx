import { Button } from '@/components/ui/button'
import { useDynamicFormik } from '@/hooks/useFormik'
import { useTranslation } from 'react-i18next'
import { QuestionBoxSchema } from '@/schemas/question.schema'
import { FormikProvider } from 'formik'

import InputLiveFeedback from '@/components/forms/InputLiveFeedback'
import TextareaLiveFeedback from '@/components/forms/TextareaLiveFeedback'

const FAQForm = () => {
  const { t } = useTranslation()
  const { formik, loading } = useDynamicFormik(
    ['email', 'question'],
    QuestionBoxSchema(t)
  )

  return (
    <FormikProvider value={formik}>
      <form
        id='question-form'
        name='question-form'
        onSubmit={formik.handleSubmit}
        className='w-[80%] sm:w-[28em] flex flex-col gap-14 justify-center items-center'>
        <InputLiveFeedback
          id='email'
          name='email'
          type='email'
          label={t('faq.form.email.label')}
          autoComplete='on'
          placeholder={t('faq.form.email.placeholder')}
          helpText={t('faq.form.email.helpText')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          formikValue={formik.values.email}
          helpTextPosition='-bottom-5'
        />

        <TextareaLiveFeedback
          id='question'
          name='question'
          label={t('faq.form.textarea.label')}
          placeholder={t('faq.form.textarea.placeholder')}
          helpText={t('faq.form.textarea.helpText')}
          helpTextPosition='-bottom-5'
          onChangeFormik={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.question}
        />

        <div className='grid grid-cols-2 gap-3 w-full relative -top-5'>
          <Button
            type='button'
            size={'lg'}
            variant={'outline'}
            onClick={() => formik.resetForm()}>
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

export default FAQForm
