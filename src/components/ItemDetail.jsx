import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cant) =>{
        alert(`Agregaste ${cant} productos.`)
    }
    console.log(producto)
    return(
        <div className="detail-container">
            <img src={producto.image} className="img-detail" />
            <div className="description-detail">
                <h2>{producto.name}</h2>
                <p className="price-detail">${producto.price}</p>
                <p>{producto.description}</p>
                <ItemCount stock={producto.stock} onAdd={onAdd}/>
                <button className="btn-buy">Comprar</button>
            </div>
        </div>
    )
}
export default ItemDetail;