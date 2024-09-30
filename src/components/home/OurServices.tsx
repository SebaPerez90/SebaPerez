import { MdDevices } from 'react-icons/md'
import { SlEarphonesAlt } from 'react-icons/sl'
import { MdDesignServices } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { LocaleData } from '@/types'
import { Card } from '../ui/card'
import { useTranslation } from 'react-i18next'

const iconDictionary: { [key: number | string]: JSX.Element } = {
  1: <FaLaptopCode size={43} />,
  2: <MdDesignServices size={43} />,
  3: <SlEarphonesAlt size={43} />,
  4: <MdDevices size={43} />,
}

const OurServices = () => {
  const { t } = useTranslation()
  const services = t('ourServices.content', { returnObjects: true })

  return (
    <section
      id='#services'
      className='w-full bg-secondary col-center gap-20 py-36'>
      <h1 className='title text-lg'>{t('ourServices.title')}</h1>
      <div className='col-center md:grid grid-cols-2 place-items-center gap-12'>
        {(services as Array<LocaleData>).map((item) => (
          <Card
            key={item.id}
            className='w-[25em] p-5 bg-white shadow-neutral rounded-lg row-center '>
            <div className='flex flex-col gap-1'>
              <div className='row-center justify-between'>
                <h3 className='title text-xl text-balance'>{item.title}</h3>
                <span className='text-purple-500 p-3 rounded-md bg-secondary'>
                  {iconDictionary[item.id]}
                </span>
              </div>
              <p className='paragraph text-sm'>{item.description}</p>
              <button className='mt-5 custom-btn w-max'>
                {t('ourServices.action')}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default OurServices
