import React from 'react'
import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'

function CartItem( {item, itemIndex}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        console.log("Item Removed")
    }
  return (
    <div>

        <div>

            <div>
                <img src= {item.image} />
            </div>

            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div>
                    <p>{item.price}</p>
                    <div onClick={removeFromCart}>
                        <HiOutlineTrash />
                    </div>
                </div>
            </div>
        
        </div>


    </div>
  )
}

export default CartItem
