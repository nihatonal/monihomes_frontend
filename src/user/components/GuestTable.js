import { React, useEffect, useState } from "react";


import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {
    const [open, setOpen] = useState('');
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [year, selectedYear] = useState(2023)
    const toggleHandler = (x) => {
        //   console.log(x)
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
    // useEffect(() => {
    //     setData(props.data)
    // }, [props.data,props.save]);
    const years = Array.from(new Array(6), (val, index) => index + year);



    return (
        <div className='guest_table'>
            <div className='guest_table_header'>
                <p>No</p>
                <p>Room Number</p>
                <p>Check-in</p>
                <p>Check-out</p>
                <p className='
                
                ' onClick={() => setFilter(!filter)}>
                    <BsFilter />
                </p>
                <div className="filter_container"
                    style={filter ? { height: '50px' } : { height: '0' }}
                >
                    <input
                        id='filter_input'
                        type='text'
                        name='filter_input'
                        onChange={props.onChange}
                        value={props.value}
                        placeholder='Müşteri adı giriniz' />
                    <select
                        onChange={props.onChangeYear}
                        value={props.years}
                        className='filter_year'
                    >
                        {
                            years.map((year, index) => {
                                return <option key={`year${index}`} value={year}>{year}</option>
                            })
                        }
                    </select>

                    <button onClick={props.clearFilter} className="clear_filter"><AiOutlineClear /></button>
                </div>
            </div>
            {props.data.sort(compare).map((item, i) =>
                <div className="guest_table_" key={item.guestname + i}>
                    <div
                        className='guest_table_item'
                        onClick={() => toggleHandler(i)}
                        style={open === i ? { background: "#226450cf", color: "#fff" } : null}
                    >
                        {/* {!open ? <IoIosArrowDown /> : <IoIosArrowUp />} */}
                        <p className='guest_table_item_title'>{i + 1}</p>
                        <p className='guest_table_item_title'> {item.room === 'room1' ? "Room 1"
                            : item.room === 'room2' ? "Room 2"
                                : item.room === 'room3' ? "Room 3"
                                    : "Villa Masal"}</p>
                        <p className='guest_table_item_title'>{item.dates[0]}</p>
                        <p className='guest_table_item_title'>{item.dates[1]}</p>
                       
                        <p id={item.id} className='delete_btn' onClick={props.onDelete}>
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