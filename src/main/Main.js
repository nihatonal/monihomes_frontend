import React, { useState, useEffect } from 'react';

import Hero from './hero/Hero';
import AboutUs from './aboutus/AboutUs';
import Reviews from './reviews/Reviews';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Partners from './partners/Partners';
import profil from '../assets/images/profil.jpeg'


import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './Main.css';
function Main(props) {
    const [scrolled, setScrolled] = useState(false);
    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return (_) => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="main_container">
            <Hero />
            <AboutUs />
            <Reviews />
            <Gallery />
            <Partners />
            <Contact />
            <FloatingWhatsApp
                phoneNumber='+90 530 899 77 09'
                accountName='Moni Homes'
                avatar={profil}
                statusMessage='Typically replies within 30 mins'

                buttonClassName={!scrolled ? "social_out" : "social_in"}
            />
        </div>
    );
}

export default Main;