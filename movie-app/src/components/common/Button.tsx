import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
    onClick(e);

    text: string;
    classes: string;
}

function Button(props: ButtonProps) {

    return (
        <>
            <button onClick={event => props.onClick(event)} className={props.classes}>{props.text}</button>
        </>
    )
}

Button.prototype = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    classes: PropTypes.string,
}
export default Button;