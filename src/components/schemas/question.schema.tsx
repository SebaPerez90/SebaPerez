import * as yup from 'yup'

export const QuestionBoxSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese una dirección de email válida.')
    .required('El correo es requerido.'),
  question: yup
    .string()
    .min(10, 'La pregunta debe tener mas a 10 caracteres.')
    .max(200, 'La pregunta no debe tener mas a 500 caracteres.')
    .required('La pregunta es requerida.'),
})
