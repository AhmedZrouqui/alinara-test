import React from 'react'
import {Link} from 'react-router-dom'
import { useCart } from '../../infoContext/CartContext'
import { useProducts } from '../../infoContext/ProductContext'

const Bestseller = () => {

    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart()
    
    const displayProducts = () => {
        return products?.slice(0,8).map((product, index) => {
            return(
                <div className="product-div" key={product.id}>
                    <div className="imgContainer">
                        <img src={product.image}/>
                    </div>

                    <div className="infosContainer">
                        <div className="product-price">
                            {product.price} MAD
                        </div>

                        <div className="product-name">
                            {product.title}
                        </div>
                    </div> 

                    <div className="addContainer">
                        <button onClick={() => setCart({type:"add",addProduct:product})}>Ajouter au panier</button>
                    </div>
                    
                </div>
            )
        })
    }


    return (
        <div className="bestseller">
            <h3 className="bestseller-title">Meilleurs ventes</h3>

            <div className="products-display">
                {
                    displayProducts()
                }
            </div>

            <div className="see-all-products">
                <Link to ="" className="see-all-products-btn">
                    Voir tout les produits
                </Link>
            </div>  
        </div>
    )
}

export default Bestseller
