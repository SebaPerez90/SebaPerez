import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useDynamicFormik } from '@/hooks/useFormik'
import { useTranslation } from 'react-i18next'
import { QuestionBoxSchema } from './schemas/question.schema'

const QuestionBox = () => {
  const { t } = useTranslation()
  const { formik, loading } = useDynamicFormik(
    ['email', 'question'],
    QuestionBoxSchema
  )

  return (
    <section className='z-10 [width:clamp(320px,100%,600px)] col-center gap-16 px-12'>
      <h2 className='title text-center'>{t('faq.title')}</h2>
      <form
        id='question-form'
        name='question-form'
        onSubmit={formik.handleSubmit}
        className='w-full col-center '>
        <Label
          htmlFor='email'
          className='w-full relative'>
          <span className='font-semibold text-lg'>
            {t('faq.form.emailLabel')}
          </span>
          <Input
            id='email'
            autoComplete='on'
            type='text'
            name='email'
            placeholder='example@gmail.com'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className='text-lg py-6 sm:py-4 sm:text-sm bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500 my-1'
          />
          {formik.touched.email && (
            <span className='text-red-600 absolute -bottom-5 left-2 text-base md:text-xs'>
              {formik.errors.email}
            </span>
          )}
        </Label>
        <Label
          htmlFor='question'
          className='w-full relative'>
          <span className='font-semibold text-lg'>
            {t('faq.form.questionLabel')}
          </span>
          <Textarea
            id='question'
            name='question'
            placeholder={t('faq.form.questionPlaceholder')}
            rows={4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.question}
            className='resize-none text-lg sm:text-sm bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
          />
          {formik.touched.question && (
            <span className='text-red-600 absolute -bottom-5 left-2 text-base md:text-xs'>
              {formik.errors.question}
            </span>
          )}
        </Label>
        <div className='grid grid-cols-2 mt-4 gap-5 w-full'>
          <Button
            type='button'
            variant={'outline'}
            onClick={() => formik.resetForm()}
            className='w-full dark:text-purple-400 border-purple-400 asdasd dark:hover:text-purple-300 hover:duration-200 duration-200 dark:hover:bg-transparent dark:hover:border-purple-300'>
            {t('projectRequestForm.buttonLabel.cancel')}
          </Button>
          <Button
            type='submit'
            loading={loading ? true : false}
            className={`${
              loading && 'text-transparent'
            } w-full custom-btn2 dark:text-white`}>
            {t('projectRequestForm.buttonLabel.submit')}
          </Button>
        </div>
      </form>
    </section>
  )
}

export default QuestionBox
