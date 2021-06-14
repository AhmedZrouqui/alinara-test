import React from 'react'
import { useCategory } from '../../infoContext/CategoryContext'
import { useProducts } from '../../infoContext/ProductContext'

const Categories = ({setSelectedCategory, setPageNumber} : {setSelectedCategory: Function, setPageNumber: Function}) => {

    const [categories, setCategories] = useCategory()
    const [products, setProducts] = useProducts()

    const OnCategoryChange = ({category} : {category: string}) => {
        setPageNumber(0)
        setSelectedCategory(category)
    }

    const displayCategories = () => {



        return categories.map((category,index) => {
                
                return(
                    <li className="category-item"
                        key={index} 
                        onClick={() => OnCategoryChange({category})}
                        > 

                        {category} 

                        <span className="count">
                            {(category==="Tout les produits") ? products?.length : products?.filter(x => x.category === category).length}
                        </span>
                    </li>
                );
            });
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
