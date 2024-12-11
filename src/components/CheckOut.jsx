import {db} from "../services/firebase"
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {CartContext} from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
const CheckOut = () => {
    const {register, handleSubmit, formState:{errors}, getValues} = useForm();
    const [orderId, setOrderId] = useState("");
    const {cart, cartTotal, clear} = useContext(CartContext);
    const onSubmit = (datosDeUsuario) => {
        let order = {
            // OBJETO DE LA ORDEN DE COMPRA
            buyer: {
                name : datosDeUsuario.nombre,
                lastName: datosDeUsuario.apellido,
                address: datosDeUsuario.direccion,
                email: datosDeUsuario.email1,
            },
            carrito: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        // TRAEMOS LA COLECCION
        const venta = collection(db, "orden de compra")
        // AGREGAMOS UN DOC A LA COLECCION
        addDoc(venta, order)
        .then((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((err) => console.log(err))}
    return(
        <div>
            <div className="bg-form">
                <img src="../public/bg-form.jpg" alt="Background gym" />
                {orderId !== ""
                ?<div className="container-id">
                    <h2>Este es tu id de compra : {orderId}</h2>
                    <Link to="/" className="btn-cart">Volver a home</Link>
                </div>
                :<div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Complete sus datos</h3>
                        <label>Nombre: 
                            <input {...register("nombre", {required:true, minLength:3})} placeholder="Ingrese su nombre"/>
                                {errors?.nombre?.type === "required" && <p className="p-validate">Este campo es obligatorio</p>}
                                {errors?.nombre?.type === "minLength" && <p className="p-validate">Debe tener un mínimo de 3 caractéres</p>}
                        </label>
                        <label>Apellido: 
                            <input {...register("apellido", {required:true, minLength:3})} placeholder="Ingrese su apellido"/>
                                {errors?.apellido?.type === "required" && <p className="p-validate">Este campo es obligatorio</p>}
                                {errors?.apellido?.type === "minLength" && <p className="p-validate">Debe tener un mínimo de 3 caractéres</p>}
                        </label>
                        <label>Dirección: 
                            <input {...register("direccion", {required:true, minLength:10})} placeholder="Ingrese su dirección"/>
                            {errors?.direccion?.type === "required" && <p className="p-validate">Este campo es obligatorio</p>}
                            {errors?.direccion?.type === "minLength" && <p className="p-validate">Debe tener un mínimo de 10 caractéres</p>}
                        </label>
                        <label>Email: 
                            <input type="email" name="email1" {...register("email1", {required:true})} placeholder="Ingrese su email"/>
                            {errors?.email1?.type === "required" && <p className="p-validate">Este campo es obligatorio</p>}
                        </label>
                        <label>Repita su email: 
                            <input type="email" name="email2" {...register("email2", {required:true ,validate:{equalEmails : mail2 => mail2 === getValues().email1}})} placeholder="Repita su email"/>
                            {errors?.email2?.type === "required" && <p className="p-validate">Este campo es obligatorio</p>}
                            {errors?.email2?.type === "equalEmails" && <p className="p-validate">Los emails deben ser iguales</p>}
                        </label>
                        <button type="submit" className="btn-cart">Enviar</button>
                    </form>
                </div>}
            </div>
        </div>
    )
}
export default CheckOut;