import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const CartShop = ({counter}) => {
    const context = useContext(CartContext);
    console.log(context)
    return(
        <div className="cart-container">
            <img className="cart-shop" src="../public/cart-shop.png" alt="Cart-shop"/>
            <p className="cart-number">{counter}</p>
        </div>
    )
}
export default CartShop