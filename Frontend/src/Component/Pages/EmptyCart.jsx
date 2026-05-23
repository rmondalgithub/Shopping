import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { ShpoContext } from '../Context/ShpoContext'

function EmptyCart() {
    const{navigate} = useContext(ShpoContext);
  return (
    <div className="py-12 
                            px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 
                            bg-slate-100 flex justify-center">
              
              {/* Wide Rectangle Box */}
              <div className="bg-white shadow-md border border-slate-200 
                              flex flex-col justify-center items-center 
                              w-full max-w-6xl 
                              px-16 sm:px-20 md:px-24 lg:px-32 
                              py-6 sm:py-8 rounded-md">
                
                {/* Image */}
                <img 
                  className="h-44 sm:h-48 md:h-52 object-contain transition-transform duration-300 hover:scale-105"
                  src={assets.empty_cart} 
                  alt="Empty Cart" 
                />
        
                <p className="mt-2 text-lg font-semibold text-slate-700 px-10">Your Cart is Empty!</p>
                <p className="text-slate-500 text-sm">Add items to it now.</p>
                <button onClick={()=>navigate('/collection')} className='hover:scale-110 bg-pink-700 text-sm text-white mt-5 px-6 py-2 border-none rounded-md cursor-pointer'>Continue Shopping</button>
              </div>
            </div>
  )
}

export default EmptyCart
