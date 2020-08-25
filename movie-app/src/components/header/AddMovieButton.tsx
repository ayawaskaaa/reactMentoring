import React from "react";
import {useHeaderStyles} from "./headerStyles";

interface AddMovieButtonProps {
    onAddButtonClick(): void
}

function AddMovieButton(props: AddMovieButtonProps) {
    const headerClasses = useHeaderStyles();

    return (
        <>
            <button className={headerClasses.addMovieButton}>+ ADD MOVIE</button>
        </>
    );
}

export default AddMovieButton;