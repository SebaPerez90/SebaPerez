import { useState } from 'react'

const HamburguerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      aria-label='button-menu'
      className='flex flex-col items-end gap-[5px] cursor-pointer z-50 w-10'
      onClick={() => {
        setIsOpen(!isOpen)
      }}>
      <span
        id='line_a'
        className={`${
          isOpen ? 'w-9' : 'w-7'
        } relative h-[2.7px] bg-light-500 rounded-full duration-200  transition-all bg-black`}
      />
      <span
        id='line_a'
        className={`${
          isOpen ? 'w-7' : 'w-5'
        } relative h-[2.5px] bg-light-500 rounded-full duration-200  transition-all bg-black`}
      />
      <span
        id='line_c'
        className={`${
          isOpen ? 'w-3' : 'w-7'
        } relative h-[2.5px] bg-light-500 rounded-full duration-200  transition-all bg-black`}
      />
    </div>
  )
}

export default HamburguerButton
/**
 * 
 *   const openMenu = () => {
    const line_a = document.getElementById('line_a')
    const line_b = document.getElementById('line_b')
    const line_c = document.getElementById('line_c')

    // this is to apply blur effect to the viewport
    const main_section = document.getElementById('main-section')
    const footer_section = document.getElementById('footer-section')
    const pricing_section = document.getElementById('pricing-section')

    if (isOpen === false) {
      line_a!.classList.add('[rotate:45deg]', 'top-2')
      line_b!.classList.add('opacity-0')

      // this is to apply blur effect to the viewport
      line_c!.classList.add('[rotate:-45deg]', 'bottom-2')
      main_section?.classList.add('[filter:blur(5px)]')
      pricing_section?.classList.add('[filter:blur(5px)]')
      footer_section?.classList.add('[filter:blur(5px)]')
      setIsOpen(true)
    } else {
      line_a!.classList.remove('[rotate:45deg]', 'top-2')
      line_b!.classList.remove('opacity-0')

      // this is to apply blur effect to the viewport
      line_c!.classList.remove('[rotate:-45deg]', 'bottom-2')
      main_section?.classList.remove('[filter:blur(5px)]')
      pricing_section?.classList.remove('[filter:blur(5px)]')
      footer_section?.classList.remove('[filter:blur(5px)]')
      setIsOpen(false)
    }
  }
 * 
 */
