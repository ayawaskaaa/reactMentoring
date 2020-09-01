import React from "react";
import {useHeaderStyles} from "./headerStyles";
import PropTypes from "prop-types";

interface SearchMovieButtonProps {
    onSearchButtonClick(): void
}

function SearchMovieButton(props: SearchMovieButtonProps) {
    const headerClasses = useHeaderStyles();

    return (
        <>
            <button className={headerClasses.searchMovieButton}>SEARCH</button>
        </>
    );
}

SearchMovieButton.propTypes = {
    onSearchButtonClick: PropTypes.func
};
export default SearchMovieButton;