import React from 'react'
import foodmyway from '../img/foodmyway.jpg'

export default function Contact() {
  return (
    <div className='contacts'>

            <h1>Find Us</h1>
            <img src={foodmyway} alt='Food My Way' width='200px' className='contact-image'/>
        <ul>
            <li className='social_item'>
                <a className='whatsapp' href="http://wa.me/0027761272025"> 
                    <i className="fab fa-whatsapp"></i>
                        </a> Let's talk now!
                            </li>

            <li className="social_item">
                <a className="twitter" href="https://web.facebook.com/zanele.saul.5">
                    <i className="fab fa-facebook"></i>
                        </a> Find us on Facebook!
                            </li>

            <li className="social_item">
                <a className="instagram" href='https://www.instagram.com/i_am_zazat/'>
                    <i className="fab fa-instagram"></i>
                        </a> Here we are on Instagram!
                            </li>         
        </ul>


    </div>
  )
}
