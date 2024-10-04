import PrincigCard from '@/components/PrincigCard'
// import pricingData from '@/jsons/pricing.json'
import { IoIosInformationCircle } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import { LocalePricingData } from '@/types'

const Princing = () => {
  const { t } = useTranslation()
  const pricingContent = t('pricing', { returnObjects: true })

  return (
    <main className=' col-center min-h-dvh max-h-max gap-24 pb-28 pt-36 bg-secondary'>
      <header className='col-center [width:clamp(300px,80%,700px)] pl-8 sm:px-0'>
        <h1 className='title text-5xl'>{t('home.title')}</h1>
        <p className='paragraph sm:text-lg text-xl'>
          {t('home.description1')}
          <br></br>
          <br></br>
          {t('home.description2')}
        </p>
      </header>
      <section>
        <div className='row-center flex-wrap gap-10 mx-8 z-10'>
          {(pricingContent as Array<LocalePricingData>).map((item) => (
            <PrincigCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              listItems={item.services}
            />
          ))}
        </div>
        <div className='flex justify-center items-center gap-4 w-[70%] mx-auto mt-16 p-5 bg-white dark:bg-dark-neutral rounded-lg shadow-lg'>
          <IoIosInformationCircle
            size={80}
            className='text-blue-600'
          />
          <p className='text-gray-700 dark:text-white font-medium'>
            {t('home.description3')}
            <br />
            {t('home.description4')}
          </p>
        </div>
      </section>
    </main>
  )
}

export default Princing
