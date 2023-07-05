import React from 'react';
import LoadingSpinner from '../../shared/UI/LoadingSpinner';
import DeleteModal from './DeleteModal';

import './AddGuest.css'
function AddGuest(props) {
    return (
        <div className="add_guest_wrapper">
            <form className="inputs_container" onSubmit={props.submitHandler}>
                <label htmlFor="startDate" className="input_label">
                    Check-in
                    <input type={'date'} value={props.startDate} onChange={props.setStartDate} required />
                    <span></span>
                </label>
                <label htmlFor="startDate" className="input_label">
                    Check-out
                    <input type={'date'} value={props.endDate} onChange={props.setEndDate} required />
                    <span></span>
                </label>
                {props.validStart || props.validEnd ? <p className='invalid_dates'>Tarihleri kontrol ediniz. Bu tarihlerde daha önce rezervasyon olabilir.</p> : null}
                <label htmlFor="startDate" className="input_label info_label">
                    Information
                    <textarea type={'text'} value={props.info} onChange={props.setInfo} required />

                </label>

                <button
                    type="submit"
                    className={'save_btn'}
                    disabled={!props.startDate && !props.endDate && props.info_length < 0}
                >
                    {props.isLoading ? <LoadingSpinner /> : 'Save'}
                </button>
            </form>
            <DeleteModal show={props.show} delete={props.confirmDeleteHandler} cancel={props.setShow} />

        </div>
    );
}

export default AddGuest;