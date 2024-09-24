import { aboutData } from '@/constants/index'

const AboutUs = () => {
  return (
    <section className='col-center gap-36 [width:clamp(350px,75%,1200px)] py-20'>
      <h2 className='title text-lg'>¿Como vamos a trabajar?</h2>
      {aboutData.map((data) => (
        <div
          key={data.id}
          style={
            data.id === '02'
              ? { alignSelf: 'flex-end', flexDirection: 'row-reverse' }
              : { alignSelf: 'flex-start' }
          }
          className='row-center'>
          <span
            style={{ fontFamily: 'Poppins, sans-serif' }}
            className='text-9xl font-bold'>
            {data.id}
          </span>
          <div className='w-[22em]'>
            <h3 className='title'>{data.title}</h3>
            <p className='paragraph mt-4'>{data.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default AboutUs
