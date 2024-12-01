import React, {useState, useEffect} from "react"
import {getProducts} from "../mock/data"
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../services/firebase"
import ItemList from "./ItemList"
import Loader from "./loader"
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {category} = useParams();
    const {greetings} = props;
    // FIREBASE👇
    useEffect(()=>{
        setLoading(true);
        // CONECTAMOS CON LA COLECCION DE PRODUCTOS
        const prodCollection = category
        ? query(collection(db, "productos"), where("category", "==", category)) //SI CATEGORY EXISTE == IF
        : collection(db,"productos") // ELSE
        // PEDIMOS LOS DATOS
        getDocs(prodCollection)
        .then((res) => {
            const list = res.docs.map((product) => {
                return {
                    id : product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[category])


    // MOCK LOCAL👇
    // useEffect(() => {
    //     setLoading(true)
    //     getProducts()
    //     .then((resp) => {
    //         if(category){
    //             setProducts(resp.filter((prod) => prod.category === category))
    //         }else{
    //             setProducts(resp)
    //         }
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false))
    // }, [category])

    return(
    <div>
        <div>
        <h1>{greetings} <span className="category-text">{category}</span></h1>
        {loading ? <Loader/> : <ItemList products={products}/>}
        </div>
    </div>
    )
}
export default ItemListContainer