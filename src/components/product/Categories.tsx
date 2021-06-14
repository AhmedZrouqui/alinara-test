import React from 'react'
import { useCategory } from '../../infoContext/CategoryContext'
import { useProducts } from '../../infoContext/ProductContext'

const Categories = () => {

    const [categories, setCategories] = useCategory()
    const [products, setProducts] = useProducts()

    const displayCategories = () => {
        return categories.map((category,index) => {

            if(index === 0){
                return(
                    <li className="category-item"  key={index}> {category} <span className="count">{products?.length}</span></li>
                );
            } else{
                return(
                    <li className="category-item"  key={index}> {category} <span className="count">{products?.filter(x => x.category === category).length}</span></li>
                );
            }
        })
    }

    return (
        <div className="categories">
            <ul className="category-list">
                {
                    displayCategories()
                }
            </ul>
        </div>
    )
}

export default Categories
