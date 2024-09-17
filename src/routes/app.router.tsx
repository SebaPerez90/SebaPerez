import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

export const AppRoutes = [
  {
    path: Routes .home,
    async lazy() {
      const module = await import('@/screens/Home')
      return { Component: module.default }
    },
  },
] as RouteObject[]
