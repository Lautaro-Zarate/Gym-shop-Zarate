import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const {cart} = useContext(CartContext);
    return (
    <div>
        {!cart.length
        ? <EmptyCart/> 
        :   <div>
                <h1>Tu carrito</h1>
                <CartList/>
            </div>}
    </div>
    )
}
export default CartView;