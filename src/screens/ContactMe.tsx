import ContactMeForm from '@/components/ContactMeForm'

const ContactMe = () => {
  return (
    <main className='py-40 col-center gap-16 bg-secondary dark:bg-dark-neutral'>
      <header className='max-w-[700px]'>
        <h1 className='title text-4xl text-center'>Unite a la expanción digital hoy</h1>
        <p className='paragraph mt-4'>
          Enviame un mensaje sobre tu proyecto y en la brevedad me voy a estar
          comunicando con vos para coordinar como vamos abordar tu proyecto.
          También podes reservar directamente una llamada por google meet
        </p>
      </header>
      <ContactMeForm />
    </main>
  )
}

export default ContactMe
