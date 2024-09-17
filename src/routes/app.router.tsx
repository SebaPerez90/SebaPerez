import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

export const AppRoutes = [
  {
    path: Routes.home,
    async lazy() {
      const module = await import('../screens/home')
      return { Component: module.default }
    },
  },
] as RouteObject[]
