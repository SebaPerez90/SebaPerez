import { Routes } from '@/routes/paths'

export const signUpFormData = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nombre',
    placeholder: 'Jhon Doe',
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    label: 'Correo electrónico',
    placeholder: 'example@gmail.com',
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Contraseña',
    placeholder: '*******',
  },
  {
    type: 'password',
    name: 'repeatPassword',
    id: 'repeatPassword',
    label: 'Repetir contraseña',
    placeholder: '*******',
  },
]

export const navLinks = [
  {
    id: 1,
    label: 'Contacto',
    href: Routes.contact,
    ariaLabel: 'contact me',
  },
  {
    id: 2,
    label: 'Planes',
    href: Routes.plans,
    ariaLabel: 'pricing plans',
  },
  {
    id: 3,
    label: 'Preguntas',
    href: Routes.faq,
    ariaLabel: 'frequently ask questions',
  },
]

export const listData = [
  {
    id: 1,
    title: 'Company',
    items: ['Preguntas frecuentes', 'Nosotros', 'Contactanos'],
  },
  {
    id: 2,
    title: 'Usuarios',
    items: ['Publica tu servicio', 'Profesionales', 'Trabajos'],
  },
  {
    id: 3,
    title: 'Sobre nosotros',
    items: ['Seba Perez', 'Dami Garbarini', 'Apoya el proyecto'],
  },
]

export const images = [
  '/footer.webp',
  '/footer2.webp',
  '/footer3.webp',
  '/footer4.webp',
  '/footer5.webp',
  '/footer6.webp',
]
