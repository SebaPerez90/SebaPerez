import PrincigCard from '@/components/PrincigCard'
import { IoIosInformationCircle } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import { LocalePricingData } from '@/types'
import { motion } from 'framer-motion'

const Princing = () => {
  const { t } = useTranslation()
  const pricingContent = t('pricing', { returnObjects: true })

  return (
    <main
      id='pricing-section'
      className=' col-center min-h-dvh max-h-max gap-24 pb-28 pt-36 bg-secondary'>
      <header className='col-center [width:clamp(300px,80%,700px)] xl:w-[1300px] pl-8 sm:px-0'>
        <motion.h1
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className='title text-5xl'>
          {t('home.title')}
        </motion.h1>
        <motion.p
          transition={{
            duration: 1.5,
            delay: 0.4,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='paragraph text-xl'>
          {t('home.description1')}
          <br></br>
          <br></br>
          {t('home.description2')}
        </motion.p>
      </header>
      <section>
        <div className='row-center flex-wrap gap-16 mx-8 z-10'>
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
            color='#2563eb'
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
