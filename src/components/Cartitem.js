import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineUp } from 'react-icons/ai'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '@/features/cart/cartSlice'
function Cartitem({ id, img, title, price, amount }) {
  const dispatch = useDispatch()
  return (
    <section className='w-[80vw]'>
      <div>
        {/* info */}
        <div>
          {/* text */}
          <div className='flex justify-between items-center '>
            <div className='space-y-1'>
              <h1 className='text-2xl'>{title}</h1>
              <h1 className='xl'>${price}</h1>
              <button
                onClick={() => {
                  dispatch(removeItem(id))
                }}
                className='text-lg font-bold  '
              >
                remove
              </button>
            </div>
            {/* unit */}
            <div className='flex flex-col items-center'>
              <button
                onClick={() => {
                  dispatch(increase(id))
                }}
              >
                <AiOutlineUp />
              </button>

              <h1 className='font-bold'>{amount}</h1>
              <button
                onClick={() => {
                  if (amount === 1) {
                    dispatch(removeItem(id))
                    return
                  }
                  dispatch(decrease(id))
                }}
              >
                <AiOutlineDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cartitem
