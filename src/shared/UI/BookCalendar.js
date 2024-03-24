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
    //let checker = (src, target) => target.some((v) => src.includes(v));

    // useEffect(() => {
    //     if (!props.value) return
    //     if (!props.markDates) return
    //     let selectedRange = expandDates(moment(new Date(props.value[0])).format("YYYY/MM/DD"), moment(new Date(props.value[1])).format("YYYY/MM/DD"))

    // }, [props.value, props.markDates]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getprices",
                );

                setPriceData(responseData.prices[0].price)
                console.log(responseData.prices[0].price)

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);
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


    //const check_in = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[0])).flat())]
    //const check_out = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1])[expandDates(guest.dates[0], guest.dates[1]).length - 1])).flat())]
    //const reserved = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(1, -1))).flat())]
    //const reserved_raw = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]))).flat())]

    useEffect(() => {
        let selected_dates;
        selected_dates = expandDates(props.selectedStart, props.selectedEnd).length > 3 ? expandDates(props.selectedStart, props.selectedEnd) : expandDates(props.selectedStart, props.selectedEnd);
        setSelectedDays(selected_dates)

    }, [props.selectedStart, props.selectedEnd])




    useEffect(() => {
        const dates = [...new Set([].concat(props.guests && props.guests.map((guest) => expandDates(guest.dates[0], guest.dates[1]).slice(0, -1))))].flat()
        const map = dates.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

        const reserved_ = [...map.entries()].filter((a) => a[1] > 2).sort(compare).flat().filter((a) => a !== 3)

        setDatess(reserved_)

    }, [props.guests])

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


    //console.log(datess, markedDates)

    let check_in = markedDates.map((x) => x[0]);
    let check_out = markedDates.map((x) => x[x.length - 1]);
    let reserved = datess.filter(x => !check_in.concat(check_out).includes(x))
    //console.log(reserved)
    // for (let i = 0; i < result; i++) {
    //     console.log(result[i])
    // }

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
                    //tileContent={({ date, view }) => ('2000     ₺')}
                    tileContent={({ date, view }) =>
                        priceData.map((el) => el.date === moment(date).format("YYYY/MM/DD") ? <p key={el.date}>{el.price} ₺</p> : null)
                        // date.getDay() === 0 ? <p>It's Sunday!</p> : null


                    }
                // priceData && priceData.map((el) => moment(el.date).format("YYYY/MM/DD") === moment(date).format("YYYY/MM/DD") && el.price)



                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2023/12/31").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/02/05").format("YYYY/MM/DD")
                // ) {
                //     return "1200     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2023/02/04").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/04/06").format("YYYY/MM/DD")
                // ) {
                //     return "1400     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >=
                //     moment("2024/04/06").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/04/15").format("YYYY/MM/DD")
                // ) {
                //     return "2000     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/04/14").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/05/01").format("YYYY/MM/DD")
                // ) {
                //     return "1800     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/04/30").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/06/01").format("YYYY/MM/DD")
                // ) {
                //     return "1900     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/05/31").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/06/14").format("YYYY/MM/DD")
                // ) {
                //     return "2000     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/06/13").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/09/01").format("YYYY/MM/DD")
                // ) {
                //     return "2500     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/08/31").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/10/01").format("YYYY/MM/DD")
                // ) {
                //     return "2000     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/09/31").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/10/25").format("YYYY/MM/DD")
                // ) {
                //     return "1900     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/10/24").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/11/01").format("YYYY/MM/DD")
                // ) {
                //     return "2000     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/10/31").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2024/12/21").format("YYYY/MM/DD")
                // ) {
                //     return "1700     ₺";
                // }
                // if (
                //     moment(date).format("YYYY/MM/DD") >
                //     moment("2024/12/19").format("YYYY/MM/DD") &&
                //     moment(date).format("YYYY/MM/DD") <
                //     moment("2025/01/01").format("YYYY/MM/DD")
                // ) {
                //     return "2000     ₺";
                // }
                //}
                // }
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

export default BookCalendar;