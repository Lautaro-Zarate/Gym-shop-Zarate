import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartItem = ({prod}) => {
    const {removeItem} = useContext(CartContext)
    return(
        <div className="cart-full-container">
            <img src={prod.image} alt={prod.name} />
            <div className="cart-full-secondary">
                <h4>{prod.name}</h4>
                <p className="p-description">${prod.price}</p>
            </div>
            <button className="btn-restar" onClick={() => removeItem(prod.id)}>x</button>
        </div>
    )
}
export default CartItem;