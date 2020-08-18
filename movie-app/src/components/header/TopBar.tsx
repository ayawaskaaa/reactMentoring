import React from "react";
import AddMovieButton from "./AddMovieButton";

function TopBar() {
    return (
        <>
            <img alt='netflix logo'/>
            <AddMovieButton onAddButtonClick={()=>{}}/>
        </>
    );
}

export default TopBar;