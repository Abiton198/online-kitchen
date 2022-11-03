import React,{useContext} from 'react'
import { Context } from '../Pages/useContext'

export default function CartItems() {
    const {removeFromCart, CartItems} = useContext(Context)
    const deleteIconDisplay = hovered? "ri-delete-bin-fill": "ri-delete-bin-line"

    //ref={ref}
  return (
    

    <div className="cart-item">

            <i className={deleteIconDisplay} 
                onClick={()=>removeFromCart(item.id)}
                >
            </i>

            <img src={item.url} width="130px" />
            <p>$5.99</p>
    </div>
    
  )
}
