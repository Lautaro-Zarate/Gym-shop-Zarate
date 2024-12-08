import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Loader from "./loader";
import toast, { Toaster } from 'react-hot-toast';
const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1000)
    }, [])
    const {addToCart, cart} = useContext(CartContext);
    const notify = () => toast.success(`Agregaste  ${producto.name} al carrito`,{
        position: "top-right",
        style:{
            backgroundColor: "#addbff",
            color: "#0b263c",
            border: "1px solid #0b263c" 
        }
    })
    
    const onAdd = (cant) =>{
        setCompra(true);
        notify();
        addToCart(producto,cant)
    }
    return(loading ? <Loader/> :
        <div className="detail-container">
            <img src={producto.image} className="img-detail" />
            <div className="description-detail">
                <h2>{producto.name}</h2>
                <p className="p-description">${producto.price}</p>
                <p className="p-description">{producto.description}</p>
                {compra > 0 ? 
                <div className="buy-container">
                    <Link to="/cart"><button className="btn-cart">Ir al carrito</button></Link>
                    <Link to="/"><button className="btn-buy">Seguir comprando</button></Link>
                </div>
                    : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
                    <Toaster/>
            </div>
        </div>
    )
}
export default ItemDetail;