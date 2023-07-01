import React, { useState, useEffect, useContext } from 'react';
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import GuestTable from './components/GuestTable';
import './User.css';
function User(props) {
    const auth = useContext(AuthContext);
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
    const confirmDeleteHandler = async (e) => {
        console.log(e.target.parentNode.parentNode.parentNode.id)
        try {
            await sendRequest(
                process.env.REACT_APP_BACKEND_URL + `/${e.target.parentNode.parentNode.parentNode.id}`,
                "DELETE",
                null,
                {
                    Authorization: "Bearer " + auth.token,
                }
            );
            const posts = guests.filter((item) => item.id !== e.target.parentNode.parentNode.parentNode.id);
            setGuests(posts);
        } catch (err) { }
    };
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
                <GuestTable data={guests} onDelete={confirmDeleteHandler} />
            </div>
        </div>
    );
}

export default User;