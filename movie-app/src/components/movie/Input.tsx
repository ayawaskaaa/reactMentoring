import React from "react";
import {useMovieStyles} from "./movieStyles";
import PropTypes from "prop-types";

interface InputProps {
    inputTitle: string;
    inputValue: string | undefined | number;
    placeHolder: string;

    onChange(e);
}

function Input({inputTitle, inputValue, placeHolder, onChange}: InputProps) {
    const classes = useMovieStyles();

    return (
        <div className={classes.inputContainer}>
            <span className={classes.inputTitle}>{inputTitle}</span>
            <input className={classes.input} placeholder={placeHolder} defaultValue={inputValue}
                   onChange={onChange}></input>
        </div>
    )
}

Input.prototype = {
    inputTitle: PropTypes.string,
    inputValue: PropTypes.string,
}
export default Input;