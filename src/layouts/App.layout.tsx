import Header from '@/components/header/header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className='p-10 bg-black min-h-dvh max-h-max col-center'>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
