const ItemListContainer = (props) => {
    const {greeting} = props
    return(
    <div className="item-container">
        <h1>{greeting}</h1>
    </div>
    )
}
export default ItemListContainer