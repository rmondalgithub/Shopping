import React from 'react'
import Titel from '../Titel'
import { assets } from '../../assets/frontend_assets/assets'
import NewsLetterBox from '../NewsLetterBox'

const Contact = () => {
  return (
    <div className='px-10 sm:px-35'> 
      <div>
            <div className='text-2xl text-center pt-10'>
                <Titel text1={'CONTACT'} text2={'US'}/>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                  <img className='w-100 md:max-w-450' src={assets.contact_img} alt="" />
                  <div className='flex flex-col justify-center items-start gap-6'>
                      <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                      <p className='text-gray-500'> Gadamara Hat <br/>Gadamara, North-24-Parganas</p>
                      <p className='text-gray-500'>Tel:+91 9883469775<br/>Email:mondalrakib9774@gmail.com</p>
                      <p className='font-semibold text-xl text-gray-600'>Careers at Rakomart</p>
                      <p>Learn more about our teams and job openings</p>
                      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                  </div>
            </div>
            <NewsLetterBox/>
    </div>
    </div>
  )
}

export default Contact
