"use client"

interface ModalItemProps {
  onClick: () => void
  name: string
}

const ModalItem = ({onClick, name}: ModalItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-slate-300 transition font-semibold text-slate-950"
    >
      {name}
    </div>
  )
}

export default ModalItem