import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const CartShop = () => {
    const {cartQuantity} = useContext(CartContext)
    return(
        <div className="cart-container">
            <img className="cart-shop" src="/cart-shop.png" alt="Cart-shop"/>
            {cartQuantity() ? <p className="cart-number">{cartQuantity()}</p>
            : <></>}

        </div>
    )
}
export default CartShop