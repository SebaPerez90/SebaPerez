import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Routes } from '@/routes/paths'

interface PrincigCardProps {
  title: string
  description: string
  price: number
  listItems: string[]
}

const PrincigCard = ({
  title,
  description,
  listItems,
  price,
}: PrincigCardProps) => {
  return (
    <Card className='bg-white flex flex-col  flex-grow-[0.3] sm:flex-grow-0 h-[36em] w-[20em] justify-between'>
      <div className='col-center items-start'>
        <div className='flex flex-col gap-3'>
          <h2 className='title text-purple-500'>{title}</h2>
          <p className='paragraph'>{description}</p>
          <span className='title text-4xl font-bold w-full text-center'>
            ${price}
          </span>
        </div>
        <hr className='h-[2px] m-[0_auto] bg-gray-300 w-[90%]' />
        <ul className='flex flex-col gap-5'>
          {listItems.map((item, index) => (
            <li
              key={index}
              className='flex gap-1 items-center'>
              <span className='row-center w-5 h-5 bg-[#8731f6] rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 text-white'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'></path>
                  <title>check svg icon</title>
                </svg>
              </span>
              <span className='font-medium text-sm text-black'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='col-center gap-0 relative w-full mb-3'>
        <Button className='py-5 w-full'>Contáctame</Button>
        <Link to={Routes.faq} className='text-sm absolute hover:duration-200 duration-200 hover:text-purple-500 underline hover:no-underline text-purple-600 font-semibold -bottom-6'>¿Tienes dudas?</Link>
      </div>
    </Card>
  )
}

export default PrincigCard
