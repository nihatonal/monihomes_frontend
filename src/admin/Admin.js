import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../shared/hooks/http-hook";
import GuestTable from '../user/components/GuestTable';
import PuffLoader from "react-spinners/PuffLoader";
//64b64cf47e08a6456d272d0d
import './Admin.css'
function Admin(props) {
    const { isLoading, sendRequest } = useHttpClient();
    const [guests, setGuests] = useState();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/getdates",
                );
                setGuests(responseData.guests)

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);


    const message = guests && ` Toplam misafir sayisi: ${guests.length}` +
        guests
            .map(t =>
                `

            Musteri Ad-soyad: ${t.guestname}
            Musteri Tel: ${t.guesttel}
            Info: ${t.info}
            Check-in: ${t.dates[0]}
            Check-out: ${t.dates[1]}

            `
            )
            .reduce((prev, curr) => prev + curr)
    const sendHandler = async (e) => {
        e.preventDefault();
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/sendmail`,
                "POST",
                JSON.stringify({
                    guests: message
                }),
                {
                    "Content-Type": "application/json",
                }

            );
            console.log(responseData)
        } catch (err) {
        }
    }
    return (
        <div className='admin_container'>
            <GuestTable
                data={guests || []}
            />

            <button className="send_mail" onClick={sendHandler}>

                {isLoading ? <PuffLoader
                    color={"#628a76"}
                    loading={true}
                    cssOverride={''}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : "Send Mail"}</button>
        </div>
    );
}

export default Admin;