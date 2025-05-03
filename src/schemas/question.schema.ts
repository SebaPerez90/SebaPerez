import * as yup from 'yup'

export const QuestionBoxSchema = (t: (key: string) => string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t('faq.form.formErrors.email.validAdrress'))
      .required(t('faq.form.formErrors.email.required')),
    question: yup
      .string()
      .min(20, t('faq.form.formErrors.textarea.minLength'))
      .required(t('faq.form.formErrors.email.required')),
  })
