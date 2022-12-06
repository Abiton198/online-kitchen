import React from 'react'
import Home from './Pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './hooks/NavBar'
import Cart from './hooks/Cart'
import Contact from './Pages/Contact'
import home from '../src/img/home.png'

function App() {


  return (
   
    <div className='app'>
            <NavBar/>
              <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/Contact' element={<Contact />}/>  
                    <Route path='/Cart' element={<Cart/>}/> 
                    
              </Routes>
              <img src={home} alt='my home image' className='home-img'/>
      

    </div>
  
  )
}

export default App
