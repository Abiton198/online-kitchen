import React,{useContext} from 'react'
import { Context } from '../Pages/useContext'

export default function CartItems({item}) {
    // const {removeFromCart, cartItems, toggleFavorite, addToCart} = useContext(Context)
    const {_id, name, price, description, image} = item

  return (
  
    <div className="cart-item">

         
            <div className='menu'>
              <div>
                  <img src={image} className='menu-img' />
              </div>
             
                  <hr/>
              <div className='description'>
                <p>ZAR {price}</p>
                    <p>{name}</p>
                      <p>{description}</p>
              </div>
            </div>
          
    </div>
    
  )
}
