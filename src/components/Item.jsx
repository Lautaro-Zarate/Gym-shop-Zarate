const Item = ({products}) =>{
    return(
        <div>
            {products.map((prod) => 
            <div key={prod.id}>
                <h2>{prod.name}</h2>
                <p>${prod.price}</p>
                <p>{prod.id}</p>
            </div>)}
        </div>
    )
}
export default Item;