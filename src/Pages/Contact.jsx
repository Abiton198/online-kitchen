import React from 'react'
import foodmy from '../img/foodmy.png'
import foodmyway from '../img/foodmyway.jpg'

export default function Contact() {
  return (
    <div className='contacts'>
            <div className='heading-contact'>
                <h1>Find Us</h1>
                    </div>

    <div className='img-contact-motto'>

        <div className='img-icons'>

            <div className='contact-img'>
                <img src={foodmyway} alt='Food My Way' width='200px' className='contact-image'/>
                    </div>
        
            <div className='contact-icons'>
                    <ul>
                        <li className='social_item'>
                            <a 
                            className='whatsapp' href="https://wa.me/0027761272025"
                            class='whatsapp_float'
                            target='_blank'
                            rel='noopener noreferrer'> 
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
                                    </a> View us on Instagram!
                                        </li>         
                    </ul>
            </div> 

             <div className='contact-img'>
                <img src={foodmy} alt='Food My Way' width='240px' className='contact-image'/>
                    </div>           
        </div>

        <div className='payoff-line'>
            <p className='motto'>Welcome to life! Making deli day for you! </p>
        </div>
    </div>



    </div>
  )
}
