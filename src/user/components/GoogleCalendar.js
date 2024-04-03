import React, { useState, useEffect } from 'react';

import { useHttpClient } from "../../shared/hooks/http-hook";

function GoogleCalendar(props) {
    const { sendRequest } = useHttpClient();
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/google",
                );

                console.log(responseData);

            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest]);

    return (
        <div>

        </div>
    );
}

export default GoogleCalendar;