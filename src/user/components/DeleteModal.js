import React from 'react';

import './DeleteModal.css'
function DeleteModal(props) {
    return (
        <div className="modal-delete" style={props.show ? { top: "0" } : null}>
            <h3>Emin misin?</h3>
            <div className="btns">
                <button className="btn delete" onClick={props.delete}>Sil</button>
                <button className="btn cancel" onClick={props.cancel}>Vazgeç</button>
            </div>
        </div >
    );
}

export default DeleteModal;