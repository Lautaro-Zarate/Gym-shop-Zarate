import CartShop from "./CartShop"
import Brand from "./Brand"
const NavBar = () => {
    return(
        <nav className="navbar-container">
            <Brand/>
            <div className="navbar-a">
            <a>Productos</a>
            <a>Contacto</a>
            <a>Tienda</a>
            </div>
            <CartShop counter={10}/>    
        </nav>
    )
}
export default NavBar