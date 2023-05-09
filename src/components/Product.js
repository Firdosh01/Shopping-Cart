import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {toast} from 'react-hot-toast'
import {add, remove} from '../redux/Slices/CartSlice'
import  { toast } from 'react-hot-toast';

function Product( {items}) {

  const {cart} = useSelector( (state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(items));
    toast.success('Item added to Cart');
  }

  const removeFromCart = () => {
    dispatch(remove(items.id));
    toast.error("Item removed from Cart");
  }

  
  return (
    <div className='flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 transition duration-200 ease-in hover:scale-110 rounded-xl outline'>
      <div>
        <p className='text-gray-700 '>{items.title.split( " ").slice(0,3).join( " ") + "..."}</p>
      </div>

      <div>
        <p className='w-40 font-normal text-gray-400 text-[10px] text-left'>{items.description.split( " ").slice(0,10).join( " ") + "..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={items.image} alt="" className='w-full h-full' />
      </div>

      <div className='flex justify-between gap-12'>
        <div>
        <p className='font-semibold text-green-600'>${items.price}</p>
      </div>

      {
        cart.some( (p) => p.id == items.id) ?
        (
          <button className='font-semibold text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white' onClick={removeFromCart}>
            Remove Item
          </button>
        ) :
        (
          <button className='font-semibold text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white' onClick={addToCart}>
            Add To Cart
          </button>
        )
      }

    </div>
    </div>
  )
}

export default Product
