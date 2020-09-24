import React from "react";
import PropTypes from "prop-types";
import buttonStyles from "./buttonStyles";

interface CloseButtonProps {
    onClose(e);

    size: string;
}

function CloseButton(props: CloseButtonProps) {
    const classes = buttonStyles();
    return (
        <>
            <button style={{
                width: props.size,
                height: props.size,
            }} className={classes.closeButton} onClick={event => props.onClose(event)}/>
        </>
    )
}

CloseButton.prototype = {
    onClick: PropTypes.func,
    size: PropTypes.string,
}
export default CloseButton;