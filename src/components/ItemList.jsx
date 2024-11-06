import Item from "./Item";
const ItemList = ({products}) => {
    return(
        <div>
            <Item products={products}/>
        </div>
    )
}
export default ItemList;