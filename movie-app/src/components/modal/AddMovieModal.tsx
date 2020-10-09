import React, {RefObject, useEffect, useRef} from 'react';
import {useModalStyles} from "./modalStyles";
import MovieForm from "../movie/MovieForm";
import PropTypes from "prop-types";

interface AddMovieModalProps {
    show: boolean

    addMovie(e, movie)

    onModalClose(e);
}

function AddMovieModal(props: AddMovieModalProps) {
    const classes = useModalStyles();
    let selfRef: RefObject<any> = useRef();
    const handleClick = e => {
        if (selfRef?.current?.contains(e.target)) {
            return;
        }
        props.onModalClose(e);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return props.show ? (<div ref={selfRef} className={classes.modalStyles}>
            <MovieForm
                movie={{}}
                formName={'ADD MOVIE'}
                onClose={props.onModalClose}
                onSubmit={props.addMovie}
            />
        </div>) :
        null;

}

AddMovieModal.prototype = {
    show: PropTypes.bool,
    onModalClose: PropTypes.func
}
export default AddMovieModal;
