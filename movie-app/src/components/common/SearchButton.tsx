import React from "react";
import PropTypes from "prop-types";
import buttonStyles from "./buttonStyles";

interface SearchButtonProps {
    onClick(e);
}

function SearchButton(props: SearchButtonProps) {
    const classes = buttonStyles();

    return (
        <>
            <button onClick={event => props.onClick(event)} className={classes.searchButtonStyle}></button>
        </>
    )
}

SearchButton.prototype = {
    onClick: PropTypes.func,
}
export default SearchButton;