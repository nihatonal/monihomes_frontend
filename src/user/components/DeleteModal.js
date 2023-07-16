import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './DeleteModal.css'
function DeleteModal(props) {
    return (
        <div className="modal-delete" style={props.show ? { top: "0" } : null}>
            <h3 className="modal-delete_title">Emin misin?</h3>
            <div className="btns">
                <button className="btn delete" onClick={props.delete}>
                    {props.isloading ? <PuffLoader
                        color={"white"}
                        loading={true}
                        cssOverride={''}
                        size={25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> : "Sil"}


                </button>
                <button className="btn cancel" onClick={props.cancel}>Vazgeç</button>
            </div>
        </div >
    );
}

export default DeleteModal;