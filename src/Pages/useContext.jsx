import React, {useEffect, useState} from "react";
import menuData from "./menuData";
const Context = React.createContext()

function ContextProvider({children}){
    const{cartItems, setCartItems} = useState([])
    const{isFavorite, setIsFavorite} = useState(false)
//     const{homeImages, setHomeImages} = useState([]) //home page images

//     const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
// //fetch images from API an display on home page
// useEffect(()=>{
//     fetch(url)
//     .then(res => res.json())
//     .then(data => setHomeImages(data))
//     // .then(data => console.log(data))
// },[])

    // func to add a new item selected by client to update cart
    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    //function to remove item from cart
    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter((item) => item.id !==id))
    }

    //func to make a hovered and selected image toggled to favorite 
    function toggleFavorite(id){
        const updatedArr = menuData.map(image => {
            if(image.id === id){
                console.log(id)
                console.log(item.id)
                
                return{
                    image, isFavorite: !isFavorite
                }
            }
                return image
            
        })
        setCartItems(updatedArr)
    }

    //func to set cart to empty after transaction
    function emptyCart(){
        setCartItems([])
    }

return(
    <Context.Provider value={{cartItems,
                              addToCart,
                             removeFromCart,
                             toggleFavorite,
                             emptyCart
                             }}>
        {children}
    </Context.Provider>
)
}
export {ContextProvider, Context}