import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import MenuDetails from './Pages/MenuDetails'
import NavBar from './Pages/NavBar'

function App() {


  return (
   
    <div>
            <NavBar/>
           <Routes>
           <Route exact path='/' element={<Home />}/>
           <Route  path='/About' element={<About/>}/> 
           <Route exact path='/Menu' element={<Menu />}/>   
           <Route path='/Menu/:servicesId' element={<MenuDetails/>}/>  

        </Routes>
    </div>
  
  )
}

export default App
