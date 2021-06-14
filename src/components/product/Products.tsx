import React from 'react'
import { useProducts } from '../../infoContext/ProductContext'

const Products = () => {

    const [products, setProducts] = useProducts()


    return (
        <div className="products">
            
        </div>
    )
}

export default Products
