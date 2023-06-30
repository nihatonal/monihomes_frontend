import React, { useState, useEffect } from 'react';
import { useHttpClient } from "../shared/hooks/http-hook";
import GuestTable from './GuestTable';
import './User.css';
function User(props) {
    const { isLoading, sendRequest } = useHttpClient();
    const [startDate, setStartDate] = useState();
    const [info, setInfo] = useState('');
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );
                console.log(responseData.guests);
                setGuests(responseData.guests)
            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(startDate, endDate)
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
            console.log(responseData);
        } catch (err) {
        }
    }
    return (
        <div className="user_container">
            <div className="user_wrapper">

                <form className="inputs_container" onSubmit={submitHandler}>
                    <label htmlFor="startDate" className="input_label">
                        Check-in
                        <input type={'date'} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        <span></span>
                    </label>
                    <label htmlFor="startDate" className="input_label">
                        Check-out
                        <input type={'date'} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        <span></span>
                    </label>
                    <label htmlFor="startDate" className="input_label info_label">
                        Information
                        <textarea type={'text'} value={info} onChange={(e) => setInfo(e.target.value)} />

                    </label>

                    <button
                        type="submit"
                        className={'save_btn'}
                        disabled={!startDate && !endDate && info.length < 0}
                    >
                        Save
                    </button>
                </form>
                <GuestTable data={guests} />
            </div>
        </div>
    );
}

export default User;