import React, { useState, useEffect } from 'react';
import moment from "moment";
import "moment/locale/ru";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import '../../shared/UI/BookCalendar.css';

function UserCalendar(props) {

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
    // useEffect(() => {

    // }, [props.events])
    // const check_in = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[0])).flat())]
    // const check_out = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[expandDates(guest.dates[0], guest.dates[1]).length - 1])).flat())]
    // const reserved = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())]

    const check_in = [...new Set([].concat(props.events && props.events.map((guest) => props.events && expandDates(guest.start.date, guest.end.date)[0])).flat())]
    const check_out = [...new Set([].concat(props.events && props.events.map((guest) => props.events && expandDates(guest.start.date, guest.end.date)[expandDates(guest.start.date, guest.end.date).length - 1])).flat())]
    const reserved = [...new Set([].concat(props.events && props.events.map((guest) => props.events && expandDates(guest.start.date, guest.end.date).slice(1, -1))).flat())]

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
                        if (!props.markDates) return
                        // if (
                        //     moment(date).format("YYYY/MM/DD") <
                        //     moment().format("YYYY/MM/DD")
                        // ) {
                        //     return "passed";
                        // }

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

                    }}
                // tileDisabled={({ activeStartDate, date, view }) => props.markDates && expandDates(props.markDates[0], props.markDates[1]).find((x) => x === moment(date).format("YYYY/MM/DD"))}

                />
            </div>
        </div>
    );
}

export default UserCalendar;