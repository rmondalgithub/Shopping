import React, { useContext, useEffect, useState } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import Titel from '../Titel';
import { assets } from '../../assets/frontend_assets/assets';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';


const Cart = () => {

  const { products, currency, cartItem, updateQuantity,navigate,getCartcount} = useContext(ShpoContext);
  const [cartData, setCartData] = useState([]);
  const [seecart ,setSeeCart] =useState(null);
   useEffect(()=>{
    setSeeCart(getCartcount);
   },[cartItem])

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItem])
  if(!seecart){
    return(
      <EmptyCart/>
    );
  }
  return (
    <div className='px-10 sm:px-35'>
      <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Titel text1={'YOUR'} text2={'CART'} />
        </div>
        <div>
          {
            cartData.map((item, index) => {
              const ProductData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-16 sm:w-20' src={ProductData.image[0]} alt="" />
                    <div>
                      <p className='text-xl sm:text-lg font-medium'>{ProductData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{ProductData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border border-gray-400 bg-slate-50 rounded-md ' >{item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(event) => event.target.value === '' || event.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(event.target.value))} className='border rounded-md max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                  <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 sm:w-5 mr-4 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              )
            })
          }
        </div>
        <div className='flex justify-end items-end  p-6'>
          <div className='w-full sm:w-450px'>
            <CartTotal />
            <div className='w-full text-end mt-7'>
                <button onClick={()=>navigate('placeorder')} className='bg-black text-white px-10 py-3 rounded-md cursor-pointer text-sm'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
