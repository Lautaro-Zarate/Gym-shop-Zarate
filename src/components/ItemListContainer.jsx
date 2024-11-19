import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {getProducts} from "../mock/data"
import { useParams } from "react-router-dom"
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {category} = useParams();
    const {greetings} = props;
    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((resp) => {
            if(category){
                setProducts(resp.filter((prod) => prod.category === category))
            }else{
                setProducts(resp)
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [category])
    return(
    <div>
        <div>
        <h1>{greetings} <span className="category-text">{category}</span></h1>
        {loading ? <img src="../public/loading.gif" className="loading"/> : <ItemList products={products}/>}
        </div>
    </div>
    )
}
export default ItemListContainer