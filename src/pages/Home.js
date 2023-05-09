import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState( false )
  const [items, setItems] = useState( [] )

  async function fetchProductData() {
    setLoading(true)

    try{

      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data)

    }
    catch(error) {
      console.log("Error aya hua hai")
      setItems ( [] )
    }
    setLoading(false)
  }

  useEffect( () => {

    fetchProductData()
  }, [])

  return (
    <div>

      {
        loading ?  <Spinner /> :
        items.length > 0 ?
        (
          <div className='grid max-w-6xl xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 mx-auto gap-5 gap-y-8 my-7 min-h-[80vh]'>
            {
              items.map ( (items) => (

                <Product key={items.id} items= {items} />
                
              ))
            }
          </div>
        )
        :
        <div className='justify-center h-screen tems-center hflex '>
        <p>No Data Found</p>
        </div>
      }

    </div>
  )
}

export default Home