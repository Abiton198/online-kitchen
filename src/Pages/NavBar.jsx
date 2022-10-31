import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='my-navbar'>
      <h1 className='logo'>Food_My_Way</h1>
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
  )
}

// <div className='my-nav'>
// <h1 className='logo'>My Portifolio</h1>
//    <input type='checkbox' id="nav-toggle" className='nav-toggle'/>
//     <nav>
//         <ul> 
//             <Link to='/' className='links'>Home</Link>
//             <Link to='/AboutMe' className='links'>About</Link>
//             <Link to='/Services'className='links'>Services</Link>
//             <Link to='/MyWork' className='links'> Projects</Link>
//         </ul>
//       </nav> 

// <label for="nav-toggle" className='nav-toggle-label'>
//   <span> </span>
// </label>
// </div>