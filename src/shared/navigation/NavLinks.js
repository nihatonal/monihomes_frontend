import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


import './NavLinks.css';
function NavLinks(props) {
    const [active, setActive] = useState()
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });
        setActive(elementId)

    }

    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'about-us' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('about-us')}
                >
                    About Us
                </NavLink>

            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>

                <NavLink
                    className={active === 'gallery' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('gallery')}
                >
                    Gallery
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'reviews' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('reviews')}
                >
                    Reviews
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'contact' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('contact')}
                >
                    Contacts
                </NavLink>
            </div>


        </div>
    );
}

export default NavLinks;