import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="error-container">
            <img src="../public/error.jpg" alt="Error Page" className="error-image"/>
            <Link to="/"className="btn-buy">Volver a home</Link>
        </div>
    )
}
export default Error;