import * as yup from 'yup'

export const QuestionBoxSchema = (t: (key: string) => string) => {
  yup.object().shape({
    email: yup
      .string()
      .email(t('formErrors.email.validAdrress'))
      .required(t('formErrors.email.required')),
    question: yup
      .string()
      .min(20, t('formErrors.textarea.minLength'))
      .required(t('formErrors.email.required')),
  })
}
