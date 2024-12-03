import React, {useState, useEffect} from "react";
import { getOneProduct } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams();
// FIREBASE
    useEffect(() => {
        const prodCollection = collection(db, "productos");
        const docRef = doc(prodCollection, id);
        getDoc(docRef)
        .then((res) => setProducto({id: res.id, ...res.data()}))
        .catch((err) => console.log(err))
    },[])
// MOCK LOCAL
    // useEffect(() => {
    //     getOneProduct(id)
    //     .then((res) => setProducto(res))
    //     .catch((error) => console.log(error))
    // }, [])
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
export default ItemDetailContainer;