import React from "react";

interface SearchResultProps {
    moviesAmount: number
}

function SearchResult(props: SearchResultProps) {
    return (
        <>
            <span>movies found {props.moviesAmount}</span>
        </>
    );
}

export default SearchResult;