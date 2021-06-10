import { Breadcrumbs } from '@material-ui/core';
import * as React from 'react';
import { useQuery } from "react-query";



const getProducts = async (): Promise<ICartItem[]> => 
    await (await fetch("https://fakestoreapi.com/products")).json();


type ICartContext = [ICartItem[], React.Dispatch<React.SetStateAction<ICartItem[]>> ];

export const CartContext = React.createContext<ICartContext | undefined>(undefined);


const CartProvider: React.FC<{}> = ({children}: { children?: React.ReactNode }) => {


    const {data, isLoading, error} = useQuery<ICartItem[]>('products', getProducts);


    const [cart, setCart] = React.useState<ICartItem[]>(data as ICartItem[] || undefined);

    /*

    const updateItem = (id: number) => {
        cart?.filter((item: ICartItem) => {

                if(item.id === id){
                    if(item.quantity === undefined) item.quantity = 1
                    else item.quantity += 1
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

    */

    console.log(cart)

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );

};

export default CartProvider;