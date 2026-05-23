import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Navebar = ({setToken}) => {
  return (
    <div className='flex items-center py-5 px-[4%] justify-between'>
            <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
            <button onClick={()=>setToken('')} className='cursor-pointer bg-gray-600 text-white px-5 py-3 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm'>Log Out</button>
            
         </div>
  )
}

export default Navebar
