import React, { useContext, useState, useEffect } from 'react';
//import moment from "moment";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar'
import { ShareContext } from '../../shared/context/ShareContext';
import moment from "moment";
import { DatePicker, Space } from 'antd';
import './Availability.css';

function Availability(props) {
    const lang = useContext(LanguageContext);
    const share = useContext(ShareContext)
    const { sendRequest } = useHttpClient();
    const { RangePicker } = DatePicker;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );
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
    useEffect(() => {
        if (!share.dates) return
        setStartDate(share.dates[0])
        setEndDate(share.dates[1])
    }, [share.dates])

    const getDates = (dates) => {
        if (!dates) return
        share.setDateRange([moment(new Date(dates[0])).format("YYYY/MM/DD"), moment(new Date(dates[1])).format("YYYY/MM/DD")])
    }

    return (
        <div className="availability_container" id='availability'>
            <div className="availability_wrapper">
                <h3 className="section_title">Check the availability</h3>
                <animated.div className="availability__item" style={openAnimation}>
                    <div className="calendar_container">
                        <Space direction="vertical" size={12} >
                            <RangePicker onChange={getDates} placeholder={share.dates.length < 1 ? ['Check-in', 'Check-out'] : [startDate, endDate]} placement='topLeft' />
                        </Space>
                    </div>

                    <div className="availability__item_content">
                        <BookCalendar
                            // style={'open' ? { display: 'flex' } : null}
                            // close={ }
                            lang={
                                lang.userLanguage
                            }
                            // markDates={guests}
                            guests={guests}
                            selectedStart={share.dates[0]}
                            selectedEnd={share.dates[1]}
                            value={share.dates[0]}
                        />
                    </div>

                </animated.div>
            </div>

        </div >
    );
}

export default Availability;