import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const CartList = () => {
    const {cart, cartTotal, clear} = useContext(CartContext);
    console.log(cart)
    return(
        <div>
            {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
            <span>El total a pagar es: ${cartTotal()}</span>
            <div>
                <button onClick={clear}>Limpiar carrito</button>
                <button>Finalizar compra</button>
            </div>
        </div>
    )
}
export default CartList;