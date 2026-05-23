import React, { useContext, useEffect, useState } from 'react'
import { ShpoContext } from './Context/ShpoContext'
import ProductItems from './ProductItems';
import Titel from './Titel';

function BestSeller() {
  const { products } = useContext(ShpoContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5))
  }, [])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Titel text1={"BEST"} text2={"SELLER"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
          Welcome to your one-stop shopping destination! Start your journey to smarter, happier shopping today!
        </p>
      </div>
      <div className='px-5 sm:px-35 pt-10 sm:pt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          
            BestSeller.map((item, index) => (
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          
        }
      </div>
    </div>
  )
}

export default BestSeller
