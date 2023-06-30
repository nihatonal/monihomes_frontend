import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from "../shared/context/Language";
import Hero from './hero/Hero';
import AboutUs from './aboutus/AboutUs';
import Reviews from './reviews/Reviews';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Partners from './partners/Partners';
import profil from '../assets/images/profil.jpeg'
import Availability from './gallery/components/Availability';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './Main.css';
function Main() {
    const lang = useContext(LanguageContext);
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
            <AboutUs
                title={lang.dictionary["navlinks"][0]}
            />
            <Reviews
                loading={lang.dictionary["is_loading"]}
                title={lang.dictionary["navlinks"][2]}
            />

            <Gallery
                title={lang.dictionary["navlinks"][1]}
            />
            <Availability />
            <Partners
                title={lang.dictionary["partner_title"]}
                villa_1={lang.dictionary["villa_masal"]}
                villa_2={lang.dictionary["villa_yoyo"]}
            />

            <Contact
                title={lang.dictionary["navlinks"][3]}
            />

            <FloatingWhatsApp
                phoneNumber='+90 530 899 77 09'
                accountName='Moni Homes'
                avatar={profil}
                statusMessage={lang.dictionary['whatsup_status']}
                chatMessage={lang.dictionary['whatsup_message']}
                placeholder={lang.dictionary['whatsup_placeholder']}
                buttonClassName={!scrolled ? "social_out whatsup_btn" : "social_in whatsup_btn"}
            />
        </div>
    );
}

export default Main;