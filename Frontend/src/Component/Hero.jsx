import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='px-5 sm:px-35 pt-10 sm:pt-10'>
    <div className='flex flex-col sm:flex-row border border-gray-300 rounded-md '>
      {/*Hero left*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>

            <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex  items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHP NOW</p>
            <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
          </div>
        </div>
       
      </div>
      {/*Hero right side*/}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
    </div>
  )
}

export default Hero
