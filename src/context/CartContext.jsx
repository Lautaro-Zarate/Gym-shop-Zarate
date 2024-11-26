import { createContext, useContext, useState } from "react";
export const CartContext = createContext(); //CREAMOS EL CONTEXTO

export const CartProvider = ({children}) => { //CREAMOS EL PROVEEDOR
    const [cart, setCart] = useState([]);

    // ACA IRIA LA LOGICA DEL CARRITO
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, cantidad: prod.cantidad + quantity}
                } else{
                    return prod
                }
            }))
        } else{
            // console.log(item,quantity , "parametro")
            // SPREAD OPERATOR ---------- 👇 CANTIDAD SE CONVIERTE EN NUEVA PROPIEDAD DEL OBJETO
            // console.log({...item, cantidad:quantity }, "objeto")
            setCart([...cart, {...item, cantidad:quantity}])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    
    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        cart.filter((prod) => prod.id !== id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => (prod.price * prod.cantidad), 0)
    }
    return(
        // ACLARAMOS A QUE CONTEXTO ESTAMOS PROVEEMOS 👇
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartQuantity, cartTotal}}>
            {/* ACA LOS COMPONENTES QUE USAN LA LOGICA DEL CARRITO */}
            {children}
        </CartContext.Provider>
    )
}

// export const useCart = () => useContext(CartContext) 