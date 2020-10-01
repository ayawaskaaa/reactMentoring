import React from "react";
import AddMovieButton from "./AddMovieButton";
import {useHeaderStyles} from "./headerStyles";
import LogoText from "../common/LogoText";

interface TopBarProps {
    onAddButtonClick(e);
}

function TopBar(props: TopBarProps) {
    const headerClasses = useHeaderStyles();

    return (
        <div className={headerClasses.topBar}>
            <div className={headerClasses.topBarLeft}>
                <LogoText/>
            </div>
            <div className={headerClasses.topBarRight}>
                <AddMovieButton onAddButtonClick={props.onAddButtonClick}/>
            </div>
        </div>
    );
}

export default TopBar;