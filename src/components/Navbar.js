import React from 'react'
import { BsBag } from 'react-icons/bs'
import { useSelector } from 'react-redux'
function Navbar() {
  const amount = useSelector((store) => store.cart.amount)
  const { cartItems } = useSelector((store) => store.cart)
  // console.log(cartItems)
  return (
    <nav>
      <div className='bg-blue-500 py-4 px-10 flex justify-between items-center'>
        {' '}
        <h1 className='text-white font-bold text-3xl'>Redux Tool Kit</h1>
        <div className='relative'>
          <BsBag className='text-white text-5xl font-bold ' />
          <div className=' bg-blue-300 rounded-full flex justify-center absolute -top-2 w-6 h-6 right-0 items-center'>
            <h1 className='text-white '>{amount}</h1>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
