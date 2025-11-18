import React from 'react'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

const Modal = ({children,IsOpen,onClose,contact}) => {
  return createPortal(
    <>
    {IsOpen ? (
        <>
          <div
            className="fixed top-0 left-0 h-screen w-screen backdrop-blur z-40"
            onClick={onClose}
          />

          <div className="bg-gray-700 min-h-[200px] w-[25%] max-w-[95%] z-50 fixed 
                          top-1/2 left-1/2 
                          -translate-x-1/2 -translate-y-1/2 
                          rounded-xl shadow-lg p-2">
            <div
              className="flex justify-end p-4 cursor-pointer"
              onClick={onClose}
            >
              <X />
            </div>

            {children}
          </div>
        </>
      ) : null}
    </>,document.getElementById("modal-portal")
  )
}

export default Modal
