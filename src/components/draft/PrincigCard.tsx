import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Card className='animate-[appear-element_300ms_ease-out_forwards] bg-white dark:bg-dark-neutral flex flex-col  flex-grow-[0.3] sm:flex-grow-0 h-[38em] w-[20em] justify-between'>
      <div className='col-center items-start'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl text-center  title text-purple-500'>
            {title}
          </h2>
          <p className='paragraph text-lg sm:text-base'>{description}</p>
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
              <span className='font-medium text-base sm:text-sm text-black dark:text-white'>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='col-center gap-0 relative w-full mb-3'>
        <Link
          to={'Routes.contact'}
          className='w-full'>
          <Button className='py-7 sm:py-6 text-lg sm:text-base w-full dark:custom-btn2'>
            {t('home.description5')}
          </Button>
        </Link>
        <Link
          to={'Routes.faq'}
          className='text-base sm:text-sm absolute hover:duration-200 duration-200 hover:text-purple-500 underline hover:no-underline text-purple-600 dark:text-purple-400 font-semibold -bottom-6'>
          {t('home.description6')}
        </Link>
      </div>
    </Card>
  )
}

export default PrincigCard
