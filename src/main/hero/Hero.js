import React from 'react';

import './Hero.css';
function Hero(props) {
    return (
        <div className='hero_container'>
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h1 className="hero_title">A BETTER WAY TO STAY <br></br>in Fethiye</h1>
                </div>

            </div>
            {/* <img src={hero}  alt='hero'/> */}
        </div>
    );
}

export default Hero;