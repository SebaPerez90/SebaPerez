import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.router'
import AppLayout from '@/layouts/App.layout'
// import AppLayout from '../layouts/App.layout'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: AppRoutes,
  },
])
