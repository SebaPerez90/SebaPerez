import SettingsPophover from "./SettingsPophover"

const test = 'cursor-pointer font-medium'
const NavLinks = () => {
  return (
    <nav>
      <ul className='row-center gap-10'>
        <li className={test}>Contacto</li>
        <li className={test}>Planes</li>
        <li className={test}>Servicios</li>
        <li className={test}><SettingsPophover /></li>
      </ul>
    </nav>
  )
}

export default NavLinks
