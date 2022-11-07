
import {useEffect, useState, useRef} from 'react'


export default function useHover() {
const[hovered, setHovered] = useState(false)
const ref = useRef(null)

function enter(){
    setHovered(true)
}

function leave(){
    setHovered(false)
}

function eventList(){
    ref.current.addEventListener('mouseenter',enter)
    ref.current.addEventListener('mouseleave',leave)
}

useEffect(()=>{
    eventList()
},[])


return [ref, hovered]
}

//useRef - used to keep values of a propertiesfor the entire function 