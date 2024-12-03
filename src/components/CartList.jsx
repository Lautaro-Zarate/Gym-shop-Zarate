import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const {cart, cartTotal, clear} = useContext(CartContext);
    console.log(cart)
    const navigate = useNavigate();
    const btnNavigate = () => {
        navigate("/checkout")
    }
    return(
        <div>
            {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
            <span>El total a pagar es: ${cartTotal()}</span>
            <div>
                <button onClick={clear} className="btn-buy">Limpiar carrito</button>
                <button className="btn-cart" onClick={btnNavigate}>Finalizar compra</button>
            </div>
        </div>
    )
}
export default CartList;