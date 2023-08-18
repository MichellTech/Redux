import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
function Modal() {
  const dispatch = useDispatch()
  return (
    <div className='bg-white space-y-8  px-6 py-10 max-w-xs'>
      <h1 className='text-xl  text-center'>
        Remove all items from your shopping cart
      </h1>
      <div className='flex justify-center items-center gap-4'>
        <button
          onClick={() => {
            dispatch(clearCart()), dispatch(closeModal())
          }}
          className='bg-green-500 px-4 py-1 text-white text-lg  rounded-md'
        >
          confirm
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          className='bg-red-500 px-4 py-1 text-white text-lg  rounded-md'
        >
          cancel
        </button>
      </div>
    </div>
  )
}

export default Modal
