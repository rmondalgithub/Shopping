import React, { useContext, useEffect, useState } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import Titel from '../Titel';
import EmptyOrder from './EmptyOrder';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {

  const { currency, backendUrl, token } = useContext(ShpoContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorder', {}, { headers: { token } })
      if (response.data.success) {
        let allOrderItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['date'] = order.date
            item['status']=order.status
            allOrderItem.push(item)
          })
        })
        setOrderData(allOrderItem.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  if (orderData.length === 0) {
    return (
      <div >
        <EmptyOrder />
      </div>
    );
  }
  return (
    <div className='px-10 sm:px-35'>
      <div className=' pt-16'>
        <div className='text-2xl'>
          <Titel text1={'MY'} text2={'ORDER'} />
        </div>
        {orderData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  border-t text-gray-700 border-b py-4">
            <div className='flex items-start gap-6 text-sm'>
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-20 object-cover rounded"
              />
              <div >
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity : {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className='text-gray-400'> Date: {new Date(item.date).toLocaleDateString()}</p>
              </div>
        
            </div> 
<div className="flex items-center justify-between  gap-4   py-4">
  
  {/* Delivery Status */}
  <div className="px-4 py-1.5 bg-yellow-100 text-yellow-700 
                  text-sm font-medium rounded-full whitespace-nowrap">
    {item.status}
  </div>

  {/* Track Button */}
  <button className="px-5 py-2 bg-blue-600 text-white 
                     text-sm font-medium rounded-lg 
                     hover:bg-blue-700 transition duration-200 
                     shadow-sm whitespace-nowrap">
    Track Order
  </button>

</div>

      </div>   

        ))}

      </div>

    </div>

  )
}

export default Order
