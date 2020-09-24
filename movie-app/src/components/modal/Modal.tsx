import React from 'react';
import {useModalStyles} from "./modalStyles";

interface ModalProps {
    show: boolean;
    content: any;
}

function Modal(props: ModalProps) {
    const classes = useModalStyles();

    return props.show ? (
        <div className={classes.modalStyles}>
            {props.content}
        </div>
    ) : null;

}

export default Modal;
