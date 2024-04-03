import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import LanguageSelector from '../UI/LanguageSelector'
import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';
import SocialBar from './SocialBar';

import './MainNavigation.css';
function MainNavigation(props) {
    let location = useLocation();
    const navigate = useNavigate();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

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

    function scrollSmoothTo(elementId) {
        navigate("/");
        setTimeout(() => {
            var element = document.getElementById(elementId);
            element.scrollIntoView({
                block: "start",
                behavior: 'smooth',

            });
        }, 100);

    }

    return (
        <div className={'header'}
            style={scrolled ? {
                background: 'linear-gradient( 180deg,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8))'
            } : null}
        >


            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            {
                <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}
                    style={{ top: '80px', paddingTop: '100px' }}
                >
                    <NavLinks
                        sidebar_nav_item_wrapper='sidedrawer-navlink_wrapper'
                        className={'sidedrawer-navlinks'}
                        onClick={props.onClick}
                        closeDrawer={closeDrawerHandler}
                    />
                    <SocialBar />
                </SideDrawer>
            }

            <div className={'main_header'}>
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
                <NavLink to='/' onClick={() => scrollSmoothTo('hero')}>
                    <img src={logo} alt='logo' className='logo' />
                </NavLink>

                {/* {location.pathname === '/' && } */}
                <NavLinks />
                <LanguageSelector />
                {location.pathname === '/' && <SocialBar className={scrolled ? "social_out" : "social_in"} />}
            </div>

        </div >
    );
}

export default MainNavigation;