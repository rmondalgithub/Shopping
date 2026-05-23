import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { ShpoContext } from '../Context/ShpoContext'

function EmptyOrder() {
    const {navigate} = useContext(ShpoContext);
  return (
    <div className="py-12 
                    px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 
                    bg-pink-100 flex justify-center">
      
      {/* Wide Rectangle Box */}
      <div className="bg-white shadow-md border border-slate-200 
                      flex flex-col justify-center items-center 
                      w-full max-w-6xl 
                      px-16 sm:px-20 md:px-24 lg:px-32 
                      py-6 sm:py-8 rounded-md">
        
        {/* Image */}
        <img 
          className="h-44 sm:h-48 md:h-52 object-contain transition-transform duration-300 hover:scale-105"
          src={assets.Empty_order} 
          alt="Empty Order" 
        />
        <h1 className='font-bold text-xl'>No Order Yet</h1>
        <p className=" mt-2 text-sm">Your order list is currently empty.</p>
        <p className=" text-sm">Explore our collection and find something you love today.</p>
        <button onClick={()=>navigate('/collection')} className=' mt-5 hover:scale-110 bg-pink-400 text-sm text-white  px-6 py-3 border-none rounded-md cursor-pointer'>Start Shopping</button>
      </div>
    </div>

  )
}

export default EmptyOrder
