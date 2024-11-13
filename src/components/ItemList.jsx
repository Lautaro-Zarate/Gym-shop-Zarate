import Item from "./Item";
const ItemList = ({products}) => {
    return(
        <div className="cards-container">
            {products.map((prod) => <Item prod={prod} key={prod.id}/>)}
        </div>
    )
}
export default ItemList;