import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import washing from '../../assets/images/washing_machine - Copy.jpeg';
import bedroom from '../../assets/images/room1/room1_1.jpg';
import kitchen from '../../assets/images/room3/room3_3.jpg';
import location from '../../assets/images/location.png';
import airconditioner from '../../assets/images/airconditioner.jpeg';
import wifi from '../../assets/images/wifi.jpg';
import parking from '../../assets/images/parking.jpeg';
import profil from '../../assets/images/profil.jpeg';

import visa from '../../assets/icons/visa.png';
import transfer from '../../assets/icons/transfer.png';
import master from '../../assets/icons/mastercard.png';
import money from '../../assets/icons/money.png';
import './AboutUs.css'
function AboutUs(props) {
    const lang = useContext(LanguageContext);
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });

    }
    return (
        <section className='section_container aboutus_container' id='about-us'>
            <div className="section_wrapper aboutus_wrapper" >
                <h3 className="section_title">{props.title}</h3>
                <div className="aboutus_content">
                    <div className="aboutus_content_item">
                        <img src={profil} alt="profil" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][8]} Ugur</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={bedroom} alt="bedroom" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][0]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={kitchen} alt="kitchen" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][1]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={airconditioner} alt="airconditioner" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][2]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={wifi} alt="wifi" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][3]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={washing} alt="washing" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][4]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={location} alt="location" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][5]}</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={parking} alt="parking" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][6]}</p>
                    </div>
                    <div className="aboutus_content_item payment_options">
                        <div className="payment_options_wrapper" onClick={() => scrollSmoothTo('contact')}>
                            <div className='payment_item'>
                                <img className='payment_icon' src={transfer} alt='visa' />
                            </div>
                            {/* <div className='payment_item'>
                                <img className='payment_icon' src={money} alt='money' />
                            </div> */}
                        </div>
                        <p className="aboutus_content_item_desc">{lang.dictionary["about_items"][7]}</p>
                    </div>
                </div>

                <p className="aboutus_desc">
                    {lang.dictionary["about_desc"]}
                </p>
                <div className="olive_container"></div>
                <div className="olive_container_2"></div>
            </div>
        </section >
    );
}

export default AboutUs;