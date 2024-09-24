import { Routes } from '@/routes/paths'
import type { FormData } from '../types/index'

export const signUpFormData: FormData[] = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    label: 'Nombre',
    placeholder:"Jhon Doe"
  },
  {
    type: 'text',
    name: 'email',
    id: 'email',
    label: 'Correo electrónico',
    placeholder:"example@gmail.com"
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Contraseña',
    placeholder:"*******"
  },
  {
    type: 'password',
    name: 'repeatPassword',
    id: 'repeatPassword',
    label: 'Repetir contraseña',
    placeholder:"*******"
  },
]


export const navLinks = [
  {
    id: 1,
    label: 'Contacto',
    href: Routes.contact,
    ariaLabel:"Enviame un mensaje para contactarme"
  },
  {
    id: 2,
    label: 'Planes',
    href: Routes.plans,
    ariaLabel:"Planes para contratar"
  },
  {
    id: 3,
    label: 'Servicios',
    href: Routes.services,
    ariaLabel:"Servicios ofrecidos"
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
    title: 'Contame sobre tu negocio',
    description:
      'Hablemos para poder entender e identificar las necesidades de tu negocio y de esa forma pensar en un plan de acción.',
    image: 'about-us.jpg',
  },
  {
    id: '02',
    title: 'Selección de diseño',
    description:
      'Seleccionamos todos los componentes que van a integrar tu producto final, es decir paleta de colores, imagenes, videos etc.',
    image: 'products-services.jpg',
  },
  {
    id: '03',
    title: 'Manos a la obra',
    description:
      'Con las metas definidas, pactamos una fecha de entrega para que puedas disfrutar de tu producto.',
    image: 'clients.jpg',
  },
]