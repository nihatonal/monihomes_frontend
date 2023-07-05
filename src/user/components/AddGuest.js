import React from 'react';
import LoadingSpinner from '../../shared/UI/LoadingSpinner';
import DeleteModal from './DeleteModal';
import Input from '../../shared/components/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_PHONE

} from "../../shared/util/validators.js";
import './AddGuest.css'
function AddGuest(props) {
    return (
        <div className="add_guest_wrapper">
            <h3>Müşteri Kaydı</h3>
            <form className="inputs_container" onSubmit={props.submitHandler}>
                <Input
                    id="guestname"
                    element="input"
                    type="text"
                    label='Müşteri Adı-Soyadı'
                    placeholder="Müşterinin ad-soyadını giriniz."
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={props.inputHandler}

                />
                <Input
                    id="guesttel"
                    element="input"
                    type="text"
                    label='Müşteri Tel No'
                    placeholder="Müşterinin telefon numarısını giriniz."
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                    onInput={props.inputHandler}

                />
                <Input
                    id="startdate"
                    element="input"
                    type="date"
                    label='Check-in'
                    placeholder="Müşterinin telefon numarısını giriniz."
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={props.inputHandler}

                />
                <Input
                    id="enddate"
                    element="input"
                    type="date"
                    label='Check-out'
                    placeholder="Müşterinin telefon numarısını giriniz."
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={props.inputHandler}

                />
                <Input
                    id="info"
                    element="textarea"
                    type="text"
                    label='Not'
                    placeholder="Not eklemek ister misiniz?"
                    validators={[]}
                    onInput={props.inputHandler}

                />
                <button
                    type="submit"
                    className={'save_btn'}
                    disabled={props.disabled}
                >
                    {props.isLoading ? <LoadingSpinner /> : 'Kaydet'}
                </button>
            </form>
            <DeleteModal show={props.show} delete={props.confirmDeleteHandler} cancel={props.setShow} />

        </div>
    );
}

export default AddGuest;