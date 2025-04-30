import avatar_image from '@/assets/avatar-profile.webp'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section className='w-full h-[70em] sm:h-[50em] relative col-center gap-32'>
      <h1 className='title text-lg dark:text-white text-black'>
        {t('aboutMe.title')}
      </h1>
      <div className='max-[640px]:col-center row-center items-start gap-20'>
        <figure className='w-[15em] h-[15em] rounded-full overflow-hidden'>
          <img
            loading='lazy'
            className='h-full w-full object-cover'
            src={avatar_image}
            alt='avatar de desarrollador Seba'
          />
        </figure>
        <motion.p
          transition={{
            duration: 0.4,
          }}
          initial={{ y: 150, scale: 0.2, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className='w-[25em] paragraaph mt-6 sm:mt-0 text-xl sm:text-base text-black dark:text-ligth-soft'>
          {t('aboutMe.description1')}
          <br></br>
          <br></br>
          {t('aboutMe.description2')}
        </motion.p>
      </div>
    </section>
  )
}

export default AboutMe
