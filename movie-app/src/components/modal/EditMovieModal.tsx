import React, {RefObject, useEffect, useRef} from 'react';
import {useModalStyles} from "./modalStyles";
import MovieForm from "../movie/MovieForm";
import PropTypes from "prop-types";
import {MovieInfo} from "../main";

interface EditMovieModalProps {
    show: boolean;
    movie: MovieInfo;

    onSubmit(e);

    onModalClose(e);
}

function EditMovieModal({show, movie, onModalClose, onSubmit}: EditMovieModalProps) {
    const classes = useModalStyles();
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
    return show ? (<div ref={selfRef} className={classes.modalStyles}>
            <MovieForm
                movie={movie}
                formName={'ADD MOVIE'}
                onClose={onModalClose}
                onSubmit={onSubmit}
            />
        </div>) :
        null;

}

EditMovieModal.prototype = {
    show: PropTypes.bool,
    onModalClose: PropTypes.func
}
export default EditMovieModal;
