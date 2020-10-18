import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";


function MoviesNotFound() {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <span className={mainBlockClasses.moviesNotFound}>No Movie Found</span>
        </>
    );
}


export default MoviesNotFound;