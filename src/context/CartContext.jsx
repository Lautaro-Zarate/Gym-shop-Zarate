import { createContext, useState } from "react";
export const CartContext = createContext(); //CREAMOS EL CONTEXTO

export const CartProvider = ({children}) => { //CREAMOS EL PROVEEDOR
    const {cart, setCart} = useState([]);

    // ACA IRIA LA LOGICA DEL CARRITO
    return(
        // ACLARAMOS A QUE CONTEXTO ESTAMOS PROVEEMOS 👇
        <CartContext.Provider value={{cart}}>
            {/* ACA LOS COMPONENTES QUE USAN LA LOGICA DEL CARRITO */}
            {children}
        </CartContext.Provider>
    )
}