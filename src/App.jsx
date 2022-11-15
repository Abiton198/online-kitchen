import React from 'react'
import Home from './Pages/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './hooks/NavBar'
import Cart from './hooks/Cart'
import CartItems from './hooks/CartItems'

function App() {


  return (
   
    <div className='app'>
            <NavBar/>
              <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/CartItems' element={<CartItems />}/>  
                    <Route path='/Cart' element={<Cart/>}/> 
                    
              </Routes>
         

    </div>
  
  )
}

export default App
