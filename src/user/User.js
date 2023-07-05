import React, { useState, useEffect, useContext } from 'react';
import "moment/locale/ru";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import moment from "moment";
import GuestTable from './components/GuestTable';
import AddGuest from './components/AddGuest';
import './User.css';
function User(props) {
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useHttpClient();
    const [startDate, setStartDate] = useState();
    const [info, setInfo] = useState('');
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [validStart, setValidStart] = useState();
    const [validEnd, setValidEnd] = useState();
    const [dates, setDates] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );

                setGuests(responseData.guests)

                setDates([...new Set([].concat(responseData.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())])
            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/savedates",
                "POST",
                JSON.stringify({
                    info: info,
                    dates: [startDate, endDate]
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            setGuests([...guests, responseData.guest]);
           // setDates([...new Set([].concat([...guests, responseData.guest].map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())])
        } catch (err) {
        }
    }
    const confirmDeleteHandler = async (e) => {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode.parentNode.id)
        try {
            await sendRequest(
                process.env.REACT_APP_BACKEND_URL + `/${deleteId}`,
                "DELETE",
                null,
                {
                    Authorization: "Bearer " + auth.token,
                }
            );
            const posts = guests.filter((item) => item.id !== deleteId);
            setGuests(posts);
            setShow(false)
            setDates([...new Set([].concat(posts.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())])
        } catch (err) { }
    };
    function expandDates(startDate, stopDate) {
        let dateArray = [];
        let currentDate = moment(new Date(startDate));
        let stop_Date = moment(new Date(stopDate));
        while (currentDate <= stop_Date) {
            dateArray.push(moment(new Date(currentDate)).format("YYYY/MM/DD"));
            currentDate = moment(new Date(currentDate)).add(1, "days");
        }
        return dateArray;
    }

    useEffect(() => {
        setValidStart(dates.includes(moment(new Date(startDate)).format("YYYY/MM/DD")));
        setValidEnd(dates.includes(moment(new Date(endDate)).format("YYYY/MM/DD")))
    }, [startDate, endDate, dates]);

    return (
        <div className="user_container">
            <div className="user_wrapper">
                <AddGuest
                    submitHandler={submitHandler}
                    startDate={startDate}
                    setStartDate={(e) => setStartDate(e.target.value)}
                    endDate={endDate}
                    setEndDate={(e) => setEndDate(e.target.value)}
                    validStart={validStart}
                    validEnd={validEnd}
                    info={info}
                    info_length={info.length}
                    setInfo={(e) => setInfo(e.target.value)}
                    show={show}
                    confirmDeleteHandler={confirmDeleteHandler}
                    setShow={() => setShow(false)}
                    isLoading={isLoading}
                />
                <GuestTable data={guests} onDelete={(e) => {
                    setShow(true)
                    setDeleteId(e.target.parentNode.parentNode.parentNode.id)
                }} />
            </div>
        </div >
    );
}

export default User;