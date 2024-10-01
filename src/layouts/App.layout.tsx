import Footer from '@/components/core/Footer'
import Header from '@/components/header/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
