import { React, useState } from "react";


import { AiTwotoneDelete } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {
    const [open, setOpen] = useState('');

    const toggleHandler = (x) => {
        console.log(x)
        if (x === open) {
            setOpen('');
        } else {
            setOpen(x);
        }

    };
    function compare(a, b) {
        if (a.dates[0] < b.dates[0]) {
            return -1;
        }
        if (a.dates[0] > b.dates[0]) {
            return 1;
        }
        return 0;
    }

    return (
        <div className='guest_table'>
            <div className='guest_table_header'>
                <p>No</p>
                <p>Check-in</p>
                <p>Check-out</p>
                <p className='delete_btn'>
                    <AiTwotoneDelete />
                </p>
            </div>
            {props.data.sort(compare).map((item, i) =>
                <div key={item.guestname + i}>
                    <div id={item.id}
                        className='guest_table_item'
                        onClick={() => toggleHandler(i)}
                        style={open === i ? { background: "#a0a0a0" } : null}
                    >
                        {/* {!open ? <IoIosArrowDown /> : <IoIosArrowUp />} */}
                        <p className='guest_table_item_title'>{i + 1}</p>
                        <p className='guest_table_item_title'>{item.dates[0]}</p>
                        <p className='guest_table_item_title'>{item.dates[1]}</p>
                        <p className='delete_btn' onClick={props.onDelete}>
                            <AiTwotoneDelete />
                        </p>
                    </div>
                    <div className="guest_table_item_content"
                        style={open === i ? { display: "flex" } : { display: "none" }}
                    >
                        <div className="guest_table_item_content_item">
                            <p className='guest_table_item_content_item_title'>Müşteri Ad-Soyad: </p>
                            <p className='guest_table_item_content_item_desc'>{item.guestname}</p>
                        </div>
                        <div className="guest_table_item_content_item">
                            <p className='guest_table_item_content_item_title'>Müşteri Tel: </p>
                            <p className='guest_table_item_content_item_desc'>{item.guesttel}</p>
                        </div>
                        <div className="guest_table_item_content_item">
                            <p className='guest_table_item_content_item_title'>Not: </p>
                            <p className='guest_table_item_content_item_desc'>{item.info}</p>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}
export default GuestTable;