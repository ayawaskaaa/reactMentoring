import React from "react";
import SearchForm from "./SearchForm";
import {useHeaderStyles} from "./headerStyles";

function SearchMovieContainer() {
    const headerClasses = useHeaderStyles();

    return (
        <div className={headerClasses.searchMovieContainer}>
            <span>FIND YOUR MOVIE</span>
            <SearchForm/>
        </div>
    );
}

export default SearchMovieContainer;