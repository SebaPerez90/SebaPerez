interface ShiningButtonProps {
  label: string
  clickEvent: () => void
}

const ShiningButton = ({ label, clickEvent }: ShiningButtonProps) => {
  return (
    <button
      type='button'
      className='shiningBtn'
      onClick={clickEvent}>
      {label}
    </button>
  )
}

export default ShiningButton
