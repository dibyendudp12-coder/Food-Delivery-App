import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='place-order'>
    <div className="place-order-left">
    <p className="title">Delivery information</p>
    <div className="multi-feilds">
      <input type="text" placeholder='First name' />
      <input type="text" placeholder='Second name' />
    </div>
    <input type="email" placeholder='Email adress'/>
    <input type="text" placeholder='street'/>
    <div className="multi-feilds">
      <input type="text" placeholder='city' />
      <input type="text" placeholder='State' />
    </div>
    <div className="multi-feilds">
      <input type="text" placeholder='Zip Code' />
      <input type="text" placeholder='Country' />
    </div>
    <input type="text" placeholder='phone' />
    </div>


    <div className="place-order-right">

      <div className="cart-total">
        <h2>Cart Total </h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          
        </div>
        <button >PROCEED TO PAYMENT</button>
      </div>

    </div>
      
    </div>
  )
}

export default PlaceOrder
