import CartShop from "./CartShop"
import Brand from "./Brand"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return(
        <nav className="navbar-container">
            <NavLink to="/"><Brand/></NavLink>
            <div className="navbar-a">
            <NavLink to="/products/nuevos">Nuevos Lanzamientos</NavLink>
            <NavLink to="/products/mas populares">Más Populares</NavLink>
            <NavLink to="/products/ofertas">Ofertas</NavLink>
            </div>
            <CartShop counter={10}/>    
        </nav>
    )
}
export default NavBar