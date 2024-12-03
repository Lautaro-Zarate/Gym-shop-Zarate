import {db} from "../services/firebase"
import { useState, useContext } from "react";
import {CartContext} from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const CheckOut = () => {
    const [user, setUser] = useState({});
    const [validate, setValidate] = useState("");
    const [orderId, setOrderId] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const userData = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault();
        if(!user.name || !user.lastName || !user.address || !user.email){
            alert("Te faltaron campos por completar")
        }else if(user.email !== validate){
            alert("Los emails no coinciden")
        }else{
            // OBJETO DE LA ORDEN DE COMPRA
            let order = {
                buyer : user,
                carrito : cart,
                total : cartTotal(),
                date : serverTimestamp()
            }
            // TRAEMOS LA COLECCION
            const venta = collection(db, "orden de compra")
            // AGREGAMOS UN DOC A LA COLECCION
            addDoc(venta, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((err) => console.log(err))
        }
    }
    return(
        <div>
            <div className="bg-form">
            <img src="../public/bg-form.jpg" alt="Background gym" />
            </div>
            {orderId !== "" 
            ?<div className="container-id">
                <h2>Este es tu id de compra : {orderId}</h2>
                <Link className="btn-cart">Volver a home</Link>
            </div>
            :<div>
                <div className="form-container">
                    <form onSubmit={finalizarCompra}>
                        <h3>Complete sus datos</h3>
                        <label> Nombre: 
                            <input type="text" name="name" placeholder="Ingrese su nombre" onChange={userData}/>
                        </label>
                        <label> Apellido:
                            <input type="text" name="lastName" placeholder="Ingrese su apellido" onChange={userData}/>
                        </label>
                        <label> Dirección:
                            <input type="text" name="address" placeholder="Ingrese su dirección" onChange={userData}/>
                        </label>
                        <label> Email:
                            <input type="email" name="email" placeholder="Ingrese su email" onChange={userData}/>
                        </label>
                        <label> Repita su email:
                            <input type="email" name="second-email" placeholder="Repita su email" onChange={(e) => setValidate(e.target.value)}/>
                        </label>
                        <button type="submit" className="btn-cart">Enviar</button>
                    </form>
                </div>
            </div>}
        </div>
    )
}
export default CheckOut;