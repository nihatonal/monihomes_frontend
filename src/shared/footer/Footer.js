import React from 'react';

import Logo from '../../assets/images/logo_footer.png';
import { NavLink } from 'react-router-dom';
import NavLinks from '../navigation/NavLinks'

import './Footer.css';
function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <NavLink to='/'>
                    <img src={Logo} alt='logo' />
                </NavLink>
                <NavLinks />
            </div >
            {/* <div className="footer_bottom_banner">
                <p>© 2023. Monihomes | All Rights Reserved..</p>
                <NavLink to='/privacypolicy'>Privacy Policy</NavLink>
                <p className='designer'>Designed by <span>Nihat</span></p>
            </div> */}

        </div >
    );
}

export default Footer;