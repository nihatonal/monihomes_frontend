import React from 'react';
import LoadingSpinner from '../../shared/UI/LoadingSpinner';
import DeleteModal from './DeleteModal';
import Input from '../../shared/components/Input';
import {
    VALIDATOR_REQUIRE

} from "../../shared/util/validators.js";
import Select from '../../shared/components/Select';
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
                    validators={[]}
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
                <Select 
                onClick={props.roomHandler} 
                room={props.room}
                showOptions={props.showOptions}
                options={props.options}
                />
                {/* <select onChange={props.roomHandler}>
                    <option value="room1">Room 1</option>
                    <option value="room2">Room 2</option>
                    <option value="room3">Room 3</option>
                </select> */}
                <button
                    type="submit"
                    className={'save_btn'}
                    disabled={props.disabled}
                >
                    {props.isLoading ? <LoadingSpinner /> : 'Kaydet'}
                </button>
            </form>
            <DeleteModal 
            show={props.show} 
            delete={props.confirmDeleteHandler} 
            cancel={props.setShow}
            isloading={props.isloading}
            />

        </div>
    );
}

export default AddGuest;