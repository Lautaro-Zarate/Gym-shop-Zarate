import { useContext, useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "./loader";
const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1000)
    }, [])
    const {addToCart, cart} = useContext(CartContext);

    const onAdd = (cant) =>{
        setCompra(true);
        addToCart(producto,cant)
    }
    return(loading ? <Loader/> :
        <div className="detail-container">
            <img src={producto.image} className="img-detail" />
            <div className="description-detail">
                <h2>{producto.name}</h2>
                <p className="price-detail">${producto.price}</p>
                <p>{producto.description}</p>
                {compra > 0 ? 
                <div className="buy-container">
                    <Link to="/cart"><button className="btn-cart">Ir al carrito</button></Link>
                    <Link to="/"><button className="btn-buy">Seguir comprando</button></Link>
                </div>
                    : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
            </div>
        </div>
    )
}
export default ItemDetail;