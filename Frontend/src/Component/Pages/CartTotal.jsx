import React, { useContext } from 'react'
import { ShpoContext } from '../Context/ShpoContext'
import Titel from '../Titel';

function CartTotal() {

  const {currency,delivery_fee,getcartamount} = useContext(ShpoContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Titel text1={'CART'} text2={'TOTAL'}/>
      </div>
      <div className='flex flex-col mt-2 gap-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getcartamount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
              <p>Shopping Fee</p>
              <p>{currency}{delivery_fee}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getcartamount()=== 0 ? 0:getcartamount()+delivery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
