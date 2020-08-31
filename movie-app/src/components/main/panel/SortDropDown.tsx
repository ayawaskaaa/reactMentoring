import React from "react";
import SortOption from "./SortOption";
import {usePanelStyles} from "./panelStyles";

interface SortDropDownProps {
    sortOptions: any,
    selected: string

    onSortOptionChange(): void
}

function SortDropDown(props: SortDropDownProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <div className={panelClasses.textStyle}>{props.selected}</div>
            <div className={panelClasses.sortOptionContainerInactive}>{props.sortOptions.map(sortOption =>
                <SortOption key={sortOption} sortOption={sortOption}/>)}</div>
        </>
    )
}

export default SortDropDown;