import React from 'react';

import { AiTwotoneDelete } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {

    return (
        <div className='guest_table'>
            <table id='guests'>
                <tr>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Information</th>
                    <th></th>
                </tr>
                {props.data && props.data.map((item, i) =>
                    <tr id={item.id}>
                        <td>{item.dates[0]}</td>
                        <td>{item.dates[1]}</td>
                        <td>{item.info}</td>
                        <td className='delete_btn' onClick={props.onDelete}><AiTwotoneDelete /></td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default GuestTable;