import React from 'react'
import menuData from './menuData'
import { useParams, useNavigate} from 'react-router-dom'

function MenuDetails() {
    const {servicesId} = useParams()
    const navigateTo = useNavigate()
    const thisService = menuData.find(service => service._id === servicesId)

    function handleChange(){
        console.log("clicked")
        setTimeout(()=> {navigateTo.push('/Menu')},2000)}
        navigateTo.replace('')
  return (
    <div>
            <h1>Detailed Menu Page</h1>
            <h3>{thisService.name}-{thisService.price}</h3>
            <p>{thisService.description}</p>
            <hr/>
            <button onClick={handleChange}>Go back to Menu</button>
    </div>
  )
}
export default MenuDetails