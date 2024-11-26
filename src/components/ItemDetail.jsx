import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const onAdd = (cant) =>{
        alert(`Agregaste ${cant} productos.`);
        setCompra(true);
    }
    console.log(producto)
    return(
        <div className="detail-container">
            <img src={producto.image} className="img-detail" />
            <div className="description-detail">
                <h2>{producto.name}</h2>
                <p className="price-detail">${producto.price}</p>
                <p>{producto.description}</p>
                {compra > 0 ? 
                <div className="buy-container">
                    <Link to=""><button className="btn-cart">Ir al carrito</button></Link>
                    <Link to=""><button className="btn-buy">Seguir comprando</button></Link>
                </div>
                    : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
                {/* <button className="btn-buy">Comprar</button> */}
            </div>
        </div>
    )
}
export default ItemDetail;