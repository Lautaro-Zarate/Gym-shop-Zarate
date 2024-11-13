const Item = ({prod}) =>{
    return(
        <div>
            <div>
                <img src={prod.image} alt={prod.name} />
                <div className="cards-description">
                    <h2>{prod.name}</h2>
                    <p>${prod.price}</p>
                    <button><img src="./public/icon.png" alt="icon" /></button>
                </div>
            </div>
        </div>
    )
}
export default Item;