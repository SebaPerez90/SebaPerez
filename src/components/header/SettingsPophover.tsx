import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const SettingsPophover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className=''>Preferencias</button>
      </PopoverTrigger>
      <PopoverContent className='w-80 border-slate-600 bg-slate-900'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Dimensions</h4>
            <p className='text-sm text-muted-foreground'>
              Set the dimensions for the layer.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SettingsPophover
