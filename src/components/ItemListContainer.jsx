import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { getProducts } from "./data"
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const {greeting} = props
    const onAdd = (cant) =>{
        alert(`Agregáste ${cant} productos`)
    }
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => setProducts(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return(
    <div className="item-container">
        <h1>{greeting}</h1>
        <div>
        {loading ? <h3>Cargando...</h3> : <ItemList products={products}/>}
            <ItemCount stock={10} onAdd={onAdd}/>
        </div>
    </div>
    )
}
export default ItemListContainer