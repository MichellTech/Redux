import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Cartcontainer from '../components/Cartcontainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotal, getCartItems } from '@/features/cart/cartSlice'
import Modal from '../components/Modal'
function index() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <h1 className='text-5xl font-bold'>Loading....</h1>
      </div>
    )
  }
  return (
    <>
      {isOpen && (
        <div className='bg-black bg-opacity-80 absolute top-0 left-0 right-0 bottom-20 h-full z-40 flex flex-col justify-center items-center '>
          <Modal />
        </div>
      )}
      <Navbar />
      <Cartcontainer />
    </>
  )
}

export default index
