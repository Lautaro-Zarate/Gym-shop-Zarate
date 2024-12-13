import { Link } from "react-router-dom"
const EmptyCart = () => {
    return( 
    <div>
        <div className="primary-container">
            <img src="/empty-cart.png" alt="Empty Cart"/>
            <h1>Tu carrito está vacío</h1>
        </div>
        <div className="secondary-container">
            <h4>¿Que esperas? ¡Vé a comprar!</h4>
            <Link to="/"><button>Ir al Inicio</button></Link>
        </div>
    </div>
    )
}
export default EmptyCart;