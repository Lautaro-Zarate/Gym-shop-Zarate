import { useNavigate } from "react-router-dom";
const Item = ({prod}) =>{
    const navigate = useNavigate();
    const handlerImageNavigate = () => {
        navigate(`/item/${prod.id}`)
    }
    const handlerBtnNavigate = () => {
        navigate(`/item/${prod.id}`)
    }
    return(
        <div>
            <div>
                <img src={prod.image} alt={prod.name} onClick={handlerImageNavigate}/>
                <div className="cards-description">
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                    <button><img src="../public/icon.png" alt="icon" onClick={handlerBtnNavigate}/></button>
                </div>
            </div>
        </div>
    )
}
export default Item;