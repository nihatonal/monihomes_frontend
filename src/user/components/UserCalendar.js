import React, { useState, useEffect } from 'react';
import moment from "moment";
import "moment/locale/ru";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import '../../shared/UI/BookCalendar.css';

function UserCalendar(props) {

    const [selectedDays, setSelectedDays] = useState([])

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
    //let checker = (src, target) => target.some((v) => src.includes(v));

    // useEffect(() => {
    //     if (!props.value) return
    //     if (!props.markDates) return
    //     let selectedRange = expandDates(moment(new Date(props.value[0])).format("YYYY/MM/DD"), moment(new Date(props.value[1])).format("YYYY/MM/DD"))

    // }, [props.value, props.markDates]);

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

    // console.log(props.guests)
    const check_in = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[0])).flat())]
    const check_out = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[expandDates(guest.dates[0], guest.dates[1]).length - 1])).flat())]
    const reserved = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())]
    const reserved_raw = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())]
    useEffect(() => {
        let selected_dates;
        selected_dates = expandDates(props.selectedStart, props.selectedEnd).length > 3 ? expandDates(props.selectedStart, props.selectedEnd) : expandDates(props.selectedStart, props.selectedEnd);
        setSelectedDays(selected_dates)

    }, [props.selectedStart, props.selectedEnd])
    // console.log(reserved.concat(check_out.filter((d) => check_in.includes(d))))
    // console.log(check_out)
    // console.log(check_out.filter((d) => !check_in.includes(d)))
    // console.log(selectedDays.slice(1).filter((d) => check_in.includes(d)).filter((e) => !reserved.concat(check_out.filter((d) => check_in.includes(d))).includes(e)))

    // console.log(selected_dates.slice(1, -1).filter((d) => !reserved.includes(d)))
    // console.log(selectedDays)
    // console.log(reserved)
    // console.log(selectedDays.filter((d) => check_out.includes(d)))
    // console.log(selectedDays.filter((d) => check_in.includes(d)))
    // console.log(check_out.includes(selectedDays[selectedDays.length - 1]))
    // console.log(selectedDays.slice(0, -1).filter((d) => check_out.includes(d)))


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
                            && !reserved_raw.includes(selectedDays[selectedDays.length - 1])
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
                // tileDisabled={({ activeStartDate, date, view }) => props.markDates && expandDates(props.markDates[0], props.markDates[1]).find((x) => x === moment(date).format("YYYY/MM/DD"))}

                />
                {/* <div className="calendar-btns-wrapper">
                    <button onClick={() => onChange(null)} className="clear-dates">{sectionData.clear}</button>
                    <button onClick={props.close} className="close-calendar">{sectionData.close}</button>
                </div>
                <div className="error_modal"
                    style={error ? { display: "flex" } : null}
                    onClick={() => setError(false)}
                >
                    <p>{sectionData.error_dates}</p>
                </div> */}
            </div>
        </div>
    );
}

export default UserCalendar;