import heroImg from '../../styles/img/Humans.png';
import heroImgg from '../../styles/img/HumanLight.svg';
import * as React from 'react'

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-text">
                s
            </div>
            <div className="hero-img">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <img src={heroImgg} />
            </div>
        </div>
    )
}

export default Hero
