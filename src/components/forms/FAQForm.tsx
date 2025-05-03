import { Button } from '../ui/button'
import { useDynamicFormik } from '@/hooks/useFormik'
import { useTranslation } from 'react-i18next'
import { QuestionBoxSchema } from '../../schemas/question.schema'
import { FormikProvider } from 'formik'
import InputLiveFeedback from './InputLiveFeedback'
import CustomTextArea from './CustomTextArea'

const FAQForm = () => {
  const { t } = useTranslation()
  const { formik, loading } = useDynamicFormik(
    ['email', 'question'],
    QuestionBoxSchema
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

        <CustomTextArea
          id='question'
          label={t('faq.form.textarea.label')}
          placeholder={t('faq.form.textarea.placeholder')}
          onChangeFormik={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.question}
        />
        {formik.touched.question && (
          <span className='text-red-600'>{formik.errors.question}</span>
        )}

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
