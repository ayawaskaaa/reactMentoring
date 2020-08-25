import React from "react";
import AddMovieButton from "./AddMovieButton";
import {useHeaderStyles} from "./headerStyles";
import LogoText from "../common/LogoText";

function TopBar() {
    const headerClasses = useHeaderStyles();

    return (
        <div className={headerClasses.topBar}>
            <div className={headerClasses.topBarLeft}>
                <LogoText/>
            </div>
            <div className={headerClasses.topBarRight}>
                <AddMovieButton onAddButtonClick={() => {
                }}/>
            </div>
        </div>
    );
}

export default TopBar;