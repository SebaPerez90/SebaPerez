import Header from '@/components/header/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className='p-10 bg-black min-h-dvh'>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
