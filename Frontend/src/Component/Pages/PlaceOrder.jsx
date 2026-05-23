import React, { useContext, useState } from 'react'
import Titel from '../Titel'
import CartTotal from './CartTotal'
import { assets } from '../../assets/frontend_assets/assets'
import { ShpoContext } from '../Context/ShpoContext'
import axios from 'axios'

const PlaceOrder = () => {

  const [method, setMethod] = useState('');

    const {navigate,backendUrl, token,cartItem,setOderData,setCartItem,delivery_fee,products,getcartamount} = useContext(ShpoContext)
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });
const onChangehandler = (event)  =>{
  const name = event.target.name
  const value = event.target.value

  setFormData(data =>({...data,[name]:value}))
}
const onSubminHandel = async(event) => {
  event.preventDefault()
    try {

        let orderItems =[]      
        for(const items in cartItem){
          for(const item in cartItem[items]){
            if(cartItem[items][item] > 0){
                const itemInfo = structuredClone(products.find(product => product._id === items))
                if(itemInfo){
                  itemInfo.size = item
                  itemInfo.quantity = cartItem[items][item]
                  orderItems.push(itemInfo)
                }
            }
          }
        }

        let orderData = {
          address:formData,
          items:orderItems,
          amount: getcartamount() + delivery_fee,
          paymentMethod: method
        }
        
        setOderData(orderData)
        const responce = await axios.post(backendUrl + '/api/order/place',orderData,{ headers: { token } })
          if(responce.data.success){
            setCartItem({})
            navigate('/order')
          }
        
    } catch (error) {
      
    }
  
  
  
}

  return (
    <div className='px-10 sm:px-35'>
      <form onSubmit={onSubminHandel}  className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-80vh border-t'>
        {/* Left Side */}
        <div className='flex flex-col gap-4 w-full sm:max-w-480px'>
          <div className='text-xl sm:text-2xl my-3'>
            <Titel text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input onChange={onChangehandler}  value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 ' name="firstName" type="text" placeholder='First Name'  />
            <input onChange={onChangehandler}  value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5' name="lastName" type="text" placeholder='Last Name'  />
          </div>
          <input onChange={onChangehandler}  value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-124 ' name="email" type="email" placeholder='Email Address'  />
          <input onChange={onChangehandler}  value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-124 ' name="street" type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input onChange={onChangehandler}  value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 ' name="city" type="text" placeholder='City'  />
            <input onChange={onChangehandler}  value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5' name="state" type="text" placeholder='State'  />
          </div>
          <div className='flex gap-3'>
            <input onChange={onChangehandler}  value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 ' name="zipcode" type="text" placeholder='Zipcode'  />
            <input onChange={onChangehandler}  value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5' name="country" type="text" placeholder='Country'  />
          </div>
          <input onChange={onChangehandler}  value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-124' name="phone" type="number" placeholder='Phone' />
        </div>
        {/* Right Side */}
        <div className='mt-8'>
          <div className='mt-8 min-w-100'>
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Titel text1={'PAYMENT'} text2={'METHOD'} />
            {/*Payment Method Selection */}
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={() => setMethod('phone_pay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer rounded-md bg-white shadow'>
                <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full  ${method === 'phone_pay' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>ONLINE PAYMENT</p>
              </div>



              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer rounded-md bg-white shadow'>
                <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='w-full text-end mt-7'>
              <button type='submit'  className='bg-black text-white px-10 py-3 rounded-md cursor-pointer text-sm'>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
