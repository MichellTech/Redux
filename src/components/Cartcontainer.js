import React from 'react'
import Cartitem from './Cartitem'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
function Cartcontainer() {
  const dispatch = useDispatch()
  const { cartItems, amount, total } = useSelector((store) => store.cart)
  if (amount < 1) {
    return (
      <div className='flex flex-col justify-center items-center  space-y-16'>
        <h1 className='text-5xl font-bold'> Your Bag</h1>
        <p className='text-2xl '> is currently empty</p>
      </div>
    )
  }
  return (
    <section className='flex flex-col justify-center items-center min-h-screen w-full space-y-10 py-10'>
      <header>
        <h1 className='text-5xl font-bold'>Your Bag</h1>
      </header>
      {/* items */}
      <div>
        {cartItems.map((item) => {
          return <Cartitem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <div className=' flex justify-between items-center w-[80vw] border-t-2 border-black'>
          <h1 className='text-xl'>Total</h1>
          <h1 className='text-xl'>${total}</h1>
        </div>
      </footer>
      <button
        onClick={() => dispatch(openModal())}
        className='border border-red-500 px-6 py-2 text-xl font-bold text-red-500 tracking-widest rounded-md'
      >
        {' '}
        Clear Cart
      </button>
    </section>
  )
}

export default Cartcontainer
