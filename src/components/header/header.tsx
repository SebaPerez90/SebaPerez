import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import { LuLogIn } from 'react-icons/lu'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex items-center fixed w-full justify-between p-7 text-white'>
      <div className='row-center gap-9'>
        <Link
          to={'/'}
          className='text-2xl pb-1 flex items-center gap-1 font-extrabold text-white'>
          {/* <strong className='text-4xl -translate-y-[2px] text-[#bc5eff]'>
            {'{'} */}
          {/* </strong> */}
          CodeVibes
          {/* <strong className='text-4xl -translate-y-[2px] text-[#bc5eff]'> */}
          {/* {'}'} */}
          {/* </strong> */}
        </Link>
        <NavLinks />
      </div>
      <div className='row-center'>
        <Link to={'/contact-me'}>
          <Button
            // size={'lg'}
            variant={'destructive'}>
            Contáctame
          </Button>
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
