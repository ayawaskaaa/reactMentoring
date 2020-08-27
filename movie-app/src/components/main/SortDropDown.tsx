import React from "react";
import SortOption from "./SortOption";
import {useMainBlockStyles} from "./mainBlockStyles";

interface SortDropDownProps {
    sortOptions: any,
    selected: string

    onSortOptionChange(): void
}

function SortDropDown(props: SortDropDownProps) {
    const mainBlockClasses = useMainBlockStyles();

    return (
        <>
            <div className={mainBlockClasses.textStyle}>{props.selected}</div>
            <div className={mainBlockClasses.sortOptionContainerInactive}>{props.sortOptions.map(sortOption =>
                <SortOption sortOption={sortOption}/>)}</div>
        </>
    )
}

export default SortDropDown;