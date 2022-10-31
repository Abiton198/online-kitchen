import React from 'react'
import {Link, Routes, Route, useParams} from 'react-router-dom'
import menuData from './menuData'


export default function Menu() {

    const services = menuData.map(service =>(
        <div key={service._id}>
            <h3 className='link'>
            <Link to={`services/${service._id}`}> {service.name}</Link> {service.price}
            </h3>
        </div>
    ))

  return (
      <div >
        <h1>Menu List</h1>
          {services}
          <hr/>
      {/* <ul>
        <li><Link to='/Menu'>BreakFast</Link> </li>
        <li><Link to="/">Lunch</Link> </li>
        <li><Link to='/'>Dinner</Link> </li>
        <li><Link to="/">Desserts</Link> </li>
      </ul>

        <Routes>
            <Route exact path='/Menu'><Menu/></Route>
            <Route  path='/Menu'><Lunch/></Route>
            <Route  path='/Menu'><Dinner/></Route>
            <Route  path='/Menu'><Desserts/></Route>
        </Routes>  */}

    </div>
  )
}
