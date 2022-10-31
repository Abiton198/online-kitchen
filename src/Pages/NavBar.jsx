import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='my-nav'>
      <div className='nav-display'>
              <h3 className='logo'>Food_My_Way</h3>
              <input type='checkbox' id='nav-toggle' className='nav-toggle'></input>
              <nav>
                    <ul>
                      <Link to='/' className='links'> Home </Link> 
                      <Link to="/Menu" className='links'> Menu </Link> 
                      <Link to='/About' className='links'> About </Link>  
                    </ul>   
              </nav>

            <label for="nav-toggle" className='nav-toggle-label'>  
              <span> </span> 
            </label>
        </div>
    <div className='cart-display'>
        <Link to='cart' className='cart'>
            <i className='"ri-shopping-cart-line ri-fw ri-2x"'></i>
        </Link>

    </div>

    </div>
  )
}
