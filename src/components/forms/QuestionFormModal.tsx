import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import FAQForm from '@/components/forms/FAQForm'
import { DialogTitle } from '@radix-ui/react-dialog'

export function QuestionFormModal({
  description,
  modalLabel,
}: {
  description: string
  modalLabel: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'lg'}>{description}</Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className='flex flex-col gap-10 text-foreground'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold'>
            {modalLabel}
          </DialogTitle>
        </DialogHeader>
        <FAQForm />
      </DialogContent>
    </Dialog>
  )
}
