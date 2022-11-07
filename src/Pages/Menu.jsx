import {useContext} from 'react'
import useHover from '../hooks/useHover'
import menuData from './menuData'
import { Context } from './useContext'
import {Link} from 'react-router-dom'


function Menu({className, image}) {
  const[hovered, ref] = useHover()
  const {toggleFavorite, addToCart, removeFromCart} = useContext(Context)


  //func to make the heart icon full when hovered upon or empty
  function heartIcon(){
    if (image.isFavorite){
      return <i className="ri-heart-fill favorite" 
              onClick={()=> removeFromCart(image.id)}>
              </i>
  } else if(hovered){
      return <i className="ri-heart-line favorite" 
              onClick={() => toggleFavorite(image.id)}>
              </i>
  }
  }


    //function to make image change to cart image and added to the cart
    //some() === to indicate on selected items for cart
  function cartIcon(){
    const alreadyInCart = cartItems.some(item => item.id === image.id)
    if(alreadyInCart){
      return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(image.id)}></i>
  }else if(hovered){
      return <i className="ri-add-circle-line cart" onClick={()=>addToCart(image)}></i>
  }
  }

  // var to display the image from the dataMenu
    const menus = menuData.map(item =>(
        <div key={item._id}>
            <h3 className='link'>
            <Link to={`menu/${item._id}`}> {item.name} <hr/></Link> 
         </h3>
         <img src={item.image} alt='' className='menu-image'/>
    
        </div>
    ))

  return (
      <div className={`${className} image-container`} 
        ref={ref}
      >
        <h1>Menu List</h1>
          {menus}
          {heartIcon}
          {cartIcon}
        
    </div>
  )
}
export default Menu