import * as yup from 'yup'

export const ContactSchema = (t: (key: string) => string) =>
  yup.object().shape({
    topic: yup
      .string()
      .min(10, t('formErrors.topic.minLength'))
      .max(40, t('formErrors.topic.maxLength'))
      .required(t('formErrors.topic.required'))
      .matches(/^[a-zA-Z0-9\s]+$/, t('formErrors.noSpecialChars')),
    name: yup
      .string()
      .min(4, t('formErrors.name.minLength'))
      .max(20, t('formErrors.name.maxLength'))
      .required(t('formErrors.name.required'))
      .matches(/^[a-zA-Z0-9\s]+$/, t('formErrors.noSpecialChars')),
  })
