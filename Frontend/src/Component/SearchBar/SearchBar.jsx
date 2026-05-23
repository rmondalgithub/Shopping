import React, { useContext,useEffect, useState } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import { assets } from '../../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

function SearchBar() {
     
    const {Search, setSearch,ShowSeach,setShowSearch} = useContext(ShpoContext);
    const location = useLocation();
    const [visible, setvisible] = useState(false);

    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setvisible(true);
      }else{
        setvisible(false);
      }
    },[location])
  return ShowSeach && visible? (
    
    <div className=' text-center'>
      <div  className={`inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-3 mx-5 rounded-md w-3/4 sm:w-1/2`}>
        <input value={Search} onChange={(event)=>setSearch(event.target.value)} type="text" placeholder='Search' className='flex-1 bg-inherit text-sm outline-none'/>
        <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
   
  ) : null
}

export default SearchBar
