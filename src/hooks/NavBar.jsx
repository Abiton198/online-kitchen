import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Pages/useContext'

export default function NavBar() {
  const {cartItems} = useContext(Context)
  const className = cartItems > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" :"ri-shopping-cart-line ri-fw ri-2x"
  return (
    <div className='my-nav'>
      <div className='nav-display'>
        <div className='bar-display'>
              <h3 className='logo'>Food_My_Way</h3>
              <header>
                <Link to='/'></Link>
                <Link to='/Cart'><i className={className}></i></Link>
              </header>
        </div>
              <input type='checkbox' id='nav-toggle' className='nav-toggle'></input>
              <nav>
                    <ul>
                      <Link to='/' className='links'> Home </Link> 
                      <Link to="/Menu" className='links'> Menu </Link>  
                    </ul>   
              </nav>

            <label for="nav-toggle" className='nav-toggle-label'>  
              <span> </span> 
            </label>
        </div>

    </div>
  )
}
