import benefits from '@/assets/benefits.webp'
import benefits2 from '@/assets/benefits-2.webp'
import benefits3 from '@/assets/benefits-3.webp'
import { useTranslation } from 'react-i18next'
import { LocaleData } from '@/types'

const imgDictionary: { [key: number | string]: string } = {
  1: benefits2,
  2: benefits3,
  3: benefits,
}

const Benefits = () => {
  const { t } = useTranslation()
  const benefitsContent = t('benefits.content', { returnObjects: true })

  return (
    <section className='col-center justify-evenly w-full py-44 px-12 lg:gap-8'>
      <h1 className='title text-lg'>{t('benefits.title')}</h1>
      <div className='flex-col flex  items-center lg:flex-row justify-between [width:clamp(300px,100%,1500px)] mt-20'>
        {(benefitsContent as Array<LocaleData>).map((data) => (
          <div
            key={data.id}
            className='col-center w-[20em] text-center lg:mt-0 mt-16'>
            <figure className='w-[12em] h-[12em] rounded-md overflow-hidden'>
              <img
                loading='lazy'
                className='h-full w-full object-cover'
                src={imgDictionary[data.id]}
                alt='image-service'
              />
            </figure>
            <div>
              <h2 className='title text-lg'>{data.title}</h2>
              <p className='paragraph text-sm mt-2'>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
