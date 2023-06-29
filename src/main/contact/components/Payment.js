import React from 'react';

import Accordion from '../../../shared/UI/Accordion';

import './Payment.css'
function Payment(props) {
    return (

        <Accordion
            title={"Bank Account info"}
        >
            <p>Hesap No : 09007207</p>
            <p>Şube : 262 / FETHİYE / MUĞLA ŞB.</p>
            <p>IBAN : TR42 0001 2009 2620 0009 0072 07</p>
            <p>Ad Soyad / Unvan : UĞUR DİNÇ</p>
        </Accordion>

    );
}

export default Payment;