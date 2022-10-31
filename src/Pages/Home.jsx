import React from 'react'
import cover from '../img/food.jpeg'

 function Home(){
  return (
   
    <div className='hom'>
    
          <div className='sub-head'>
              <h4>This is my Home</h4>
          </div>

            <div className='image'>
                <img src={cover} alt='' className='cover-photo'/>
            </div>
            
              <div className='button'>
                  <button>Order Now</button>
              </div>
    </div>
  )
}
export default Home

//1. home landing pic 
//2. call to check on this week's menu
//3.menu button