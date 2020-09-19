import React from "react";
import SearchMovieButton from "./SearchMovieButton";
import {useHeaderStyles} from "./headerStyles";

function SearchForm() {
    const headerClasses = useHeaderStyles();

    return (
        <div className={headerClasses.searchFormContainer}>
            <input className={headerClasses.searchInput} type='text' defaultValue='What do you want to watch?'/>
            <SearchMovieButton onSearchButtonClick={() => {
            }}/>
        </div>
    );
}

export default SearchForm;