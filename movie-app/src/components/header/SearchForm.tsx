import React from "react";
import SearchMovieButton from "./SearchMovieButton";

function SearchForm() {
    return (
        <>
            <input type='text' defaultValue='What do you want to watch?'/>
            <SearchMovieButton onSearchButtonClick={()=>{}}/>
        </>
    );
}

export default SearchForm;