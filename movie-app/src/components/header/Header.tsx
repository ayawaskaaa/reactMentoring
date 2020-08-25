import React from 'react';
import TopBar from "./TopBar";
import {useHeaderStyles} from "./headerStyles";
import SearchMovieContainer from "./SearchMovieContainer";

function Header() {
    const headerClasses = useHeaderStyles();
    return (
        <div className={headerClasses.header}>
            <TopBar/>
            <SearchMovieContainer/>
        </div>
    );
}

export default Header;
