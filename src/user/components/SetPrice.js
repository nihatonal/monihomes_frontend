import React, { useState, useEffect } from 'react';
import moment from "moment";
import LoadingSpinner from '../../shared/UI/LoadingSpinner';
import DeleteModal from './DeleteModal';
import Input from '../../shared/components/Input';
import { useHttpClient } from "../../shared/hooks/http-hook";
import {
    VALIDATOR_REQUIRE

} from "../../shared/util/validators.js";
import { useForm } from "../../shared/hooks/form-hook";
import BookCalendar from '../../shared/UI/BookCalendar'


import './SetPrice.css';

function SetPrice(props) {
    const { sendRequest } = useHttpClient();
    const [isLoading, setIsLoading] = useState(false);
    const [price, setPrice] = useState('');
    const [priceData, setPriceData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [dates, setDates] = useState([]);
    const [formState, inputHandler] = useForm(
        {
            start_date: {
                value: "",
                isValid: false,
            },
            end_date: {
                value: "",
                isValid: true,
            },
            price: {
                value: "",
                isValid: false,
            }

        },
        false
    );

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getprices",
                );

                setPriceData(responseData.prices[0].price)

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest, isLoading]);
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
        setDates(expandDates(formState.inputs.start_date.value, formState.inputs.end_date.value))

    }, [formState.inputs.start_date.value, formState.inputs.end_date.value]);


    useEffect(() => {
        setPrice(
            // dates.reduce((acc, elem) => {
            //     acc[elem] = "2000" // or what ever object you want inside
            //     return acc
            // }, [])
            dates.map(car => {
                return {
                    date: car,
                    price: formState.inputs.price.value
                };
            })

        )
    }, [formState.inputs.price.value, dates]);

    const filterObjectArray = (arr, filterArr) => (
        arr.filter(el =>
            filterArr.some(f =>
                f.date !== el.date
            )
        )
    );
    useEffect(() => {
        const result = priceData.filter(person => !dates.includes(person.date))
        setFiltered(result)

    }, [formState.inputs.price.value, dates]);


    const submitHandler = async (e) => {
        e.preventDefault();
        const arr = filtered.concat(price)
        console.log(arr)
        // if (checker(expandDates(formState.inputs.startdate.value, formState.inputs.enddate.value), dates)) {
        //     alert("Bu tarihlerde rezervasyon olabilir.")

        //     return
        // }
        setIsLoading(true)
        console.log(formState.inputs.price.isValid)
        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/savepricess",
                "POST",
                JSON.stringify({
                    price: arr
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            console.log(responseData);
            setIsLoading(false)

        } catch (err) {
        }
    }
    return (
        <div className="add_guest_wrapper" style={{ margin: "20px" }}>
            <h3>Fiyat Kaydı</h3>
            <form className="inputs_container" onSubmit={submitHandler}>

                <Input
                    id="start_date"
                    element="input"
                    type="date"
                    label='Start'
                    placeholder="Start Date of price"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />
                <Input
                    id="end_date"
                    element="input"
                    type="date"
                    label='End'
                    placeholder="End Date of price"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />
                <Input
                    id="price"
                    element="input"
                    type="text"
                    label='Price'
                    placeholder="Write the price"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />

                <button
                    type="submit"
                    className={'save_btn'}
                    style={{ marginTop: "20px" }}
                    disabled={!formState.inputs.price.isValid}
                >
                    {isLoading ? <LoadingSpinner /> : 'Save'}
                </button>
            </form>
            {/* <DeleteModal
                show={props.show}
                delete={props.confirmDeleteHandler}
                cancel={props.setShow}
                isloading={props.isloading}
            /> */}
            <div className="availability__item_content">
                <BookCalendar
                    guests={[]}

                />
            </div>
        </div>
    );
}

export default SetPrice;