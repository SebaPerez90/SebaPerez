import { Card } from './ui/card'
import data from '@/jsons/about.json'

const AboutUs = () => {
  return (
    <section className='px-8 bg-[#212121] w-full col-center '>
      <h1 className='[line-height:7em] text-white text-xl font-medium'>
        ¿Quien soy?
      </h1>
      {data.map((item) => (
        <Card
          key={item.id}
          style={
            item.id === 2
              ? { alignSelf: 'flex-end' }
              : { alignSelf: 'flex-start' }
          }
          className='bg-black text-white max-w-[40em] p-8 row-center border-none'>
          <figure className='w-[10em] h-[10em] rounded-full overflow-hidden'>
            <img
              className='h-full w-full object-cover bg-[#b247ff]'
              src={item.image}
              alt='avatar-developer'
            />
          </figure>
          <p className='w-[25em]'>{item.description}</p>
        </Card>
      ))}
    </section>
  )
}

export default AboutUs
