import { Link } from "react-router-dom"
const EmptyCart = () => {
    return( 
    <div>
        <h1>Tu carrito está vacío</h1>
        <img src="../public/emptycart.jpg" alt="Empty Cart" />
        <h2>¿Que esperas? ¡Vé a comprar!</h2>
        <Link to="/"><button>Ir al Inicio</button></Link>
    </div>
    )
}
export default EmptyCart;