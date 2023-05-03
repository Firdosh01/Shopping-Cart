import React from 'react'

function Product( {items}) {
  
  return (
    <div>
      <div>
        <p>{items.title}</p>
      </div>

      <div>
        <p>{items.description}</p>
      </div>

      <div>
        <img src={items.image} alt="" />
      </div>

      <div>
        <p>{items.price}</p>
      </div>

      {
       false ?
        (
          <button >
            Remove Item
          </button>
        ) :
        (
          <button>
            Add To Cart
          </button>
        )
      }

    </div>
  )
}

export default Product
