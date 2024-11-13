import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cant) =>{
        alert(`Agregáste ${cant} productos`)
    }
    console.log(producto)
    return(
        <div>
            <h1>{producto.name}</h1>
            <img src={producto.image} />
            <p>{producto.price}</p>
            <p>{producto.description}</p>
            <ItemCount stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetail;