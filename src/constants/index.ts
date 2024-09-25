import { Routes } from '@/routes/paths'
import type { FormData } from '../types/index'

export const signUpFormData: FormData[] = [
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
    ariaLabel: 'Enviame un mensaje para contactarme',
  },
  {
    id: 2,
    label: 'Planes',
    href: Routes.plans,
    ariaLabel: 'Planes para contratar',
  },
  {
    id: 3,
    label: 'Servicios',
    href: Routes.services,
    ariaLabel: 'Servicios ofrecidos',
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

export const aboutData = [
  {
    id: '01',
    title: 'Conociendo tus necesidades',
    description:
      'Escuchamos tus ideas y objetivos para entender cómo podemos ayudarte.',
  },
  {
    id: '02',
    title: 'Creación del diseño',
    description:
      'Crearemos un diseño centrado en usabilidad y estética, ajustado a tus expectativas y objetivos.',
  },
  {
    id: '03',
    title: 'Desarrollo de tu proyecto',
    description:
      'Creamos tu producto de manera eficiente y cuidamos cada detalle para garantizar calidad.',
  },
  {
    id: '04',
    title: 'Lanzamiento',
    description:
      'Presentamos tu producto al mundo y nos aseguramos de que todo funcione perfectamente desde el inicio.',
  },
  {
    id: '05',
    title: 'Soporte continuo',
    description:
      'Te brindamos soporte continuo y hacemos mejoras para que siempre estés un paso adelante.',
  },
]
