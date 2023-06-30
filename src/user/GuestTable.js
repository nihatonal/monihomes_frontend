import React from 'react';


import './GuestTable.css'
function GuestTable(props) {

    return (
        <div className='guest_table'>
            <table>
                <tr>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Information</th>
                    <th>Delete</th>
                </tr>
                {props.data.map((item, i) =>
                    <tr>
                        <td>{item.dates[0]}</td>
                        <td>{item.dates[1]}</td>
                        <td>{item.info}</td>
                        <td>X</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default GuestTable;