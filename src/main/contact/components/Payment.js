import React from 'react';

import Accordion from '../../../shared/UI/Accordion';

import './Payment.css'
function Payment(props) {
    return (

        <Accordion
            title={props.title}
        >
            <p>{props.account} : 09007207</p>
            <p>{props.account_city} : 262 / FETHİYE / MUĞLA ŞB.</p>
            <p>{props.account_number} : TR42 0001 2009 2620 0009 0072 07</p>
            <p>{props.account_owner} : UĞUR DİNÇ</p>
        </Accordion>

    );
}

export default Payment;