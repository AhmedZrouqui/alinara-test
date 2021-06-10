import * as React from 'react'
import {Link} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



const Navigation = () => {

    type humAction = true | false
    const navReducer = (state:boolean, action: humAction) => {

        const nav = document.getElementById("navDiv");
        const closeBtn = document.getElementById("closeBtn");
        const openBtn = document.getElementById("openBtn")

        switch(action){
            case true:
                nav?.classList.add("openNav");
                closeBtn?.classList.remove("close");
                openBtn?.classList.add("close");
                return action
                break;


            case false:
                nav?.classList.remove("openNav");
                closeBtn?.classList.add("close");
                openBtn?.classList.remove("close");
                return action
                break;
        }
    }


    const [isOpen, dispatchIsOpen] = React.useReducer(navReducer, false, undefined)
    const [isSticky, setIsSticky] = React.useState(false)

    const onScrollNavigation = () => {
        if(window.scrollY >= 50){
            setIsSticky(true)
        } else setIsSticky(false)
    }

    window.addEventListener('scroll', onScrollNavigation)



    return (
        <div className= "navigation active">

            <div className="hamburger-menu">
                <MenuIcon onClick={() => dispatchIsOpen(!isOpen)} className="icon" id="openBtn"/>
            </div>

            <div className="logo-section">
                <h3 className="logo-text">Enara</h3>
            </div>

            <div className="nav" id="navDiv">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="" className="nav-link">Acceuil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">Nos Produits</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">A Propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-link">Nous Contacter</Link>
                    </li>
                </ul>

                <CloseIcon onClick={() => dispatchIsOpen(!isOpen)} id="closeBtn" className="icon closeIcon" />
                
            </div>


            <div className="shopping-account">
                <ul className="sa-list">
                    <li className="sa-item">
                        <Link to="" className="sa-link"><ShoppingBasketIcon className="icon"/></Link>
                    </li>
                    <li className="sa-item">
                        <Link to="" className="sa-link"><PersonIcon  className="icon"/></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
