import { Link, Outlet } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Routes } from '@/routes/paths'
import { Button } from '@/components/ui/button'

const AuthLayout = () => {
  return (
    <main className='col-center min-h-dvh max-h-max bg-[#efefef]'>
      <div className='w-[30em] relative [box-shadow:6px_34px_31px_0px_rgba(0,0,0,0.1)]'>
        <Link
          to={Routes.home}
          className='absolute -left-16'>
          <Button>
            <IoMdArrowRoundBack />
          </Button>
        </Link>
        <Outlet />
      </div>
    </main>
  )
}

export default AuthLayout
