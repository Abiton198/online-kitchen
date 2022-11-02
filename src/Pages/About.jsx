import React from 'react'
import blob from '../assets/blob.svg'
import foodway from '../img/foodway.png'



 function About() {

  return (
    <div className='about'>
      <h1>This is About the company</h1>
      <img src={foodway} alt='' className='about-image'/>

        <div className='blob'>
                 <img src={blob} alt=''/>
        </div>
    </div>
  )
}

export default About
