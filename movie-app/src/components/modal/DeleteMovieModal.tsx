import React, {RefObject, useEffect, useRef} from 'react';
import {useModalStyles} from "./modalStyles";
import PropTypes from "prop-types";
import {MovieInfo} from "../main";
import CloseButton from "../common/CloseButton";
import Button from "../common/Button";
import buttonStyles from "../common/buttonStyles";

interface DeleteMovieModalProps {
    show: boolean;
    movie: MovieInfo;

    onConfirm(id: string);

    onModalClose(e);
}

function DeleteMovieModal({show, movie, onModalClose, onConfirm}: DeleteMovieModalProps) {

    const classes = useModalStyles();
    const buttonClasses = buttonStyles();
    let selfRef: RefObject<any> = useRef();
    const handleClick = e => {
        if (selfRef?.current?.contains(e.target)) {
            return;
        }
        onModalClose(e);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return show ? (<div ref={selfRef} className={classes.deleteModal}>
            <div className={classes.closeButtonContainer}>
                <CloseButton onClose={onModalClose} size={'25px'}/>

            </div>
            <div className={classes.deleteModalContent}>
                <span className={classes.deleteModalTitle}>DELETE MOVIE</span>
                <span className={classes.deleteModalText}>Are you sure you want to delete this movie?</span>
                <Button type={"button"} onClick={onConfirm} text={'CONFIRM'}
                        classes={`${buttonClasses.submitButton} ${classes.confirmButton}`}/>
            </div>
        </div>) :
        null;

}

DeleteMovieModal.prototype = {
    show: PropTypes.bool,
    onModalClose: PropTypes.func
}
export default DeleteMovieModal;
