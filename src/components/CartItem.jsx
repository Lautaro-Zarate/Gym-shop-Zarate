// FALTA ESTILAR

const CartItem = ({prod}) => {
    return(
        <div>
            <h2>{prod.name}</h2>
            <img src={prod.image} alt={prod.name} />
            <p>{prod.price}</p>
        </div>
    )
}
export default CartItem;