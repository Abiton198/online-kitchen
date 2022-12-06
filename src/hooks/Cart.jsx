import React, { useContext, useState } from 'react'
import { Context } from '../Pages/useContext'

import menuData from '../Pages/menuData'
import CartItems from './CartItems'


export default function Cart() {
  const {cartItems, emptyCart} = useContext(Context)
const cartItemElements = menuData.map((item) => (<CartItems key={item.id} item={item}/>) ) // <Menu key={item.id} item={item}/>
 



  return (
    <main className='cart-page'>
        <p>{cartItemElements}</p>

          <h1>Kindly place an order now! DM</h1>

    </main>
  )
}

//import context
//update the component using props
//create a cartItems component 