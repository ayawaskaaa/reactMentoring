import React from "react";
import {usePanelStyles} from "./panelStyles";

interface SortOptionProps {
    sortOption: string
}

function SortOption(props: SortOptionProps) {
    const panelClasses = usePanelStyles();

    return (
        <>
            <button className={panelClasses.sortOption}>{props.sortOption}</button>
        </>
    )
}

export default SortOption;