import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
  topic: yup
    .string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
})
