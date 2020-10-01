import React from "react";
import {useMovieStyles} from "./movieStyles";
import PropTypes from "prop-types";

interface InputProps {
    inputTitle: string;
    inputValue: string | undefined;
    placeHolder: string;
}

function Input({inputTitle, inputValue, placeHolder}: InputProps) {
    const classes = useMovieStyles();

    return (
        <div className={classes.inputContainer}>
            <span className={classes.inputTitle}>{inputTitle}</span>
            <input className={classes.input} placeholder={placeHolder} defaultValue={inputValue}></input>
        </div>
    )
}

Input.prototype = {
    inputTitle: PropTypes.string,
    inputValue: PropTypes.string,
}
export default Input;