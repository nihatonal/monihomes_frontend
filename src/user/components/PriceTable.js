import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import moment from "moment";
import 'moment/locale/tr'
import 'moment/locale/ru'
import 'moment/locale/en-in';
import axios from 'axios';
import { useHttpClient } from "../../shared/hooks/http-hook";
import PulseLoader from "react-spinners/PulseLoader";


import './PriceTable.css'
function PriceTable(props) {
    const { sendRequest, isLoading } = useHttpClient();
    const lang = useContext(LanguageContext);
    const [currency, setCurrency] = useState("TRY");
    const [rates, setRates] = useState({});
    const [anime, setAnime] = useState(0);
    const [filter, setFilter] = useState(0);
    const [priceData, setPriceData] = useState([]);
    const [priceList, setPriceList] = useState([])

    const tl = "₺";
    const usd = "$"
    const euro = "€";
    const gbp = "£";
    //console.log(Math.ceil((37.25 + 1) / 10) * 10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Kmj1n698krkJZQf3Zu9UmoeTTfD3Krmet60AqyFW");

                setRates(data.data.data)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getprices",
                );

                setPriceData(responseData.prices[filter].price)
                //console.log(responseData.prices[filter].price)

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest, filter]);

    useEffect(() => {
        let groupKey = 2,
            groups = priceData.reduce(function (r, o) {
                var m = o.date.split(('/'))[1];
                (r[m]) ? r[m].data.push(o) : r[m] = { group: String(groupKey++), data: [o] };
                return r;
            }, {});


        const months = Object.keys(groups).map(function (k) { return groups[k]; });
        const sonuc = months.map((el) =>
            Object.values(el.data.reduce((acc, { date, price }) => {
                if (!acc[price]) {
                    acc[price] = { price, date: [] };
                }
                acc[price].date.push(date);
                return acc;
            }, {}))

        )
        // const result = Object.values(priceData.reduce((acc, { date, price }) => {
        //     if (!acc[price]) {
        //         acc[price] = { price, date: [] };
        //     }
        //     acc[price].date.push(date);
        //     return acc;
        // }, {}));



        const lastone = sonuc.flat().sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date[0]) - new Date(a.date[0]);
        }).reverse();
       // console.log(lastone.filter((x) => x.price !== "*"))
        setPriceList(lastone.filter((x) => x.price !== "*"))
        
    }, [priceData])
    return (
        <div className='price_list_container'>

            <div className="price_list_wrapper">
                <div className="filter_room">
                    <button className={filter === 0 ? `filter_btn active_filter_btn` : `filter_btn`}
                        onClick={(e) => setFilter(0)}
                    >Moni Homes</button>
                    {/* <button className={filter === 1 ? `filter_btn active_filter_btn` : `filter_btn`}
                        onClick={(e) => setFilter(1)}
                    >Villa Masal</button> */}
                </div>
                <div className="price_list_filter_wrapper">
                    <div className="price_list_filter_options">
                        <ul className="price_list_filter_options_items">
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("TRY")
                                    setAnime(0)
                                }}>&nbsp;TL</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("USD")
                                    setAnime(1)
                                }}>USD</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("EUR")
                                    setAnime(2)
                                }}>EUR</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("GBP")
                                    setAnime(3)
                                }}>GBP</li>
                        </ul>
                        <div className="price_list_filter_option_indicater">
                            <span
                                style={{ left: `${40 * anime}px` }}
                            ></span>

                        </div>
                    </div >
                    <div className="price_list_filter_options_info">
                        <p>{lang.dictionary["price_night"]}</p>
                    </div>
                </div >
                {isLoading ? <div className="price_loading">
                    <PulseLoader
                        color={'#628a76'}
                        loading={isLoading}
                        cssOverride={''}
                        size={12}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div> : <div className="price_list_items">
                    {priceList && priceList.map((item) =>
                        <div className="price_list_item" key={item.date[0]}>
                            <div className="price_list_item_dates">
                                {moment(item.date[0]).locale(lang.userLanguage).format("DD MMM")} - {moment(item.date[item.date.length - 1]).format("DD MMM YYYY")}
                            </div>
                            <div className="price_list_item_info">{lang.dictionary["price_info"]}</div>
                            <div className="price_list_item_price">{
                                currency === "TRY" ? tl :
                                    currency === "USD" ? usd :
                                        currency === "EUR" ? euro : gbp
                            } {currency === "USD" ? Math.ceil((item.price / rates["TRY"] + 1) / 10) * 10 :
                                currency === "TRY" ? item.price :
                                    currency === "GBP" ? Math.ceil((item.price / rates["TRY"] * rates["GBP"])) :
                                        currency === "EUR" ? Math.ceil((item.price / rates["TRY"] * rates["EUR"])) : 0
                                }</div>
                        </div>
                    )}

                </div>}
            </div >
        </div >
    );
}

export default PriceTable;