import React, { useContext, useState } from 'react'
import { Context } from '../Pages/useContext'

import menuData from '../Pages/menuData'
import CartItems from './CartItems'


export default function Cart() {
  const {cartItems, emptyCart} = useContext(Context)
const cartItemElements = menuData.map((item) => (<CartItems key={item._id} item={item}/>) ) // <Menu key={item.id} item={item}/>
  const totalCost = 5.50 * cartItems
  const totalCostDisplay = totalCost.toLocaleString('en-US', {style:'currency', currency:'ZAR' })
  const [buttonText, setButtonText] = useState('Place Order')
  
//func to conditional display depends on action
function placeOrder(){
  setButtonText('Odering...')
  setTimeout(()=>{
    emptyCart()
    setButtonText('Place Order')
  },3000)
}

  return (
    <main className='cart-page'>
        <h1>Check Out</h1>
        {cartItemElements}
        <p className='total-cost'>Total: {totalCostDisplay}</p>

{cartItems > 0 ?
<div className='order-button'>
  <button onClick={placeOrder}>{buttonText}</button>
</div>
:

<h1>Kindly place an order first</h1>}

    </main>
  )
}

//import context
//update the component using props
//create a cartItems component 