import React from "react";
import SortDropDown from "./SortDropDown";

interface SortPanelProps {
    onSortOptionChange(): void;
}

function SortPanel(props: SortPanelProps) {
    const SORT_OPTIONS = ["RELEASE DATE", "RATING"]

    function onSortOptionChange() {

    }

    return (
        <>
            <span>SORT BY</span>
            <SortDropDown onSortOptionChange={onSortOptionChange} sortOptions={SORT_OPTIONS}/>
        </>
    );
}

export default SortPanel;