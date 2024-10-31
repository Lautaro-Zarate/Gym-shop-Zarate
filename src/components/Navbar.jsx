import CartShop from "./CartShop"
import Brand from "./brand"
const NavBar = () => {
    return(
        <nav className="navbar-container">
            <Brand/>
            <a>Productos</a>
            <a>Contacto</a>
            <a>Tienda</a>
            <CartShop counter={10}/>    
        </nav>
    )
}
export default NavBar