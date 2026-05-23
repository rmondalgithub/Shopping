import React, { useContext, useEffect, useState } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import { assets } from '../../assets/frontend_assets/assets';
import Titel from '../Titel';
import ProductItems from '../ProductItems';

const Collaction = () => {
  const { products,Search ,ShowSearch } = useContext(ShpoContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [FilterProducts , setFilterProducts] = useState([]);
  const [Category , setCategory] = useState([]);
  const [SubCategory , setSubCategory] = useState([]);
  const [sortType , setsortType] = useState('relavent');
   
  const toggleCategory =(event)=>{
      if(Category.includes(event.target.value)){
        setCategory(prev=>prev.filter(item=>item !== event.target.value))
      }else{
        setCategory(prev=>[...prev,event.target.value])
      }
  }
  const toggleSubCategory =(event)=>{
    if(SubCategory.includes(event.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !==event.target.value))
    }else{
      setSubCategory(prev=>[...prev,event.target.value])
    }
  }
  const applyFilter = () => {
  let productscopy = products.slice();

  if(Search ){
    productscopy= productscopy.filter(
      item=> item.name.toLowerCase().includes(Search.toLowerCase())
    )
  }

  if (Category.length > 0) {
    productscopy = productscopy.filter(
      item => Category.includes(item.category)
    );
  }
  if (SubCategory.length > 0) {
    productscopy = productscopy.filter(item =>
      SubCategory.includes(item.subCategory)
    );
  }

  setFilterProducts(productscopy);
};
  const sortproducts =()=>{
    let fpcopy = products.slice();
     switch (sortType) {
      case 'low-high':
          setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)))
       break;
      case 'high-low':
          setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)))
       break;
      default:
        applyFilter();
        break;
     }
  }
  
  useEffect(()=>{
    applyFilter();
  },[Search,Category,SubCategory,ShowSearch,products])

  useEffect(()=>{
    sortproducts();
  },[sortType])
  
  return (
    <div className='px-10 sm:px-35 flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>
      {/*filter options Left Side*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS
          <img className={`h-3 sm:hidden ${ShowFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Men" onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Women" onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Kids" onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/*Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-5 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
        {/*Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Titel text1={'ALL'} text2={'COLLECTION'}/>
              {/*Product Shot */}
              <select onChange={(event)=>setsortType(event.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relavent">Sort By: Relavent</option>
                <option value="low-high">Sort By: Low to High</option>
                <option value="high-low">Sort By: High to Low</option>
              </select>
          </div>
          {/* Map Product */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              FilterProducts.map((item,index)=>(
                <ProductItems key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Collaction
