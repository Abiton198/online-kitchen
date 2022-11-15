import React from "react";
import { useState } from "react";
import menuData from "./menuData";
const Context = React.createContext()

function ContextProvider({children}){
    const{cartItems, setCartItems} = useState([])
    const{isFavorite, setIsFavorite} = useState(false)


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
                             emptyCart}}>
        {children}
    </Context.Provider>
)
}
export {ContextProvider, Context}