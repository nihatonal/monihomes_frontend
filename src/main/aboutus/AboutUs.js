import React from 'react';

import host from '../../assets/images/host.jpg';
import washing from '../../assets/images/washing_machine - Copy.jpeg';
import bedroom from '../../assets/images/room_aboutus.jpeg';
import kitchen from '../../assets/images/room2_8.jpeg';
import location from '../../assets/images/location.png';
import airconditioner from '../../assets/images/airconditioner.jpeg';
import wifi from '../../assets/images/wifi.jpg';
import './AboutUs.css'
function AboutUs(props) {
    return (
        <section className='section_container aboutus_container' id='aboutus'>
            <div className="section_wrapper aboutus_wrapper" >
                <h3 className="section_title">About us</h3>
                <div className="aboutus_content">
                    <div className="aboutus_content_item">
                        <img src={host} alt="host" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">caring host Ugur</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={bedroom} alt="bedroom" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">comfy bedrooms</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={kitchen} alt="kitchen" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">full equipped kitchens</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={airconditioner} alt="airconditioner" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">air-conditioner</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={wifi} alt="wifi" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">free wifi</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={washing} alt="washing" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">washing and dryer machine</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={location} alt="location" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">great location</p>
                    </div>
                    <div className="aboutus_content_item">
                        <img src={host} alt="host" className="aboutus_content_image" />
                        <p className="aboutus_content_item_desc">parking</p>
                    </div>
                </div>

                <p className="aboutus_desc">
                    We know what standarts of service are and we do our best to provide
                    you with the best experience in Fethiye! Our doors are always open for you!
                </p>
                <div className="olive_container"></div>
                <div className="olive_container_2"></div>
            </div>
        </section>
    );
}

export default AboutUs;