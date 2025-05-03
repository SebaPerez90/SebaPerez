import avatar_image from '@/assets/avatar-profile.webp'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section className='w-full h-[70em] sm:h-[50em] relative col-center gap-32'>
      <h1 className='title text-lg dark:text-white text-black'>
        {t('aboutMe.title')}
      </h1>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-20'>
        <figure className='w-[15em] h-[15em] rounded-full overflow-hidden'>
          <img
            loading='lazy'
            className='h-full w-full object-cover'
            src={avatar_image}
            alt='avatar-profile-image'
          />
        </figure>
        <p className='w-[80%] md:w-[25em] paragraaph mt-6 sm:mt-0 dark:text-ligth-soft'>
          {t('aboutMe.description1')}
          <br></br>
          <br></br>
          {t('aboutMe.description2')}
        </p>
      </div>
    </section>
  )
}

export default AboutMe
