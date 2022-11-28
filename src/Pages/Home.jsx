import React from 'react'
import foodway from '../img/foodway.png'
import blob from '../assets/blob-home.svg'
import food from '../img/food.jpeg'
import foodplant from '../img/foodplant.png'

 function Home(){

  function viewMenu(){


   
  }
  return (
   
    <div className='hom'>

              <div className='carosel'>

                      <div className='home-image home-image-visible'>
                        <img src={foodway} alt='' className='cover-photo'/>
                          </div>

                          <div className='home-image'>
                            <img src={blob} alt='' className='cover-photo'/>
                              </div>

                              <div className='home-image'>
                                <img src={foodplant} alt='' className='cover-photo'/>
                                  </div>

                                  <div className='home-image'>
                                    <img src={food} alt='' className='cover-photo'/>
                                      </div>

                          <div className='control'>
                            <button className='image-prev-slide' aria-label='Previous Slide'> 
                              <i class="fa-sharp fa-solid fa-arrow-left"></i>
                                </button>

                            <button className='image-slide' aria-label='Next Slide'> 
                              <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                </button>
                          </div>
              </div>

          <div className='my-home'>

            <div className='text'>
              <h1>Home of delicious food</h1>
                <p>Our job is to filling your Yummy Delicious food quick response and fast delivery.
                Our job is to filling your Yummy Delicious food quick response and fast delivery.
                Our job is to filling your Yummy Delicious food quick response and fast delivery.
                </p>
                  </div>

              <div className='button'>
                 <button onClick={viewMenu}> Order Now </button>
                    </div>
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