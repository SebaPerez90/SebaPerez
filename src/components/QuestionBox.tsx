import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'

const QuestionBox = () => {
  return (
    <section className='[width:clamp(320px,100%,600px)] col-center gap-16 px-12'>
      <h2 className='title text-center'>
        ¿No encontraste tu pregunta? ¡Pregúntanos directamente!
      </h2>
      <form
        id='question-form'
        name='question-form'
        className='w-full col-center gap-0'>
        <Label className='w-full'>
          <span className='font-bold text-lg'>Correo electrónico</span>
          <Input className='resize-none bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500 my-1' />
          Tu correo es necesario para poder responderte adecuadamente
        </Label>
        <Textarea
          id='question'
          placeholder='Escribí tu pregunta aquí...'
          rows={5}
          required
          className='mt-8 resize-none bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
        />
        <div className='grid grid-cols-2 mt-4 gap-5 w-full'>
          <button
            type='button'
            className='custom-btn w-full'>
            Cancelar
          </button>
          <Button
            type='submit'
            className='custom-btn2 w-full text-white'>
            Enviar pregunta
          </Button>
        </div>
      </form>
    </section>
  )
}

export default QuestionBox
