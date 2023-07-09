import React from 'react';
// import VideoPlayer from '../../shared/UI/VideoPlayer';
// import dron_video from '../../assets/video/dron.mp4'
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
                {/* <div className="hero-video">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={dron_video} type='video/mp4' />
                    </video>
                </div>
                <div className="bg_filter"></div> */}
            </div>


        </div>
    );
}

export default Hero;