import heroImg from '../../styles/img/heroImg.jpg';
import * as React from 'react'
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="content">
                    <img src={heroImg}></img>
                    <div className="content-text">
                        <h1>Enara!</h1>
                        <h2>Illuminez votre chemin vers l'inconnu</h2>

                        <Link className="buy-now-btn" to="">Acheter Maintenant</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
