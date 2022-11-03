import React from "react";
import { useState } from "react";
const Context = React.createContext()

function ContextProvider({children}){
    const{cartItems, setCartItems} = useState([])
    const{isFavorite, setIsFavorite} = useState(false)

    // 1.provide updated state of context for cartItems and isFavorite
    //2. provide the context to the components of each
    //3.create functions for each

    // func to add a new item selected by client to update cart
    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    //function to remove item from cart
    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter((item) => item.id !==id))
    }

return(
    <Context.Provider value={{cartItems,
                             isFavorite, 
                             addToCart,
                             removeFromCart}}>
        {children}
    </Context.Provider>
)
}
export {ContextProvider, Context}