import React from 'react'
import ReactDom from 'react-dom'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useCart } from '../../infoContext/CartContext'

const CartComponent = (props) => {

    const [cart, setCart] = useCart()

    const displayCart = () => {

        return cart?.map((product, index) => {
            return (
                <>
                <div className="line"></div>
                <div className="product-div" key={product.id}>
                    <div className="imgContainer">
                        <img src={product.image}/>
                    </div>


                    <div className="infosContainer">
                        <div className="product-name">
                                <span className="title">{product.title}</span>
                        </div>

                        <div className="product-quantity">
                            <div className="form-div">
                                <button onClick={() => product.quantity > 1 ? setCart({type:"updateDown", updateDownProduct:product}) : setCart({type:"remove", removeProduct:product})} className="handle">-</button>
                                <input type="text" className="" value={product.quantity}/>
                                <button onClick={() => setCart({type:"updateUp", updateUpProduct:product})} className="handle">+</button>
                            </div>
                        </div>

                        <div className="product-price">
                            <span className="total">Prix Total: </span>{product.amount} MAD
                        </div>
                    </div>
                    
                </div>
                </>
            )
        })
    }

    const getTotalPrice = () => {
        var totalbill = 0;

        cart?.map(product => totalbill += Number((product.amount).toFixed(2)));

        return totalbill;
    }

    if(!props.isOpen) return null
    
    return ReactDom.createPortal(

        <>
            <div 
                className="background" 
                onClick={() => props.setIsOpen(false)}>
            </div>

            <div className="cart">

                <div className="quit-button">
                    <span 
                        className="btn" 
                        onClick={() => props.setIsOpen(false)}>
                            Fermer
                            <ArrowRightAltIcon className="icon" />
                    </span>
                </div>
                
                <div className="cart-display">
                    <div className="products">
                        { displayCart() }
                    </div>
                </div>

                <div className="cart-bottom-section">
                    <div className="line"></div>
                    <div className="total-price-container">
                        <span className="total-total">Prix Total de la Commande: <span className="total-total-price">{getTotalPrice()} MAD</span></span>
                    </div>

                    <div>
                        <button className="check-out-button">Commander Maintenant</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("cart-portal")
    )
}

export default CartComponent
