
interface ICartItem{
    id: number
    title: string
    description: string;
    category: string;
    image: string;
    price: number;
    quantity: number;
}

type CartType = {
    items: ICartItem[]
    saveItem: (item: ICartItem) => void
    updateItem: (id: number) => void
    removeItem: (id: number) => void
}