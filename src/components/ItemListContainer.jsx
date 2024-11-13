import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {getProducts} from "../mock/data"
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((resp) => setProducts(resp))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])
    console.log(products)
    return(
    <div>
        <div>
        {loading ? <img src="./public/loading.gif" className="loading"/> : <ItemList products={products}/>}
        </div>
    </div>
    )
}
export default ItemListContainer