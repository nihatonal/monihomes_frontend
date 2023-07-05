import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import en from 'date-fns/locale/en-US';
import tr from 'date-fns/locale/tr';

function Calendar(props) {
    const langs = [ru, en, tr];
    const [lang, setLang] = useState(langs[1])


    useEffect(() => {
        if (props.lang === "en") {
            setLang(langs[1])
        } else if (props.lang === "ru") {
            setLang(langs[0])
        } else {
            setLang(langs[2])
        }
    }, [props.lang])
    registerLocale('es', lang)

    return (
        <DatePicker
            selected={props.selected}
            onChange={props.onChange}
            locale={'es'} />
    );
}

export default Calendar;