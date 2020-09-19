import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";
import PropTypes from "prop-types";

interface SearchResultProps {
    moviesAmount: number
}

function SearchResult(props: SearchResultProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <span className={mainBlockClasses.searchResultNumber}>{props.moviesAmount}</span><span
            className={mainBlockClasses.searchResultText}>movies found</span>
        </>
    );
}

SearchResult.propTypes = {
    moviesAmount: PropTypes.number
};
SearchResult.defaultProps = {
    moviesAmount: 0
};
export default SearchResult;