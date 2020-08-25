import React from "react";
import {useHeaderStyles} from "./headerStyles";

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

export default SearchMovieButton;