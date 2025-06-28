import React, { useState, useEffect } from 'react';
import moment from "moment";
import "moment/locale/ru";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHttpClient } from "../hooks/http-hook";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import './BookCalendar.css';

function BookCalendar(props) {
    const { sendRequest } = useHttpClient();
    const [selectedDays, setSelectedDays] = useState([]);
    const [priceData, setPriceData] = useState([]);
    const [markedDates, setMarkedDates] = useState([]);
    const [datess, setDatess] = useState([]);
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
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getprices",
                );

                setPriceData(responseData.prices[props.filter === "room" ? 0 : 1].price)

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest, props.filter]);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    function compare(a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        let selected_dates;
        selected_dates = expandDates(props.selectedStart, props.selectedEnd).length > 3 ? expandDates(props.selectedStart, props.selectedEnd) : expandDates(props.selectedStart, props.selectedEnd);
        setSelectedDays(selected_dates)

    }, [props.selectedStart, props.selectedEnd])



    useEffect(() => {
 
        const dates = [...new Set([].concat(props.events && props.events.map((guest) => expandDates(guest.start.date, guest.end.date).slice(0, -1))))].flat()

        const map = dates.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

        const reserved_ = [...map.entries()].filter((a) => a[1] > 2).sort(compare).flat().filter((a) => a !== 3)
 
        setDatess(props.filter === "room" ? reserved_ : dates)

    }, [props.events, props.filter])



    let breaks = [0]
    for (let i = 0; i < datess.length; i++) {
        if (i + 1 >= datess.length || moment(new Date(datess[i])).add(1, 'days').format("YYYY/MM/DD") !== moment(new Date(datess[i + 1])).format("YYYY/MM/DD")) {
            breaks.push(i + 1)
        }
    }

    useEffect(() => {
        let index = 0;
        const result = datess.reduce((r, v, i) => {
            if (i >= breaks[index]) {
                r.push([]);
                ++index;
            }
            r[r.length - 1].push(datess[i]);
            return r;
        }, []);
        setMarkedDates(result)
    }, [datess])



    let check_in = markedDates.map((x) => x[0]);
    let check_out = markedDates.map((x) => x[x.length - 1]);
    let reserved = datess.filter(x => !check_in.concat(check_out).includes(x))


    return (
        <div className='calendar-modal' style={props.style} ref={props.ref}>
            <div className="calendar-modal-wrapper">
                <Calendar
                    value={props.value}
                    locale={props.lang}
                    nextLabel={<MdOutlineArrowForwardIos className='calendar-arrow' />}
                    prevLabel={<MdOutlineArrowBackIos className='calendar-arrow' />}
                    selectRange={false}
                    showDoubleView={windowSize.innerWidth > 768 ? true : false}
                    showNavigation={true}
                    showNeighboringMonth={false}
                    showFixedNumberOfWeeks={false}
                    allowPartialRange={false}


                    tileClassName={({ date, view }) => {
                        if (
                            moment(date).format("YYYY/MM/DD") <
                            moment().format("YYYY/MM/DD")
                        ) {
                            return "passed";
                        }
                        if (!props.guests) return
                        if (
                            moment(date).format("YYYY/MM/DD") <
                            moment().format("YYYY/MM/DD")
                        ) {
                            return "passed";
                        }


                        if (selectedDays.slice(0, -1).filter((d) => check_out.includes(d)).filter((e) => !reserved.concat(check_out.filter((d) => check_in.includes(d))).includes(e)).find((x) => x === moment(date).format("YYYY/MM/DD"))

                        ) {
                            return "selected-check-in"
                        }

                        if (selectedDays.slice(1).filter((d) => check_in.includes(d)).filter((e) => !reserved.concat(check_out.filter((d) => check_in.includes(d))).includes(e)).find((x) => x === moment(date).format("YYYY/MM/DD"))

                        ) {
                            return "selected-check-out"
                        }

                        if (selectedDays[0] === moment(date).format("YYYY/MM/DD")
                            && !check_in.includes(selectedDays[0])
                            && !reserved.includes(selectedDays[0])

                        ) {
                            return "selected-check-in-null"
                        }
                        if (selectedDays[selectedDays.length - 1] === moment(date).format("YYYY/MM/DD")
                            && !reserved.includes(selectedDays[selectedDays.length - 1])
                        ) {
                            return "selected-check-out-null"
                        }
                        if (check_in.filter((d) => !check_out.includes(d)).find((x) => x === moment(date).format("YYYY/MM/DD"))

                        ) {
                            return "reserved_check-in"
                        }

                        if (check_out.filter((d) => !check_in.includes(d)).find((x) => x === moment(date).format("YYYY/MM/DD"))) {
                            return "reserved_check-out"
                        }

                        if (reserved.concat(check_out.filter((d) => check_in.includes(d))).find((x) => x === moment(date).format("YYYY/MM/DD"))) {
                            return "reserved"
                        }
                        if (selectedDays.slice(1, -1).filter((d) => !reserved.includes(d)).find((x) => x === moment(date).format("YYYY/MM/DD"))

                        ) {
                            return "selected";
                        }


                    }}
                    tileContent={({ date, view }) =>
                        priceData.map((el) => el.date === moment(date).format("YYYY/MM/DD") ? <p key={el.date}>{el.price === "*" ? " " : el.price + "₺"} </p> : null)

                    }

                />

            </div>
        </div>
    );
}

export default BookCalendar;