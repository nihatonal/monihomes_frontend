import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './SocialBar.css';
function SocialBar(props) {
    return (
        <div className='socialbar-container'>
            <div className="socialbar_wrapper">
                <span></span>
                <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                    <FaFacebookF />
                </a>
                <span></span>
                <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                    <FaInstagram />
                </a>
                <span></span>
                <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                    <FaWhatsapp />
                </a>
                <span></span>
            </div>
        </div>
    );
}

export default SocialBar;