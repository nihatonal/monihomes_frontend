import React, { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../../shared/context/Language";
import BookCalendar from '../../../shared/UI/BookCalendar'
import Calendar from './Calendar';

import './Availability.css'
function Availability(props) {
    const lang = useContext(LanguageContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(true);
    let toggleHandler = (e) => {
        setOpen(!open);
    };

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "270px" },
        to: { opacity: "1", maxHeight: open ? `705px` : "270px" },
        config: { duration: "300" }
    });

    const [markDates, setMarkDates] = useState(['2023/07/23', '2023/07/26']);

    return (
        <div className="availability_container">
            <div className="availability_wrapper">
            <h3 className="section_title">Check the availability</h3>
                <animated.div className="availability__item" style={openAnimation}>
                    <div className="calendar_container">
                        <div className="date_inputs_container">
                            <div className="date_input">
                                <p className="calendar_label">Check-in</p>
                                <Calendar
                                    onChange={(date) => setStartDate(date)}
                                    selected={startDate}
                                    lang={lang.userLanguage}
                                />
                            </div>
                            <div className="date_input">
                                <p className="calendar_label">Check-out</p>
                                <Calendar
                                    onChange={(date) => setEndDate(date)}
                                    selected={endDate}
                                    lang={lang.userLanguage}
                                />
                            </div>

                        </div>
                        {/* <button 
                        className="availability_btn" 
                        onClick={toggleHandler}
                        >
                            Search
                        </button> */}
                    </div>
                    <div className="availability__item_content">
                        <BookCalendar
                            style={open ? { display: 'flex' } : null}
                            // close={ }
                            lang={
                                lang.userLanguage === 'dk' ? 'da' : lang.userLanguage
                            }
                            markDates={markDates}
                            selectedStart={startDate}
                            selectedEnd={endDate}
                            value={startDate}
                        />
                    </div>

                </animated.div>
            </div>

        </div >
    );
}

export default Availability;