import React from "react";
import { useState } from "react";
const Context = React.createContext()

function ContextProvider({children}){
    const{cartItems, setCartItems} = useState([])
    const{isFavorite, setIsFavorite} = useState(false)

    // 1.provide updated state of context for cartItems and isFavorite
    //2. provide the context to the components of each
    //3.create functions for each

return(
    <Context.Provider value={{cartItems,
                             isFavorite}}>
        {props.children}
    </Context.Provider>
)
}
export {ContextProvider, Context}