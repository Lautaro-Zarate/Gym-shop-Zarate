import React, {useState} from "react";

const ItemCount = () =>{
    const [count, setCount] = useState(1);
    const Sumar = () =>{
        if(count < 10){
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
            <spam>{count}</spam>
            <button onClick={Sumar}>+</button>
        </div>
    )
}
export default ItemCount;