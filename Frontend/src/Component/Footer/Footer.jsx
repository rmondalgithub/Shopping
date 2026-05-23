import React from 'react'

function Footer() {
    const getScrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    };
    return (
        <div>
            <button onClick={()=>getScrollTop()} className='mt-10 bg-[#37475A] w-full py-3 text-sm text-white cursor-pointer'>Back to top</button>
        <div className='bg-[#232F3E]'>
        <div className='px-10 sm:px-35'>
            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm '>
                <div>
                    <h1 className='font-bold text-3xl mt-10'><span className='text-red-500 font-serif'>Rako</span>Mart</h1>
                    <p className='w-full md:w-2/3 text-white mt-5'>We are committed to providing quality products, secure payments, and fast delivery to ensure the best shopping experience for our customers.</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5 mt-10 text-white'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5 mt-10 text-white'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li>+91-9883469774</li>
                        <li>mondalrakib9774@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div >
        <hr className='mt-3'/>
        <p className='py-5 text-sm text-center text-white'>Copyright 2026@ rakomart.com - All Right Reserved.</p>
      </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
