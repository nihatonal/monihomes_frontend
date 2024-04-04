import { React, useState } from "react";


// import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
// import { AiOutlineClear } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {
    const [open, setOpen] = useState('');
    const [filter, setFilter] = useState(false);
    //const [year, selectedYear] = useState(2023)
    const toggleHandler = (x) => {
        //   console.log(x)
        if (x === open) {
            setOpen('');
        } else {
            setOpen(x);
        }

    };


    // const years = Array.from(new Array(6), (val, index) => index + year);



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
                {/* <div className="filter_container"
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
                </div> */}
            </div>
            {props.data && props.data.map((item, i) =>
                <div className="guest_table_" key={item.id}>
                    <div
                        className='guest_table_item'
                        onClick={() => toggleHandler(i)}
                        style={open === i ? { background: "#226450cf", color: "#fff" } : null}
                    >

                        <p className='guest_table_item_title'>{i + 1}</p>
                        <p className='guest_table_item_title'> {props.filter === 'room1' ? "Room 1"
                            : props.filter === 'room2' ? "Room 2"
                                : props.filter === 'room3' ? "Room 3"
                                    : "Villa Masal"}</p>
                        {/* <p className='guest_table_item_title'>{item.summary}</p> */}
                        <p className='guest_table_item_title'>{item.start.date}</p>
                        <p className='guest_table_item_title'>{item.end.date}</p>

                        {/* <p id={item.id} className='delete_btn' onClick={props.onDelete}>
                            <AiTwotoneDelete />
                        </p> */}
                    </div>
                    {/* <div className="guest_table_item_content"
                        style={open === i ? { display: "flex" } : { display: "none" }}
                    >
                        <div className="guest_table_item_content_item">
                            <p className='guest_table_item_content_item_title'>Müşteri Ad-Soyad: </p>
                            <p className='guest_table_item_content_item_desc'>{item.summary}</p>
                        </div>
                        <div className="guest_table_item_content_item">
                            <p className='guest_table_item_content_item_title'>Müşteri Tel: </p>
                            <p className='guest_table_item_content_item_desc'>{item.guesttel}</p>
                        </div>


                    </div> */}
                </div>
            )}

        </div>
    )
}
export default GuestTable;