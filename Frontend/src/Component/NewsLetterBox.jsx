import React from 'react'

function NewsLetterBox() {
  const onSubmitHandler =(event)=>{
        event.preventDefault();
  }
  return (
    <div className='text-center px-10 sm:px-35 pt-10'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-2'>
          Buy more, save more—discover limited-time offers on your favorite products today!
        </p>
        
        <form onSubmit={onSubmitHandler} className='w-full sm-w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input className=' w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
           <button type='submit'className=' cursor-pointer bg-black text-white py-4 px-10 text-xs'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
