import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { AiOutlineClose } from "react-icons/ai";
import './Modal.css';

const Modal = props => {
    const content = (
        <CSSTransition
            in={props.show}
            timeout={400}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >

            <aside className="side-drawer" onClick={props.onClick} style={props.style}>
                <div className="side-drawer_wrapper">
                    <div className="close_price" onClick={props.onClose}>
                        <AiOutlineClose />
                    </div>
                    {props.children}
                </div>
            </aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;