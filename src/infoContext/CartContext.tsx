import * as React from 'react';
import { useQuery } from "react-query"
import { createNoSubstitutionTemplateLiteral } from 'typescript';



const getProducts = async (): Promise<ICartItem[]> => 
    await (await fetch("https://fakestoreapi.com/products")).json();


type ICartContext = [ICartItem[], React.Dispatch<React.SetStateAction<ICartItem[]>>];

export const CartContext = React.createContext<ICartContext>([[], () => null]);


const CartProvider: React.FC<{}> = ({children}: { children?: React.ReactNode }) => {


    const {data, isLoading, error} = useQuery<ICartItem[]>('products', getProducts);

    const [cart, setCart] = React.useState<ICartItem[]>(data as ICartItem[]);

    const updateItem = (id: number) => {
        cart?.filter((item: ICartItem) => {

                if(item.id === id){
                    item.quantity += 1;
                    setCart([...cart])
                }
            }
        )
    }

    const removeItem = (id: number) => {
        cart?.filter((item: ICartItem) => {

                if(item.id !== id){
                    setCart([...cart])
                }
        })
    }

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );

};

export default CartProvider;