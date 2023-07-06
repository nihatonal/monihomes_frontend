import React, { useContext, useState, useEffect } from 'react';
// import moment from "moment";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar'
import Calendar from './components/Calendar';

import './Availability.css';

function Availability(props) {
    const lang = useContext(LanguageContext);
    const { sendRequest } = useHttpClient();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );
                //console.log(responseData.guests);
                setGuests(responseData.guests)
            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    const openAnimation = useSpring({
        // from: { opacity: "0", maxHeight: "270px" },
        // to: { opacity: "1", maxHeight: open ? `705px` : "270px" },
        // config: { duration: "300" }
    });
    // function expandDates(startDate, stopDate) {
    //     let dateArray = [];
    //     let currentDate = moment(new Date(startDate));
    //     let stop_Date = moment(new Date(stopDate));
    //     while (currentDate <= stop_Date) {
    //         dateArray.push(moment(new Date(currentDate)).format("YYYY/MM/DD"));
    //         currentDate = moment(new Date(currentDate)).add(1, "days");
    //     }
    //     return dateArray;
    // }



    // useEffect(() => {
    //     const markDates = [
    //         ...new Set([].concat(guests && guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(0, -1))).flat()),
    //     ];
    //     console.log(markDates)
    //     if (markDates.includes(moment(new Date(startDate)).format("YYYY/MM/DD"))
    //         && moment(new Date(startDate)).format("YYYY/MM/DD") !== moment(new Date()).format("YYYY/MM/DD")) {
    //         setError(true)
    //         //alert('Seçtiğiniz tarihte odamız doludur.')
    //     } else {
    //         setError(false)
    //     }

    // }, [startDate, guests])


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
                                    selected={endDate || startDate}
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
                           // style={'open' ? { display: 'flex' } : null}
                            // close={ }
                            lang={
                                lang.userLanguage
                            }
                            markDates={guests}
                            guests={guests}
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