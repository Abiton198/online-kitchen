import {useContext} from 'react'
import menuData from './menuData'
import { Context } from './useContext'


function Menu() {
  // const[hovered, ref] = useHover()
const {toggleFavorite, addToCart, removeFromCart} = useContext(Context)
const image = menuData.map(item => item.image)

  //func to make the heart icon full when hovered upon or empty
  function heartIcon(){
    if (image.isFavorite){
      return <i className="ri-heart-fill favorite" onClick={()=> removeFromCart(image.id)}></i> //onClick={()=> removeFromCart(image.id)}
  } else {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i> //onClick={() => toggleFavorite(image.id)}
  }
  }


    //function to make image change to cart image and added to the cart
    //some() === to indicate on selected items for cart
  function cartIcon(){
    const alreadyInCart = cartItems.some(item => item.id === item.image)
    if(alreadyInCart){
      return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(image)}></i> 
  }else {
      return <i className="ri-add-circle-line cart" onClick={()=>addToCart(image)}></i> 
  }
  }

  // var to display the image from the dataMenu
    const menus = menuData.map(item =>(
        <div key={item._id}>
            <h3 className='link'>
            {item.name}
         </h3>
        
         <img src={item.image} alt='' className='menu-image'/>
         <hr/>
    
        </div>
    ))

  return (
      <div className='image-container'>
        <h1>Menu List</h1>
        <div className='image'>
          {menus}
          {heartIcon}
          {cartIcon}

        </div>
        
    </div>
  )
}
export default Menu