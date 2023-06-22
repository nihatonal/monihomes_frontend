import React, { useState } from 'react';
import NavLinks from './NavLinks';

import LanguageSelector from '../UI/LanguageSelector'
import logo from '../../assets/images/logo.png'
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';
import SocialBar from './SocialBar';

import './MainNavigation.css';
function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <div className={'header'}>
            <div className="">

                {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
                {<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                    <NavLinks
                        sidebar_nav_item_wrapper='sidedrawer-navlink_wrapper'
                        className={'sidedrawer-navlinks'}
                        onClick={props.onClick}
                        closeDrawer={closeDrawerHandler}
                    />
                </SideDrawer>}

                <div className={'main_header'}>

                    <img src={logo} alt='logo' className='logo' />

                    <NavLinks />
                    <Hamburger
                        show={drawerIsOpen}
                        onClick={openDrawerHandler}
                    />
                    <LanguageSelector />
                    <SocialBar />
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;