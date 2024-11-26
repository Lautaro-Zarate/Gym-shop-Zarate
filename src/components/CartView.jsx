import { useContext } from "react";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const {cart} = useContext(CartContext);
    return (
    <div>
        {!cart.length ? <EmptyCart/> : <div>Tu carrito tiene objetos</div>}
    </div>
    )
}
export default CartView;