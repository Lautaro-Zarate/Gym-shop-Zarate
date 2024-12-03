import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const {cart, cartTotal, clear} = useContext(CartContext);
    const navigate = useNavigate();
    const btnNavigate = () => {
        navigate("/checkout")
    }
    return(
        <div>
            {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
            <p className="total-price">El total a pagar es: $<span className="price-span">{cartTotal()}</span></p>
            <div className="cart-btn-buy">
                <button onClick={clear} className="btn-buy">Limpiar carrito</button>
                <button className="btn-cart" onClick={btnNavigate}>Finalizar compra</button>
            </div>
        </div>
    )
}
export default CartList;