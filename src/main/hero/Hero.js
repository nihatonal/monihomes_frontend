import React from 'react';
import { Text } from "../../shared/context/Language";
import './Hero.css';
function Hero() {
    return (
        <div className='hero_container'>
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h1 className="hero_title">
                        <Text tid="hero-title" />
                        <br></br>
                        <Text tid="hero-title_span" />
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Hero;