import React from 'react'
import menuData from '../Pages/menuData'
import { useParams, useNavigate} from 'react-router-dom'
import Menu from '../Pages/Menu'

function MenuDetails() {
    const {menuId} = useParams()
    const navigateTo = useNavigate()
    const thisMenu = menuData.find(item => item._id === menuId)

    function handleChange(){
        console.log("clicked")
        setTimeout(()=> {navigateTo.push('/Menu')},2000)}
        navigateTo.replace('')

const menuItems = menuData.map(item => {
  return (
      <div className='menu'>

        <h1>{item.name}</h1>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <p>{item.price}</p>

        <button onClick={handleChange}>Go back to Menu</button>
      </div>
  )
  
})
// )
//   return (
//     <div className='menu'>
//             <h1>Detailed Menu Page</h1>

//             <hr/>

//             {/* <h3>{thisService.name}-{thisService.price}</h3>
//             <p>{thisService.description}</p>
//             <hr/> */}

//             <button onClick={handleChange}>Go back to Menu</button>
//     </div>
//   )
}
export default MenuDetails

//tsk make menu details appear on page.