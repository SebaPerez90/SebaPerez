import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { LuLogIn } from 'react-icons/lu'
import { Button } from '../ui/button'
import PrimaryButton from '../ui/PrimaryButton'

const Header = () => {
  return (
    <header className='flex items-center fixed w-full justify-between p-7 text-black backdrop-blur-[8px] z-50'>
      <div className='row-center gap-9'>
        <Link
          to={'/'}
          className='hover:text-slate-200 hover:duration-200 text-2xl pb-1 flex items-center gap-1 font-extrabold text-black'>
          <strong className='text-4xl -translate-y-[2px] text-[#b247ff]'>
            {'{'}
          </strong>
          CodeVibes
          <strong className='text-4xl -translate-y-[2px] text-[#bc5eff]'>
            {'}'}
          </strong>
        </Link>
        <NavLinks />
      </div>
      <div className='row-center'>
        <Link to={'/contact-me'}>
          <PrimaryButton label='Contáctame' />
        </Link>
        <Link
          to={'/log-in'}
          className='row-center'>
          <Button variant={'secondary'}>
            Inicia sesión
            <LuLogIn
              className='ml-1'
              size={20}
            />
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
