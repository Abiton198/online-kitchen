import React from 'react'
import cover from '../img/food.jpeg'
import blob from '../assets/blob-home.svg'

 function Home(){

  function viewMenu(){
   
  }
  return (
   
    <div className='hom'>
    
          <div className='sub-head'>
              <h4 className='heading'>This is my Home</h4>
          </div>

            <div className='image'>
                <img src={blob} alt=''/>
                <p className='text'>Delicious Food</p>
                {/* <img src={cover} alt='' className='cover-photo'/> */}
            </div>

            
              <div className='button'>
                 <button onClick={viewMenu}> Order Now </button>
              </div>

              
    </div>


// const className = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"
//     return (
//         <header>
//             <Link to='/'><h2>Pic Some</h2></Link>
//             <Link to='/Cart'><i className={className}></i></Link>
//         </header>

  )
}
export default Home

//1. home landing pic 
//2. call to check on this week's menu
//3.menu button