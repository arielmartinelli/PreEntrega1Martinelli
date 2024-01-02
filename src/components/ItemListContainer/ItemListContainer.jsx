import {useState ,useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div id="item-container">
            <h1 className="mb-5"> {greeting} </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer