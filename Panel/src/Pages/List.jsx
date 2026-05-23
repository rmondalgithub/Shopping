import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currancy } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchlist = async()=>{
    try {

      const response = await axios.get(backendUrl +"/api/product/list",{headers:{token}})
      if(response.data.success){
        setList(response.data.products);
      }else{
          toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const removedProduct = async(id)=>{

    try {
      const response = await axios.post(backendUrl +"/api/product/remove",{id},{headers:{token}})

    if(response.data.success){
      toast.success(response.data.message)
      fetchlist();
    }else{
      toast.error(response.data.message)
    }
  }
      
     catch (error) {

      console.log(error)
      console.log(error.message)
      
    }
  }
  useEffect(()=>{
    fetchlist()
  },[])
  return (
    <>
    <p>All Products List</p>
    <div className='flex flex-col gap-2'>
          <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-2 py-1 border bg-gray-300 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
          </div>

          {
            list.map((item,index)=>(
              <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 px-2 py-1 border text-sm' key={index}>
                <img className='w-12' src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currancy}{item.price}</p>
                <p onClick={()=>removedProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                </div>

            )

            )
          }
    </div>
    </>
  )
}

export default List
