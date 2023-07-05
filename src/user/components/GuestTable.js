import React from 'react';

import { AiTwotoneDelete } from 'react-icons/ai';
import './GuestTable.css'
function GuestTable(props) {

    return (
        <div className='guest_table'>
            <table id='guests'>
                <tbody>
                    <tr>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Information</th>
                        <th></th>
                    </tr>
                    {props.data && props.data.map((item, i) =>
                        <tr id={item.id} key={item.id+i}>
                            <td>{item.dates[0]}</td>
                            <td>{item.dates[1]}</td>
                            <td>{item.info}</td>
                            <td className='delete_btn' onClick={props.onDelete}><AiTwotoneDelete /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default GuestTable;