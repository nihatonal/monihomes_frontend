import React, { useContext } from "react";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from '../../shared/context/auth-context';

import BounceLoader from "react-spinners/BounceLoader";
import './SignUp.css'
function SignUp(props) {
    const auth = useContext(AuthContext);
    const { isLoading, sendRequest } = useHttpClient();


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
        // style={{ height: '350px', paddingTop: '150px' }}
        >

            <form onSubmit={authSubmitHandler}>


                <button type="submit"
                    // disabled={!formState.isValid} 
                    className="signup_button">
                    {isLoading ? <BounceLoader

                        color={"white"}
                        loading={true}
                        cssOverride={''}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> : "Sign Up"}

                </button>
                {/* !isLoading ? <LoadingSpinner /> */}
            </form >

        </div >
    );
}

export default SignUp;