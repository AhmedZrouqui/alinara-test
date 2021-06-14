import * as React from 'react';
import { useProducts } from './ProductContext'


type ICategorieContext = [Array<string>, React.Dispatch<React.SetStateAction<Array<string>>>];


export const CategoryContext = React.createContext<ICategorieContext>([[], ()=> null])

const initialCategory = ["Tout les produits"]

const CategoryProvider: React.FC<{}> = ({children} : {children?: React.ReactNode}) => {

    const [products, setProducts] = useProducts()
    const [categories, setCategories] = React.useState<Array<string>>(initialCategory)

    if(products){
        products.map(x => {
            if(!categories.includes(x.category))
                setCategories([...categories, x.category])
        })
    }

    console.log(categories)


    return(
        <CategoryContext.Provider value={[categories, setCategories]}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider

export function useCategory(){

    const context = React.useContext(CategoryContext);

    if(!context) throw new Error('useCategory must be inside a CategoryProvider.');

    return context;
}