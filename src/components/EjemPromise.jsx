import { useEffect } from "react";

const EjemPromise = () => {
    let error = true;
    const simulacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject("No hay hamburguesas")
            }else{
                resolve("Hay hamburguesas")
            }
        }, 3000)
    })
    useEffect(() => {
        simulacion
        .then((res) => console.log("Respuesta: " + res))
        .catch((err) => console.log("Respuesta: " + err))
        .finally("Proceso finalizado")
    }, [])
    return(
        <div></div>
    )
}
export default EjemPromise;