import React, { useState, useEffect, useContext } from 'react';
import "moment/locale/ru";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
// import moment from "moment";
import GuestTable from './components/GuestTable';
// import AddGuest from './components/AddGuest';
// import { useForm } from "../shared/hooks/form-hook";
import UserCalendar from './components/UserCalendar';
import SetPrice from './components/SetPrice';

import Select from '../shared/components/Select';
import './User.css';
function User(props) {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [guests, setGuests] = useState();
    const [mark, setMark] = useState([]);
    const [room, setRoom] = useState('room1');
    const [options, setOptions] = useState(false);
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [year, setYear] = useState(2024)
    const [page, setPage] = useState('');
    const [events, setEvents] = useState(null)
    // const [formState] = useForm(
    //     {
    //         guestname: {
    //             value: "",
    //             isValid: false,
    //         },
    //         guesttel: {
    //             value: "",
    //             isValid: true,
    //         },
    //         startdate: {
    //             value: "",
    //             isValid: false,
    //         },
    //         enddate: {
    //             value: "",
    //             isValid: false,
    //         },
    //         info: {
    //             value: "",
    //             isValid: true,
    //         },

    //     },
    //     false
    // );
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );

                setGuests(responseData.guests);

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
                //console.log(responseData.data.items);

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    useEffect(() => {
        setMark(guests && guests.filter((x) => x.room === room))
        //setDates(guests && [...new Set([].concat(guests.filter((x) => x.room === room).map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())])
        // console.log(guests && [...new Set([].concat(guests.filter((x) => x.room === room).map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())])


    }, [room, guests])

    // let checker = (src, target) => target.some((v) => src.includes(v));
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (checker(expandDates(formState.inputs.startdate.value, formState.inputs.enddate.value), dates)) {
    //         alert("Bu tarihlerde rezervasyon olabilir.")

    //         return
    //     }
    //     setIsLoading(true)
    //     try {
    //         const responseData = await sendRequest(
    //             process.env.REACT_APP_BACKEND_URL + "/savedates",
    //             "POST",
    //             JSON.stringify({
    //                 guestname: formState.inputs.guestname.value,
    //                 guesttel: formState.inputs.guesttel.value,
    //                 info: formState.inputs.info.value,
    //                 room: room,
    //                 dates: [formState.inputs.startdate.value, formState.inputs.enddate.value]
    //             }),
    //             {
    //                 "Content-Type": "application/json",
    //             }
    //         );
    //         // console.log(responseData);
    //         setIsLoading(false)
    //         // setGuests([...guests, responseData.guest]);

    //     } catch (err) {
    //     }
    // }
    // const confirmDeleteHandler = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await sendRequest(
    //             process.env.REACT_APP_BACKEND_URL + `/${deleteId}`,
    //             "DELETE",
    //             null,
    //             {
    //                 Authorization: "Bearer " + auth.token,
    //             }
    //         );
    //         const posts = guests.filter((item) => item._id !== deleteId);
    //         setGuests(posts);
         
    //         setDates([...new Set([].concat(posts.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())])
    //     } catch (err) { }
    // };
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

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    //google calendar
    useEffect(() => {
        setFilteredData(events && events.filter((el) => el.summary.toLowerCase().includes(room)))
    }, [events, room])


    const sortByDate = (b, a) => {
        return new Date(a.start.date) - new Date(b.start.date);
    };
    return (
        <div className="user_container">

            <div className="user_wrapper">
                <div className="logout">
                    <button
                        onClick={auth.logout}
                    >Çıkış</button>
                </div>
                <div className="user_btns_container">
                    <button onClick={() => setPage("customer")} className="user_btn">Müşteri Kaydı</button>
                    <button onClick={() => setPage("price")} className="user_btn">Fiyat Kaydı</button>
                </div>
                {page === "price" && <SetPrice />}
                {page === "customer" && <>
                    {/* <AddGuest
                        inputHandler={inputHandler}
                        submitHandler={submitHandler}
                        disabled={validDate}
                        show={show}
                        confirmDeleteHandler={confirmDeleteHandler}
                        setShow={() => setShow(false)}
                        isLoading={isLoading}
                        isloading={deleteLoading}
                        room={room}
                        roomHandler={(e) => {
                            setRoom(e.target.id)
                            setOptions(false)
                        }}
                        showOptions={() => setOptions(!options)}
                        options={options}
                    /> */}
                    <div className="select_room_wrapper">
                    <Select
                        onClick={(e) => {
                            setRoom(e.target.id)
                            setOptions(false)
                        }}
                        room={room}
                        showOptions={() => setOptions(!options)}
                        options={options}
                    />
                    </div>
                   
                    <UserCalendar
                        markDates={mark}
                        // guests={mark}
                        events={filteredData}
                    />
                    <GuestTable
                        data={filteredData.sort(sortByDate)}
                        onDelete={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                           
                        }}
                        onChange={filterHandler}
                        onChangeYear={(e) => {
                            setYear(e.target.value)
                        }}
                        years={year}
                        value={filter}
                        filter={room}
                        clearFilter={() => setFilter('')}
                    />
                </>}
            </div>
        </div >
    );
}

export default User;