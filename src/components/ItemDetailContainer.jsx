import React, {useState, useEffect} from "react";
import { getOneProduct } from "../mock/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    useEffect(() => {
        getOneProduct("1")
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    }, [])
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
export default ItemDetailContainer;