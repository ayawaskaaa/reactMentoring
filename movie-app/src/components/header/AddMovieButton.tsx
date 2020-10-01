import React from "react";
import {useHeaderStyles} from "./headerStyles";
import PropTypes from 'prop-types';

interface AddMovieButtonProps {
    onAddButtonClick(e): void
}

function AddMovieButton(props: AddMovieButtonProps) {
    const headerClasses = useHeaderStyles();

    return (
        <>
            <button onClick={event => props.onAddButtonClick(event)} className={headerClasses.addMovieButton}>+ ADD
                MOVIE
            </button>
        </>
    );
}

AddMovieButton.propTypes = {
    onAddButtonClick: PropTypes.func
};

export default AddMovieButton;
