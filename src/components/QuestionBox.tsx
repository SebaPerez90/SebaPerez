import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'

const QuestionBox = () => {
  return (
    <section className='[width:clamp(320px,100%,700px)] col-center px-12'>
      <h2 className='title text-center'>
        ¿No encontraste tu pregunta? ¡Pregúntanos directamente!
      </h2>
      <form
        id='question-form'
        name='question-form'
        className='w-full'>
        <Textarea
          id='question'
          placeholder='Escribí tu pregunta aquí...'
          rows={8}
          required
          className='resize-none bg-white dark:bg-dark-neutral border border-purple-400 focus:border-purple-600 placeholder:opacity-70 placeholder:italic placeholder-gray-500'
        />
        <div className='grid grid-cols-2 gap-8 mt-4'>
          <button
            type='button'
            className='custom-btn'>
            Cancelar
          </button>
          <Button type='submit' className='custom-btn2'>Enviar pregunta</Button>
        </div>
      </form>
    </section>
  )
}

export default QuestionBox
