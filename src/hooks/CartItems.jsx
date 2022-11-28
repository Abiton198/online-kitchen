import React,{useContext} from 'react'
import { Context } from '../Pages/useContext'

export default function CartItems({item}) {
    const {removeFromCart, cartItems, toggleFavorite, addToCart} = useContext(Context)
    const {_id, name, price, description, image} = item
   
    // const deleteIconDisplay = hovered? "ri-delete-bin-fill": "ri-delete-bin-line"
    // const image = cartItems.map(item => item.image)

  return (
  
    <div className="cart-item">

            {/* <i className= "ri-delete-bin-fill" 
                onClick={()=>removeFromCart(item.id)}
             >
            </i> */}
              <img src={image} className='menu-img' />
              <p>ZAR {price}</p>
              <p>{name}</p>
              <p>{description}</p>
            
            <button  >Add to Cart</button>
    </div>
    
  )
}
