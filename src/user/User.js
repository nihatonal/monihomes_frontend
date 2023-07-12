import React, { useState, useEffect, useContext } from 'react';
import "moment/locale/ru";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import moment from "moment";
import GuestTable from './components/GuestTable';
import AddGuest from './components/AddGuest';
import { useForm } from "../shared/hooks/form-hook";
import UserCalendar from './components/UserCalendar';
import './User.css';
function User(props) {
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useHttpClient();
    const [validDate, setValidDate] = useState(false)
    const [guests, setGuests] = useState();
    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [dates, setDates] = useState([]);
    const [mark, setMark] = useState([]);
    const [room, setRoom] = useState('room1');
    const [options, setOptions] = useState(false);
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState([])

    const [formState, inputHandler] = useForm(
        {
            guestname: {
                value: "",
                isValid: false,
            },
            guesttel: {
                value: "",
                isValid: false,
            },
            startdate: {
                value: "",
                isValid: false,
            },
            enddate: {
                value: "",
                isValid: false,
            },
            info: {
                value: "",
                isValid: false,
            },

        },
        false
    );
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

    useEffect(() => {
        setMark(guests && guests.filter((x) => x.room === room))
        setDates(guests && [...new Set([].concat(guests.filter((x) => x.room === room).map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())])
    }, [room, guests])

    useEffect(() => {
        setValidDate(formState.inputs.startdate.value > formState.inputs.enddate.value)

    }, [formState.inputs.startdate.value, formState.inputs.enddate.value])

    let checker = (src, target) => target.some((v) => src.includes(v));
    const submitHandler = async (e) => {
        e.preventDefault();
        if (checker(expandDates(formState.inputs.startdate.value, formState.inputs.enddate.value), dates)) {
            alert("Bu tarihlerde rezervasyon olabilir.")

            return
        }

        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/savedates",
                "POST",
                JSON.stringify({
                    guestname: formState.inputs.guestname.value,
                    guesttel: formState.inputs.guesttel.value,
                    info: formState.inputs.info.value,
                    room: room,
                    dates: [formState.inputs.startdate.value, formState.inputs.enddate.value]
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            console.log(responseData);
            setGuests([...guests, responseData.guest]);
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
            const posts = guests.filter((item) => item._id !== deleteId);
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

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        // console.log(filter)
        //  guests && console.log(guests.filter((x) => x.info.includes(filter)))
        setFilteredData(guests && guests.filter((x) => x.guestname
            .includes(filter)))
    }, [filter, guests])
    return (
        <div className="user_container">
            <div className="user_wrapper">
                <AddGuest
                    inputHandler={inputHandler}
                    submitHandler={submitHandler}
                    disabled={!formState.isValid || validDate}
                    show={show}
                    confirmDeleteHandler={confirmDeleteHandler}
                    setShow={() => setShow(false)}
                    isLoading={isLoading}
                    room={room}
                    roomHandler={(e) => {
                        setRoom(e.target.id)
                        setOptions(false)
                    }}
                    showOptions={() => setOptions(!options)}
                    options={options}
                />

                <UserCalendar
                    markDates={mark}
                    guests={mark}
                />
                <GuestTable
                    data={filteredData || []}
                    onDelete={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShow(true)
                        setDeleteId(guests[e.target.id]._id)
                    }}
                    onChange={filterHandler}
                    value={filter}
                    clearFilter={() => setFilter('')}
                />
            </div>
        </div >
    );
}

export default User;