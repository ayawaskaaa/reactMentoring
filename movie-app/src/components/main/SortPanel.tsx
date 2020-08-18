import React from "react";
import SortDropDown from "./SortDropDown";

interface SortPanelProps {
    sortOptions: any;
    onSortOptionChange(): void;
}

function SortPanel(props: SortPanelProps) {
    function retrieveSortOptions() {

    }

    function onSortOptionChange() {

    }

    return (
        <>
            <span>SORT BY</span>
            <SortDropDown onSortOptionChange={onSortOptionChange} sortOptions={retrieveSortOptions()}/>
        </>
    );
}

export default SortPanel;