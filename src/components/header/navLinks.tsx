import SettingsPophover from './SettingsPophover'

const linksStyles =
  'cursor-pointer font-medium relative before:absolute before:h-0 before:rounded-full before:w-0 before:top-[35%] before:left-[45%] hover:before:w-[2em] hover:before:[transform:translate(-0.2em,-0.3em)] hover:before:h-[2em] hover:before:duration-300 hover:before:[scale:3.5] duration-300 before:bg-[#b247ff] before:-z-10 z-10 rounded-full overflow-hiddene px-3 py-2 overflow-hidden'

const NavLinks = () => {
  return (
    <nav>
      <ul className='row-center gap-10'>
        <li className={linksStyles}>
          Contacto
        </li>
        <li className={linksStyles}>Planes</li>
        <li className={linksStyles}>Servicios</li>
        <li className={linksStyles}>
          <SettingsPophover />
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
