import { signUpFormData } from '@/constants'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
// import { FiEyeOff } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { Button } from '../ui/button'

const SignUpForm = () => {
  return (
    <form
      id='signup-form'
      name='signup-form'
      className='col-center gap-5 bg-white rounded-2xl py-12'>
      {signUpFormData.map((item) => (
        <Label
          key={item.id}
          className='flex flex-col gap-1 relative w-[60%]'
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
          {item.type === 'password' && (
            <button
              type='button'
              className='absolute right-4 bottom-3 text-darkBlue'>
              <FiEye />
            </button>
          )}
        </Label>
      ))}
      <div className='w-[60%] row-center'>

      <Button variant={"outline"} className='w-full'>Cancelar</Button>
      <Button className='w-full'>Enviar</Button>
      </div>
    </form>
  )
}

export default SignUpForm
