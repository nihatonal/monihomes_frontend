import React from 'react';

import TokenManager from '../util/authGoogle/TokenManager';
import Login from '../util/authGoogle/Login'

function GoogleLoginComp() {

    return (
        <div
            style={{ height: "100vh", padding: "250px 100px" }}
        >
            <h2>Deneme</h2>

            <TokenManager />
            <Login />

        </div>
    );
}

export default GoogleLoginComp;