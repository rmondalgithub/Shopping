import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShpoContext } from '../Context/ShpoContext'
import { ShoppingCart, User, ShoppingBag, LogOut } from "lucide-react";


const Naveber = () => {
  const [vesable, setvesable] = useState(false)
  const [showProfile, setShowProfile] = useState(false);
  const { setShowSearch, getCartcount, navigate,logOut,token } = useContext(ShpoContext);
  
  return (
    <div className='bg-white shadow-md'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to='/'> <h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Rako</span>Mart</h1>
          </Link>



          {/* Desktop Menu */}
          <ul className=' hidden sm:flex gap-10 text-xl text-gray-700 '>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
              <p className='hover:scale-110 hover:text-pink-400'>Home</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
              <p className='hover:scale-110 hover:text-pink-400'>Collection</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <p className='hover:scale-110 hover:text-pink-400'>About</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <p className='hover:scale-110 hover:text-pink-400'>Contact</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
          </ul>


          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <img onClick={() => setShowSearch(true)} className='w-5 cursor-pointer ' src={assets.search_icon} alt="" />

            {/* Profile Dropdown */}

            <div className="relative group">

              {/* Profile Button */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowProfile(!showProfile);
                }}
                className="flex flex-col items-center cursor-pointer"
              >
                <User  className="w-6 h-6 text-slate-700 group-hover:text-pink-700 transition" />
                <p className="text-xs font-medium group-hover:text-pink-700 transition">
                  Profile
                </p>
              </div>

              {/* Dropdown */}
              
                
                <div
                className={`
      absolute left-1/2 -translate-x-1/2 pt-4 z-50

      ${showProfile ? "block" : "hidden"}    

      md:hidden                               
      md:group-hover:block                   
    `}
              >
                <hr className="w-1/2 mx-auto h-1 bg-pink-700 border-none" />

                <div className="flex flex-col gap-2 w-56 px-5 py-3 bg-slate-100 rounded shadow">

                  <p>Hello User</p>

                  <button
                    onClick={()=>navigate('/login')}
                    className="bg-pink-700 text-white py-2 rounded-md mt-3 cursor-pointer"
                  >
                    Sign Up
                  </button>

                  <hr />

                  <div
                    onClick={() => navigate('/order')}
                    className="flex items-center gap-3 cursor-pointer py-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>My Orders</span>
                  </div>

                  <hr />

                  <div onClick={()=>logOut()} className="flex items-center gap-3 cursor-pointer py-2">
                    <LogOut className="w-5 h-5" />
                    <span>LogOut</span>
                  </div>

                </div>
              </div>

              
            </div>

            {/* Cart */}
            <Link to='/cart' className='relative'>
              <div >
                <ShoppingCart className="w-6 h-6 text-slate-700" />
                <p className='text-xs font-medium'>Cart</p>
              </div>
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 aspect-square rounded-full bg-red-500 text-white text-[8px]">
                {getCartcount()}
              </span>
            </Link>
          </div>


          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            alt=""
            className="w-5 sm:hidden cursor-pointer"
            onClick={() => setvesable(true)}
          />
        </div>
      </div>


      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white overflow-hidden transition-all duration-300 ${vesable ? 'w-full' : 'w-0'
          }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-4 cursor-pointer"
            onClick={() => setvesable(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setvesable(false)} className="py-3 pl-4 border" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setvesable(false)} className="py-3 pl-4 border" to="/collection">
            Collection
          </NavLink>
          <NavLink onClick={() => setvesable(false)} className="py-3 pl-4 border" to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setvesable(false)} className="py-3 pl-4 border" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Naveber
