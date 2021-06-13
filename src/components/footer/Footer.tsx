import React from 'react'
import {Link} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div className="footer">
            <div className="newsletter-subscribe-container">
                <div className="newsletter-container">

                    <h3 className="newsletter-title">Abonnez vous sur notre Newsletter</h3>

                    <span className="newsletter-details">Promotions, Nouveau Produits, et plus! Restez à jour.</span>

                    <div className="form-div">
                        <input type="text" name="e-mail-newsletter" id="newsletter-email" placeholder="Votre Adresse Email"/>
                        <button className="subscribe-btn">S'abonner</button>
                    </div>

                </div>
            </div>

            <div className="footer-container">
                <div className="quick-links">
                    <span className="quick-links-title title">
                        Navigation rapide
                    </span>
                    <div className="lists-container">
                        <ul className="first-list list">
                            <li className="first-list-items item">
                                <Link to="" className="first-list-link link">Accueil</Link>
                            </li>
                            <li className="first-list-items item">
                                <Link to="" className="first-list-link link">Catalogue</Link>
                            </li>
                        </ul>

                        <ul className="second-list list">
                            <li className="second-list-items item">
                                <Link to="" className="second-list-link link">A propos</Link>
                            </li>
                            <li className="second-list-items item">
                                <Link to="" className="second-list-link link">Nous contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="address-container">
                    <p className="address-title title">Adresse et Contact</p>

                    <ul className="address-list">
                        <li className="address-list-item">Beni Yakhlef, CP 28815</li>
                        <li className="address-list-item">Mohammedia, Beni yakhlef - Maroc</li>
                        <li className="address-list-item">enara@contact.ma</li>
                        <li className="address-list-item">+212 6 66 66 66 66</li>
                    </ul>
                </div>

                <div className="newsletter-container">
                    <p className="newsletter-title title">Abonnez vous sur Newsletter</p>

                    <div className="form-div">
                        <input type="text" name="newsletter-footer" id="footer-newseletter" placeholder="Adresse email"/>
                        <button className="subscribe-btn">S'abonner</button>

                    </div>
                </div>

                <div className="social-container">
                    <p className="follow-us-title title">Suivez-nous</p>

                    <ul className="social-list list">
                        <li className="social-list-item item">
                            <Link to="" className="social-list-item-link link"><FacebookIcon className="social-icon facebook" /></Link>
                        </li>
                        <li className="social-list-item item">
                            <Link to="" className="social-list-item-link link"><TwitterIcon className="social-icon twitter" /></Link>
                        </li>
                        <li className="social-list-item item">
                            <Link to="" className="social-list-item-link link"><InstagramIcon className="social-icon instagram" /></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bottom-footer">
                <span>© Copyright 2021, Enara.</span>
            </div>
        </div>
    )
}

export default Footer
