import * as React from 'react';
import { useQuery } from "react-query";





type IProductContext = [IProductItem[] | undefined, React.Dispatch<React.SetStateAction<IProductItem[] | undefined>>];

export const ProductContext = React.createContext<IProductContext>([[], () => null]);

const getProducts = async (): Promise<IProductItem[]> => 
await (await fetch("https://fakestoreapi.com/products")).json();


const ProductProvider: React.FC<{}> = ({children}: { children?: React.ReactNode }) => {

    //Retrieve the data and status using UseQuery
    const {data, isLoading, error} = useQuery<IProductItem[]>('products', getProducts);

    const [products, setProducts] = React.useState<IProductItem[] | undefined>(data);

    React.useEffect( () => {
        setProducts(data)
    }, [data])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    );

};

export default ProductProvider;


export function useProducts(){

    const context = React.useContext(ProductContext);

    if(!context) throw new Error('useProducts must be inside a ProductProvider.');

    return context;
}