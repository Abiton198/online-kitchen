import React from 'react'
import {Link, Routes, Route, useParams} from 'react-router-dom'
import menuData from './menuData'


function Menu() {


  // var to display the image from the dataMenu
    const menus = menuData.map(item =>(
        <div key={item._id}>
            <h3 className='link'>
            <Link to={`menu/${item._id}`}> {item.name} <hr/></Link> 
         </h3>
         <img src={item.image} alt='' className='menu-image'/>
    
        </div>
    ))

  return (
      <div >
        <h1>Menu List</h1>
          {menus}
        
      {/* <ul>
        <li><Link to='/Menu'>BreakFast</Link> </li>
        <li><Link to="/">Lunch</Link> </li>
        <li><Link to='/'>Dinner</Link> </li>
        <li><Link to="/">Desserts</Link> </li>
      </ul>
        <Routes>
            <Route exact path='/Menu'><Menu/></Route>
            <Route  path='/Breakfast'><Lunch/></Route>
            <Route  path='/Starters'><Dinner/></Route>
            <Route  path='/Menu'><Desserts/></Route>
        </Routes>  
        */}

    </div>
  )
}
export default Menu