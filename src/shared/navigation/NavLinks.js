import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/Language";
import Price from '../components/Price'
import './NavLinks.css';
function NavLinks(props) {
    const lang = useContext(LanguageContext);
    const navigate = useNavigate();
    const [active, setActive] = useState();
    function scrollSmoothTo(elementId) {
        navigate("/");
        setTimeout(() => {
            var element = document.getElementById(elementId);
            element.scrollIntoView({
                block: "start",
                behavior: 'smooth',

            });
            setActive(elementId);
        }, 100);

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
                    {lang.dictionary["navlinks"][0]}
                </NavLink>

            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>

                <NavLink
                    className={active === 'gallery' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('gallery')}
                >
                    {lang.dictionary["navlinks"][1]}
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'reviews' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('reviews')}
                >
                    {lang.dictionary["navlinks"][2]}
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'concept' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('concept')}
                >
                    {lang.dictionary["navlinks"][3]}
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'contact' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('contact')}
                >
                    {lang.dictionary["navlinks"][4]}
                </NavLink>
            </div>
            <Price price_btn={lang.dictionary["price_btn"]} onClick={props.closeDrawer}/>


        </div >
    );
}

export default NavLinks;