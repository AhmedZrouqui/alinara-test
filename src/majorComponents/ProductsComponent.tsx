import React from 'react'
import Categories from '../components/product/Categories'
import Products from '../components/product/Products'

const ProductsComponent = () => {

    const [selectedCategory, setSelectedCategory] = React.useState("Tout les produits")
    const [pageNumber, setPageNumber] = React.useState(0)

    return (
        <div className="productsComponent">

            <div className="category-products">
                <Categories setSelectedCategory={setSelectedCategory}
                            setPageNumber={setPageNumber}/>


                <Products selectedCategory={selectedCategory}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber} />
            </div>
        </div>
    )
}

export default ProductsComponent
