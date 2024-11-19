import React, {useState} from "react";

const ItemCount = (props) =>{
    const [count, setCount] = useState(0);
    const {stock, onAdd} = props;
    const onAddHandler = () =>{
        if(stock >= 0){
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
            <div className="count-container">
                <button onClick={Restar} className="btn-restar">-</button>
                <span className="span-count">{count}</span>
                <button onClick={Sumar} className="btn-sumar">+</button>
                <button onClick={onAddHandler} className="btn-add">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;