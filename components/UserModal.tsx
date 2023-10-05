"use client"

import { useCallback, useState } from "react"
import ModalItem from "./ModalItem"

const UserModal = () => {

  const [open, setOpen] = useState(false)

  const toggleOpen = useCallback(() => {
      setOpen((value) => !value)
    },
  [],)
  
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-slate-300 transition cursor-pointer ease-in duration-500"
        >
          Join Us
        </div>
      </div>
      {open && (
        <div className="absolute rounded-md shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <ModalItem
                onClick={() => {}}
                name="Sign In"
              />
              <ModalItem
                onClick={() => {}}
                name="Sign Up"
              />
            </>
          </div>
        </div>
        )}
    </div>
  )
}

export default UserModal