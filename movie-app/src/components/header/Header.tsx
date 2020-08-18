import React from 'react';
import TopBar from "./TopBar";
import SearchForm from "./SearchForm";
import {useHeaderStyles} from "./headerStyles";

function Header() {
    const headerClasses = useHeaderStyles();
    return (
        <div className={headerClasses.header}>
            <TopBar/>
            <SearchForm/>
        </div>
    );
}

export default Header;
