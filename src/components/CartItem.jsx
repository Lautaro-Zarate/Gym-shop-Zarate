const CartItem = ({prod}) => {
    return(
        <div className="cart-full-container">
            <img src={prod.image} alt={prod.name} />
            <div className="cart-full-secondary">
                <h4>{prod.name}</h4>
                <p>${prod.price}</p>
            </div>
        </div>
    )
}
export default CartItem;