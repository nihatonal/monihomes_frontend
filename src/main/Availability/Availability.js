import React, { useContext, useState, useEffect } from 'react';
//import moment from "moment";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useSpring, animated } from "react-spring";
import { LanguageContext } from "../../shared/context/Language";
import BookCalendar from '../../shared/UI/BookCalendar';
import { ShareContext } from '../../shared/context/ShareContext';
import moment from "moment";
import { DatePicker, Space } from 'antd';
import axios from "axios";
import './Availability.css';

function Availability(props) {
    const lang = useContext(LanguageContext);
    const share = useContext(ShareContext)
    const { sendRequest } = useHttpClient();
    const { RangePicker } = DatePicker;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();
    const [filtered, setFiltered] = useState();
    const [filter, setFilter] = useState('room')
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );
                setGuests(responseData.guests);
                const result = (responseData.guests && responseData.guests.filter((x) => x.room
                    .includes(filter)))
                setFiltered(result)
            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/google",
                );
                setEvents(responseData.data.items)


            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    useEffect(() => {
        const filtered_events = events && events.filter((el) => el.summary.toLowerCase().includes(filter))
        // console.log(events && events.filter((el) => el.summary.toLowerCase().includes(filter)))
    }, [filter, events])

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

    useEffect(() => {
        const result = (guests && guests.filter((x) => x.room
            .includes(filter)))
        setFiltered(result)


    }, [filter]);

    const ReservationForm = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            checkIn: "",
            checkOut: ""
        });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e) => {

            e.preventDefault();
            // try {
            //     const responseData = await sendRequest(
            //         process.env.REACT_APP_BACKEND_URL + "/reservation",
            //         "POST", formData,
            //         {
            //             "Content-Type": "application/json",
            //         }
            //     );
            //     console.log(responseData.data.message);

            // } catch (err) {
            //     console.log("Error sending reservation request.");
            // }
            try {
                const response = await axios.post("http://localhost:5000/api/reservation", formData);
                console.log(response.data.message);
            } catch (error) {
                console.log("Error sending reservation request.");
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />

                <button type="submit">Send Reservation Request</button>
            </form>
        );
    };

    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <div className="availability_container" id='availability'>
            <div className="availability_wrapper">
                <h3 className="section_title">Check the availability</h3>
                <animated.div className="availability__item" style={openAnimation}>
                    <div className="calendar_container">
                        <Space direction="vertical" size={12} >
                            <RangePicker onChange={getDates} placeholder={share.dates.length < 1 ? ['Check-in', 'Check-out'] : [startDate, endDate]} placement='topLeft' />
                        </Space>
                        {/* <div className="filter_room">
                            <button className={filter === "room" ? `filter_btn active_filter_btn` : `filter_btn`}
                                onClick={(e) => setFilter("room")}
                            >Moni Homes</button>
                            <button className={filter === "villamasal" ? `filter_btn active_filter_btn` : `filter_btn`}
                                onClick={(e) => setFilter("villamasal")}
                            >Villa Masal</button>
                        </div> */}
                    </div>

                    <div className="availability__item_content">
                        <BookCalendar

                            lang={
                                lang.userLanguage
                            }
                            filter={filter}
                            // markDates={guests}
                            guests={filtered}
                            selectedStart={share.dates[0]}
                            selectedEnd={share.dates[1]}
                            value={share.dates[0]}
                            events={events && events.filter((el) => el.summary.toLowerCase().includes(filter))}
                        />

                    </div>

                </animated.div>
            </div>

            <ReservationForm />
            <br></br>
            <div>
                <h1>Monihomes - Reservation</h1>
                <button onClick={handleLogin}>Login with Google</button>
            </div>
        </div >
    );
}

export default Availability;