import React from "react";
import {useMovieStyles} from "./movieStyles";
import PropTypes from "prop-types";

interface InputProps {
    inputTitle: string;
    placeHolder: string;
    formik: any;
    name: string;
    type: string;
    errorMessage: string | undefined
}

function Input({formik, inputTitle, placeHolder, name, type, errorMessage}: InputProps) {
    const classes = useMovieStyles();

    return (
        <div className={classes.inputContainer}>
            <label className={classes.inputTitle} htmlFor={name}>{inputTitle}</label>
            <input
                className={classes.input}
                id={name}
                name={name}
                type={type}
                onChange={formik.handleChange}
                value={formik.values[name]}
                placeholder={placeHolder}
            />
            {errorMessage
                ? <span className={classes.errorMessage}>{errorMessage}</span>
                : <span className={classes.errorMessage}/>}
        </div>
    )
}

Input.prototype = {
    inputTitle: PropTypes.string,
    inputValue: PropTypes.string,
}
export default Input;