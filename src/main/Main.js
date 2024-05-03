import React, { useState, useEffect, useContext } from 'react';

import { LanguageContext } from "../shared/context/Language";
import { useInView } from "react-intersection-observer";
import Hero from './hero/Hero';
import AboutUs from './aboutus/AboutUs';
import Reviews from './reviews/Reviews';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Concept from './concept/Concept';
//import Partners from './partners/Partners';
import profil from '../assets/images/profil.jpeg'
import Availability from './Availability/Availability';
import ImageGallery from '../shared/UI/ImageGallery';


import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './Main.css';
function Main() {
    const lang = useContext(LanguageContext);
    const [scrolled, setScrolled] = useState(false);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
        rootMargin: "-35px",
    });

    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 90 && !inView) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }



        };
        window.addEventListener("scroll", handleScroll);
        return (_) => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [inView]);


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
            {/* <Partners
                title={lang.dictionary["partner_title"]}
                villa_1={lang.dictionary["villa_masal"]}
                villa_2={lang.dictionary["villa_yoyo"]}
            /> */}
            <Concept
                title={lang.dictionary["navlinks"][3]}
                data={lang.dictionary["concept_page"]}
            />
            <div ref={ref}>
                <Contact
                    title={lang.dictionary["navlinks"][4]}

                />
            </div>


            <FloatingWhatsApp
                phoneNumber='905308997709'
                accountName='Moni Homes'
                avatar={profil}
                statusMessage={lang.dictionary['whatsup_status']}
                chatMessage={lang.dictionary['whatsup_message']}
                placeholder={lang.dictionary['whatsup_placeholder']}
                buttonClassName={!scrolled ? "social_out" : "social_in"}
                allowEsc
                allowClickAway
                notification
                notificationSound
            />
        </div>
    );
}

export default Main;