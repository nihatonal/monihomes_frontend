import React, { useState } from 'react';

import Modal from '../../shared/UI/Modal';
import PriceTable from '../../user/components/PriceTable';
import './Price.css'
function Price(props) {
    const [openPrice, setOpenPrice] = useState(false)

    return (
        <div className="price_modal" >
            <button id={'price_btn'}
                onClick={() => setOpenPrice(!openPrice)}
            >{props.price_btn}
            </button>
            <Modal show={openPrice} onClose={() => setOpenPrice(false)}>
                <PriceTable />
            </Modal>

        </div>
    );
}

export default Price;