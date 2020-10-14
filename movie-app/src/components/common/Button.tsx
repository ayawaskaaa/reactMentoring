import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
    onClick(e);

    type: "button" | "submit" | "reset" | undefined;
    text: string;
    classes: string;
}

function Button(props: ButtonProps) {

    return (
        <>
            <button type={props.type} onClick={props.onClick}
                    className={props.classes}>{props.text}</button>
        </>
    )
}

Button.prototype = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    classes: PropTypes.string,
    type: PropTypes.string,
}
export default Button;