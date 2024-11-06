import React, {useState} from "react";

const ItemCount = (props) =>{
    const [count, setCount] = useState(0);
    const {stock, onAdd} = props;
    const onAddHandler = () =>{
        if(stock == 0){
            onAdd(count)
        }
    }
    const Sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const Restar = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div>
            <button onClick={Restar}>-</button>
            <span>{count}</span>
            <button onClick={Sumar}>+</button>
            <div>
                <button onClick={onAddHandler}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;