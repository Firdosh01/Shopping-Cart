import React from 'react'
import { HiOutlineTrash } from "react-icons/hi2";

function CartItem( {item, itemIndex}) {
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
                    <div>
                        <HiOutlineTrash />
                    </div>
                </div>
            </div>
        
        </div>


    </div>
  )
}

export default CartItem
