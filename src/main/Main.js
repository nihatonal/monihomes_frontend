import React from 'react';

import Hero from './hero/Hero';
import AboutUs from './aboutus/AboutUs';
import Reviews from './reviews/Reviews';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Partners from './partners/Partners';
import './Main.css';
function Main(props) {
    return (
        <div className="main_container">
            <Hero />
            <AboutUs />
            <Reviews />
            <Gallery />
            <Partners />
            <Contact />
        </div>
    );
}

export default Main;