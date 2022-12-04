import React from 'react'
import fruit from '../img/fruit.png'
import mainfood from '../img/mainfood.png'
import mushroom from '../img/mushroom.png'
import roadrunner from '../img/roadrunner.png'

 function Home(){

  return (
   
    <div className='hom'>

              <div className='carosel'>
                        <img src={fruit} alt='' className='cover-photo'/>
                            <img src={mainfood} alt='' className='cover-photo'/>
                                <img src={mushroom} alt='' className='cover-photo'/>
                                    <img src={roadrunner} alt='' className='cover-photo'/>
{/* 
                      <div className='home-image home-image-visible'>
                          </div>

                          <div className='home-image'>
                              </div>

                              <div className='home-image'>
                                  </div>

                                  <div className='home-image'>
                                      </div> */}

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

                  <div className='text-small'>
                    <p className='home-text'>Haven Of Food <br/> <hr/>by ZazaT</p>

                  </div>

              <div className='button'>
                 <button> Food_My_Way</button>
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