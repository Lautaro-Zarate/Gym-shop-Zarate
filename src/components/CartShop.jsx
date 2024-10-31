const CartShop = ({counter}) => {
    return(
        <div className="cart-container">
            <img className="cart-shop" src="./public/cart-shop.png" alt="Cart-shop"/>
            <p className="cart-number">{counter}</p>
        </div>
    )
}
export default CartShop