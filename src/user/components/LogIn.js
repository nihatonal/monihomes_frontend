import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '../../shared/components/Input'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_PASSWORD_CONFIRM,
} from "../../shared/util/validators.js";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/UI/LoadingSpinner'
import "./LogIn.css"
function LogIn(props) {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            username: {
                value: "",
                isValid: false,
            },
            password: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const authSubmitHandler = async event => {
        event.preventDefault();

        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/login",
                'POST',
                JSON.stringify({
                    username: formState.inputs.username.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );

            auth.login(responseData.userId, responseData.token);
            navigate("/admin");
        } catch (err) { }
    }
    return (
        <div className="login_wrapper">
            <form onSubmit={authSubmitHandler}>
                <Input
                    id="username"
                    element="input"
                    type="text"
                    label='Username'
                    placeholder="Please write your username"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}

                />
                <Input
                    id="password"
                    element="input"
                    type="text"
                    label='Password'
                    placeholder="Please write your name"
                    validators={[VALIDATOR_REQUIRE(),
                    VALIDATOR_PASSWORD()]}
                    onInput={inputHandler}
                />
                <button className="login_btn">Login</button>
            </form>
        </div>
    );
}

export default LogIn;