import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";

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

export default SearchResult;