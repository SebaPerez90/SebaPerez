import { projectRequest } from '@/constants'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const ContactMeForm = () => {

  return (
    <form
      id='signup-form'
      name='signup-form'
      className='col-center rounded-2xl [box-shadow:6px_34px_31px_0px_rgba(0,0,0,0.1)] gap-5 bg-white w-[40em] py-12'>
      {projectRequest.map((item) => (
        <Label
          key={item.id}
          className='flex flex-col gap-1 relative w-[80%]'
          htmlFor={item.name}>
          {item.label}
          <Input
            id={item.id}
            autoComplete='on'
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className='placeholder:italic placeholder:opacity-50 placeholder:font-normal'
          />
        </Label>
      ))}
      <Label
        htmlFor='message'
        className='flex flex-col gap-1 relative w-[80%]'>
        Cuentame un poco sobre tu idea.
        <Textarea id='message' className='min-h-[20em]' />
      </Label>

      <div className='w-[80%] row-center'>
        <Button
          variant={'outline'}
          className='w-full'>
          Cancelar
        </Button>
        <Button className='w-full'>Enviar</Button>
      </div>
    </form>
  )
}

export default ContactMeForm
