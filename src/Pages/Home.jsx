import React from 'react'
import fruit from '../img/fruit.png'
import mainfood from '../img/mainfood.png'
import mushroom from '../img/mushroom.png'
import roadrunner from '../img/roadrunner.png'

 function Home(){

  return (
   
    <div className='hom'>

              <h1 className='heading'>Home of delicious food</h1>
              <div className='carosel'>

                        <img src={fruit} alt='' className='cover-photo'/>
                            <img src={mainfood} alt='' className='cover-photo'/>
                                <img src={mushroom} alt='' className='cover-photo'/>
                                    <img src={roadrunner} alt='' className='cover-photo'/>

              </div>

              <div className='my-home'>

                  <div className='text'>
                      <p>Our job is to filling your Yummy Delicious food quick response and fast delivery.
                      Our job is to filling your Yummy Delicious food quick response and fast delivery.
                      Our job is to filling your Yummy Delicious food quick response and fast delivery.
                          </p>
                  </div>

                  
                  <div className='home-text'>
                       <p className='tasty'>
                        Tasty foods for indviduals and companies...
                          </p> 
                              <p className='haven'> Food Haven <br/> <hr/>by ZazaT
                                  </p>
                  </div>

              </div>

              
    </div>


  )
}
export default Home

