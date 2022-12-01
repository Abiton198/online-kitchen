import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Pages/useContext'
import logo from '../img/logo.png'

export default function NavBar() {
  const {cartItems} = useContext(Context)
 
  return (
    <div className='my-nav'>
      <div className='nav-display'>
        <div className='bar-display'>
          <div></div>
              <h3 className='logo'>Food_My_Way</h3>
              <header>
                  <Link to='/'></Link>

                    <div className='cart-number'>
                        <img src={logo} alt='Food_My_Way' className='logo-navbar'/>
                          
                                </div>             
               </header>
        </div>
              <input type='checkbox' id='nav-toggle' className='nav-toggle'></input>
                <nav>
                    <ul>
                      <Link to='/' className='links'> Home </Link> 
                        <Link to="/Contact" className='links'> Contact</Link>  
                          <Link to='/Cart' className='links'>Deli</Link>
                            </ul>   
                </nav>

            <label for="nav-toggle" className='nav-toggle-label'>  
              <span> </span> 
            </label>
        </div>

    </div>
  )
}
