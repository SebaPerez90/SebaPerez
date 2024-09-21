import Header from '@/components/header/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className='bg-black col-center'>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
