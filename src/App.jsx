import React from 'react'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import MenuDetails from './hooks/MenuDetails'
import NavBar from './hooks/NavBar'

function App() {


  return (
   
    <div className='app'>
            <NavBar/>
              <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Menu' element={<Menu />}/>   
                    <Route path='/Menu:menuId' element={<MenuDetails/>}/>  
              </Routes>
         

    </div>
  
  )
}

export default App
