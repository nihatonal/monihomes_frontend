import React, { useContext } from "react";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from '../../shared/context/auth-context';


import './SignUp.css'
function SignUp(props) {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();


    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                process.env.REACT_APP_BACKEND_URL + "/signup",
                "POST",
                JSON.stringify({
                    username: '',
                    email: '',
                    password: ''
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            auth.login(responseData.userId, responseData.token);
            console.log(responseData);
        } catch (err) {
        }

    };

    return (
        <div className="signup_wrapper"
            style={{ height: '350px', paddingTop: '150px' }}
        >

            <form onSubmit={authSubmitHandler}>


                <button type="submit"
                    // disabled={!formState.isValid} 
                    className="signup_button">
                    Sign Up

                </button>
                {/* !isLoading ? <LoadingSpinner /> */}
            </form >

        </div >
    );
}

export default SignUp;