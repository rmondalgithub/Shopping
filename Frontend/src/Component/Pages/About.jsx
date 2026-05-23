import React from 'react'
import Titel from '../Titel'
import { assets } from '../../assets/frontend_assets/assets'
import NewsLetterBox from '../NewsLetterBox'

const About = () => {
  return (
    <div className='px-10 sm:px-35'>
      <div>
        <div className='text-2xl text-center pt-8 '>
          <Titel text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-100 md:max-w-450' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Welcome to our shopping website, where convenience meets quality. We believe online shopping should be simple, secure, and enjoyable for everyone. Our platform offers a wide range of high-quality products at affordable prices, with reliable delivery and trusted customer support. Customer satisfaction is our top priority, and we are committed to providing a smooth, safe, and seamless shopping experience through modern design, easy navigation, and secure payment systems.</p>
                <p>We are more than just an online store — we are a platform built to make your everyday shopping easier and smarter. Our mission is to connect people with quality products at honest prices, all in one trusted place. From product selection to delivery, every step is designed with care, speed, and reliability in mind.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is to make online shopping simple, accessible, and trustworthy for everyone. We aim to provide high-quality products at fair prices while ensuring a seamless, secure, and enjoyable shopping experience. By combining technology, reliability, and customer-first service, we strive to build a platform where people can shop with confidence and convenience.</p>
            </div>
        </div>
        <div className='text-4xl py-4'>
            <Titel text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div  className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Quality is our commitment, not just a promise. Every product on our platform goes through strict quality checks to ensure it meets high standards of performance, safety, and reliability.</p>
                
            </div>
            <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Convenience is at the heart of everything we do. Our platform is designed to make shopping fast, easy, and stress-free—from browsing products to placing orders and receiving deliveries.</p>

            </div>
            <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Exceptional customer service is the foundation of our brand. We are dedicated to supporting our customers at every step of their shopping journey—from product discovery to post-purchase support.</p>
                
            </div>
        </div>
        <NewsLetterBox/>
      </div>
    </div>
  )
}

export default About
