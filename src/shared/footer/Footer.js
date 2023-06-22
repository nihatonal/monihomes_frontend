import React from 'react';

import Logo from '../../assets/images/logo-footer.png';

import { BsInstagram } from 'react-icons/bs';
import { IoLogoVk } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';

import './Footer.css';
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_top_banner">
                    <img src={Logo} alt='logo' />
                    <ul className="footer_top_banner-list">
                        <li className="footer_top_banner_list_item"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>Cookies Policies</a></li>
                        <li className="footer_top_banner_list_item"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>Privacy Policy</a></li>
                        <li className="footer_top_banner_list_item"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>Illumination Text</a></li>
                    </ul>
                    <ul className="footer_social_links">
                        <li className="footer_social_link"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a></li>
                        <li className="footer_social_link"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'><BsInstagram /></a></li>
                        <li className="footer_social_link"><a href='https://www.google.com' target='_blank' rel='noopener noreferrer'><IoLogoVk /></a></li>
                    </ul>
                </div>

                <div className="footer_bottom_banner">
                    <p>© 2023. Melatolia | All Rights Reserved..</p>
                </div>
            </div >

        </div >
    );
}

export default Footer;