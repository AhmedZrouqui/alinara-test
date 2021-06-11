import * as React from 'react';
import { useQuery } from "react-query";


type Action = IAddToCart | IUpdateUpCart | IUpdateDownCart | IRemoveFromCart | IClearCart
type ICartContext = [IProductItem[] | undefined, React.Dispatch<Action>];


export const CartContext = React.createContext<ICartContext | undefined>(undefined);




const CartReducer = (state: IProductItem[], action: Action) => {

    switch(action.type) {
        case "add": 
            if(!state.find(product => product.id === action.addProduct.id)){
                const tempState = [...state, {...action.addProduct, quantity:1, amount: action.addProduct.price*1}];
                localStorage.setItem('temp_cart', JSON.stringify(tempState))
                return tempState
            } else {
                const tempState = state.map(product => {
                    if(product.id === action.addProduct.id){
                        const _updatedProduct = {
                            ...product,
                            quantity: product.quantity+1,
                            amount: product.amount + product.price
                        }
        
                        return _updatedProduct;
                    }
                    
                    return product
                });

                localStorage.setItem('temp_cart', JSON.stringify(tempState))
                return tempState
            } 
            break;
            
        case "updateUp":  
            if(state.find(product => product.id === action.updateUpProduct.id)){
                
                const tempState =  state.map(product => {

                    if(product.id === action.updateUpProduct.id){
                        const _updatedProduct = {
                            ...product,
                            quantity: product.quantity+1,
                            amount: Number((product.amount + product.price).toFixed(2))
                        }
                        return _updatedProduct;
                    }
                    
                    return product
                })

                localStorage.setItem('temp_cart', JSON.stringify(tempState))
                return tempState

            } else throw new Error("Cannot Update this Item, please try again!");
            break;
        
        case "updateDown" :
            if(state.find(product => product.id === action.updateDownProduct.id)){
                
                const tempState = state.map(product => {

                    if(product.id === action.updateDownProduct.id){
                        
                        if(product.quantity > 1 ){
                            const _updatedProduct = {
                                ...product,
                                quantity: product.quantity-1,
                                amount: Number((product.amount - product.price).toFixed(2))
                            }
    
                            return _updatedProduct;
                        }
                    }

                    return product
                })

                localStorage.setItem('temp_cart', JSON.stringify(tempState))
                return tempState

            } else throw new Error("Cannot Update this Item, please try again!");
            break;

        case "remove": 
            if(state.find(product => product.id === action.removeProduct.id)){
                const tempState =  state.filter(product => product.id !== action.removeProduct.id);
                localStorage.setItem('temp_cart', JSON.stringify(tempState));
                return tempState;
            }

            else throw new Error("Cannot remove Undefined, please try again!")
                        
        case "clear": 
            localStorage.removeItem("temp_cart");
            return action.clearCart;
    }
};

const checkLocalStorageCart = () => {

    let cart = []

    if(localStorage.getItem("temp_cart")){
        try {
            cart = JSON.parse(localStorage.getItem("temp_cart") as string);
        } catch (error) {
            console.log(error)
        }
    }

    return cart;
}


const CartProvider: React.FC<{}> = ({children}: { children?: React.ReactNode }) => {

    const [cart, setCart] = React.useReducer(CartReducer, checkLocalStorageCart(), undefined)


    console.log(cart)

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );

};

export default CartProvider;

export function useCart(){

    const context = React.useContext(CartContext);

    if(!context) throw new Error('useCart must be inside a CartProvider.');

    return context;
}