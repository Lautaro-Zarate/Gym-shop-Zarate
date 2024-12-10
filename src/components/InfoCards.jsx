import 'animate.css';
const InfoCards = () => {
    return(
        <div className="info-cards-container">
            <div className="info-cards animate__animated animate__backInDown animate__delay-1.5s">
                <img src="../public/truck.png" alt="truck" />
                <h3>ENVIOS</h3>
                <p>A todo el país a domicilio y todas las sucursales de Correo Argentino del País</p>
            </div>
            <div className="info-cards animate__animated animate__backInUp animate__delay-1.5s">
                <img src="../public/cash.png" alt="Cash" />
                <h3>MEDIOS DE PAGO</h3>
                <p>Hasta 3 cuotas sin interés con todas las tarjetas</p>
            </div>
            <div className="info-cards animate__animated animate__backInDown animate__delay-1.5s">
                <img src="../public/phone.png" alt="phone" />
                <h3>CONSULTA ONLINE</h3>
                <p>Respondemos todas las consultas por Whatsapp ¡Escríbenos!</p>
            </div>
        </div>
    )
}
export default InfoCards;