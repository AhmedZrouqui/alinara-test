interface IProductItem{
    id: number
    title: string
    description: string
    category: string
    image: string
    price: number
    quantity: number
    amount: number
}

type ProductType = {
    items: IProductItem[];
};

interface IAddToCart{
    type: "add";
    addProduct : IProductItem
}

interface IUpdateUpCart{
    type: "updateUp";
    updateUpProduct : IProductItem
}

interface IUpdateDownCart{
    type: "updateDown";
    updateDownProduct : IProductItem
}

interface IRemoveFromCart{
    type: "remove";
    removeProduct : IProductItem
}

interface IClearCart{
    type: "clear";
    clearCart : []
}