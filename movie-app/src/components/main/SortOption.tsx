import React from "react";
import {useMainBlockStyles} from "./mainBlockStyles";

interface SortOptionProps {
    sortOption: string
}

function SortOption(props: SortOptionProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <button className={mainBlockClasses.sortOption}>{props.sortOption}</button>
        </>
    )
}

export default SortOption;