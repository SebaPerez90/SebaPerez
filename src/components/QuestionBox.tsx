import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'

const QuestionBox = () => {
  return (
    <section className='[width:clamp(350px,100%,500px)] col-center'>
      <h2 className='title text-center'>
        ¿No encontraste tu pregunta? ¡Pregúntanos directamente!
      </h2>
      <form className='w-full'>
        <Textarea
          placeholder='Escribí tu pregunta aquí...'
          rows={8}
          required
          className='resize-none'
        />
        <div className='grid grid-cols-2 gap-8 mt-4'>
          <button
            type='button'
            className='custom-btn'>
            Cancelar
          </button>
          <Button type='submit'>Enviar pregunta</Button>
        </div>
      </form>
    </section>
  )
}

export default QuestionBox
