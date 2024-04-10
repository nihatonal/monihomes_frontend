import React, { useContext, useState } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import moment from "moment";
import 'moment/locale/tr'
import 'moment/locale/ru'
import 'moment/locale/en-in'
import './PriceTable.css'
function PriceTable(props) {
    const lang = useContext(LanguageContext);
    const [currency, setCurrency] = useState("lira");
    const [anime, setAnime] = useState(0)
    const tl = "₺";
    const usd = "$"
    const euro = "€";
    const gbp = "£";

    return (
        <div className='price_list_container'>
            <div className="price_list_wrapper">
                <div className="price_list_filter_wrapper">
                    <div className="price_list_filter_options">
                        <ul className="price_list_filter_options_items">
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("lira")
                                    setAnime(0)
                                }}>TL</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("dollar")
                                    setAnime(1)
                                }}>USD</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("euro")
                                    setAnime(2)
                                }}>EUR</li>
                            <li className="price_list_filter_option_item"
                                onClick={() => {
                                    setCurrency("pound")
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
                        <p>Gecelik</p>
                    </div>
                </div >
                <div className="price_list_items">
                    {props.data && props.data.map((item) =>
                        <div className="price_list_item" key={item.date[0]}>
                            <div className="price_list_item_dates">
                                {moment(item.date[0]).locale(lang.userLanguage).format("DD MMMM")} - {moment(item.date[item.date.length - 1]).format("DD MMMM YYYY")}
                            </div>
                            <div className="price_list_item_info">{lang.dictionary["price_info"]}</div>
                            <div className="price_list_item_price">{
                                currency === "lira" ? tl :
                                    currency === "dollar" ? usd :
                                        currency === "euro" ? euro : gbp
                            } {item.price}</div>
                        </div>
                    )}

                </div>
            </div >
        </div >
    );
}

export default PriceTable;