import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.router'
import AppLayout from '@/layouts/App.layout'
import AuthLayout from '@/layouts/Auth.layout'
import { AuthRotes } from './auth.router'
import { Routes } from './paths'
import FrecuentlyAskQuestion from '@/screens/FrecuentlyAskQuestion'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: AppRoutes,
  },
  {
    element: <AuthLayout />,
    children: AuthRotes,
  },
  {
    path: Routes.faq,
    element: <FrecuentlyAskQuestion />,
  },
])
