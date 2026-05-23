import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currancy } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin_assets/assets'

const Order = ({token}) => {
  const [orders,setOrders] = useState([])
  const fetchAllOrders = async ()=>{
    if(!token){
      return null
    }
    try {
      const responce = await axios.post(backendUrl +'/api/order/list',{},{headers:{token}})
     if(responce.data.success){
      setOrders(responce.data.orders)
     }else{
        toast.error(responce.data.message)
     }
    } catch (error) {
      toast.error(error.message)
    }
  }
   const statusHandel = async (event,orderId)=>{
    try {
      const responce = await axios.post(backendUrl+"/api/order/status",{orderId,status:event.target.value},{headers:{token}})
      if(responce){
        toast.success("Status Updated");
      fetchAllOrders();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
   }
  useEffect(()=>{
    fetchAllOrders()
  },[token])

 
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
  <h3 className="text-3xl font-bold mb-8 text-gray-800">
    My Orders
  </h3>

  <div className="space-y-8">
    {orders.map((order, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
      >
        <div className="flex flex-col lg:flex-row gap-6 justify-between">

          {/* Left Section */}
          <div className="flex gap-5">
            <img
              src={assets.parcel_icon}
              alt="parcel"
              className="w-20 h-20 object-contain"
            />

            <div className="space-y-2">
              {/* Items */}
              <div>
                {order.items.map((item, i) => (
                  <p key={i} className="text-gray-700 text-sm">
                    {item.name} × {item.quentity}
                    <span className="ml-2 px-2 py-1 text-xs bg-gray-100 rounded-md">
                      {item.size}
                    </span>
                    {i !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>

              {/* Name */}
              <p className="font-semibold text-gray-900">
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* Address */}
              <div className="text-sm text-gray-500">
                <p>{order.address.street}</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.zipcode}
                </p>
              </div>

              {/* Phone */}
              <p className="text-sm text-gray-600">
                📞 {order.address.phone}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between items-start lg:items-end gap-4">

            {/* Status */}
            <span
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Shipped"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.status}
            </span>

            {/* Order Info */}
            <div className="text-sm text-gray-600 text-left lg:text-right">
              <p>
                <span className="font-medium">Order Date:</span>{" "}
                {new Date(order.date).toDateString()}
              </p>
              <p>
                <span className="font-medium">Payment:</span>{" "}
                {order.payment ? "Paid" : "Pending"}
              </p>
              <p>
                <span className="font-medium">Total:</span> {currancy}{order.amount}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <select  className="appearance-none bg-orange-100 rounded-xl px-4 py-2 border border-blue-300 text-orange-400 cursor-pointer" onChange={(event) => statusHandel(event, order._id)} value={order.status}>
                <option value="Order Placed">Order placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>

              {order.status !== "Delivered" && (
                <button className="px-4 py-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 rounded-lg">
                  Cancel
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Order
